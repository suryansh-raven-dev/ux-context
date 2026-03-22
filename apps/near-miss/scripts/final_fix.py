"""Final fix: Uses MuiDataGrid-row selectors and correct navigation."""

import asyncio
import json
import os
from playwright.async_api import async_playwright

BASE_URL = "https://nmms.staging.startraven.com"
SD = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "screenshots", "remaining-flows")
os.makedirs(SD, exist_ok=True)
report = {"fixes": {}}


async def ss(page, name):
    await page.screenshot(path=os.path.join(SD, f"{name}.png"), full_page=True)


async def get_el(page):
    info = {"url": page.url}
    try:
        info["buttons"] = await page.evaluate("""() =>
            Array.from(document.querySelectorAll('button, [role="button"]'))
                .filter(e => e.offsetParent !== null)
                .map(e => ({text: e.innerText.trim().substring(0,120), disabled: e.disabled||false}))
                .filter(e => e.text.length > 0)
        """)
    except:
        info["buttons"] = []
    try:
        info["all_text"] = await page.evaluate("""() => {
            const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
            const t = []; let n;
            while (n = w.nextNode()) { const s = n.textContent.trim(); if (s && s.length > 1 && s.length < 300 && n.parentElement.offsetParent !== null) t.push(s); }
            return [...new Set(t)].slice(0, 200);
        }""")
    except:
        info["all_text"] = []
    return info


async def login(page, role_text):
    await page.goto(BASE_URL, wait_until="networkidle", timeout=30000)
    await page.wait_for_timeout(2000)
    sr = await page.query_selector("text=SELECT ROLE")
    if not sr: sr = await page.query_selector("text=Select Role")
    if sr:
        await sr.click()
        await page.wait_for_timeout(2000)
        await page.get_by_text(role_text, exact=True).click()
        await page.wait_for_timeout(4000)
    return "/reports" in page.url


async def click_datagrid_row(page, index=0):
    """Click a MuiDataGrid row by index."""
    rows = page.locator(".MuiDataGrid-row")
    count = await rows.count()
    if count > index:
        await rows.nth(index).click()
        await page.wait_for_timeout(3000)
        return True
    return False


