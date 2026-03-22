import asyncio
import json
import os
from playwright.async_api import async_playwright

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/screenshots/final"
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

async def login(page):
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

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()

        await login(page)
        log("Login", "Logged in successfully")

        # Select HSEF domain
        hsef = await page.query_selector("text=HSEF")
        if hsef:
            await hsef.click()
            await page.wait_for_timeout(3000)

        # ===== 1. SEARCH - Wait for full AI answer =====
        log("Search", "Submitting search query and waiting for full answer...")
        search_input = await page.query_selector("textarea")
        if search_input:
            await search_input.fill("What are the lockout tagout procedures?")
            await search_input.press("Enter")
            await page.wait_for_timeout(15000)  # Wait longer for AI to respond
            await ss(page, "search_ai_answer_loaded")
            body_text = await get_all_text(page)
            log("Search", f"AI answer page text:\n{body_text[:4000]}")

            # Scroll down to see full answer
            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await page.wait_for_timeout(2000)
            await ss(page, "search_ai_answer_scrolled")
            body_text = await get_all_text(page)
            log("Search", f"Full scrolled text:\n{body_text[:5000]}")

        # ===== 2. Click on a previous session in sidebar =====
        log("Sessions", "Clicking on a previous search session...")
        try:
            session_link = await page.query_selector("a:has-text('Electrical Energy Source')")
            if not session_link:
                session_link = await page.query_selector("text=Electrical Energy Source Isola")
            if session_link:
                await session_link.click()
                await page.wait_for_timeout(5000)
                await ss(page, "previous_session")
                body_text = await get_all_text(page)
                log("Sessions", f"Previous session text:\n{body_text[:4000]}")
        except Exception as e:
            log("Sessions", f"Error: {e}")

        # ===== 3. DATA EXPLORER - Drill into folders =====
        log("DataExplorer", "Navigating to Data Explorer...")
        de_link = await page.query_selector("a[href='/data/data-explorer']")
        if de_link:
            await de_link.click()
            await page.wait_for_timeout(3000)

        # Click into HSEF folder
        try:
            hsef_folder = await page.query_selector("text=HSEF")
            if hsef_folder:
                await hsef_folder.click()
                await page.wait_for_timeout(3000)
                await ss(page, "data_explorer_hsef_folder")
                body_text = await get_all_text(page)
                log("DataExplorer", f"HSEF folder contents:\n{body_text[:3000]}")

                # Go back
                back_btn = await page.query_selector("[aria-label='back'], button:has-text('Back'), [class*='breadcrumb']")
                if back_btn:
                    await back_btn.click()
                    await page.wait_for_timeout(2000)
                else:
                    await page.go_back()
                    await page.wait_for_timeout(2000)
        except Exception as e:
            log("DataExplorer", f"HSEF folder error: {e}")

        # Click into Reports folder
        try:
            await page.goto("https://ifz.startraven.com/data/data-explorer", wait_until="networkidle", timeout=15000)
            await page.wait_for_timeout(2000)
            reports_folder = await page.query_selector("text=Reports")
            if reports_folder:
                await reports_folder.click()
                await page.wait_for_timeout(3000)
                await ss(page, "data_explorer_reports_folder")
                body_text = await get_all_text(page)
                log("DataExplorer", f"Reports folder contents:\n{body_text[:3000]}")
        except Exception as e:
            log("DataExplorer", f"Reports folder error: {e}")

        # Test the Upload button area
        await page.goto("https://ifz.startraven.com/data/data-explorer", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(2000)
        upload_btn = await page.query_selector("button:has-text('UPLOAD FILE')")
        if upload_btn:
            await upload_btn.click()
            await page.wait_for_timeout(2000)
            await ss(page, "upload_file_dialog")
            body_text = await get_all_text(page)
            log("DataExplorer", f"Upload dialog text:\n{body_text[:2000]}")
            # Close any dialog
            close = await page.query_selector("[aria-label='close'], button:has-text('Close'), button:has-text('Cancel')")
            if close:
                await close.click()
                await page.wait_for_timeout(1000)

        # Test Filter and Sort buttons
        try:
            filter_btn = await page.query_selector("button:has-text('FILTER')")
            if filter_btn:
                await filter_btn.click()
                await page.wait_for_timeout(2000)
                await ss(page, "data_explorer_filter")
                body_text = await get_all_text(page)
                log("DataExplorer", f"Filter area text:\n{body_text[:2000]}")
        except Exception as e:
            log("DataExplorer", f"Filter error: {e}")

        # ===== 4. P&ID with a different domain that has data =====
        log("PID", "Switching to Train-1 domain for P&ID...")
        try:
            # Click domain dropdown
            domain_btn = await page.query_selector("text=HSEF")
            if domain_btn:
                await domain_btn.click()
                await page.wait_for_timeout(2000)
                await ss(page, "domain_dropdown")

                train1 = await page.query_selector("text=Train-1")
                if train1:
                    await train1.click()
                    await page.wait_for_timeout(3000)
                    log("PID", "Switched to Train-1 domain")

                    # Go to P&ID
                    pid_link = await page.query_selector("a:has-text('P&ID')")
                    if pid_link:
                        await pid_link.click()
                        await page.wait_for_timeout(5000)
                        await ss(page, "pid_train1")
                        body_text = await get_all_text(page)
                        log("PID", f"P&ID Train-1 text:\n{body_text[:3000]}")

                        # Try searching in P&ID
                        pid_search = await page.query_selector("input[placeholder*='P&ID'], input[placeholder*='Search']")
                        if pid_search:
                            await pid_search.click()
                            await page.wait_for_timeout(1000)
                            await ss(page, "pid_search_focused")
        except Exception as e:
            log("PID", f"Domain switch error: {e}")

        # ===== 5. Try PHD domain =====
        log("PHD", "Switching to PHD domain...")
        try:
            domain_elements = await page.query_selector_all("[class*='domain'], [class*='Domain']")
            if not domain_elements:
                # Try the sidebar domain dropdown
                sidebar_domain = await page.evaluate("""() => {
                    const el = document.querySelector('[class*="css-"] span');
                    return el ? el.innerText : null;
                }""")
                log("PHD", f"Current domain display: {sidebar_domain}")

            # Navigate directly and check
            await page.goto("https://ifz.startraven.com/search", wait_until="networkidle", timeout=15000)
            await page.wait_for_timeout(2000)

            # Find domain dropdown in sidebar (it has up/down arrows)
            domain_selector = await page.evaluate("""() => {
                const allElements = document.querySelectorAll('*');
                for (const el of allElements) {
                    const text = el.innerText;
                    if (text && (text.includes('HSEF') || text.includes('Train') || text.includes('PHD')) && el.children.length <= 3) {
                        return {tag: el.tagName, text: el.innerText.trim(), classes: el.className};
                    }
                }
                return null;
            }""")
            log("PHD", f"Domain selector element: {json.dumps(domain_selector)}")
        except Exception as e:
            log("PHD", f"Error: {e}")

        # ===== 6. SETTINGS deeper exploration =====
        log("Settings", "Exploring Settings page...")
        try:
            settings_link = await page.query_selector("a:has-text('Settings')")
            if settings_link:
                await settings_link.click()
                await page.wait_for_timeout(3000)
                await ss(page, "settings_page_detail")
                body_text = await get_all_text(page)
                log("Settings", f"Settings page text:\n{body_text[:3000]}")

                # Check for any tabs or sub-sections in settings
                settings_structure = await page.evaluate("""() => {
                    const main = document.querySelector('main, [role="main"], [class*="content"], [class*="Content"]');
                    return main ? main.innerHTML.slice(0, 3000) : 'No main content';
                }""")
                log("Settings", f"Settings HTML structure (first 2000):\n{settings_structure[:2000]}")
        except Exception as e:
            log("Settings", f"Error: {e}")

        # ===== 7. Search with Refine Search feature =====
        log("RefineSearch", "Testing Refine Search feature...")
        try:
            await page.goto("https://ifz.startraven.com/search", wait_until="networkidle", timeout=15000)
            await page.wait_for_timeout(2000)
            refine_btn = await page.query_selector("button:has-text('Refine Search'), text=Refine Search")
            if refine_btn:
                await refine_btn.click()
                await page.wait_for_timeout(2000)
                await ss(page, "refine_search_panel")
                body_text = await get_all_text(page)
                log("RefineSearch", f"Refine search text:\n{body_text[:3000]}")
        except Exception as e:
            log("RefineSearch", f"Error: {e}")

        # ===== 8. View All sessions =====
        log("ViewAll", "Clicking View All sessions...")
        try:
            view_all = await page.query_selector("text=View All")
            if view_all:
                await view_all.click()
                await page.wait_for_timeout(3000)
                await ss(page, "view_all_sessions")
                body_text = await get_all_text(page)
                log("ViewAll", f"All sessions text:\n{body_text[:3000]}")
        except Exception as e:
            log("ViewAll", f"Error: {e}")

        # ===== 9. Check hamburger menu =====
        log("Menu", "Opening hamburger menu...")
        try:
            hamburger = await page.query_selector("button:first-child svg, [aria-label*='menu']")
            if hamburger:
                hamburger_btn = await hamburger.evaluate_handle("el => el.closest('button')")
                if hamburger_btn:
                    await hamburger_btn.click()
                    await page.wait_for_timeout(2000)
                    await ss(page, "hamburger_open")
                    body_text = await get_all_text(page)
                    log("Menu", f"Hamburger menu text:\n{body_text[:2000]}")
        except Exception as e:
            log("Menu", f"Error: {e}")

        # ===== 10. Check voice input (microphone icon) =====
        log("Voice", "Checking for voice input...")
        try:
            mic_btn = await page.query_selector("[aria-label*='mic'], [aria-label*='voice'], button svg[data-testid*='Mic']")
            if mic_btn:
                log("Voice", "Microphone/voice input button found")
            else:
                log("Voice", "No dedicated mic button found via aria-label")
        except:
            pass

        # Save final report
        report_path = os.path.join(SCREENSHOTS_DIR, "final_report.json")
        with open(report_path, "w") as f:
            json.dump(REPORT, f, indent=2)
        log("Done", f"Final report saved. Total screenshots: {sc-1}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
