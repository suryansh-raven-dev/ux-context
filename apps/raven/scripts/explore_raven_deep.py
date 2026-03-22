import asyncio
import json
import os
from playwright.async_api import async_playwright

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/screenshots/deep"
os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

REPORT = []
sc = 1

def log(section, detail):
    REPORT.append({"section": section, "detail": detail})
    print(f"[{section}] {detail}")

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
            result.buttons = Array.from(document.querySelectorAll('button')).map(e => e.innerText.trim()).filter(t => t && t.length < 60).slice(0, 30);
            result.inputs = Array.from(document.querySelectorAll('input, textarea, select')).map(e => ({
                type: e.type || e.tagName.toLowerCase(),
                placeholder: e.placeholder || '',
                name: e.name || '',
                id: e.id || ''
            })).slice(0, 20);
            result.links = Array.from(document.querySelectorAll('a')).map(e => ({
                text: e.innerText.trim(),
                href: e.getAttribute('href')
            })).filter(l => l.text && l.text.length < 80).slice(0, 30);
            result.tables = document.querySelectorAll('table').length;
            result.images = document.querySelectorAll('img').length;
            result.svgs = document.querySelectorAll('svg').length;
            result.iframes = document.querySelectorAll('iframe').length;
            result.canvases = document.querySelectorAll('canvas').length;
            return result;
        }""")
    except Exception as e:
        return {"error": str(e)}

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()

        # Login
        log("Login", "Navigating to login...")
        await page.goto("https://ifz.startraven.com", wait_until="networkidle", timeout=30000)
        emp_input = await page.wait_for_selector("input", timeout=5000)
        await emp_input.fill("SURYANSH-04")
        continue_btn = await page.query_selector("button:has-text('Continue')")
        await continue_btn.click()
        await page.wait_for_timeout(2000)

        pwd_input = await page.wait_for_selector("input[type='password']", timeout=5000)
        await pwd_input.fill("RavenTesting@123")
        login_btn = await page.query_selector("button:has-text('Login'), button:has-text('Sign in'), button[type='submit']")
        if login_btn:
            await login_btn.click()
        await page.wait_for_timeout(5000)
        log("Login", "Logged in successfully")

        # Domain selection modal
        await ss(page, "domain_selection_modal")
        body_text = await get_all_text(page)
        log("DomainSelection", f"Body text (first 1000 chars): {body_text[:1000]}")

        # Select HSEF domain
        log("DomainSelection", "Selecting HSEF domain...")
        try:
            hsef = await page.query_selector("text=HSEF")
            if hsef:
                await hsef.click()
                await page.wait_for_timeout(3000)
                await ss(page, "after_hsef_selected")
                log("DomainSelection", "HSEF domain selected")
        except Exception as e:
            log("DomainSelection", f"Error selecting HSEF: {e}")

        # ===== SEARCH PAGE =====
        log("Search", "Exploring Search page...")
        structure = await get_page_structure(page)
        log("Search", f"Structure: {json.dumps(structure, indent=2)}")
        await ss(page, "search_page")
        body_text = await get_all_text(page)
        log("Search", f"Page text (first 2000 chars): {body_text[:2000]}")

        # Try searching something
        search_input = await page.query_selector("input[type='text'], input[type='search'], textarea, input:not([type='password'])")
        if search_input:
            log("Search", "Found search input, trying a query...")
            await search_input.fill("What is the safety procedure for ammonia?")
            await ss(page, "search_query_entered")
            # Try pressing Enter or clicking search button
            await search_input.press("Enter")
            await page.wait_for_timeout(8000)
            await ss(page, "search_results")
            structure = await get_page_structure(page)
            log("Search", f"After search structure: {json.dumps(structure, indent=2)}")
            body_text = await get_all_text(page)
            log("Search", f"Search results text (first 3000 chars): {body_text[:3000]}")

        # ===== P&ID PAGE =====
        log("PID", "Navigating to P&ID...")
        try:
            pid_link = await page.query_selector("a[href='/pid'], a:has-text('P&ID')")
            if pid_link:
                await pid_link.click()
                await page.wait_for_timeout(5000)
            else:
                await page.goto("https://ifz.startraven.com/pid", wait_until="networkidle", timeout=15000)
        except:
            await page.goto("https://ifz.startraven.com/pid", wait_until="networkidle", timeout=15000)

        await ss(page, "pid_page")
        structure = await get_page_structure(page)
        log("PID", f"Structure: {json.dumps(structure, indent=2)}")
        body_text = await get_all_text(page)
        log("PID", f"Page text (first 2000 chars): {body_text[:2000]}")

        # Explore P&ID interactions
        pid_buttons = await page.query_selector_all("button")
        for btn in pid_buttons[:10]:
            text = (await btn.inner_text()).strip()
            if text and len(text) < 50:
                log("PID", f"Button found: '{text}'")

        # Check for any dropdowns or selectors on P&ID page
        selects = await page.query_selector_all("select, [role='combobox'], [role='listbox']")
        log("PID", f"Found {len(selects)} select/combo elements")

        # Check for canvas or SVG (P&ID diagrams)
        canvases = await page.query_selector_all("canvas")
        svgs = await page.query_selector_all("svg")
        log("PID", f"Canvas elements: {len(canvases)}, SVG elements: {len(svgs)}")

        # Look for any expandable items or tree views
        tree_items = await page.query_selector_all("[role='treeitem'], [class*='tree'], [class*='Tree']")
        log("PID", f"Tree items: {len(tree_items)}")

        # Try clicking on anything interactive in the P&ID
        clickable_items = await page.query_selector_all("[class*='clickable'], [class*='selectable'], [data-testid]")
        log("PID", f"Clickable items: {len(clickable_items)}")

        # ===== DATA EXPLORER =====
        log("DataExplorer", "Navigating to Data Explorer...")
        try:
            de_link = await page.query_selector("a[href='/data/data-explorer'], a:has-text('Data Explorer')")
            if de_link:
                await de_link.click()
                await page.wait_for_timeout(5000)
            else:
                await page.goto("https://ifz.startraven.com/data/data-explorer", wait_until="networkidle", timeout=15000)
        except:
            await page.goto("https://ifz.startraven.com/data/data-explorer", wait_until="networkidle", timeout=15000)

        await ss(page, "data_explorer_page")
        structure = await get_page_structure(page)
        log("DataExplorer", f"Structure: {json.dumps(structure, indent=2)}")
        body_text = await get_all_text(page)
        log("DataExplorer", f"Page text (first 2000 chars): {body_text[:2000]}")

        # ===== SETTINGS =====
        log("Settings", "Navigating to Settings...")
        try:
            settings_link = await page.query_selector("a:has-text('Settings'), a[href*='settings']")
            if settings_link:
                await settings_link.click()
                await page.wait_for_timeout(3000)
            else:
                await page.goto("https://ifz.startraven.com/settings", wait_until="networkidle", timeout=15000)
        except:
            await page.goto("https://ifz.startraven.com/settings", wait_until="networkidle", timeout=15000)

        await ss(page, "settings_page")
        structure = await get_page_structure(page)
        log("Settings", f"Structure: {json.dumps(structure, indent=2)}")
        body_text = await get_all_text(page)
        log("Settings", f"Page text (first 2000 chars): {body_text[:2000]}")

        # ===== Explore sidebar more carefully =====
        log("Sidebar", "Getting full sidebar content...")
        sidebar_text = await page.evaluate("""() => {
            const sidebar = document.querySelector('aside, nav, [class*="sidebar"], [class*="Sidebar"]');
            return sidebar ? sidebar.innerText : 'No sidebar found';
        }""")
        log("Sidebar", f"Sidebar text: {sidebar_text}")

        # ===== Try different domains =====
        # Go back to search to try domain switcher
        log("DomainSwitch", "Looking for domain switcher...")
        await page.goto("https://ifz.startraven.com/search", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(2000)

        # Look for domain dropdown in sidebar
        domain_dropdown = await page.query_selector("[class*='dropdown'], [class*='Dropdown'], select, [role='combobox']")
        if domain_dropdown:
            log("DomainSwitch", "Found domain dropdown")
            await domain_dropdown.click()
            await page.wait_for_timeout(2000)
            await ss(page, "domain_dropdown_open")

        # Check for hamburger menu
        hamburger = await page.query_selector("[class*='hamburger'], [class*='menu-toggle'], button svg, [aria-label*='menu']")
        if hamburger:
            log("Sidebar", "Found hamburger/menu button")
            await hamburger.click()
            await page.wait_for_timeout(2000)
            await ss(page, "hamburger_menu_open")

        # ===== Comprehensive sidebar exploration =====
        all_sidebar_links = await page.evaluate("""() => {
            const elements = document.querySelectorAll('aside a, nav a, [class*="sidebar"] a, [class*="Sidebar"] a, [class*="side-nav"] a');
            return Array.from(elements).map(e => ({
                text: e.innerText.trim(),
                href: e.getAttribute('href'),
                classes: e.className
            })).filter(e => e.text);
        }""")
        log("Sidebar", f"All sidebar links: {json.dumps(all_sidebar_links, indent=2)}")

        # ===== Try each domain and check how the app changes =====
        domains_to_try = ["Train-1", "Line-1F", "Urea-1"]
        for domain_name in domains_to_try:
            log("DomainExplore", f"Trying domain: {domain_name}")
            # Look for domain selector
            try:
                # Check for dropdown or button that opens domain selector
                domain_selectors = await page.query_selector_all("[class*='domain'], [class*='Domain']")
                for ds in domain_selectors:
                    text = (await ds.inner_text()).strip()
                    if text:
                        log("DomainExplore", f"Domain element text: {text}")
                        await ds.click()
                        await page.wait_for_timeout(2000)
                        domain_option = await page.query_selector(f"text={domain_name}")
                        if domain_option:
                            await domain_option.click()
                            await page.wait_for_timeout(3000)
                            await ss(page, f"domain_{domain_name.replace('-', '_')}")
                            structure = await get_page_structure(page)
                            log("DomainExplore", f"{domain_name} structure: {json.dumps(structure, indent=2)}")
                            break
            except Exception as e:
                log("DomainExplore", f"Error with {domain_name}: {e}")

        # ===== Final: capture the full page HTML structure for analysis =====
        log("Structure", "Capturing overall page structure...")
        page_structure = await page.evaluate("""() => {
            function getStructure(el, depth=0) {
                if (depth > 4) return null;
                const result = {
                    tag: el.tagName,
                    id: el.id || undefined,
                    classes: el.className ? (typeof el.className === 'string' ? el.className.split(' ').slice(0, 3).join(' ') : '') : undefined,
                    role: el.getAttribute('role') || undefined,
                    text: el.childNodes.length === 1 && el.childNodes[0].nodeType === 3 ? el.childNodes[0].textContent.trim().slice(0, 50) : undefined,
                    children: []
                };
                for (const child of el.children) {
                    if (['SCRIPT', 'STYLE', 'SVG', 'PATH', 'CIRCLE', 'RECT', 'LINE'].includes(child.tagName)) continue;
                    const childResult = getStructure(child, depth + 1);
                    if (childResult) result.children.push(childResult);
                }
                if (result.children.length === 0) delete result.children;
                return result;
            }
            return getStructure(document.body);
        }""")
        log("Structure", f"Page structure (truncated): {json.dumps(page_structure, indent=2)[:5000]}")

        # Save report
        report_path = os.path.join(SCREENSHOTS_DIR, "deep_report.json")
        with open(report_path, "w") as f:
            json.dump(REPORT, f, indent=2)
        log("Done", f"Deep report saved. Total screenshots: {sc-1}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
