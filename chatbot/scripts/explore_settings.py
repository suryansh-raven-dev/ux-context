import asyncio
import json
import os
from playwright.async_api import async_playwright

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/screenshots/settings"
os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

EMPLOYEE_ID = os.environ["RAVEN_EMPLOYEE_ID"]
PASSWORD = os.environ["RAVEN_PASSWORD"]

sc = 1

async def ss(page, name):
    global sc
    path = os.path.join(SCREENSHOTS_DIR, f"{sc:02d}_{name}.png")
    await page.screenshot(path=path, full_page=True)
    print(f"  [SS] {sc:02d}_{name}.png")
    sc += 1

async def get_all_text(page):
    try:
        return await page.evaluate("() => document.body.innerText")
    except:
        return ""

async def login(page):
    await page.goto("https://ifz.startraven.com", wait_until="networkidle", timeout=30000)
    emp_input = await page.wait_for_selector("input", timeout=5000)
    await emp_input.fill(EMPLOYEE_ID)
    continue_btn = await page.query_selector("button:has-text('Continue')")
    await continue_btn.click()
    await page.wait_for_timeout(2000)
    pwd_input = await page.wait_for_selector("input[type='password']", timeout=5000)
    await pwd_input.fill(PASSWORD)
    login_btn = await page.query_selector("button:has-text('Login')")
    if login_btn:
        await login_btn.click()
    await page.wait_for_timeout(5000)

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()

        await login(page)
        print("[Login] Logged in successfully")

        # Select HSEF domain
        hsef = await page.query_selector("text=HSEF")
        if hsef:
            await hsef.click()
            await page.wait_for_timeout(3000)
        print("[Domain] HSEF selected")

        # Step 1: Click on Settings in the sidebar
        print("[Settings] Clicking on Settings...")
        settings_link = await page.query_selector("a:has-text('Settings')")
        if settings_link:
            await settings_link.click()
            await page.wait_for_timeout(3000)
            await ss(page, "after_settings_click")
            body_text = await get_all_text(page)
            print(f"[Settings] Text after click:\n{body_text[:3000]}")
        else:
            print("[Settings] No Settings link found, trying alternative selectors...")
            # Try clicking any element with "Settings" text
            settings_el = await page.query_selector("text=Settings")
            if settings_el:
                await settings_el.click()
                await page.wait_for_timeout(3000)
                await ss(page, "after_settings_click")
                body_text = await get_all_text(page)
                print(f"[Settings] Text after click:\n{body_text[:3000]}")

        # Step 2: Check for any popup/dialog/modal
        print("\n[Settings] Checking for popups/dialogs/modals...")
        dialogs = await page.query_selector_all("[role='dialog'], [role='alertdialog'], [class*='dialog'], [class*='Dialog'], [class*='modal'], [class*='Modal'], [class*='popup'], [class*='Popup'], .MuiDialog-root, .MuiModal-root, .MuiPopover-root, .MuiDrawer-root")
        print(f"[Settings] Found {len(dialogs)} dialog/modal/popup elements")
        for i, d in enumerate(dialogs):
            text = await d.evaluate("el => el.innerText")
            classes = await d.evaluate("el => el.className")
            visible = await d.is_visible()
            print(f"  Dialog {i}: visible={visible}, classes='{classes[:100]}', text='{text[:200]}'")

        # Step 3: Check for any new overlays or menus that appeared
        print("\n[Settings] Checking for overlays/menus...")
        overlays = await page.query_selector_all("[class*='overlay'], [class*='Overlay'], [class*='menu'], [class*='Menu'], [class*='popover'], [class*='Popover']")
        for i, o in enumerate(overlays):
            text = await o.evaluate("el => el.innerText")
            visible = await o.is_visible()
            if visible and text.strip():
                print(f"  Overlay {i}: text='{text[:300]}'")

        # Step 4: Check for any list items or options that appeared
        print("\n[Settings] Checking for list items/options...")
        list_items = await page.query_selector_all("[role='menuitem'], [role='option'], [role='listitem'], li, [class*='list-item'], [class*='ListItem'], [class*='MenuItem']")
        visible_items = []
        for item in list_items:
            try:
                visible = await item.is_visible()
                if visible:
                    text = (await item.inner_text()).strip()
                    if text and len(text) < 200:
                        visible_items.append(text)
            except:
                pass
        print(f"[Settings] Visible list items: {visible_items}")

        # Step 5: Get full page HTML structure around settings area
        print("\n[Settings] Checking page structure...")
        structure = await page.evaluate("""() => {
            const result = {};
            // Check all visible elements
            const all = document.querySelectorAll('*');
            const visible = [];
            for (const el of all) {
                const rect = el.getBoundingClientRect();
                if (rect.width > 0 && rect.height > 0 && rect.top >= 0) {
                    const text = el.innerText;
                    if (text && text.length < 100 && !visible.includes(text.trim())) {
                        visible.push({
                            tag: el.tagName,
                            text: text.trim(),
                            classes: (el.className || '').toString().slice(0, 80),
                            role: el.getAttribute('role'),
                            x: Math.round(rect.x),
                            y: Math.round(rect.y),
                            w: Math.round(rect.width),
                            h: Math.round(rect.height)
                        });
                    }
                }
            }
            return visible.slice(0, 80);
        }""")
        for item in structure:
            if 'settings' in (item.get('text', '') + item.get('classes', '')).lower():
                print(f"  Settings-related: tag={item['tag']}, text='{item['text']}', role={item.get('role')}, pos=({item['x']},{item['y']}), size=({item['w']}x{item['h']})")

        # Step 6: Try navigating directly to /settings
        print("\n[Settings] Navigating directly to /settings...")
        await page.goto("https://ifz.startraven.com/settings", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(3000)
        await ss(page, "settings_direct_nav")
        body_text = await get_all_text(page)
        print(f"[Settings] Direct nav text:\n{body_text[:2000]}")

        # Step 7: Check if settings has a popup that needs to be triggered differently
        # Maybe it's not a link but a button
        print("\n[Settings] Looking for settings as button...")
        settings_btns = await page.evaluate("""() => {
            const elements = document.querySelectorAll('*');
            const results = [];
            for (const el of elements) {
                const text = el.innerText.trim();
                if (text === 'Settings' || text === 'settings') {
                    results.push({
                        tag: el.tagName,
                        text: text,
                        classes: (el.className || '').toString().slice(0, 100),
                        role: el.getAttribute('role'),
                        href: el.getAttribute('href'),
                        parentTag: el.parentElement ? el.parentElement.tagName : null,
                        parentClasses: el.parentElement ? (el.parentElement.className || '').toString().slice(0, 100) : null,
                        onclick: el.getAttribute('onclick'),
                        isButton: el.tagName === 'BUTTON',
                        isLink: el.tagName === 'A'
                    });
                }
            }
            return results;
        }""")
        print(f"[Settings] Settings elements found: {json.dumps(settings_btns, indent=2)}")

        # Step 8: Go back to search page and try clicking settings with different approach
        print("\n[Settings] Going back to /search and trying fresh settings click...")
        await page.goto("https://ifz.startraven.com/search", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(2000)

        # Click settings and wait for any dialog
        settings_el = await page.query_selector("text=Settings")
        if settings_el:
            # Listen for any dialog or popup
            print("[Settings] Clicking settings and waiting for popup...")
            await settings_el.click()
            await page.wait_for_timeout(4000)
            await ss(page, "settings_click_from_search")
            body_text = await get_all_text(page)
            print(f"[Settings] Body text after settings click from search:\n{body_text[:3000]}")

            # Check for any new elements that appeared
            new_elements = await page.evaluate("""() => {
                const result = [];
                const allEl = document.querySelectorAll('[role="dialog"], [role="menu"], [class*="dialog"], [class*="Dialog"], [class*="drawer"], [class*="Drawer"], [class*="popup"], [class*="Popup"], [class*="settings"], [class*="Settings"]');
                for (const el of allEl) {
                    const rect = el.getBoundingClientRect();
                    if (rect.width > 0 && rect.height > 0) {
                        result.push({
                            tag: el.tagName,
                            classes: (el.className || '').toString().slice(0, 150),
                            text: el.innerText.slice(0, 500),
                            role: el.getAttribute('role')
                        });
                    }
                }
                return result;
            }""")
            print(f"[Settings] New dialog/settings elements: {json.dumps(new_elements, indent=2)}")

        # Step 9: Try clicking with JavaScript directly to bypass any interceptors
        print("\n[Settings] Trying JavaScript click on settings...")
        await page.evaluate("""() => {
            const elements = document.querySelectorAll('a, button, div, span');
            for (const el of elements) {
                if (el.innerText.trim() === 'Settings') {
                    el.click();
                    break;
                }
            }
        }""")
        await page.wait_for_timeout(4000)
        await ss(page, "settings_js_click")
        body_text = await get_all_text(page)
        print(f"[Settings] After JS click text:\n{body_text[:3000]}")

        # Check URL
        print(f"[Settings] Current URL: {page.url}")

        # Step 10: Full screenshot of everything visible
        await page.evaluate("window.scrollTo(0, 0)")
        await page.wait_for_timeout(500)
        await ss(page, "settings_full_view")

        # Check if there's content rendered with absolute positioning or off-screen
        hidden_content = await page.evaluate("""() => {
            const mainContent = document.querySelector('[class*="content"], [class*="Content"], main, [role="main"]');
            if (mainContent) {
                return {
                    innerHTML: mainContent.innerHTML.slice(0, 3000),
                    innerText: mainContent.innerText.slice(0, 1000),
                    style: mainContent.getAttribute('style'),
                    classes: mainContent.className
                };
            }
            // Try the second child of root
            const root = document.getElementById('root');
            if (root) {
                return {
                    childCount: root.children.length,
                    firstChildHTML: root.children[0] ? root.children[0].innerHTML.slice(0, 2000) : 'empty'
                };
            }
            return 'No main content found';
        }""")
        print(f"\n[Settings] Hidden/main content area:\n{json.dumps(hidden_content, indent=2)[:3000]}")

        print(f"\n[Done] Total screenshots: {sc-1}")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
