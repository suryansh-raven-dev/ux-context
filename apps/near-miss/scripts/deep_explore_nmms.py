"""
NMMS Deep Exploration Script
Phase 2: Clicks into report details, tests chat, explores filters/exports, settings, help.
"""

import asyncio
import json
import os
import sys
from datetime import datetime
from playwright.async_api import async_playwright

BASE_URL = "https://nmms.staging.startraven.com"
SCREENSHOT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "screenshots", "deep-exploration")
REPORT_PATH = os.path.join(SCREENSHOT_DIR, "deep_exploration_report.json")

ROLES = [
    {"label": "admin", "select_text": "Admin"},
    {"label": "operator", "select_text": "Operator - PP"},
    {"label": "safety-manager", "select_text": "Safety Manager"},
    {"label": "hod-pp", "select_text": "Head of Department - PP"},
    {"label": "hos-pp", "select_text": "Head of Section - PP"},
    {"label": "hsef", "select_text": "HSEF Ambassador - PP"},
]

os.makedirs(SCREENSHOT_DIR, exist_ok=True)
report = {"generated_at": datetime.now().isoformat(), "base_url": BASE_URL, "roles": {}}


async def ss(page, name, role_label):
    path = os.path.join(SCREENSHOT_DIR, f"{role_label}_{name}.png")
    await page.screenshot(path=path, full_page=True)
    return path


async def get_all_text_and_elements(page):
    """Comprehensive page element extraction."""
    info = {"url": page.url, "title": await page.title()}
    try:
        info["visible_text"] = await page.evaluate("""() => {
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
            const texts = [];
            let node;
            while (node = walker.nextNode()) {
                const t = node.textContent.trim();
                if (t && t.length > 1 && t.length < 300 && node.parentElement.offsetParent !== null) texts.push(t);
            }
            return [...new Set(texts)].slice(0, 200);
        }""")
    except:
        info["visible_text"] = []
    try:
        info["buttons"] = await page.evaluate("""() =>
            Array.from(document.querySelectorAll('button, [role="button"]'))
                .filter(e => e.offsetParent !== null)
                .map(e => ({text: e.innerText.trim().substring(0,120), disabled: e.disabled || false, classes: e.className.substring(0,100)}))
                .filter(e => e.text.length > 0)
        """)
    except:
        info["buttons"] = []
    try:
        info["inputs"] = await page.evaluate("""() =>
            Array.from(document.querySelectorAll('input, textarea, select'))
                .filter(e => e.offsetParent !== null)
                .map(e => ({type: e.type||e.tagName.toLowerCase(), placeholder: e.placeholder||'', name: e.name||'', label: (e.labels && e.labels[0]) ? e.labels[0].innerText.trim() : (e.getAttribute('aria-label')||'')}))
        """)
    except:
        info["inputs"] = []
    try:
        info["tabs"] = await page.evaluate("""() =>
            Array.from(document.querySelectorAll('[role="tab"], .MuiTab-root'))
                .filter(e => e.offsetParent !== null)
                .map(e => ({text: e.innerText.trim(), selected: e.getAttribute('aria-selected')==='true'||e.classList.contains('Mui-selected')}))
        """)
    except:
        info["tabs"] = []
    try:
        info["links"] = await page.evaluate("""() =>
            Array.from(document.querySelectorAll('a[href]'))
                .filter(e => e.offsetParent !== null && e.innerText.trim().length > 0)
                .map(e => ({text: e.innerText.trim().substring(0,100), href: e.href}))
                .slice(0, 60)
        """)
    except:
        info["links"] = []
    try:
        info["headings"] = await page.evaluate("""() =>
            Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'))
                .filter(e => e.offsetParent !== null)
                .map(e => ({tag: e.tagName, text: e.innerText.trim().substring(0,200)}))
                .filter(e => e.text.length > 0).slice(0,30)
        """)
    except:
        info["headings"] = []
    try:
        info["selects_dropdowns"] = await page.evaluate("""() =>
            Array.from(document.querySelectorAll('select, [role="combobox"], [role="listbox"], .MuiSelect-root'))
                .filter(e => e.offsetParent !== null)
                .map(e => ({text: e.innerText.trim().substring(0,100), tag: e.tagName, role: e.getAttribute('role')||''}))
        """)
    except:
        info["selects_dropdowns"] = []
    try:
        info["chips_badges"] = await page.evaluate("""() =>
            Array.from(document.querySelectorAll('.MuiChip-root, [class*="badge"], [class*="Badge"], [class*="chip"], [class*="Chip"], [class*="tag"], [class*="Tag"]'))
                .filter(e => e.offsetParent !== null)
                .map(e => e.innerText.trim().substring(0,80))
                .filter(t => t.length > 0)
        """)
    except:
        info["chips_badges"] = []
    return info


