import asyncio
import os
from playwright.async_api import async_playwright

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/apps/raven/help-doc/screenshots"
BASE_URL = os.environ.get("RAVEN_BASE_URL", "https://ifz.startraven.com")
EMPLOYEE_ID = os.environ["RAVEN_EMPLOYEE_ID"]
ADMIN_ID = os.environ["RAVEN_ADMIN_ID"]
PASSWORD = os.environ["RAVEN_PASSWORD"]


async def save(page, name, full_page=True):
    path = os.path.join(SCREENSHOTS_DIR, f"{name}.png")
    await page.screenshot(path=path, full_page=full_page)
    print(f"[OK] {name}.png")


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()

        # ============================================================
        # TEST A: Examine the password step in detail for magic link
        # ============================================================
        print("\n=== TEST A: Check password step for magic link option ===")
        await page.goto(f"{BASE_URL}/login", wait_until="networkidle")
        await page.wait_for_timeout(2000)

        await page.locator("input").first.fill(EMPLOYEE_ID)
        await page.wait_for_timeout(500)
        await page.get_by_role("button", name="Continue").click()
        await page.wait_for_timeout(2000)

        # Get FULL HTML of the login form
        form_html = await page.inner_html("body")

        # Search for any magic link, send link, email link references
        import re
        magic_patterns = [
            r'magic', r'link', r'send.*link', r'email.*link',
            r'passwordless', r'one.time', r'OTP', r'otp',
            r'login.*link', r'sign.*link'
        ]
        for pat in magic_patterns:
            matches = re.findall(pat, form_html, re.IGNORECASE)
            if matches:
                print(f"  HTML contains '{pat}': {matches[:5]}")

        # List ALL visible text on the password step
        body_text = await page.inner_text("body")
        print(f"\n  Full visible text on password step:")
        print(f"  ---")
        for line in body_text.strip().split("\n"):
            if line.strip():
                print(f"  | {line.strip()}")
        print(f"  ---")

        # List ALL clickable elements
        print(f"\n  All clickable elements:")
        clickable = await page.locator("button, a, [role='button'], [role='link']").all()
        for el in clickable:
            txt = (await el.inner_text()).strip()
            href = await el.get_attribute("href")
            tag = await el.evaluate("el => el.tagName")
            visible = await el.is_visible()
            if txt or href:
                print(f"  [{tag}] text='{txt}' href='{href}' visible={visible}")

        await save(page, "verify_password_step_detail")

        # Login
        await page.locator("input[type='password']").fill(PASSWORD)
        await page.get_by_role("button", name="Login").click()
        await page.wait_for_timeout(5000)

        try:
            domain = page.locator("text=HSEF").first
            if await domain.is_visible():
                await domain.click()
                await page.wait_for_timeout(3000)
        except:
            pass

        # ============================================================
        # TEST B: Click Users in Workplace Settings to see where it goes
        # ============================================================
        print("\n=== TEST B: Workplace Settings → Users link behavior ===")
        await page.goto(f"{BASE_URL}/workplace/dashboard", wait_until="networkidle")
        await page.wait_for_timeout(3000)
        
        # Check if this is admin user
        print(f"  Current URL: {page.url}")
        
        if "workplace" in page.url:
            # Find the Users link
            users_links = await page.locator("text=Users").all()
            print(f"  Found {len(users_links)} 'Users' elements")
            
            for i, link in enumerate(users_links):
                try:
                    tag = await link.evaluate("el => el.tagName")
                    href = await link.get_attribute("href")
                    target = await link.get_attribute("target")
                    parent_tag = await link.evaluate("el => el.parentElement.tagName")
                    # Check for external link icon
                    has_external = await link.evaluate("""
                        el => {
                            const svg = el.querySelector('svg') || el.parentElement.querySelector('svg');
                            return svg ? svg.outerHTML.substring(0, 100) : 'none';
                        }
                    """)
                    print(f"  Users link {i}: tag={tag}, href={href}, target={target}, parent={parent_tag}")
                    print(f"    External icon: {has_external[:100] if has_external else 'none'}")
                except Exception as e:
                    print(f"  Users link {i}: error - {e}")

            # Try clicking the Users menu item in the sidebar
            try:
                sidebar_users = page.locator("[role='menuitem']:has-text('Users')").first
                if await sidebar_users.is_visible():
                    # Listen for new page/popup events
                    async with context.expect_page() as new_page_info:
                        await sidebar_users.click()
                    new_page = await new_page_info.value
                    await new_page.wait_for_load_state("networkidle")
                    print(f"  Users opened in NEW TAB: {new_page.url}")
                    await new_page.wait_for_timeout(3000)
                    
                    new_body = await new_page.inner_text("body")
                    print(f"  New tab content: {new_body[:500]}")
                    
                    if "Manage Users" in new_body:
                        print("  *** ADMIN PORTAL ACCESSIBLE FROM WORKPLACE! ***")
                        await save(new_page, "verify_admin_from_workplace")
                        
                        # Check for unverified users
                        if "Unverified" in new_body or "unverified" in new_body:
                            print("  Found 'Unverified' text!")
                        
                        # Look for status filter
                        all_text = new_body
                        for kw in ["Verified", "Unverified", "Pending", "Status"]:
                            if kw in all_text:
                                print(f"  Status keyword: '{kw}'")
                                
                        # Try to click Status filter
                        try:
                            status_select = new_page.locator("text=All").last
                            await status_select.click()
                            await new_page.wait_for_timeout(1500)
                            await save(new_page, "verify_status_filter_open")
                            
                            dropdown_text = await new_page.inner_text("body")
                            for opt in ["All", "Verified", "Unverified", "Pending"]:
                                if opt in dropdown_text:
                                    print(f"  Status option visible: '{opt}'")
                                    
                            # Try selecting Unverified
                            try:
                                unverified = new_page.locator("[role='option']:has-text('Unverified'), li:has-text('Unverified'), [data-value='unverified']").first
                                if await unverified.is_visible():
                                    await unverified.click()
                                    await new_page.wait_for_timeout(3000)
                                    await save(new_page, "verify_unverified_users")
                                    unverified_body = await new_page.inner_text("body")
                                    print(f"  Unverified users: {unverified_body[:500]}")
                            except Exception as e:
                                print(f"  Unverified filter: {e}")
                                
                        except Exception as e:
                            print(f"  Status filter: {e}")
                        
                        # Try clicking three dots on first user
                        try:
                            action_btns = await new_page.locator("[aria-label], button:has(svg)").all()
                            for btn in action_btns[:5]:
                                aria = await btn.get_attribute("aria-label")
                                if aria:
                                    print(f"  Button with aria: '{aria}'")
                        except:
                            pass
                        
                    elif "not-authenticated" in new_page.url or "Not Authenticated" in new_body:
                        print("  Admin portal NOT authenticated even from workplace")
                        await save(new_page, "verify_admin_not_auth_from_workplace")
            except Exception as e:
                print(f"  Users click error: {e}")
                
                # Maybe it navigates in the same page
                await page.wait_for_timeout(2000)
                print(f"  Current URL after click attempt: {page.url}")
        else:
            print(f"  Not on workplace page. URL: {page.url}")
            print("  This user may not have admin access to Workplace Settings")

        # Sign out
        try:
            await page.goto(f"{BASE_URL}/search", wait_until="networkidle")
            await page.wait_for_timeout(2000)
            await page.locator("text=Settings").first.click()
            await page.wait_for_timeout(1000)
            await page.locator("text=Sign Out").first.click()
            await page.wait_for_timeout(3000)
        except:
            pass

        # ============================================================
        # TEST C: Login as admin and try workplace → users
        # ============================================================
        print("\n=== TEST C: Admin login → Workplace → Users ===")
        await page.goto(f"{BASE_URL}/login", wait_until="networkidle")
        await page.wait_for_timeout(2000)

        await page.locator("input").first.fill(ADMIN_ID)
        await page.wait_for_timeout(500)
        await page.get_by_role("button", name="Continue").click()
        await page.wait_for_timeout(2000)
        await page.locator("input[type='password']").fill(PASSWORD)
        await page.get_by_role("button", name="Login").click()
        await page.wait_for_timeout(5000)

        try:
            domain = page.locator("text=HSEF").first
            if await domain.is_visible():
                await domain.click()
                await page.wait_for_timeout(3000)
        except:
            pass

        # Go to Workplace Settings
        await page.goto(f"{BASE_URL}/workplace/dashboard", wait_until="networkidle")
        await page.wait_for_timeout(3000)

        if "workplace" in page.url:
            print("  Admin is on Workplace page!")

            # Click Users link
            try:
                sidebar_users = page.locator("[role='menuitem']:has-text('Users')").first
                if await sidebar_users.is_visible():
                    print("  Users menu item is visible, clicking...")
                    
                    async with context.expect_page() as new_page_info:
                        await sidebar_users.click()
                    new_page = await new_page_info.value
                    await new_page.wait_for_load_state("networkidle")
                    await new_page.wait_for_timeout(5000)
                    print(f"  NEW TAB URL: {new_page.url}")
                    
                    new_body = await new_page.inner_text("body")
                    print(f"  New tab content (first 500): {new_body[:500]}")
                    
                    if "Manage Users" in new_body:
                        print("\n  *** ADMIN PORTAL IS ACCESSIBLE! ***")
                        await save(new_page, "verify_admin_users_final")
                        
                        # Now try to filter unverified
                        # Find status dropdown
                        selects = await new_page.locator("select").all()
                        print(f"  Select elements: {len(selects)}")
                        
                        # Try MUI Select
                        mui_selects = await new_page.locator("[class*='Select'], [role='combobox']").all()
                        print(f"  MUI select elements: {len(mui_selects)}")
                        
                        for sel in mui_selects:
                            txt = (await sel.inner_text()).strip()
                            print(f"  MUI select text: '{txt}'")
                            
                        # Try clicking the Status "All" dropdown
                        status_dropdown = new_page.locator("div:has-text('All')").last
                        try:
                            # Find the specific Status dropdown
                            status_label = new_page.locator("text=Status").first
                            # Click near the Status dropdown
                            box = await status_label.bounding_box()
                            if box:
                                # Click below the "Status" label where "All" dropdown should be
                                await new_page.click(f"text=All >> nth=-1")
                                await new_page.wait_for_timeout(1500)
                                await save(new_page, "verify_status_dropdown")
                                
                                dropdown_body = await new_page.inner_text("body")
                                print(f"  After clicking All: {dropdown_body[:500]}")
                        except Exception as e:
                            print(f"  Status dropdown: {e}")

                        # Search for a specific user to check their status
                        try:
                            search_input = new_page.locator("input[placeholder*='Search']").first
                            await search_input.fill("SURYANSH")
                            await new_page.wait_for_timeout(2000)
                            await save(new_page, "verify_search_suryansh")
                            search_body = await new_page.inner_text("body")
                            print(f"  Search SURYANSH: {search_body[:500]}")
                        except Exception as e:
                            print(f"  Search: {e}")
                    else:
                        await save(new_page, "verify_admin_not_auth")
                        print(f"  Admin portal result: {new_body[:300]}")
            except Exception as e:
                print(f"  Users navigation: {e}")

        await browser.close()
        print("\n=== ALL VERIFICATION TESTS COMPLETE ===")


asyncio.run(main())
