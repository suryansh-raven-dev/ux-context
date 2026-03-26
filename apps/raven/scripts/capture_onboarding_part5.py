import asyncio
import os
from playwright.async_api import async_playwright

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/apps/raven/help-doc/screenshots"
os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

BASE_URL = os.environ.get("RAVEN_BASE_URL", "https://ifz.startraven.com")
ADMIN_ID = os.environ["RAVEN_ADMIN_ID"]
EMPLOYEE_ID = os.environ["RAVEN_EMPLOYEE_ID"]
PASSWORD = os.environ["RAVEN_PASSWORD"]


async def save(page, name, full_page=True):
    path = os.path.join(SCREENSHOTS_DIR, f"{name}.png")
    await page.screenshot(path=path, full_page=full_page)
    print(f"[OK] {name}.png")
    return path


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()

        # Go directly to admin portal
        print("\n=== Admin Portal - Users ===")
        await page.goto("https://admin.ifz.startraven.com/users", wait_until="networkidle")
        await page.wait_for_timeout(3000)
        print(f"  URL: {page.url}")

        if "not-authenticated" in page.url:
            print("  Not authenticated - need to login through app first")
            
            # Login through the app first
            await page.goto("https://ifz.startraven.com/login", wait_until="networkidle")
            await page.wait_for_timeout(2000)
            
            input_field = page.locator("input").first
            await input_field.fill(ADMIN_ID)
            await page.wait_for_timeout(500)
            
            continue_btn = page.get_by_role("button", name="Continue")
            await continue_btn.click()
            await page.wait_for_timeout(2000)
            
            password_input = page.locator("input[type='password']")
            await password_input.fill(PASSWORD)
            
            login_btn = page.get_by_role("button", name="Login")
            await login_btn.click()
            await page.wait_for_timeout(5000)
            
            try:
                domain = page.locator("text=HSEF").first
                if await domain.is_visible():
                    await domain.click()
                    await page.wait_for_timeout(3000)
            except:
                pass

            # Now try admin portal again
            await page.goto("https://admin.ifz.startraven.com/users", wait_until="networkidle")
            await page.wait_for_timeout(3000)
            print(f"  URL after login: {page.url}")

        await save(page, "35_admin_users_full")
        
        # --- Filter by Status to find unverified users ---
        print("\n=== Filter by Unverified ===")
        try:
            # Click the Status dropdown
            status_dropdown = page.locator("text=Status").first
            if await status_dropdown.count() == 0:
                status_dropdown = page.locator("[class*='select'], select").last
            
            # Look for the Status filter dropdown
            all_selects = await page.locator("select, [role='combobox'], [role='listbox']").all()
            print(f"  Found {len(all_selects)} select elements")
            
            # Try clicking the Status "All" dropdown
            status_all = page.locator("text=All").last
            await status_all.click()
            await page.wait_for_timeout(1500)
            await save(page, "36_status_dropdown_open")
            
            body = await page.inner_text("body")
            # Look for dropdown options
            for kw in ["Verified", "Unverified", "Pending", "Active", "Inactive", "All"]:
                if kw in body:
                    print(f"  Status option: '{kw}'")
            
            # Try to select Unverified
            try:
                unverified_option = page.locator("text=Unverified").first
                if await unverified_option.is_visible():
                    await unverified_option.click()
                    await page.wait_for_timeout(3000)
                    await save(page, "37_unverified_users")
                    body = await page.inner_text("body")
                    print(f"  Unverified users content: {body[:500]}")
            except Exception as e:
                print(f"  Unverified filter: {e}")
                
                # Try clicking away to close dropdown and try different approach
                await page.keyboard.press("Escape")
                await page.wait_for_timeout(500)
                
        except Exception as e:
            print(f"  Status filter: {e}")

        # --- Click on user actions (three dots) ---
        print("\n=== User Actions Menu ===")
        try:
            # Reset to show all users
            await page.goto("https://admin.ifz.startraven.com/users", wait_until="networkidle")
            await page.wait_for_timeout(3000)
            
            # Find action buttons (three dots)
            action_buttons = await page.locator("[aria-label='more'], [class*='MoreVert'], button:has(svg)").all()
            print(f"  Action buttons found: {len(action_buttons)}")
            
            # Try clicking the three dots on the first user row
            action_icons = await page.locator("td:last-child button, td:last-child [role='button'], .MuiIconButton-root").all()
            print(f"  Action icons found: {len(action_icons)}")
            
            if action_icons:
                await action_icons[0].click()
                await page.wait_for_timeout(1500)
                await save(page, "38_user_action_menu")
                
                body = await page.inner_text("body")
                for kw in ["Verify", "verify", "Edit", "Delete", "Deactivate", "Reset", "Clear", "Approve"]:
                    if kw in body:
                        print(f"  Action: '{kw}'")
                
                # List all menu items
                menu_items = await page.locator("[role='menuitem'], [class*='MenuItem']").all()
                for item in menu_items:
                    txt = (await item.inner_text()).strip()
                    print(f"  Menu item: '{txt}'")
                
                await page.keyboard.press("Escape")
                await page.wait_for_timeout(500)

            # Alternative: look for vertical dots (three dots icon)
            dots = await page.locator("[data-testid='MoreVertIcon'], svg").all()
            print(f"  SVG/dots elements: {len(dots)}")
            
        except Exception as e:
            print(f"  User actions: {e}")

        # --- Search for SURYANSH user in admin ---
        print("\n=== Search for SURYANSH ===")
        try:
            search_input = page.locator("input[placeholder*='Search'], input[type='search'], input[type='text']").first
            await search_input.fill("SURYANSH")
            await page.wait_for_timeout(2000)
            await save(page, "39_search_suryansh")
            
            body = await page.inner_text("body")
            print(f"  Search results: {body[:500]}")
        except Exception as e:
            print(f"  Search: {e}")

        # --- Check ADD USER form ---
        print("\n=== Add User Form ===")
        try:
            await page.goto("https://admin.ifz.startraven.com/users", wait_until="networkidle")
            await page.wait_for_timeout(3000)
            
            add_user_btn = page.locator("text=ADD USER").first
            await add_user_btn.click()
            await page.wait_for_timeout(2000)
            await save(page, "40_add_user_form")
            
            body = await page.inner_text("body")
            print(f"  Add user form: {body[:500]}")
        except Exception as e:
            print(f"  Add user: {e}")

        # --- Now login as regular user and check for verification message ---
        print("\n=== Check Verification Banner for Regular User ===")
        # First sign out of admin portal context
        context2 = await browser.new_context(viewport={"width": 1440, "height": 900})
        page2 = await context2.new_page()
        
        await page2.goto("https://ifz.startraven.com/login", wait_until="networkidle")
        await page2.wait_for_timeout(2000)
        
        input_field = page2.locator("input").first
        await input_field.fill(EMPLOYEE_ID)
        await page2.wait_for_timeout(500)
        
        continue_btn = page2.get_by_role("button", name="Continue")
        await continue_btn.click()
        await page2.wait_for_timeout(2000)
        
        password_input = page2.locator("input[type='password']")
        await password_input.fill(PASSWORD)
        
        login_btn = page2.get_by_role("button", name="Login")
        await login_btn.click()
        await page2.wait_for_timeout(5000)
        
        try:
            domain = page2.locator("text=HSEF").first
            if await domain.is_visible():
                await domain.click()
                await page2.wait_for_timeout(3000)
        except:
            pass
        
        # Go to account page
        await page2.goto("https://ifz.startraven.com/account", wait_until="networkidle")
        await page2.wait_for_timeout(3000)
        
        # Take a detailed screenshot and examine page structure
        await save(page2, "41_account_page_detailed")
        
        # Check for any alert/banner elements
        body_html = await page2.inner_html("body")
        body_text = await page2.inner_text("body")
        
        # Check for alert, banner, notification elements
        alerts = await page2.locator("[role='alert'], [class*='alert'], [class*='Alert'], [class*='banner'], [class*='Banner'], [class*='notification'], [class*='Notification'], [class*='info'], [class*='Info'], [class*='warning'], [class*='Warning'], [class*='snackbar'], [class*='Snackbar']").all()
        print(f"  Alert/banner elements: {len(alerts)}")
        for alert in alerts:
            try:
                txt = await alert.inner_text()
                if txt.strip():
                    print(f"  Alert text: '{txt.strip()[:200]}'")
            except:
                pass
        
        # Check all text on page for verification-related content
        for kw in ["verify", "verified", "unverified", "pending", "approval", "approved", 
                    "not approved", "admin", "review", "under review", "confirmation",
                    "account status", "waiting"]:
            if kw.lower() in body_text.lower():
                print(f"  Found on page: '{kw}'")

        await browser.close()
        print("\n=== DONE ===")


asyncio.run(main())
