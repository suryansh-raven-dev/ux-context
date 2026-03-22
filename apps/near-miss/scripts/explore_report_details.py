"""
NMMS Report Detail Exploration
Clicks into individual reports for each status and role to document the detail page.
"""

import asyncio
import json
import os
from datetime import datetime
from playwright.async_api import async_playwright

BASE_URL = "https://nmms.staging.startraven.com"
SCREENSHOT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "screenshots", "report-details")
REPORT_PATH = os.path.join(SCREENSHOT_DIR, "report_details_report.json")

ROLES = [
    {"label": "admin", "select_text": "Admin"},
    {"label": "operator", "select_text": "Operator - PP"},
    {"label": "safety-manager", "select_text": "Safety Manager"},
    {"label": "hod-pp", "select_text": "Head of Department - PP"},
]

os.makedirs(SCREENSHOT_DIR, exist_ok=True)
report = {"generated_at": datetime.now().isoformat(), "roles": {}}


async def ss(page, name, rl):
    path = os.path.join(SCREENSHOT_DIR, f"{rl}_{name}.png")
    await page.screenshot(path=path, full_page=True)
    return path


async def get_elements(page):
    info = {"url": page.url, "title": await page.title()}
    try:
        info["all_text"] = await page.evaluate("""() => {
            const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
            const t = []; let n;
            while (n = w.nextNode()) {
                const s = n.textContent.trim();
                if (s && s.length > 1 && s.length < 300 && n.parentElement.offsetParent !== null) t.push(s);
            }
            return [...new Set(t)].slice(0, 200);
        }""")
    except:
        info["all_text"] = []
    try:
        info["buttons"] = await page.evaluate("""() =>
            Array.from(document.querySelectorAll('button, [role="button"]'))
                .filter(e => e.offsetParent !== null)
                .map(e => ({text: e.innerText.trim().substring(0,120), disabled: e.disabled || false}))
                .filter(e => e.text.length > 0)
        """)
    except:
        info["buttons"] = []
    try:
        info["inputs"] = await page.evaluate("""() =>
            Array.from(document.querySelectorAll('input, textarea, select'))
                .filter(e => e.offsetParent !== null)
                .map(e => ({type: e.type||e.tagName.toLowerCase(), placeholder: e.placeholder||'', value: e.value ? e.value.substring(0,80) : ''}))
        """)
    except:
        info["inputs"] = []
    try:
        info["headings"] = await page.evaluate("""() =>
            Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'))
                .filter(e => e.offsetParent !== null)
                .map(e => ({tag: e.tagName, text: e.innerText.trim().substring(0,200)}))
                .filter(e => e.text.length > 0)
        """)
    except:
        info["headings"] = []
    try:
        info["sections"] = await page.evaluate("""() => {
            const sections = [];
            document.querySelectorAll('[class*="section"], [class*="Section"], [class*="card"], [class*="Card"], [class*="panel"], [class*="Panel"]').forEach(e => {
                if (e.offsetParent !== null && e.innerText.trim().length > 5) {
                    sections.push(e.innerText.trim().substring(0, 300));
                }
            });
            return sections.slice(0, 20);
        }""")
    except:
        info["sections"] = []
    try:
        info["links"] = await page.evaluate("""() =>
            Array.from(document.querySelectorAll('a[href]'))
                .filter(e => e.offsetParent !== null && e.innerText.trim().length > 0)
                .map(e => ({text: e.innerText.trim().substring(0,100), href: e.href}))
                .slice(0, 40)
        """)
    except:
        info["links"] = []
    return info


async def login(page, role):
    await page.goto(BASE_URL, wait_until="networkidle", timeout=30000)
    await page.wait_for_timeout(2000)
    sr = await page.query_selector("text=SELECT ROLE")
    if not sr:
        sr = await page.query_selector("text=Select Role")
    if sr:
        await sr.click()
        await page.wait_for_timeout(2000)
        await page.get_by_text(role["select_text"], exact=True).click()
        await page.wait_for_timeout(4000)
    return "/reports" in page.url


