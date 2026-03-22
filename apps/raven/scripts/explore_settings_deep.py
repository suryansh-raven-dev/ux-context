import asyncio
import json
import os
from playwright.async_api import async_playwright

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/screenshots/settings"
os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

sc = 10

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

async def get_page_structure(page):
    try:
        return await page.evaluate("""() => {
            const result = {};
            result.title = document.title;
            result.url = window.location.href;
            result.h1 = Array.from(document.querySelectorAll('h1')).map(e => e.innerText.trim()).filter(Boolean);
            result.h2 = Array.from(document.querySelectorAll('h2')).map(e => e.innerText.trim()).filter(Boolean);
            result.h3 = Array.from(document.querySelectorAll('h3')).map(e => e.innerText.trim()).filter(Boolean);
            result.h4 = Array.from(document.querySelectorAll('h4')).map(e => e.innerText.trim()).filter(Boolean);
            result.h5 = Array.from(document.querySelectorAll('h5')).map(e => e.innerText.trim()).filter(Boolean);
            result.h6 = Array.from(document.querySelectorAll('h6')).map(e => e.innerText.trim()).filter(Boolean);
            result.buttons = Array.from(document.querySelectorAll('button')).map(e => e.innerText.trim()).filter(t => t && t.length < 60).slice(0, 30);
            result.inputs = Array.from(document.querySelectorAll('input, textarea, select')).map(e => ({
                type: e.type || e.tagName.toLowerCase(),
                placeholder: e.placeholder || '',
                name: e.name || '',
                value: e.value || '',
                label: e.labels && e.labels[0] ? e.labels[0].innerText : ''
            })).slice(0, 20);
            result.tables = document.querySelectorAll('table').length;
            result.links = Array.from(document.querySelectorAll('a')).map(e => ({
                text: e.innerText.trim(),
                href: e.getAttribute('href')
            })).filter(l => l.text && l.text.length < 80).slice(0, 30);
            result.tabs = Array.from(document.querySelectorAll('[role="tab"]')).map(e => e.innerText.trim()).filter(Boolean);
            return result;
        }""")
    except Exception as e:
        return {"error": str(e)}

async def login_and_select_domain(page):
    await page.goto("https://ifz.startraven.com", wait_until="networkidle", timeout=30000)
    emp_input = await page.wait_for_selector("input", timeout=5000)
    await emp_input.fill("SURYANSH-04")
    continue_btn = await page.query_selector("button:has-text('Continue')")
    await continue_btn.click()
    await page.wait_for_timeout(2000)
    pwd_input = await page.wait_for_selector("input[type='password']", timeout=5000)
    await pwd_input.fill("RavenTesting@123")
    login_btn = await page.query_selector("button:has-text('Login')")
    if login_btn:
        await login_btn.click()
    await page.wait_for_timeout(5000)
    hsef = await page.query_selector("text=HSEF")
    if hsef:
        await hsef.click()
        await page.wait_for_timeout(3000)

