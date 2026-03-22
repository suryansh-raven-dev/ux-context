"""Fix script for flows 2, 4, 6 — uses direct URL navigation to report details."""

import asyncio
import json
import os
from datetime import datetime
from playwright.async_api import async_playwright

BASE_URL = "https://nmms.staging.startraven.com"
SCREENSHOT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "screenshots", "remaining-flows")
REPORT_PATH = os.path.join(SCREENSHOT_DIR, "fix_report.json")
os.makedirs(SCREENSHOT_DIR, exist_ok=True)
report = {"generated_at": datetime.now().isoformat(), "fixes": {}}


async def ss(page, name):
    path = os.path.join(SCREENSHOT_DIR, f"{name}.png")
    await page.screenshot(path=path, full_page=True)


async def get_el(page):
    info = {"url": page.url, "title": await page.title()}
    try:
        info["all_text"] = await page.evaluate("""() => {
            const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
            const t = []; let n;
            while (n = w.nextNode()) { const s = n.textContent.trim(); if (s && s.length > 1 && s.length < 300 && n.parentElement.offsetParent !== null) t.push(s); }
            return [...new Set(t)].slice(0, 200);
        }""")
    except:
        info["all_text"] = []
    try:
        info["buttons"] = await page.evaluate("""() =>
            Array.from(document.querySelectorAll('button, [role="button"]'))
                .filter(e => e.offsetParent !== null)
                .map(e => ({text: e.innerText.trim().substring(0,120), disabled: e.disabled||false}))
                .filter(e => e.text.length > 0)
        """)
    except:
        info["buttons"] = []
    return info


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

        # ─── FIX 2: HoD on Approved by Safety ─────────────────────
        print("FIX 2: HoD on 'Approved by Safety' reports")
        fix2 = {"screens": {}, "errors": []}
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()
        ok = await login(page, "Head of Department - PP")
        if ok:
            await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
            await page.wait_for_timeout(2000)

            # Find and click an Approved by Safety row
            try:
                # Use locator to find the row containing "Approved by Safety"
                approved_cells = page.locator("td:has-text('Approved by Safety')")
                count = await approved_cells.count()
                print(f"  Found {count} 'Approved by Safety' cells")
                if count > 0:
                    row = approved_cells.nth(0).locator("xpath=ancestor::tr")
                    await row.click()
                    await page.wait_for_timeout(3000)
                    await ss(page, "fix2_hod_approved_detail_top")
                    fix2["screens"]["top"] = await get_el(page)
                    print(f"  Detail URL: {page.url}")

                    await page.evaluate("window.scrollBy(0, 600)")
                    await page.wait_for_timeout(1000)
                    await ss(page, "fix2_hod_approved_detail_mid")
                    fix2["screens"]["mid"] = await get_el(page)

                    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                    await page.wait_for_timeout(1000)
                    await ss(page, "fix2_hod_approved_detail_bottom")
                    fix2["screens"]["bottom"] = await get_el(page)

                    # Identify action buttons
                    all_buttons = []
                    for scr in fix2["screens"].values():
                        all_buttons.extend(scr.get("buttons", []))
                    action_btns = [b for b in all_buttons if any(kw in b["text"].lower() for kw in ["approve", "reject", "submit", "close", "accept", "delete", "investigation"])]
                    print(f"  Action buttons: {[b['text'] for b in action_btns]}")
                    fix2["action_buttons"] = [b["text"] for b in action_btns]
                else:
                    # Scroll down for more rows
                    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                    await page.wait_for_timeout(1000)
                    count2 = await approved_cells.count()
                    if count2 > 0:
                        row = approved_cells.nth(0).locator("xpath=ancestor::tr")
                        await row.click()
                        await page.wait_for_timeout(3000)
                        await ss(page, "fix2_hod_approved_detail_top")
                        fix2["screens"]["top"] = await get_el(page)
            except Exception as e:
                fix2["errors"].append(str(e))
                print(f"  Error: {e}")

        # Now try Safety Manager on Approved by Safety
        await page.goto(BASE_URL, wait_until="networkidle", timeout=30000)
        await page.wait_for_timeout(2000)
        sr = await page.query_selector("text=SELECT ROLE")
        if not sr:
            sr = await page.query_selector("text=Select Role")
        # We need to switch role — use the profile dropdown
        try:
            user_dropdown = page.locator("text=P C Sharma").first
            await user_dropdown.click()
            await page.wait_for_timeout(1500)
            sm_option = page.locator("text=Ravi Gupta").first
            await sm_option.click()
            await page.wait_for_timeout(4000)
            print(f"  Switched to Safety Manager: {page.url}")
        except:
            # Re-login
            await login(page, "Safety Manager")

        if "/reports" in page.url:
            await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
            await page.wait_for_timeout(2000)
            try:
                approved_cells = page.locator("td:has-text('Approved by Safety')")
                count = await approved_cells.count()
                print(f"  SM: Found {count} 'Approved by Safety' cells")
                if count > 0:
                    row = approved_cells.nth(0).locator("xpath=ancestor::tr")
                    await row.click()
                    await page.wait_for_timeout(3000)
                    await ss(page, "fix2_sm_approved_detail_top")
                    fix2["screens"]["sm_top"] = await get_el(page)
                    print(f"  SM Detail URL: {page.url}")

                    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                    await page.wait_for_timeout(1000)
                    await ss(page, "fix2_sm_approved_detail_bottom")
                    fix2["screens"]["sm_bottom"] = await get_el(page)
            except Exception as e:
                fix2["errors"].append(f"SM: {e}")

        report["fixes"]["fix2_approved"] = fix2
        await context.close()

        # ─── FIX 4: Investigation Detail ──────────────────────────
        print("\nFIX 4: Investigation Detail (Admin)")
        fix4 = {"screens": {}, "errors": []}
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()
        ok = await login(page, "Admin")
        if ok:
            # Navigate to Investigations via sidebar link click
            await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
            await page.wait_for_timeout(2000)

            inv_link = page.locator("a:has-text('Investigations')").first
            await inv_link.click()
            await page.wait_for_timeout(3000)
            await ss(page, "fix4_01_investigations_via_nav")
            fix4["screens"]["investigations_via_nav"] = await get_el(page)
            print(f"  Investigations via nav: {page.url}")

            # Click first row
            rows = page.locator("table tbody tr")
            count = await rows.count()
            print(f"  Table rows: {count}")
            if count > 0:
                await rows.nth(0).click()
                await page.wait_for_timeout(3000)
                await ss(page, "fix4_02_inv_detail_top")
                fix4["screens"]["detail_top"] = await get_el(page)
                print(f"  Investigation detail: {page.url}")

                for i, scroll in enumerate([600, 1200, 1800]):
                    await page.evaluate(f"window.scrollTo(0, {scroll})")
                    await page.wait_for_timeout(800)
                    await ss(page, f"fix4_{i+3:02d}_inv_detail_scroll")
                    fix4["screens"][f"detail_scroll_{i}"] = await get_el(page)

                await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                await page.wait_for_timeout(800)
                await ss(page, "fix4_06_inv_detail_end")
                fix4["screens"]["detail_end"] = await get_el(page)

                # Click Investigation sidebar accordion
                try:
                    page.locator("text=Investigation").nth(0)
                    # Find specifically in the right sidebar
                    sidebar_items = page.locator("[class*='sidebar'] >> text=Investigation, [class*='Sidebar'] >> text=Investigation")
                    if await sidebar_items.count() > 0:
                        await sidebar_items.first.click()
                    else:
                        # Try clicking the last "Investigation" text on page (likely sidebar)
                        inv_texts = page.locator("text=Investigation")
                        cnt = await inv_texts.count()
                        if cnt > 1:
                            await inv_texts.nth(cnt - 1).click()
                        elif cnt == 1:
                            await inv_texts.first.click()
                    await page.wait_for_timeout(2000)
                    await page.evaluate("window.scrollTo(0, 0)")
                    await page.wait_for_timeout(500)
                    await ss(page, "fix4_07_inv_sidebar_expanded")
                    fix4["screens"]["sidebar_expanded"] = await get_el(page)
                    print(f"  Investigation sidebar expanded")
                except Exception as e:
                    fix4["errors"].append(f"Sidebar: {e}")

            else:
                fix4["errors"].append("No investigation rows found")

        report["fixes"]["fix4_investigation"] = fix4
        await context.close()

        # ─── FIX 6: Done + Rejected Detail ────────────────────────
        print("\nFIX 6: Done + Rejected Report Details")
        fix6 = {"screens": {}, "errors": []}
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()
        ok = await login(page, "Admin")
        if ok:
            # Done reports
            await page.goto(f"{BASE_URL}/reports?status=done&facet=all_reports", wait_until="networkidle", timeout=15000)
            await page.wait_for_timeout(3000)
            await ss(page, "fix6_01_done_list")
            fix6["screens"]["done_list"] = await get_el(page)
            print(f"  Done list: {page.url}")

            rows = page.locator("table tbody tr")
            count = await rows.count()
            print(f"  Done rows: {count}")
            if count > 0:
                await rows.nth(0).click()
                await page.wait_for_timeout(3000)
                await ss(page, "fix6_02_done_detail_top")
                fix6["screens"]["done_detail_top"] = await get_el(page)
                print(f"  Done detail: {page.url}")

                await page.evaluate("window.scrollBy(0, 600)")
                await page.wait_for_timeout(800)
                await ss(page, "fix6_03_done_detail_mid")
                fix6["screens"]["done_detail_mid"] = await get_el(page)

                await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                await page.wait_for_timeout(800)
                await ss(page, "fix6_04_done_detail_end")
                fix6["screens"]["done_detail_end"] = await get_el(page)

            # Rejected reports
            await page.goto(f"{BASE_URL}/reports?status=rejected&facet=all_reports", wait_until="networkidle", timeout=15000)
            await page.wait_for_timeout(3000)
            await ss(page, "fix6_05_rejected_list")
            fix6["screens"]["rejected_list"] = await get_el(page)
            print(f"  Rejected list: {page.url}")

            rows = page.locator("table tbody tr")
            count = await rows.count()
            print(f"  Rejected rows: {count}")
            if count > 0:
                await rows.nth(0).click()
                await page.wait_for_timeout(3000)
                await ss(page, "fix6_06_rejected_detail_top")
                fix6["screens"]["rejected_detail_top"] = await get_el(page)
                print(f"  Rejected detail: {page.url}")

                await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                await page.wait_for_timeout(800)
                await ss(page, "fix6_07_rejected_detail_end")
                fix6["screens"]["rejected_detail_end"] = await get_el(page)

        report["fixes"]["fix6_done_rejected"] = fix6
        await context.close()

        await browser.close()

    with open(REPORT_PATH, "w") as f:
        json.dump(report, f, indent=2, default=str)

    print(f"\nAll fixes complete. Report: {REPORT_PATH}")


if __name__ == "__main__":
    asyncio.run(main())