async def click_report_row(page, row_index=0):
    """Click a report row using the chevron > button."""
    try:
        # Try clicking the row directly using locator
        rows = page.locator("table tbody tr")
        count = await rows.count()
        if count > row_index:
            await rows.nth(row_index).click()
            await page.wait_for_timeout(3000)
            return True

        # Fallback: try clicking a chevron icon
        chevrons = page.locator("svg[data-testid*='chevron'], svg[data-testid*='arrow'], [class*='chevron'], [class*='arrow']")
        count = await chevrons.count()
        if count > row_index:
            await chevrons.nth(row_index).click()
            await page.wait_for_timeout(3000)
            return True

        # Fallback: click on an incident ID link
        incident_links = page.locator("text=/REF\\/\\d+\\/\\d+/")
        count = await incident_links.count()
        if count > row_index:
            await incident_links.nth(row_index).click()
            await page.wait_for_timeout(3000)
            return True

    except Exception as e:
        print(f"      Click error: {e}")
    return False


async def explore_report_detail_page(page, rl, prefix, sc):
    """Capture full report detail page with scrolling."""
    screens = {}

    sc += 1
    await ss(page, f"{sc:02d}_{prefix}_top", rl)
    screens[f"{prefix}_top"] = await get_elements(page)
    print(f"      Detail URL: {page.url}")

    # Scroll incrementally
    for i, scroll_y in enumerate([600, 1200, 1800, 2400, 3000]):
        await page.evaluate(f"window.scrollTo(0, {scroll_y})")
        await page.wait_for_timeout(800)
        sc += 1
        pos = ["mid1", "mid2", "mid3", "mid4", "bottom"][i]
        await ss(page, f"{sc:02d}_{prefix}_{pos}", rl)
        # Only capture elements for key scroll positions
        if i in [1, 3, 4]:
            screens[f"{prefix}_{pos}"] = await get_elements(page)

    # Final scroll to absolute bottom
    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    await page.wait_for_timeout(800)
    sc += 1
    await ss(page, f"{sc:02d}_{prefix}_end", rl)
    screens[f"{prefix}_end"] = await get_elements(page)

    return screens, sc


