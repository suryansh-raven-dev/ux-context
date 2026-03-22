"""
NMMS Remaining Flows Exploration
Flow 1: Full AI chat conversation
Flow 2: HoD/HoS/HSEF actions on 'Approved by Safety' reports
Flow 3: Change Password + Dark Mode
Flow 4: Individual investigation details
Flow 5: Manage Users external link
Flow 6: Done and Rejected report detail views
"""

import asyncio
import json
import os
import sys
from datetime import datetime
from playwright.async_api import async_playwright

BASE_URL = "https://nmms.staging.startraven.com"
SCREENSHOT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "screenshots", "remaining-flows")
REPORT_PATH = os.path.join(SCREENSHOT_DIR, "remaining_flows_report.json")

os.makedirs(SCREENSHOT_DIR, exist_ok=True)
report = {"generated_at": datetime.now().isoformat(), "flows": {}}


async def ss(page, name):
    path = os.path.join(SCREENSHOT_DIR, f"{name}.png")
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
                .map(e => ({text: e.innerText.trim().substring(0,120), disabled: e.disabled||false}))
                .filter(e => e.text.length > 0)
        """)
    except:
        info["buttons"] = []
    try:
        info["inputs"] = await page.evaluate("""() =>
            Array.from(document.querySelectorAll('input, textarea, select'))
                .filter(e => e.offsetParent !== null)
                .map(e => ({type: e.type||e.tagName.toLowerCase(), placeholder: e.placeholder||'', name: e.name||'', value: e.value?e.value.substring(0,80):''}))
        """)
    except:
        info["inputs"] = []
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
        info["links"] = await page.evaluate("""() =>
            Array.from(document.querySelectorAll('a[href]'))
                .filter(e => e.offsetParent !== null && e.innerText.trim().length > 0)
                .map(e => ({text: e.innerText.trim().substring(0,100), href: e.href}))
                .slice(0, 50)
        """)
    except:
        info["links"] = []
    return info


async def login_as(page, role_text):
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


# ─── FLOW 1: Full AI Chat Conversation ───────────────────────────────────────

async def flow1_chat(browser):
    print("\n" + "="*60)
    print("  FLOW 1: Full AI Chat Conversation (Operator)")
    print("="*60)
    flow = {"screens": {}, "errors": [], "chat_messages": []}

    context = await browser.new_context(viewport={"width": 1440, "height": 900})
    page = await context.new_page()

    ok = await login_as(page, "Operator - PP")
    if not ok:
        flow["errors"].append("Login failed")
        await context.close()
        return flow

    # Navigate to Report Incident
    await page.goto(f"{BASE_URL}/new-report", wait_until="networkidle", timeout=20000)
    await page.wait_for_timeout(4000)
    await ss(page, "flow1_01_chat_initial")
    flow["screens"]["chat_initial"] = await get_elements(page)
    print(f"  Chat page: {page.url}")

    # Check if we have the native chat or iframe
    frames = page.frames
    print(f"  Frames: {len(frames)}")

    # Try to find and use the native chat input
    chat_input = await page.query_selector("textarea, input[placeholder*='tell us'], input[placeholder*='happened']")
    if chat_input:
        print("  Found native chat input")
        # Type the incident description
        await chat_input.fill("A forklift nearly hit a worker near the warehouse loading area. The forklift was speeding and the worker had to jump out of the way.")
        await page.wait_for_timeout(1000)
        await ss(page, "flow1_02_message_typed")
        flow["screens"]["message_typed"] = await get_elements(page)

        # Find and click send button
        send_btn = await page.query_selector("button[type='submit'], button:has(svg), button[aria-label*='send'], button[aria-label*='Send']")
        if not send_btn:
            # Try pressing Enter
            await chat_input.press("Enter")
            print("  Pressed Enter to send")
        else:
            await send_btn.click()
            print("  Clicked send button")

        # Wait for AI response
        await page.wait_for_timeout(8000)
        await ss(page, "flow1_03_first_response")
        flow["screens"]["first_response"] = await get_elements(page)
        print(f"  After first message: {page.url}")

        # Check for chat messages
        try:
            messages = await page.evaluate("""() => {
                const msgs = document.querySelectorAll('[class*="message"], [class*="Message"], [class*="chat"], [class*="Chat"], [class*="bubble"], [class*="Bubble"]');
                return Array.from(msgs).map(m => m.innerText.trim().substring(0, 300)).filter(t => t.length > 5).slice(0, 20);
            }""")
            flow["chat_messages"] = messages
            print(f"  Chat messages found: {len(messages)}")
            for m in messages[:5]:
                print(f"    - {m[:100]}")
        except:
            pass

        # Wait longer for more response
        await page.wait_for_timeout(5000)
        await ss(page, "flow1_04_response_continued")
        flow["screens"]["response_continued"] = await get_elements(page)

        # Look for buttons in the chat (options like incident type selection)
        try:
            chat_buttons = await page.evaluate("""() => {
                return Array.from(document.querySelectorAll('button, [role="button"]'))
                    .filter(e => e.offsetParent !== null)
                    .map(e => ({text: e.innerText.trim(), tag: e.tagName}))
                    .filter(e => e.text.length > 0 && e.text.length < 100);
            }""")
            flow["screens"]["chat_buttons"] = chat_buttons
            print(f"  Buttons visible: {[b['text'] for b in chat_buttons]}")

            # If there are chat option buttons, click the first one
            for btn_info in chat_buttons:
                btn_text = btn_info["text"]
                if any(kw in btn_text.lower() for kw in ["near miss", "unsafe", "yes", "confirm", "next", "submit"]):
                    try:
                        btn = await page.get_by_text(btn_text, exact=True).first
                        await btn.click()
                        print(f"  Clicked: {btn_text}")
                        await page.wait_for_timeout(5000)
                        await ss(page, "flow1_05_after_button_click")
                        flow["screens"]["after_button_click"] = await get_elements(page)
                        break
                    except:
                        pass
        except:
            pass

        # Continue interaction - scroll and capture
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await page.wait_for_timeout(2000)
        await ss(page, "flow1_06_chat_scrolled")
        flow["screens"]["chat_scrolled"] = await get_elements(page)

    else:
        # Try iframe approach
        print("  No native chat input found, checking iframes")
        if len(frames) > 1:
            chat_frame = frames[1]
            try:
                iframe_input = await chat_frame.query_selector("input, textarea")
                if iframe_input:
                    print("  Found iframe input")
                    await iframe_input.fill("NM-operator-001")
                    await page.wait_for_timeout(1000)
                    next_btn = await chat_frame.query_selector("button")
                    if next_btn:
                        await next_btn.click()
                        await page.wait_for_timeout(5000)
                        await ss(page, "flow1_02_iframe_after_id")
                        flow["screens"]["iframe_after_id"] = await get_elements(page)

                        # Look for password or chat
                        pwd_input = await chat_frame.query_selector("input[type='password']")
                        if pwd_input:
                            await pwd_input.fill("RavenTesting@123")
                            await page.wait_for_timeout(500)
                            login_btn = await chat_frame.query_selector("button")
                            if login_btn:
                                await login_btn.click()
                                await page.wait_for_timeout(8000)
                                await ss(page, "flow1_03_iframe_logged_in")
                                flow["screens"]["iframe_logged_in"] = await get_elements(page)

                                # Capture iframe content
                                try:
                                    iframe_content = await chat_frame.evaluate("""() => {
                                        const t = []; const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false); let n;
                                        while (n = w.nextNode()) { const s = n.textContent.trim(); if (s && s.length > 1) t.push(s); }
                                        const btns = Array.from(document.querySelectorAll('button')).map(e => e.innerText.trim()).filter(t => t);
                                        const inputs = Array.from(document.querySelectorAll('input, textarea')).map(e => ({type: e.type, ph: e.placeholder}));
                                        return {texts: [...new Set(t)].slice(0,50), buttons: btns, inputs};
                                    }""")
                                    flow["screens"]["iframe_content_after_login"] = iframe_content
                                    print(f"  Iframe content: {json.dumps(iframe_content)[:300]}")

                                    # Try to type in chat
                                    chat_textarea = await chat_frame.query_selector("textarea, input[type='text']")
                                    if chat_textarea:
                                        await chat_textarea.fill("A forklift nearly hit a worker near the warehouse")
                                        await page.wait_for_timeout(1000)
                                        send = await chat_frame.query_selector("button[type='submit'], button:last-of-type")
                                        if send:
                                            await send.click()
                                            await page.wait_for_timeout(8000)
                                            await ss(page, "flow1_04_iframe_chat_response")
                                            flow["screens"]["iframe_chat_response"] = await get_elements(page)
                                except Exception as e:
                                    flow["errors"].append(f"Iframe interaction: {e}")
            except Exception as e:
                flow["errors"].append(f"Iframe: {e}")
        else:
            flow["errors"].append("No chat input and no iframe found")

    await context.close()
    return flow


# ─── FLOW 2: HoD actions on 'Approved by Safety' reports ─────────────────────

async def flow2_approved_reports(browser):
    print("\n" + "="*60)
    print("  FLOW 2: HoD/HoS/HSEF on 'Approved by Safety' reports")
    print("="*60)
    flow = {"roles": {}}

    for role_name, role_text in [("hod-pp", "Head of Department - PP"), ("hos-pp", "Head of Section - PP"), ("hsef", "HSEF Ambassador - PP")]:
        print(f"\n  --- {role_name} ---")
        role_data = {"screens": {}, "errors": []}
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()

        ok = await login_as(page, role_text)
        if not ok:
            role_data["errors"].append("Login failed")
            flow["roles"][role_name] = role_data
            await context.close()
            continue

        # Go to reports and look for "Approved by Safety" status
        await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(2000)

        # Try to find a report with "Approved by Safety" status
        try:
            approved_row = await page.query_selector("text=Approved by Safety")
            if approved_row:
                print(f"    Found 'Approved by Safety' report")
                # Click the row
                row = await approved_row.evaluate_handle("el => el.closest('tr')")
                if row:
                    await row.as_element().click()
                    await page.wait_for_timeout(3000)
                    await ss(page, f"flow2_{role_name}_01_approved_detail_top")
                    role_data["screens"]["approved_detail_top"] = await get_elements(page)
                    print(f"    Detail URL: {page.url}")

                    # Scroll to see buttons
                    await page.evaluate("window.scrollBy(0, 500)")
                    await page.wait_for_timeout(1000)
                    await ss(page, f"flow2_{role_name}_02_approved_detail_mid")
                    role_data["screens"]["approved_detail_mid"] = await get_elements(page)

                    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                    await page.wait_for_timeout(1000)
                    await ss(page, f"flow2_{role_name}_03_approved_detail_bottom")
                    role_data["screens"]["approved_detail_bottom"] = await get_elements(page)

                    # Check for action buttons
                    buttons = role_data["screens"]["approved_detail_top"].get("buttons", [])
                    buttons += role_data["screens"].get("approved_detail_mid", {}).get("buttons", [])
                    buttons += role_data["screens"].get("approved_detail_bottom", {}).get("buttons", [])
                    action_buttons = [b for b in buttons if any(kw in b["text"].lower() for kw in ["approve", "reject", "submit", "close", "delete", "accept"])]
                    print(f"    Action buttons: {[b['text'] for b in action_buttons]}")
                    role_data["action_buttons_found"] = [b["text"] for b in action_buttons]
            else:
                print(f"    No 'Approved by Safety' report found, trying to scroll/page")
                role_data["errors"].append("No 'Approved by Safety' report found on first page")

                # Try scrolling the table
                await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                await page.wait_for_timeout(1000)
                approved_row2 = await page.query_selector("text=Approved by Safety")
                if approved_row2:
                    row = await approved_row2.evaluate_handle("el => el.closest('tr')")
                    if row:
                        await row.as_element().click()
                        await page.wait_for_timeout(3000)
                        await ss(page, f"flow2_{role_name}_01_approved_detail_top")
                        role_data["screens"]["approved_detail_top"] = await get_elements(page)
                        print(f"    Detail URL (after scroll): {page.url}")

                        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                        await page.wait_for_timeout(1000)
                        await ss(page, f"flow2_{role_name}_02_approved_detail_bottom")
                        role_data["screens"]["approved_detail_bottom"] = await get_elements(page)
        except Exception as e:
            role_data["errors"].append(f"Approved report: {e}")
            print(f"    Error: {e}")

        flow["roles"][role_name] = role_data
        await context.close()

    return flow


# ─── FLOW 3: Change Password + Dark Mode ─────────────────────────────────────

async def flow3_settings(browser):
    print("\n" + "="*60)
    print("  FLOW 3: Change Password + Dark Mode")
    print("="*60)
    flow = {"screens": {}, "errors": []}

    context = await browser.new_context(viewport={"width": 1440, "height": 900})
    page = await context.new_page()

    ok = await login_as(page, "Admin")
    if not ok:
        flow["errors"].append("Login failed")
        await context.close()
        return flow

    # Navigate to any page first
    await page.goto(f"{BASE_URL}/analysis", wait_until="networkidle", timeout=15000)
    await page.wait_for_timeout(2000)

    # Click Settings
    try:
        settings = await page.query_selector("text=Settings")
        if settings:
            await settings.click()
            await page.wait_for_timeout(2000)
            await ss(page, "flow3_01_settings_menu")
            flow["screens"]["settings_menu"] = await get_elements(page)
            print(f"  Settings menu opened")

            # Click Change Password
            change_pwd = await page.query_selector("text=Change Password")
            if change_pwd:
                await change_pwd.click()
                await page.wait_for_timeout(3000)
                await ss(page, "flow3_02_change_password")
                flow["screens"]["change_password"] = await get_elements(page)
                print(f"  Change Password page: {page.url}")

                # Scroll to see full form
                await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                await page.wait_for_timeout(1000)
                await ss(page, "flow3_03_change_password_bottom")
                flow["screens"]["change_password_bottom"] = await get_elements(page)

                # Go back
                await page.go_back()
                await page.wait_for_timeout(2000)
    except Exception as e:
        flow["errors"].append(f"Change Password: {e}")
        print(f"  Change Password error: {e}")

    # Dark Mode
    try:
        await page.goto(f"{BASE_URL}/analysis", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(2000)

        settings = await page.query_selector("text=Settings")
        if settings:
            await settings.click()
            await page.wait_for_timeout(2000)

            dark_mode = await page.query_selector("text=Switch to Dark Mode")
            if dark_mode:
                await dark_mode.click()
                await page.wait_for_timeout(3000)
                await ss(page, "flow3_04_dark_mode")
                flow["screens"]["dark_mode"] = await get_elements(page)
                print(f"  Dark mode activated")

                # Navigate around in dark mode
                await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
                await page.wait_for_timeout(2000)
                await ss(page, "flow3_05_dark_mode_reports")
                flow["screens"]["dark_mode_reports"] = await get_elements(page)

                await page.goto(f"{BASE_URL}/analysis", wait_until="networkidle", timeout=15000)
                await page.wait_for_timeout(2000)
                await ss(page, "flow3_06_dark_mode_analysis")
                flow["screens"]["dark_mode_analysis"] = await get_elements(page)

                # Switch back to light mode
                settings2 = await page.query_selector("text=Settings")
                if settings2:
                    await settings2.click()
                    await page.wait_for_timeout(1500)
                    light_mode = await page.query_selector("text=Switch to Light Mode")
                    if not light_mode:
                        light_mode = await page.query_selector("text=Switch to Dark Mode")
                    if light_mode:
                        await light_mode.click()
                        await page.wait_for_timeout(2000)
                        await ss(page, "flow3_07_light_mode_restored")
                        flow["screens"]["light_mode_restored"] = await get_elements(page)
    except Exception as e:
        flow["errors"].append(f"Dark Mode: {e}")
        print(f"  Dark Mode error: {e}")

    await context.close()
    return flow


# ─── FLOW 4: Investigation Details ────────────────────────────────────────────

async def flow4_investigation_detail(browser):
    print("\n" + "="*60)
    print("  FLOW 4: Investigation Details")
    print("="*60)
    flow = {"screens": {}, "errors": []}

    context = await browser.new_context(viewport={"width": 1440, "height": 900})
    page = await context.new_page()

    ok = await login_as(page, "Admin")
    if not ok:
        flow["errors"].append("Login failed")
        await context.close()
        return flow

    # Navigate to Investigations
    await page.goto(f"{BASE_URL}/investigations", wait_until="networkidle", timeout=15000)
    await page.wait_for_timeout(3000)
    await ss(page, "flow4_01_investigations_list")
    flow["screens"]["investigations_list"] = await get_elements(page)
    print(f"  Investigations page: {page.url}")

    # Click the first investigation row
    try:
        rows = page.locator("table tbody tr")
        count = await rows.count()
        print(f"  Table rows: {count}")
        if count > 0:
            await rows.nth(0).click()
            await page.wait_for_timeout(3000)
            await ss(page, "flow4_02_investigation_detail_top")
            flow["screens"]["investigation_detail_top"] = await get_elements(page)
            print(f"  Detail URL: {page.url}")

            # Scroll through the detail
            for i, (name, scroll) in enumerate([("mid1", 600), ("mid2", 1200), ("bottom", 1800)]):
                await page.evaluate(f"window.scrollTo(0, {scroll})")
                await page.wait_for_timeout(1000)
                await ss(page, f"flow4_{i+3:02d}_investigation_detail_{name}")
                flow["screens"][f"investigation_detail_{name}"] = await get_elements(page)

            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await page.wait_for_timeout(1000)
            await ss(page, "flow4_06_investigation_detail_end")
            flow["screens"]["investigation_detail_end"] = await get_elements(page)

            # Click the Investigation tab/accordion in sidebar
            try:
                inv_acc = await page.query_selector("text=Investigation")
                if inv_acc:
                    await inv_acc.click()
                    await page.wait_for_timeout(2000)
                    await ss(page, "flow4_07_investigation_accordion")
                    flow["screens"]["investigation_accordion"] = await get_elements(page)
                    print(f"  Investigation accordion expanded")

                    await page.evaluate("window.scrollTo(0, 0)")
                    await page.wait_for_timeout(500)
                    await ss(page, "flow4_08_investigation_accordion_top")
                    flow["screens"]["investigation_accordion_top"] = await get_elements(page)
            except Exception as e:
                flow["errors"].append(f"Investigation accordion: {e}")

            # Click the Recommendations tab/accordion
            try:
                rec_acc = await page.query_selector("text=Recommendations")
                if rec_acc:
                    await rec_acc.click()
                    await page.wait_for_timeout(2000)
                    await ss(page, "flow4_09_recommendations_accordion")
                    flow["screens"]["recommendations_accordion"] = await get_elements(page)
                    print(f"  Recommendations accordion expanded")
            except Exception as e:
                flow["errors"].append(f"Recommendations accordion: {e}")

    except Exception as e:
        flow["errors"].append(f"Investigation detail: {e}")
        print(f"  Error: {e}")

    # Also try UC/UA tab
    try:
        await page.goto(f"{BASE_URL}/investigations", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(2000)
        ucua_tab = await page.query_selector("text=UC/UA INVESTIGATIONS")
        if ucua_tab:
            await ucua_tab.click()
            await page.wait_for_timeout(3000)
            await ss(page, "flow4_10_ucua_investigations")
            flow["screens"]["ucua_investigations"] = await get_elements(page)
            print(f"  UC/UA Investigations captured")

            # Click first UC/UA investigation
            rows = page.locator("table tbody tr")
            count = await rows.count()
            if count > 0:
                await rows.nth(0).click()
                await page.wait_for_timeout(3000)
                await ss(page, "flow4_11_ucua_investigation_detail")
                flow["screens"]["ucua_investigation_detail"] = await get_elements(page)
                print(f"  UC/UA detail: {page.url}")

                await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                await page.wait_for_timeout(1000)
                await ss(page, "flow4_12_ucua_investigation_detail_end")
                flow["screens"]["ucua_investigation_detail_end"] = await get_elements(page)
    except Exception as e:
        flow["errors"].append(f"UC/UA investigations: {e}")

    await context.close()
    return flow


# ─── FLOW 5: Manage Users ────────────────────────────────────────────────────

async def flow5_manage_users(browser):
    print("\n" + "="*60)
    print("  FLOW 5: Manage Users")
    print("="*60)
    flow = {"screens": {}, "errors": []}

    context = await browser.new_context(viewport={"width": 1440, "height": 900})
    page = await context.new_page()

    ok = await login_as(page, "Admin")
    if not ok:
        flow["errors"].append("Login failed")
        await context.close()
        return flow

    await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
    await page.wait_for_timeout(2000)

    # Open Settings and click Manage Users
    try:
        settings = await page.query_selector("text=Settings")
        if settings:
            await settings.click()
            await page.wait_for_timeout(1500)

            # Listen for new page (popup)
            async with context.expect_page(timeout=10000) as new_page_info:
                manage = await page.query_selector("text=Manage Users")
                if manage:
                    await manage.click()

            new_page = await new_page_info.value
            await new_page.wait_for_load_state("networkidle", timeout=15000)
            await new_page.wait_for_timeout(3000)

            await new_page.screenshot(path=os.path.join(SCREENSHOT_DIR, "flow5_01_manage_users.png"), full_page=True)
            flow["screens"]["manage_users"] = {"url": new_page.url, "title": await new_page.title()}
            print(f"  Manage Users URL: {new_page.url}")
            print(f"  Manage Users title: {await new_page.title()}")

            # Get elements on the manage users page
            try:
                flow["screens"]["manage_users_elements"] = await get_elements(new_page) if "url" in dir(new_page) else {}
                # Actually just use the function directly
                mu_info = {"url": new_page.url, "title": await new_page.title()}
                try:
                    mu_info["all_text"] = await new_page.evaluate("""() => {
                        const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
                        const t = []; let n;
                        while (n = w.nextNode()) { const s = n.textContent.trim(); if (s && s.length > 1 && s.length < 300 && n.parentElement.offsetParent !== null) t.push(s); }
                        return [...new Set(t)].slice(0, 200);
                    }""")
                except:
                    mu_info["all_text"] = []
                try:
                    mu_info["buttons"] = await new_page.evaluate("""() =>
                        Array.from(document.querySelectorAll('button, [role="button"]'))
                            .filter(e => e.offsetParent !== null)
                            .map(e => ({text: e.innerText.trim().substring(0,120), disabled: e.disabled||false}))
                            .filter(e => e.text.length > 0)
                    """)
                except:
                    mu_info["buttons"] = []
                try:
                    mu_info["inputs"] = await new_page.evaluate("""() =>
                        Array.from(document.querySelectorAll('input, textarea, select'))
                            .filter(e => e.offsetParent !== null)
                            .map(e => ({type: e.type||e.tagName.toLowerCase(), placeholder: e.placeholder||''}))
                    """)
                except:
                    mu_info["inputs"] = []
                flow["screens"]["manage_users_elements"] = mu_info
            except Exception as e:
                flow["errors"].append(f"Manage Users elements: {e}")

            # Scroll the manage users page
            await new_page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await new_page.wait_for_timeout(1000)
            await new_page.screenshot(path=os.path.join(SCREENSHOT_DIR, "flow5_02_manage_users_bottom.png"), full_page=True)

            await new_page.close()

    except Exception as e:
        flow["errors"].append(f"Manage Users: {e}")
        print(f"  Error: {e}")
        # Try direct URL approach
        try:
            await page.goto(f"{BASE_URL}/admin/users", wait_until="networkidle", timeout=10000)
            await page.wait_for_timeout(2000)
            if "/login" not in page.url:
                await ss(page, "flow5_01_manage_users_direct")
                flow["screens"]["manage_users_direct"] = await get_elements(page)
                print(f"  Direct URL: {page.url}")
        except:
            pass

    await context.close()
    return flow


# ─── FLOW 6: Done + Rejected Report Details ──────────────────────────────────

async def flow6_done_rejected(browser):
    print("\n" + "="*60)
    print("  FLOW 6: Done + Rejected Report Details")
    print("="*60)
    flow = {"screens": {}, "errors": []}

    for role_name, role_text in [("admin", "Admin"), ("safety-manager", "Safety Manager"), ("hod-pp", "Head of Department - PP")]:
        print(f"\n  --- {role_name} ---")
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()

        ok = await login_as(page, role_text)
        if not ok:
            flow["errors"].append(f"{role_name}: Login failed")
            await context.close()
            continue

        # === DONE REPORTS ===
        print(f"    Checking Done reports...")
        await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(2000)

        # Click Done tab using locator
        try:
            done_tabs = page.locator("text=/Done \\(\\d+\\)/")
            if await done_tabs.count() > 0:
                await done_tabs.first.click()
                await page.wait_for_timeout(3000)
                await ss(page, f"flow6_{role_name}_01_done_list")
                flow["screens"][f"{role_name}_done_list"] = await get_elements(page)
                print(f"    Done list URL: {page.url}")

                # Click first done report
                rows = page.locator("table tbody tr")
                if await rows.count() > 0:
                    await rows.nth(0).click()
                    await page.wait_for_timeout(3000)
                    await ss(page, f"flow6_{role_name}_02_done_detail_top")
                    flow["screens"][f"{role_name}_done_detail_top"] = await get_elements(page)
                    print(f"    Done detail: {page.url}")

                    await page.evaluate("window.scrollBy(0, 600)")
                    await page.wait_for_timeout(1000)
                    await ss(page, f"flow6_{role_name}_03_done_detail_mid")
                    flow["screens"][f"{role_name}_done_detail_mid"] = await get_elements(page)

                    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                    await page.wait_for_timeout(1000)
                    await ss(page, f"flow6_{role_name}_04_done_detail_bottom")
                    flow["screens"][f"{role_name}_done_detail_bottom"] = await get_elements(page)

                    # Check sidebar
                    try:
                        inv_acc = await page.query_selector("text=Investigation")
                        if inv_acc:
                            await inv_acc.click()
                            await page.wait_for_timeout(1500)
                            await ss(page, f"flow6_{role_name}_05_done_investigation")
                            flow["screens"][f"{role_name}_done_investigation"] = await get_elements(page)

                        rec_acc = await page.query_selector("text=Recommendations")
                        if rec_acc:
                            await rec_acc.click()
                            await page.wait_for_timeout(1500)
                            await ss(page, f"flow6_{role_name}_06_done_recommendations")
                            flow["screens"][f"{role_name}_done_recommendations"] = await get_elements(page)
                    except:
                        pass
                else:
                    flow["errors"].append(f"{role_name}: No done report rows")
            else:
                flow["errors"].append(f"{role_name}: Done tab not found")
        except Exception as e:
            flow["errors"].append(f"{role_name} Done: {e}")
            print(f"    Done error: {e}")

        # === REJECTED REPORTS ===
        print(f"    Checking Rejected reports...")
        try:
            await page.goto(f"{BASE_URL}/reports?status=active", wait_until="networkidle", timeout=15000)
            await page.wait_for_timeout(2000)

            rej_tabs = page.locator("text=/Rejected \\(\\d+\\)/")
            if await rej_tabs.count() > 0:
                await rej_tabs.first.click()
                await page.wait_for_timeout(3000)
                await ss(page, f"flow6_{role_name}_07_rejected_list")
                flow["screens"][f"{role_name}_rejected_list"] = await get_elements(page)

                rows = page.locator("table tbody tr")
                if await rows.count() > 0:
                    await rows.nth(0).click()
                    await page.wait_for_timeout(3000)
                    await ss(page, f"flow6_{role_name}_08_rejected_detail_top")
                    flow["screens"][f"{role_name}_rejected_detail_top"] = await get_elements(page)
                    print(f"    Rejected detail: {page.url}")

                    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                    await page.wait_for_timeout(1000)
                    await ss(page, f"flow6_{role_name}_09_rejected_detail_bottom")
                    flow["screens"][f"{role_name}_rejected_detail_bottom"] = await get_elements(page)
        except Exception as e:
            flow["errors"].append(f"{role_name} Rejected: {e}")
            print(f"    Rejected error: {e}")

        await context.close()

    return flow


# ─── MAIN ─────────────────────────────────────────────────────────────────────

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        print(f"Remaining Flows Exploration: {BASE_URL}")
        print(f"Screenshots: {SCREENSHOT_DIR}\n")

        # Flow 1
        try:
            report["flows"]["flow1_chat"] = await flow1_chat(browser)
        except Exception as e:
            print(f"  FLOW 1 FATAL: {e}")
            import traceback; traceback.print_exc()
            report["flows"]["flow1_chat"] = {"error": str(e)}

        # Flow 2
        try:
            report["flows"]["flow2_approved"] = await flow2_approved_reports(browser)
        except Exception as e:
            print(f"  FLOW 2 FATAL: {e}")
            report["flows"]["flow2_approved"] = {"error": str(e)}

        # Flow 3
        try:
            report["flows"]["flow3_settings"] = await flow3_settings(browser)
        except Exception as e:
            print(f"  FLOW 3 FATAL: {e}")
            report["flows"]["flow3_settings"] = {"error": str(e)}

        # Flow 4
        try:
            report["flows"]["flow4_investigation"] = await flow4_investigation_detail(browser)
        except Exception as e:
            print(f"  FLOW 4 FATAL: {e}")
            report["flows"]["flow4_investigation"] = {"error": str(e)}

        # Flow 5
        try:
            report["flows"]["flow5_manage_users"] = await flow5_manage_users(browser)
        except Exception as e:
            print(f"  FLOW 5 FATAL: {e}")
            report["flows"]["flow5_manage_users"] = {"error": str(e)}

        # Flow 6
        try:
            report["flows"]["flow6_done_rejected"] = await flow6_done_rejected(browser)
        except Exception as e:
            print(f"  FLOW 6 FATAL: {e}")
            report["flows"]["flow6_done_rejected"] = {"error": str(e)}

        await browser.close()

    with open(REPORT_PATH, "w") as f:
        json.dump(report, f, indent=2, default=str)

    print(f"\n{'='*60}")
    print(f"ALL FLOWS COMPLETE")
    print(f"{'='*60}")
    for fname, fdata in report["flows"].items():
        if isinstance(fdata, dict):
            screens = len(fdata.get("screens", {})) + sum(len(r.get("screens", {})) for r in fdata.get("roles", {}).values())
            errors = len(fdata.get("errors", [])) + sum(len(r.get("errors", {})) for r in fdata.get("roles", {}).values() if isinstance(r, dict))
            print(f"  {fname}: {screens} screens, {errors} errors")
        else:
            print(f"  {fname}: ERROR")

    print(f"\nReport: {REPORT_PATH}")


if __name__ == "__main__":
    asyncio.run(main())