async def capture_detail(page, prefix):
    """Capture report detail with scrolling."""
    screens = {}
    await ss(page, f"{prefix}_top")
    screens["top"] = await get_el(page)
    for i, y in enumerate([600, 1200]):
        await page.evaluate(f"window.scrollTo(0, {y})")
        await page.wait_for_timeout(600)
        await ss(page, f"{prefix}_scroll{i+1}")
    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    await page.wait_for_timeout(600)
    await ss(page, f"{prefix}_end")
    screens["end"] = await get_el(page)
    return screens


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)

        # ══════ FIX 2: HoD on Approved by Safety ══════
        print("═══ FIX 2: HoD on Approved by Safety ═══")
        fix2 = {"screens": {}, "errors": []}
        ctx = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await ctx.new_page()
        ok = await login(page, "Head of Department - PP")
        if ok:
            await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
            await page.wait_for_timeout(3000)

            # Find row with "Approved by Safety" using MuiDataGrid
            try:
                approved_rows = page.locator(".MuiDataGrid-row:has-text('Approved by Safety')")
                cnt = await approved_rows.count()
                print(f"  Approved rows: {cnt}")
                if cnt > 0:
                    await approved_rows.nth(0).click()
                    await page.wait_for_timeout(3000)
                    fix2["screens"].update(await capture_detail(page, "fix2_hod_approved"))
                    print(f"  Detail: {page.url}")
                    btns = fix2["screens"]["top"].get("buttons", []) + fix2["screens"]["end"].get("buttons", [])
                    action = [b["text"] for b in btns if any(kw in b["text"].lower() for kw in ["approve", "reject", "submit", "close", "accept", "investigation", "start"])]
                    fix2["hod_action_buttons"] = action
                    print(f"  HoD action buttons: {action}")
                else:
                    fix2["errors"].append("No Approved by Safety rows on first page")
            except Exception as e:
                fix2["errors"].append(str(e))

        # Switch to Safety Manager
        ok2 = await login(page, "Safety Manager")
        if ok2:
            await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
            await page.wait_for_timeout(3000)
            try:
                approved_rows = page.locator(".MuiDataGrid-row:has-text('Approved by Safety')")
                cnt = await approved_rows.count()
                print(f"  SM Approved rows: {cnt}")
                if cnt > 0:
                    await approved_rows.nth(0).click()
                    await page.wait_for_timeout(3000)
                    fix2["screens"].update(await capture_detail(page, "fix2_sm_approved"))
                    print(f"  SM Detail: {page.url}")
                    btns = fix2["screens"]["top"].get("buttons", []) + fix2["screens"]["end"].get("buttons", [])
                    action = [b["text"] for b in btns if any(kw in b["text"].lower() for kw in ["approve", "reject", "submit", "close", "accept", "investigation", "start"])]
                    fix2["sm_action_buttons"] = action
                    print(f"  SM action buttons: {action}")
            except Exception as e:
                fix2["errors"].append(f"SM: {e}")

        report["fixes"]["fix2"] = fix2
        await ctx.close()

        # ══════ FIX 4: Investigation Detail ══════
        print("\n═══ FIX 4: Investigation Detail ═══")
        fix4 = {"screens": {}, "errors": []}
        ctx = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await ctx.new_page()
        ok = await login(page, "Safety Manager")
        if ok:
            # Click the investigations nav link
            inv_link = page.locator("a[href='/investigations']").first
            await inv_link.click()
            await page.wait_for_timeout(4000)
            print(f"  Investigations: {page.url}")
            await ss(page, "fix4_investigations_page")
            fix4["screens"]["investigations_page"] = await get_el(page)

            # Try clicking a row
            clicked = await click_datagrid_row(page, 0)
            if clicked:
                fix4["screens"].update(await capture_detail(page, "fix4_inv_detail"))
                print(f"  Investigation detail: {page.url}")

                # Expand Investigation sidebar accordion
                try:
                    # Look for the sidebar section
                    sidebar_text = await page.evaluate("""() => {
                        const sidebar = document.querySelector('[class*="sidebar"], [class*="Sidebar"]');
                        return sidebar ? sidebar.innerText.substring(0, 500) : 'no sidebar found';
                    }""")
                    print(f"  Sidebar: {sidebar_text[:200]}")

                    # Try clicking Investigation heading in sidebar
                    inv_headings = page.locator("h3:has-text('Investigation'), h4:has-text('Investigation'), span:has-text('Investigation'), div:has-text('Investigation')")
                    cnt = await inv_headings.count()
                    for i in range(min(cnt, 5)):
                        text = await inv_headings.nth(i).inner_text()
                        if text.strip() == "Investigation":
                            await inv_headings.nth(i).click()
                            await page.wait_for_timeout(2000)
                            await ss(page, "fix4_inv_accordion_expanded")
                            fix4["screens"]["accordion_expanded"] = await get_el(page)
                            print(f"  Clicked Investigation accordion")
                            break
                except Exception as e:
                    fix4["errors"].append(f"Accordion: {e}")
            else:
                fix4["errors"].append("No investigation rows to click")
                print(f"  No rows found")

        report["fixes"]["fix4"] = fix4
        await ctx.close()

        # ══════ FIX 6: Done + Rejected Detail ══════
        print("\n═══ FIX 6: Done + Rejected Reports ═══")
        fix6 = {"screens": {}, "errors": []}
        ctx = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await ctx.new_page()
        ok = await login(page, "Admin")
        if ok:
            # Done reports
            await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
            await page.wait_for_timeout(2000)

            # Click Done tab via MuiDataGrid
            done_tab = page.locator("text=/Done \\(/").first
            await done_tab.click()
            await page.wait_for_timeout(3000)
            print(f"  Done tab: {page.url}")
            await ss(page, "fix6_done_list")
            fix6["screens"]["done_list"] = await get_el(page)

            clicked = await click_datagrid_row(page, 0)
            if clicked:
                fix6["screens"].update(await capture_detail(page, "fix6_done_detail"))
                print(f"  Done detail: {page.url}")
                btns = fix6["screens"]["top"].get("buttons", []) + fix6["screens"]["end"].get("buttons", [])
                action = [b["text"] for b in btns if any(kw in b["text"].lower() for kw in ["approve", "reject", "submit", "close", "reopen", "delete"])]
                fix6["done_action_buttons"] = action
                print(f"  Done action buttons: {action}")
            else:
                fix6["errors"].append("No Done rows to click")

            # Rejected reports
            await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
            await page.wait_for_timeout(2000)
            rej_tab = page.locator("text=/Rejected \\(/").first
            await rej_tab.click()
            await page.wait_for_timeout(3000)
            print(f"  Rejected tab: {page.url}")
            await ss(page, "fix6_rejected_list")

            clicked = await click_datagrid_row(page, 0)
            if clicked:
                fix6["screens"].update(await capture_detail(page, "fix6_rejected_detail"))
                print(f"  Rejected detail: {page.url}")
                btns = fix6["screens"]["top"].get("buttons", []) + fix6["screens"]["end"].get("buttons", [])
                action = [b["text"] for b in btns if any(kw in b["text"].lower() for kw in ["approve", "reject", "submit", "close", "reopen", "delete"])]
                fix6["rejected_action_buttons"] = action
                print(f"  Rejected action buttons: {action}")
            else:
                fix6["errors"].append("No Rejected rows to click")

        report["fixes"]["fix6"] = fix6
        await ctx.close()

        await browser.close()

    with open(os.path.join(SD, "final_fix_report.json"), "w") as f:
        json.dump(report, f, indent=2, default=str)

    print("\n═══ SUMMARY ═══")
    for k, v in report["fixes"].items():
        screens = len(v.get("screens", {}))
        errors = v.get("errors", [])
        print(f"  {k}: {screens} screens, {len(errors)} errors")
        if errors:
            for e in errors[:3]: print(f"    Error: {str(e)[:100]}")
        for key in v:
            if "button" in key.lower():
                print(f"    {key}: {v[key]}")


if __name__ == "__main__":
    asyncio.run(main())
