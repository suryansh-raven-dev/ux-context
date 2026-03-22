import asyncio
import json
import os
from playwright.async_api import async_playwright

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/screenshots"
os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

REPORT = []

def log(section, detail):
    REPORT.append({"section": section, "detail": detail})
    print(f"[{section}] {detail}")

async def screenshot(page, name):
    path = os.path.join(SCREENSHOTS_DIR, f"{name}.png")
    await page.screenshot(path=path, full_page=True)
    log("Screenshot", f"Saved: {name}.png")
    return path

async def get_page_info(page):
    title = await page.title()
    url = page.url
    return {"title": title, "url": url}

async def get_nav_items(page):
    nav_items = []
    selectors = [
        "nav a", "aside a", "[role='navigation'] a",
        ".sidebar a", ".nav a", ".menu a",
        "nav button", "aside button",
        "[class*='sidebar'] a", "[class*='nav'] a", "[class*='menu'] a",
        "[class*='Sidebar'] a", "[class*='Nav'] a", "[class*='Menu'] a",
    ]
    for sel in selectors:
        try:
            elements = await page.query_selector_all(sel)
            for el in elements:
                text = (await el.inner_text()).strip()
                href = await el.get_attribute("href")
                if text and len(text) < 100:
                    nav_items.append({"text": text, "href": href, "selector": sel})
        except:
            pass
    seen = set()
    unique = []
    for item in nav_items:
        key = item["text"]
        if key not in seen:
            seen.add(key)
            unique.append(item)
    return unique