async def open_settings_and_click(page, option_text):
    """Open settings popup and click an option"""
    settings_el = await page.query_selector("li:has-text('Settings')")
    if not settings_el:
        settings_el = await page.query_selector("text=Settings")
    if settings_el:
        await settings_el.click()
        await page.wait_for_timeout(2000)
        option = await page.query_selector(f"li:has-text('{option_text}')")
        if not option:
            option = await page.query_selector(f"a:has-text('{option_text}')")
        if option:
            await option.click()
            await page.wait_for_timeout(4000)
            return True
    return False

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()

        await login_and_select_domain(page)
        print("[Login] Logged in and domain selected\n")

        # ===== 1. ACCOUNT SETTINGS =====
        print("=" * 60)
        print("[1] ACCOUNT SETTINGS")
        print("=" * 60)
        if await open_settings_and_click(page, "Account Settings"):
            await ss(page, "account_settings")
            body_text = await get_all_text(page)
            print(f"Body text:\n{body_text[:4000]}")
            structure = await get_page_structure(page)
            print(f"\nStructure: {json.dumps(structure, indent=2)}")
            
            # Scroll to see more
            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await page.wait_for_timeout(1000)
            await ss(page, "account_settings_scrolled")
            
            # Check for tabs
            tabs = await page.query_selector_all("[role='tab']")
            for tab in tabs:
                tab_text = (await tab.inner_text()).strip()
                if tab_text:
                    print(f"\n  Clicking tab: '{tab_text}'")
                    await tab.click()
                    await page.wait_for_timeout(2000)
                    await ss(page, f"account_settings_tab_{tab_text.replace(' ','_')[:20]}")
                    body_text = await get_all_text(page)
                    print(f"  Tab content:\n{body_text[:2000]}")
        else:
            print("  Could not open Account Settings")

        # ===== 2. WORKPLACE SETTINGS =====
        print("\n" + "=" * 60)
        print("[2] WORKPLACE SETTINGS")
        print("=" * 60)
        # Go back to search first
        await page.goto("https://ifz.startraven.com/search", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(2000)
        
        if await open_settings_and_click(page, "Workplace Settings"):
            await ss(page, "workplace_settings")
            body_text = await get_all_text(page)
            print(f"Body text:\n{body_text[:4000]}")
            structure = await get_page_structure(page)
            print(f"\nStructure: {json.dumps(structure, indent=2)}")
            
            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await page.wait_for_timeout(1000)
            await ss(page, "workplace_settings_scrolled")
            
            # Check for tabs
            tabs = await page.query_selector_all("[role='tab']")
            for tab in tabs:
                tab_text = (await tab.inner_text()).strip()
                if tab_text:
                    print(f"\n  Clicking tab: '{tab_text}'")
                    await tab.click()
                    await page.wait_for_timeout(2000)
                    await ss(page, f"workplace_settings_tab_{tab_text.replace(' ','_')[:20]}")
                    body_text = await get_all_text(page)
                    print(f"  Tab content:\n{body_text[:3000]}")
        else:
            print("  Could not open Workplace Settings")

        # ===== 3. SAVED ANSWERS =====
        print("\n" + "=" * 60)
        print("[3] SAVED ANSWERS")
        print("=" * 60)
        await page.goto("https://ifz.startraven.com/search", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(2000)
        
        if await open_settings_and_click(page, "Saved Answers"):
            await ss(page, "saved_answers")
            body_text = await get_all_text(page)
            print(f"Body text:\n{body_text[:4000]}")
            structure = await get_page_structure(page)
            print(f"\nStructure: {json.dumps(structure, indent=2)}")
        else:
            print("  Could not open Saved Answers")

        # ===== 4. FEEDBACK =====
        print("\n" + "=" * 60)
        print("[4] FEEDBACK")
        print("=" * 60)
        await page.goto("https://ifz.startraven.com/search", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(2000)
        
        if await open_settings_and_click(page, "Feedback"):
            await ss(page, "feedback")
            body_text = await get_all_text(page)
            print(f"Body text:\n{body_text[:4000]}")
            structure = await get_page_structure(page)
            print(f"\nStructure: {json.dumps(structure, indent=2)}")
        else:
            print("  Could not open Feedback")

        # ===== 5. SWITCH TO DARK MODE =====
        print("\n" + "=" * 60)
        print("[5] SWITCH TO DARK MODE")
        print("=" * 60)
        await page.goto("https://ifz.startraven.com/search", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(2000)
        
        if await open_settings_and_click(page, "Dark Mode"):
            await ss(page, "dark_mode")
            body_text = await get_all_text(page)
            print(f"Body text:\n{body_text[:2000]}")
        else:
            print("  Could not toggle Dark Mode")

        # ===== 6. Capture dark mode state =====
        await page.wait_for_timeout(2000)
        await ss(page, "dark_mode_applied")
        
        # Switch back to light mode
        print("\n[6] Switching back to Light Mode...")
        settings_el = await page.query_selector("li:has-text('Settings')")
        if not settings_el:
            settings_el = await page.query_selector("text=Settings")
        if settings_el:
            await settings_el.click()
            await page.wait_for_timeout(2000)
            await ss(page, "settings_in_dark_mode")
            body_text = await get_all_text(page)
            print(f"Settings popup in current mode:\n{body_text[:1000]}")
            
            # Look for light mode toggle
            light_option = await page.query_selector("li:has-text('Light Mode')")
            if light_option:
                await light_option.click()
                await page.wait_for_timeout(2000)
                await ss(page, "light_mode_restored")
            else:
                # Close the menu
                await page.keyboard.press("Escape")
                await page.wait_for_timeout(500)

        print(f"\n[Done] Total screenshots captured: {sc-10}")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