async def login_as_role(page, role):
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
    if "/reports" in page.url:
        return True
    return False


async def explore_report_detail(page, role_label, sc):
    """Click into the first report and capture the detail page."""
    results = {"screens": {}, "errors": []}

    try:
        # Click the first report row (the chevron > on the right)
        first_row = await page.query_selector("table tbody tr")
        if not first_row:
            first_row = await page.query_selector("tr:has(td)")
        if first_row:
            await first_row.click()
            await page.wait_for_timeout(3000)
            sc += 1
            await ss(page, f"{sc:02d}_report_detail_top", role_label)
            detail_info = await get_all_text_and_elements(page)
            results["screens"]["report_detail_top"] = detail_info
            print(f"    Report detail URL: {page.url}")

            # Scroll down to see more of the page
            await page.evaluate("window.scrollBy(0, 800)")
            await page.wait_for_timeout(1000)
            sc += 1
            await ss(page, f"{sc:02d}_report_detail_mid", role_label)
            mid_info = await get_all_text_and_elements(page)
            results["screens"]["report_detail_mid"] = mid_info

            await page.evaluate("window.scrollBy(0, 800)")
            await page.wait_for_timeout(1000)
            sc += 1
            await ss(page, f"{sc:02d}_report_detail_bottom", role_label)
            bottom_info = await get_all_text_and_elements(page)
            results["screens"]["report_detail_bottom"] = bottom_info

            # Scroll fully down
            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await page.wait_for_timeout(1000)
            sc += 1
            await ss(page, f"{sc:02d}_report_detail_end", role_label)
            end_info = await get_all_text_and_elements(page)
            results["screens"]["report_detail_end"] = end_info

        else:
            results["errors"].append("No report rows found to click")

    except Exception as e:
        results["errors"].append(f"Report detail error: {e}")

    return results, sc


async def explore_done_report_detail(page, role_label, sc):
    """Click 'Done' tab and open a done report."""
    results = {"screens": {}, "errors": []}
    try:
        # Click Done tab
        done_tab = await page.query_selector("div:has-text('Done')")
        if not done_tab:
            done_tab = await page.get_by_text("Done", exact=False).first
        if done_tab:
            await done_tab.click()
            await page.wait_for_timeout(3000)
            sc += 1
            await ss(page, f"{sc:02d}_done_reports_list", role_label)
            results["screens"]["done_reports_list"] = await get_all_text_and_elements(page)

            # Click first done report
            first_row = await page.query_selector("table tbody tr")
            if first_row:
                await first_row.click()
                await page.wait_for_timeout(3000)
                sc += 1
                await ss(page, f"{sc:02d}_done_report_detail", role_label)
                results["screens"]["done_report_detail"] = await get_all_text_and_elements(page)

                await page.evaluate("window.scrollBy(0, 800)")
                await page.wait_for_timeout(1000)
                sc += 1
                await ss(page, f"{sc:02d}_done_report_detail_mid", role_label)
                results["screens"]["done_report_detail_mid"] = await get_all_text_and_elements(page)

                await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                await page.wait_for_timeout(1000)
                sc += 1
                await ss(page, f"{sc:02d}_done_report_detail_end", role_label)
                results["screens"]["done_report_detail_end"] = await get_all_text_and_elements(page)
    except Exception as e:
        results["errors"].append(f"Done report detail: {e}")
    return results, sc


