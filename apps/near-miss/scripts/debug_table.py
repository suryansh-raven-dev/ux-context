"""Debug: Understand the actual DOM structure of the reports table."""

import asyncio
import json
import os
from playwright.async_api import async_playwright

BASE_URL = "https://nmms.staging.startraven.com"
SCREENSHOT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "screenshots", "remaining-flows")
os.makedirs(SCREENSHOT_DIR, exist_ok=True)


async def login(page, role_text):
    await page.goto(BASE_URL, wait_until="networkidle", timeout=30000)
    await page.wait_for_timeout(2000)
    sr = await page.query_selector("text=SELECT ROLE")
    if not sr:
        sr = await page.query_selector("text=Select Role")
    if sr:
        await sr.click()
        await page.wait_for_timeout(2000)
        await page.get_by_text(role_text, exact=True).click()
        await page.wait_for_timeout(4000)
    return "/reports" in page.url


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()

        ok = await login(page, "Head of Department - PP")
        if not ok:
            print("Login failed")
            return

        # === Check Active tab with Approved by Safety ===
        await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(3000)

        # Debug table structure
        table_info = await page.evaluate("""() => {
            const tables = document.querySelectorAll('table');
            const result = [];
            tables.forEach((t, i) => {
                const thead = t.querySelector('thead');
                const tbody = t.querySelector('tbody');
                result.push({
                    index: i,
                    hasHead: !!thead,
                    hasBody: !!tbody,
                    headHTML: thead ? thead.innerHTML.substring(0, 500) : '',
                    bodyRowCount: tbody ? tbody.querySelectorAll('tr').length : 0,
                    allRowCount: t.querySelectorAll('tr').length,
                    firstRowHTML: tbody && tbody.querySelector('tr') ? tbody.querySelector('tr').innerHTML.substring(0, 500) : '',
                    classes: t.className
                });
            });
            return result;
        }""")
        print("Tables found:", json.dumps(table_info, indent=2))

        # Check for non-table list structures
        grid_info = await page.evaluate("""() => {
            const grids = document.querySelectorAll('[role="grid"], [role="row"], [class*="MuiDataGrid"], [class*="row"], [class*="Row"]');
            return Array.from(grids).slice(0, 10).map(g => ({
                tag: g.tagName,
                role: g.getAttribute('role'),
                classes: g.className.substring(0, 200),
                childCount: g.children.length,
                text: g.innerText.substring(0, 100)
            }));
        }""")
        print("\nGrid/Row elements:", json.dumps(grid_info, indent=2))

        # Check for clickable rows - look for the actual row structure
        row_info = await page.evaluate("""() => {
            // Find what contains "REF/2026" text
            const allElements = document.querySelectorAll('*');
            const rows = [];
            for (const el of allElements) {
                if (el.innerText && el.innerText.includes('REF/2026') && el.children.length > 3) {
                    const parent = el.parentElement;
                    rows.push({
                        tag: el.tagName,
                        classes: el.className.substring(0, 200),
                        childCount: el.children.length,
                        parentTag: parent ? parent.tagName : '',
                        parentClasses: parent ? parent.className.substring(0, 200) : '',
                        text: el.innerText.substring(0, 150),
                        clickable: el.onclick !== null || el.getAttribute('onClick') !== null || el.style.cursor === 'pointer'
                    });
                    if (rows.length >= 3) break;
                }
            }
            return rows;
        }""")
        print("\nRow structures:", json.dumps(row_info, indent=2))

        # Try to find the actual clickable element
        clickable = await page.evaluate("""() => {
            // Search for "Approved by Safety" text
            const all = document.querySelectorAll('*');
            for (const el of all) {
                if (el.innerText === 'Approved by Safety' && el.offsetParent !== null) {
                    let current = el;
                    const chain = [];
                    while (current && current !== document.body) {
                        chain.push({tag: current.tagName, classes: current.className.substring(0,100), cursor: getComputedStyle(current).cursor});
                        current = current.parentElement;
                    }
                    return chain.slice(0, 8);
                }
            }
            return [];
        }""")
        print("\n'Approved by Safety' element chain:", json.dumps(clickable, indent=2))

        # Check Done tab
        print("\n--- Checking Done tab ---")
        done_tab = page.locator("text=/Done \\(\\d+\\)/")
        if await done_tab.count() > 0:
            await done_tab.first.click()
            await page.wait_for_timeout(3000)
            print(f"  Done tab URL: {page.url}")

            done_table = await page.evaluate("""() => {
                const tables = document.querySelectorAll('table');
                const result = [];
                tables.forEach((t, i) => {
                    const tbody = t.querySelector('tbody');
                    result.push({
                        index: i,
                        bodyRowCount: tbody ? tbody.querySelectorAll('tr').length : 0,
                        allRowCount: t.querySelectorAll('tr').length,
                    });
                });
                return result;
            }""")
            print(f"  Done tables: {json.dumps(done_table)}")

        # Check Investigations
        print("\n--- Checking Investigations ---")
        await page.goto(f"{BASE_URL}/investigations?status=in_progress", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(3000)
        print(f"  Investigations URL: {page.url}")

        inv_table = await page.evaluate("""() => {
            const tables = document.querySelectorAll('table');
            const result = [];
            tables.forEach((t, i) => {
                const tbody = t.querySelector('tbody');
                result.push({
                    index: i,
                    bodyRowCount: tbody ? tbody.querySelectorAll('tr').length : 0,
                    allRowCount: t.querySelectorAll('tr').length,
                    firstRowHTML: tbody && tbody.querySelector('tr') ? tbody.querySelector('tr').outerHTML.substring(0, 300) : 'no rows',
                });
            });
            // Also check for any text containing investigation IDs
            const hasIPL = document.body.innerText.includes('IPL/');
            const hasUNIT = document.body.innerText.includes('UNIT-');
            return {tables: result, hasIPL, hasUNIT, bodyText: document.body.innerText.substring(0, 500)};
        }""")
        print(f"  Investigations content: {json.dumps(inv_table, indent=2)[:1000]}")

        await page.screenshot(path=os.path.join(SCREENSHOT_DIR, "debug_investigations.png"), full_page=True)

        await context.close()
        await browser.close()


if __name__ == "__main__":
    asyncio.run(main())