async def describe_page_content(page):
    content_info = {}
    try:
        headings = await page.query_selector_all("h1, h2, h3")
        content_info["headings"] = []
        for h in headings[:10]:
            text = (await h.inner_text()).strip()
            tag = await h.evaluate("el => el.tagName")
            if text:
                content_info["headings"].append(f"{tag}: {text}")
    except:
        pass

    try:
        tables = await page.query_selector_all("table")
        content_info["tables_count"] = len(tables)
        if tables:
            first_table_headers = await tables[0].query_selector_all("th")
            content_info["first_table_headers"] = []
            for th in first_table_headers[:15]:
                text = (await th.inner_text()).strip()
                if text:
                    content_info["first_table_headers"].append(text)
    except:
        pass

    try:
        buttons = await page.query_selector_all("button")
        content_info["buttons"] = []
        for btn in buttons[:20]:
            text = (await btn.inner_text()).strip()
            if text and len(text) < 60:
                content_info["buttons"].append(text)
    except:
        pass

    try:
        inputs = await page.query_selector_all("input, textarea, select")
        content_info["form_elements_count"] = len(inputs)
    except:
        pass

    try:
        cards = await page.query_selector_all("[class*='card'], [class*='Card']")
        content_info["cards_count"] = len(cards)
    except:
        pass

    try:
        tabs = await page.query_selector_all("[role='tab'], [class*='tab'], [class*='Tab']")
        content_info["tabs"] = []
        for tab in tabs[:10]:
            text = (await tab.inner_text()).strip()
            if text and len(text) < 60:
                content_info["tabs"].append(text)
    except:
        pass

    try:
        links = await page.query_selector_all("a")
        visible_links = []
        for link in links[:30]:
            text = (await link.inner_text()).strip()
            href = await link.get_attribute("href")
            if text and len(text) < 80:
                visible_links.append({"text": text, "href": href})
        content_info["visible_links"] = visible_links
    except:
        pass

    return content_info

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()

        # Step 1: Navigate to login
        log("Login", "Navigating to ifz.startraven.com...")
        await page.goto("https://ifz.startraven.com", wait_until="networkidle", timeout=30000)
        await screenshot(page, "01_login_page")

        info = await get_page_info(page)
        log("Login", f"Page title: {info['title']}, URL: {info['url']}")

        login_content = await describe_page_content(page)
        log("Login", f"Login page content: {json.dumps(login_content, indent=2)}")

        # Step 2: Enter Employee ID
        log("Login", "Entering Employee ID...")
        try:
            emp_input = await page.wait_for_selector("input", timeout=5000)
            await emp_input.fill("SURYANSH-04")
            await screenshot(page, "02_employee_id_entered")

            continue_btn = await page.query_selector("button:has-text('Continue')")
            if continue_btn:
                await continue_btn.click()
                await page.wait_for_timeout(2000)
                await screenshot(page, "03_after_continue")
        except Exception as e:
            log("Login", f"Employee ID entry error: {e}")

        # Step 3: Enter Password
        log("Login", "Entering Password...")
        try:
            pwd_input = await page.wait_for_selector("input[type='password']", timeout=5000)
            await pwd_input.fill("RavenTesting@123")
            await screenshot(page, "04_password_entered")

            sign_in_btn = await page.query_selector("button:has-text('Sign in'), button:has-text('Login'), button:has-text('Submit'), button[type='submit']")
            if sign_in_btn:
                await sign_in_btn.click()
                log("Login", "Clicked sign-in button, waiting for navigation...")
                await page.wait_for_timeout(5000)
                await screenshot(page, "05_after_login")
            else:
                all_buttons = await page.query_selector_all("button")
                for btn in all_buttons:
                    text = (await btn.inner_text()).strip()
                    log("Login", f"Available button: '{text}'")
                if all_buttons:
                    await all_buttons[-1].click()
                    await page.wait_for_timeout(5000)
                    await screenshot(page, "05_after_login")
        except Exception as e:
            log("Login", f"Password entry error: {e}")

        # Step 4: Check post-login state
        info = await get_page_info(page)
        log("PostLogin", f"Page title: {info['title']}, URL: {info['url']}")

        dashboard_content = await describe_page_content(page)
        log("Dashboard", f"Content: {json.dumps(dashboard_content, indent=2)}")
        await screenshot(page, "06_dashboard_full")

        # Step 5: Get all navigation items
        nav_items = await get_nav_items(page)
        log("Navigation", f"Found {len(nav_items)} nav items:")
        for item in nav_items:
            log("Navigation", f"  - {item['text']} -> {item.get('href', 'N/A')}")

        # Step 6: Visit each navigation item
        visited_urls = set()
        visited_urls.add(page.url)
        screenshot_counter = 7

        for i, nav_item in enumerate(nav_items):
            href = nav_item.get("href")
            text = nav_item["text"]

            if not href or href == "#" or href.startswith("javascript"):
                try:
                    log("Explore", f"Clicking nav item: '{text}'")
                    clickable = await page.query_selector(f"a:has-text('{text}'), button:has-text('{text}')")
                    if clickable:
                        await clickable.click()
                        await page.wait_for_timeout(3000)
                        current_url = page.url
                        if current_url not in visited_urls:
                            visited_urls.add(current_url)
                            info = await get_page_info(page)
                            log("Explore", f"  Page: {info['title']}, URL: {info['url']}")
                            content = await describe_page_content(page)
                            log("Explore", f"  Content: {json.dumps(content, indent=2)}")
                            await screenshot(page, f"{screenshot_counter:02d}_{text.replace(' ', '_').replace('/', '_')[:30]}")
                            screenshot_counter += 1

                            sub_tabs = await page.query_selector_all("[role='tab']")
                            for tab in sub_tabs[:5]:
                                tab_text = (await tab.inner_text()).strip()
                                if tab_text:
                                    log("Explore", f"  Clicking sub-tab: '{tab_text}'")
                                    await tab.click()
                                    await page.wait_for_timeout(2000)
                                    await screenshot(page, f"{screenshot_counter:02d}_tab_{tab_text.replace(' ', '_')[:20]}")
                                    screenshot_counter += 1
                except Exception as e:
                    log("Explore", f"  Error clicking '{text}': {e}")
                continue

            if href in visited_urls:
                continue

            full_url = href if href.startswith("http") else f"https://ifz.startraven.com{href}"
            if full_url in visited_urls:
                continue

            try:
                log("Explore", f"Navigating to: '{text}' ({full_url})")
                await page.goto(full_url, wait_until="networkidle", timeout=15000)
                visited_urls.add(full_url)
                visited_urls.add(page.url)

                info = await get_page_info(page)
                log("Explore", f"  Page: {info['title']}, URL: {info['url']}")

                content = await describe_page_content(page)
                log("Explore", f"  Content: {json.dumps(content, indent=2)}")

                await screenshot(page, f"{screenshot_counter:02d}_{text.replace(' ', '_').replace('/', '_')[:30]}")
                screenshot_counter += 1

                sub_tabs = await page.query_selector_all("[role='tab']")
                for tab in sub_tabs[:5]:
                    tab_text = (await tab.inner_text()).strip()
                    if tab_text:
                        log("Explore", f"  Clicking sub-tab: '{tab_text}'")
                        await tab.click()
                        await page.wait_for_timeout(2000)
                        sub_content = await describe_page_content(page)
                        log("Explore", f"  Sub-tab content: {json.dumps(sub_content, indent=2)}")
                        await screenshot(page, f"{screenshot_counter:02d}_tab_{tab_text.replace(' ', '_')[:20]}")
                        screenshot_counter += 1

            except Exception as e:
                log("Explore", f"  Error navigating to '{text}': {e}")

        # Step 7: Try common Raven-specific URLs
        common_paths = [
            "/dashboard", "/home", "/knowledge-hub", "/plant-knowledge",
            "/isolation", "/isolation-planning", "/documents", "/equipment",
            "/p-and-id", "/pid", "/settings", "/profile", "/admin",
            "/notifications", "/chat", "/assistant", "/review", "/approval",
            "/reports", "/analytics", "/help", "/support"
        ]
        for path in common_paths:
            full_url = f"https://ifz.startraven.com{path}"
            if full_url in visited_urls:
                continue
            try:
                response = await page.goto(full_url, wait_until="networkidle", timeout=10000)
                if response and response.status == 200:
                    current = page.url
                    if current not in visited_urls and "/login" not in current.lower():
                        visited_urls.add(current)
                        info = await get_page_info(page)
                        log("Discovery", f"Found: {info['title']} at {info['url']}")
                        content = await describe_page_content(page)
                        log("Discovery", f"Content: {json.dumps(content, indent=2)}")
                        await screenshot(page, f"{screenshot_counter:02d}_discovery_{path.strip('/').replace('/', '_')[:25]}")
                        screenshot_counter += 1
            except:
                pass

        # Final: Save full report
        report_path = os.path.join(SCREENSHOTS_DIR, "exploration_report.json")
        with open(report_path, "w") as f:
            json.dump(REPORT, f, indent=2)
        log("Done", f"Report saved to {report_path}")
        log("Done", f"Total screenshots: {screenshot_counter - 1}")
        log("Done", f"Total URLs visited: {len(visited_urls)}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