async def explore_rejected_report_detail(page, role_label, sc):
    """Click 'Rejected' tab and open a rejected report."""
    results = {"screens": {}, "errors": []}
    try:
        await page.goto(f"{BASE_URL}/reports?status=rejected", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(2000)
        sc += 1
        await ss(page, f"{sc:02d}_rejected_reports_list", role_label)
        results["screens"]["rejected_list"] = await get_all_text_and_elements(page)

        first_row = await page.query_selector("table tbody tr")
        if first_row:
            await first_row.click()
            await page.wait_for_timeout(3000)
            sc += 1
            await ss(page, f"{sc:02d}_rejected_report_detail", role_label)
            results["screens"]["rejected_detail"] = await get_all_text_and_elements(page)

            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await page.wait_for_timeout(1000)
            sc += 1
            await ss(page, f"{sc:02d}_rejected_report_detail_end", role_label)
            results["screens"]["rejected_detail_end"] = await get_all_text_and_elements(page)
    except Exception as e:
        results["errors"].append(f"Rejected report: {e}")
    return results, sc


async def explore_filter(page, role_label, sc):
    """Open the FILTER dialog on reports page."""
    results = {"screens": {}, "errors": []}
    try:
        await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(2000)
        filter_btn = await page.query_selector("button:has-text('FILTER')")
        if filter_btn:
            await filter_btn.click()
            await page.wait_for_timeout(2000)
            sc += 1
            await ss(page, f"{sc:02d}_filter_dialog", role_label)
            results["screens"]["filter_dialog"] = await get_all_text_and_elements(page)
            print(f"    Filter dialog captured")

            # Close the filter
            await page.keyboard.press("Escape")
            await page.wait_for_timeout(500)
    except Exception as e:
        results["errors"].append(f"Filter: {e}")
    return results, sc


async def explore_export(page, role_label, sc):
    """Click the EXPORT button on reports page."""
    results = {"screens": {}, "errors": []}
    try:
        export_btn = await page.query_selector("button:has-text('EXPORT')")
        if export_btn:
            await export_btn.click()
            await page.wait_for_timeout(2000)
            sc += 1
            await ss(page, f"{sc:02d}_export_menu", role_label)
            results["screens"]["export_menu"] = await get_all_text_and_elements(page)
            print(f"    Export menu captured")
            await page.keyboard.press("Escape")
            await page.wait_for_timeout(500)
    except Exception as e:
        results["errors"].append(f"Export: {e}")
    return results, sc


async def explore_recommendations_detail(page, role_label, sc):
    """Click into a recommendation detail."""
    results = {"screens": {}, "errors": []}
    try:
        await page.goto(f"{BASE_URL}/recommendations", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(2000)

        # Click VIEW ALL RECOMMENDATIONS link
        view_all = await page.query_selector("a:has-text('VIEW ALL RECOMMENDATIONS')")
        if not view_all:
            view_all = await page.query_selector("text=VIEW ALL RECOMMENDATIONS")
        if view_all:
            await view_all.click()
            await page.wait_for_timeout(3000)
            sc += 1
            await ss(page, f"{sc:02d}_recommendation_detail", role_label)
            results["screens"]["recommendation_detail"] = await get_all_text_and_elements(page)
            print(f"    Recommendation detail: {page.url}")

            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await page.wait_for_timeout(1000)
            sc += 1
            await ss(page, f"{sc:02d}_recommendation_detail_end", role_label)
            results["screens"]["recommendation_detail_end"] = await get_all_text_and_elements(page)

            # Try clicking a specific recommendation row
            rec_row = await page.query_selector("table tbody tr")
            if not rec_row:
                rec_row = await page.query_selector("tr:has(td)")
            if rec_row:
                await rec_row.click()
                await page.wait_for_timeout(3000)
                sc += 1
                await ss(page, f"{sc:02d}_single_recommendation", role_label)
                results["screens"]["single_recommendation"] = await get_all_text_and_elements(page)
                print(f"    Single recommendation: {page.url}")

                await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                await page.wait_for_timeout(1000)
                sc += 1
                await ss(page, f"{sc:02d}_single_recommendation_end", role_label)
                results["screens"]["single_recommendation_end"] = await get_all_text_and_elements(page)
        else:
            # Try clicking a recommendation ID directly
            ca_link = await page.query_selector("text=/CA-\\d+/")
            if ca_link:
                await ca_link.click()
                await page.wait_for_timeout(3000)
                sc += 1
                await ss(page, f"{sc:02d}_recommendation_clicked", role_label)
                results["screens"]["recommendation_clicked"] = await get_all_text_and_elements(page)

    except Exception as e:
        results["errors"].append(f"Recommendation detail: {e}")
    return results, sc


async def explore_analysis_deep(page, role_label, sc):
    """Explore analysis tabs and scroll for full chart content."""
    results = {"screens": {}, "errors": []}
    try:
        await page.goto(f"{BASE_URL}/analysis", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(3000)

        # Scroll down to see full charts
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await page.wait_for_timeout(1000)
        sc += 1
        await ss(page, f"{sc:02d}_analysis_bottom", role_label)
        results["screens"]["analysis_bottom"] = await get_all_text_and_elements(page)

        # Click NEAR MISS tab
        nm_tab = await page.query_selector("text=NEAR MISS")
        if nm_tab:
            await nm_tab.click()
            await page.wait_for_timeout(2000)
            sc += 1
            await ss(page, f"{sc:02d}_analysis_near_miss", role_label)
            results["screens"]["analysis_near_miss"] = await get_all_text_and_elements(page)

        # Click UNSAFE CONDITIONS tab
        uc_tab = await page.query_selector("text=UNSAFE CONDITIONS")
        if uc_tab:
            await uc_tab.click()
            await page.wait_for_timeout(2000)
            sc += 1
            await ss(page, f"{sc:02d}_analysis_unsafe_cond", role_label)
            results["screens"]["analysis_unsafe_conditions"] = await get_all_text_and_elements(page)

        # Click UNSAFE ACTS tab
        ua_tab = await page.query_selector("text=UNSAFE ACTS")
        if ua_tab:
            await ua_tab.click()
            await page.wait_for_timeout(2000)
            sc += 1
            await ss(page, f"{sc:02d}_analysis_unsafe_acts", role_label)
            results["screens"]["analysis_unsafe_acts"] = await get_all_text_and_elements(page)

        # Try export on analysis
        export_btn = await page.query_selector("button:has-text('EXPORT')")
        if export_btn:
            await export_btn.click()
            await page.wait_for_timeout(1500)
            sc += 1
            await ss(page, f"{sc:02d}_analysis_export", role_label)
            results["screens"]["analysis_export"] = await get_all_text_and_elements(page)
            await page.keyboard.press("Escape")
            await page.wait_for_timeout(500)

        # Try department filter
        dept_dropdown = await page.query_selector("text=All Departments")
        if dept_dropdown:
            await dept_dropdown.click()
            await page.wait_for_timeout(1500)
            sc += 1
            await ss(page, f"{sc:02d}_analysis_dept_filter", role_label)
            results["screens"]["analysis_dept_filter"] = await get_all_text_and_elements(page)
            await page.keyboard.press("Escape")
            await page.wait_for_timeout(500)

    except Exception as e:
        results["errors"].append(f"Analysis deep: {e}")
    return results, sc


async def explore_settings_help(page, role_label, sc):
    """Try to access Settings and Help & Support."""
    results = {"screens": {}, "errors": []}
    try:
        # Click Settings in sidebar
        settings_link = await page.query_selector("text=Settings")
        if settings_link:
            await settings_link.click()
            await page.wait_for_timeout(3000)
            sc += 1
            await ss(page, f"{sc:02d}_settings", role_label)
            results["screens"]["settings"] = await get_all_text_and_elements(page)
            print(f"    Settings: {page.url}")

            # Scroll for more
            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await page.wait_for_timeout(1000)
            sc += 1
            await ss(page, f"{sc:02d}_settings_bottom", role_label)
            results["screens"]["settings_bottom"] = await get_all_text_and_elements(page)

    except Exception as e:
        results["errors"].append(f"Settings: {e}")

    try:
        # Click Help and Support
        help_link = await page.query_selector("text=Help and Support")
        if help_link:
            await help_link.click()
            await page.wait_for_timeout(3000)
            sc += 1
            await ss(page, f"{sc:02d}_help_support", role_label)
            results["screens"]["help_support"] = await get_all_text_and_elements(page)
            print(f"    Help & Support: {page.url}")

            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await page.wait_for_timeout(1000)
            sc += 1
            await ss(page, f"{sc:02d}_help_support_bottom", role_label)
            results["screens"]["help_support_bottom"] = await get_all_text_and_elements(page)

    except Exception as e:
        results["errors"].append(f"Help: {e}")

    return results, sc


async def explore_chat_flow(page, role_label, sc):
    """Explore the Report Incident chat interface in detail."""
    results = {"screens": {}, "errors": []}
    try:
        await page.goto(f"{BASE_URL}/new-report", wait_until="networkidle", timeout=20000)
        await page.wait_for_timeout(3000)
        sc += 1
        await ss(page, f"{sc:02d}_chat_initial", role_label)
        results["screens"]["chat_initial"] = await get_all_text_and_elements(page)

        # Check for iframe
        frames = page.frames
        iframe_info = []
        for f in frames:
            iframe_info.append({"url": f.url, "name": f.name})
        results["iframes"] = iframe_info
        print(f"    Iframes found: {len(frames)}")

        # Try to interact with the chat iframe
        if len(frames) > 1:
            chat_frame = frames[1]  # First non-main frame
            try:
                # Look for input in iframe
                iframe_input = await chat_frame.query_selector("input")
                if iframe_input:
                    await iframe_input.fill("test-operator-001")
                    await page.wait_for_timeout(1000)
                    sc += 1
                    await ss(page, f"{sc:02d}_chat_id_entered", role_label)

                    # Click NEXT in iframe
                    next_btn = await chat_frame.query_selector("button:has-text('NEXT')")
                    if not next_btn:
                        next_btn = await chat_frame.query_selector("button")
                    if next_btn:
                        await next_btn.click()
                        await page.wait_for_timeout(5000)
                        sc += 1
                        await ss(page, f"{sc:02d}_chat_after_next", role_label)
                        results["screens"]["chat_after_next"] = await get_all_text_and_elements(page)

                        # Check what appeared - password field? chat messages?
                        await page.wait_for_timeout(3000)
                        sc += 1
                        await ss(page, f"{sc:02d}_chat_state", role_label)

                        # Try to get iframe content
                        iframe_elements = await chat_frame.evaluate("""() => {
                            const texts = [];
                            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
                            let node;
                            while (node = walker.nextNode()) {
                                const t = node.textContent.trim();
                                if (t && t.length > 1 && t.length < 300) texts.push(t);
                            }
                            const buttons = Array.from(document.querySelectorAll('button')).map(e => e.innerText.trim()).filter(t => t);
                            const inputs = Array.from(document.querySelectorAll('input, textarea')).map(e => ({type: e.type, placeholder: e.placeholder}));
                            return {texts: [...new Set(texts)].slice(0,50), buttons, inputs};
                        }""")
                        results["screens"]["chat_iframe_content"] = iframe_elements
                        print(f"    Chat iframe content: {json.dumps(iframe_elements, indent=2)[:500]}")

            except Exception as e:
                results["errors"].append(f"Chat iframe interaction: {e}")
                print(f"    Chat iframe error: {e}")

    except Exception as e:
        results["errors"].append(f"Chat flow: {e}")
    return results, sc


async def explore_draft_report(page, role_label, sc):
    """Check the Draft tab for draft reports."""
    results = {"screens": {}, "errors": []}
    try:
        await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(2000)

        draft_tab = await page.get_by_text("Draft", exact=False).first
        if draft_tab:
            await draft_tab.click()
            await page.wait_for_timeout(3000)
            sc += 1
            await ss(page, f"{sc:02d}_draft_list", role_label)
            results["screens"]["draft_list"] = await get_all_text_and_elements(page)
            print(f"    Draft list: {page.url}")

            # Click into first draft
            first_row = await page.query_selector("table tbody tr")
            if first_row:
                await first_row.click()
                await page.wait_for_timeout(3000)
                sc += 1
                await ss(page, f"{sc:02d}_draft_detail", role_label)
                results["screens"]["draft_detail"] = await get_all_text_and_elements(page)
                print(f"    Draft detail: {page.url}")

                await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                await page.wait_for_timeout(1000)
                sc += 1
                await ss(page, f"{sc:02d}_draft_detail_end", role_label)
    except Exception as e:
        results["errors"].append(f"Draft: {e}")
    return results, sc


async def explore_role_deep(browser, role):
    """Deep exploration for a single role."""
    context = await browser.new_context(viewport={"width": 1440, "height": 900})
    page = await context.new_page()
    rl = role["label"]
    role_report = {"screens": {}, "errors": []}
    sc = 0

    print(f"\n{'='*60}")
    print(f"  DEEP EXPLORATION: {rl} ({role['select_text']})")
    print(f"{'='*60}")

    # Login
    logged_in = await login_as_role(page, role)
    if not logged_in:
        role_report["errors"].append("Login failed")
        await context.close()
        return role_report

    print(f"  Logged in as {rl}: {page.url}")

    # 1. Click into an active report detail
    print(f"\n  --- Active Report Detail ---")
    await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
    await page.wait_for_timeout(2000)
    detail_results, sc = await explore_report_detail(page, rl, sc)
    role_report["screens"].update(detail_results.get("screens", {}))
    role_report["errors"].extend(detail_results.get("errors", []))

    # 2. Click into a done report
    print(f"\n  --- Done Report Detail ---")
    await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
    await page.wait_for_timeout(2000)
    done_results, sc = await explore_done_report_detail(page, rl, sc)
    role_report["screens"].update(done_results.get("screens", {}))
    role_report["errors"].extend(done_results.get("errors", []))

    # 3. Click into a rejected report
    print(f"\n  --- Rejected Report Detail ---")
    rej_results, sc = await explore_rejected_report_detail(page, rl, sc)
    role_report["screens"].update(rej_results.get("screens", {}))
    role_report["errors"].extend(rej_results.get("errors", []))

    # 4. Draft reports
    print(f"\n  --- Draft Reports ---")
    draft_results, sc = await explore_draft_report(page, rl, sc)
    role_report["screens"].update(draft_results.get("screens", {}))
    role_report["errors"].extend(draft_results.get("errors", []))

    # 5. Filter on reports
    print(f"\n  --- Filter Dialog ---")
    filter_results, sc = await explore_filter(page, rl, sc)
    role_report["screens"].update(filter_results.get("screens", {}))
    role_report["errors"].extend(filter_results.get("errors", []))

    # 6. Export on reports
    print(f"\n  --- Export ---")
    export_results, sc = await explore_export(page, rl, sc)
    role_report["screens"].update(export_results.get("screens", {}))
    role_report["errors"].extend(export_results.get("errors", []))

    # 7. Recommendation detail
    print(f"\n  --- Recommendation Detail ---")
    rec_results, sc = await explore_recommendations_detail(page, rl, sc)
    role_report["screens"].update(rec_results.get("screens", {}))
    role_report["errors"].extend(rec_results.get("errors", []))

    # 8. Analysis deep dive
    print(f"\n  --- Analysis Deep ---")
    analysis_results, sc = await explore_analysis_deep(page, rl, sc)
    role_report["screens"].update(analysis_results.get("screens", {}))
    role_report["errors"].extend(analysis_results.get("errors", []))

    # 9. Settings and Help (only for admin)
    if rl == "admin":
        print(f"\n  --- Settings & Help ---")
        sh_results, sc = await explore_settings_help(page, rl, sc)
        role_report["screens"].update(sh_results.get("screens", {}))
        role_report["errors"].extend(sh_results.get("errors", []))

    # 10. Chat flow (only for operator and admin)
    if rl in ["operator", "admin"]:
        print(f"\n  --- Chat Flow ---")
        chat_results, sc = await explore_chat_flow(page, rl, sc)
        role_report["screens"].update(chat_results.get("screens", {}))
        role_report["errors"].extend(chat_results.get("errors", []))
        if "iframes" in chat_results:
            role_report["chat_iframes"] = chat_results["iframes"]

    print(f"\n  Total screenshots for {rl}: {sc}")
    await context.close()
    return role_report


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        print(f"Deep exploring {BASE_URL}")
        print(f"Screenshots: {SCREENSHOT_DIR}\n")

        for role in ROLES:
            try:
                data = await explore_role_deep(browser, role)
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
    print(f"DEEP EXPLORATION SUMMARY")
    print(f"{'='*60}")
    for rl, data in report["roles"].items():
        screens = list(data.get("screens", {}).keys()) if isinstance(data, dict) else []
        errors = data.get("errors", []) if isinstance(data, dict) else []
        print(f"\n{rl}:")
        print(f"  Screens: {len(screens)} -> {screens}")
        if errors:
            print(f"  Errors ({len(errors)}):")
            for e in errors[:5]:
                print(f"    - {str(e)[:100]}")

    print(f"\nReport: {REPORT_PATH}")


if __name__ == "__main__":
    asyncio.run(main())