async def explore_role(browser, role):
    context = await browser.new_context(viewport={"width": 1440, "height": 900})
    page = await context.new_page()
    rl = role["label"]
    role_data = {"screens": {}, "errors": []}
    sc = 0

    print(f"\n{'='*60}")
    print(f"  REPORT DETAILS: {rl} ({role['select_text']})")
    print(f"{'='*60}")

    ok = await login(page, role)
    if not ok:
        role_data["errors"].append("Login failed")
        await context.close()
        return role_data

    # 1. Active report detail
    print(f"\n  --- Active Report ---")
    await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
    await page.wait_for_timeout(2000)
    clicked = await click_report_row(page, 0)
    if clicked and "/reports/" in page.url:
        detail_screens, sc = await explore_report_detail_page(page, rl, "active_report", sc)
        role_data["screens"].update(detail_screens)

        # Try to expand right sidebar sections
        try:
            # Click Report accordion
            report_acc = await page.query_selector("text=Report")
            if report_acc:
                await report_acc.click()
                await page.wait_for_timeout(1500)
                sc += 1
                await ss(page, f"{sc:02d}_active_report_sidebar", rl)
                role_data["screens"]["active_report_sidebar"] = await get_elements(page)

            # Click Investigation accordion
            inv_acc = await page.query_selector("text=Investigation")
            if inv_acc:
                await inv_acc.click()
                await page.wait_for_timeout(1500)
                sc += 1
                await ss(page, f"{sc:02d}_active_investigation_sidebar", rl)
                role_data["screens"]["active_investigation_sidebar"] = await get_elements(page)
        except Exception as e:
            role_data["errors"].append(f"Sidebar: {e}")
    else:
        print(f"    Could not click into active report (url: {page.url})")
        role_data["errors"].append("Could not click into active report")

    # 2. Done report detail (click 2nd row for variety)
    print(f"\n  --- Done Report ---")
    await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
    await page.wait_for_timeout(2000)
    # Click Done tab
    try:
        done_tab = page.locator("text=Done").first
        await done_tab.click()
        await page.wait_for_timeout(3000)
    except:
        pass

    clicked = await click_report_row(page, 0)
    if clicked and "/reports/" in page.url:
        done_screens, sc = await explore_report_detail_page(page, rl, "done_report", sc)
        role_data["screens"].update(done_screens)
    else:
        print(f"    Could not click into done report")
        role_data["errors"].append("Could not click into done report")

    # 3. Draft report detail
    print(f"\n  --- Draft Report ---")
    await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
    await page.wait_for_timeout(2000)
    try:
        draft_tab = page.locator("text=Draft").first
        await draft_tab.click()
        await page.wait_for_timeout(3000)
    except:
        pass

    clicked = await click_report_row(page, 0)
    if clicked:
        # Draft might open chat or a different view
        await page.wait_for_timeout(3000)
        sc += 1
        await ss(page, f"{sc:02d}_draft_page", rl)
        role_data["screens"]["draft_page"] = await get_elements(page)
        print(f"    Draft URL: {page.url}")

        # Scroll if it's a full page
        if "/reports/" in page.url or "/new-report" in page.url:
            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await page.wait_for_timeout(1000)
            sc += 1
            await ss(page, f"{sc:02d}_draft_page_end", rl)
    else:
        role_data["errors"].append("Could not click into draft report")

    # 4. Click into Investigations page and then into a report
    if rl != "operator":
        print(f"\n  --- Investigation via Investigations Page ---")
        await page.goto(f"{BASE_URL}/investigations", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(2000)
        sc += 1
        await ss(page, f"{sc:02d}_investigations_page", rl)
        role_data["screens"]["investigations_page"] = await get_elements(page)

        clicked = await click_report_row(page, 0)
        if clicked and "/reports/" in page.url:
            inv_screens, sc = await explore_report_detail_page(page, rl, "investigation_report", sc)
            role_data["screens"].update(inv_screens)

            # Try clicking the Investigation tab/accordion in the sidebar
            try:
                inv_tab = await page.query_selector("text=Investigation")
                if inv_tab:
                    await inv_tab.click()
                    await page.wait_for_timeout(2000)
                    sc += 1
                    await ss(page, f"{sc:02d}_investigation_tab_open", rl)
                    role_data["screens"]["investigation_tab_open"] = await get_elements(page)
            except:
                pass

    print(f"\n  Total screenshots for {rl}: {sc}")
    await context.close()
    return role_data


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        print(f"Exploring report details at {BASE_URL}")

        for role in ROLES:
            try:
                data = await explore_role(browser, role)
                report["roles"][role["label"]] = data
            except Exception as e:
                print(f"  FATAL: {e}")
                import traceback
                traceback.print_exc()
                report["roles"][role["label"]] = {"error": str(e)}

        await browser.close()

    with open(REPORT_PATH, "w") as f:
        json.dump(report, f, indent=2, default=str)

    print(f"\n{'='*60}")
    print(f"REPORT DETAILS SUMMARY")
    print(f"{'='*60}")
    for rl, data in report["roles"].items():
        screens = list(data.get("screens", {}).keys()) if isinstance(data, dict) else []
        errors = data.get("errors", []) if isinstance(data, dict) else []
        print(f"\n{rl}:")
        print(f"  Screens: {len(screens)} -> {screens}")
        if errors:
            for e in errors[:3]:
                print(f"  Error: {str(e)[:100]}")

    print(f"\nReport: {REPORT_PATH}")


if __name__ == "__main__":
    asyncio.run(main())
