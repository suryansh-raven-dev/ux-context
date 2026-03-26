import asyncio
import os
from playwright.async_api import async_playwright

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/apps/raven/help-doc/screenshots"
os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

BASE_URL = os.environ.get("RAVEN_BASE_URL", "https://ifz.startraven.com")
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

        # --- STEP 1: Login page ---
        print("\n=== STEP 1: Login Page ===")
        await page.goto(f"{BASE_URL}/login", wait_until="networkidle")
        await page.wait_for_timeout(2000)
        await save(page, "01_login_page_initial")

        # --- STEP 2: Enter Employee ID ---
        print("\n=== STEP 2: Enter Employee ID ===")
        input_field = page.locator("input").first
        await input_field.fill(EMPLOYEE_ID)
        await page.wait_for_timeout(500)
        await save(page, "02_login_employee_id_entered")

        # --- STEP 3: Click CONTINUE -> Password step ---
        print("\n=== STEP 3: Password Step ===")
        continue_btn = page.get_by_role("button", name="Continue")
        await continue_btn.click()
        await page.wait_for_timeout(2000)
        await save(page, "03_login_password_step")

        # --- STEP 4: Enter password and login ---
        print("\n=== STEP 4: Enter Password & Login ===")
        password_input = page.locator("input[type='password']")
        await password_input.fill(PASSWORD)
        await page.wait_for_timeout(500)
        await save(page, "04_login_password_filled")

        login_btn = page.get_by_role("button", name="Login")
        await login_btn.click()
        await page.wait_for_timeout(5000)
        print(f"  URL after login: {page.url}")
        await save(page, "05_domain_selection_modal")

        # Capture domain options text
        try:
            modal = page.locator("text=Select a domain").first
            if await modal.is_visible():
                print("  Domain selection modal is visible")
                all_text = await page.locator("[role='dialog'], [class*='modal'], [class*='Modal']").first.inner_text()
                print(f"  Modal content: {all_text[:500]}")
        except Exception as e:
            print(f"  Modal detection: {e}")

        # --- STEP 5: Select a domain ---
        print("\n=== STEP 5: Select Domain ===")
        try:
            domain_options = await page.locator("text=HSEF").all()
            if domain_options:
                await domain_options[0].click()
                await page.wait_for_timeout(3000)
            else:
                buttons = await page.locator("button, [role='option'], li").all()
                for btn in buttons:
                    txt = await btn.inner_text()
                    if txt.strip() and len(txt.strip()) < 50 and txt.strip() not in ["Login", "Continue"]:
                        print(f"  Clicking domain: {txt.strip()}")
                        await btn.click()
                        await page.wait_for_timeout(3000)
                        break
        except Exception as e:
            print(f"  Domain selection: {e}")
        
        print(f"  URL after domain: {page.url}")
        await save(page, "06_main_app_after_domain")

        # --- STEP 6: Navigate to Account Page ---
        print("\n=== STEP 6: Account Page ===")
        try:
            settings_link = page.locator("text=Settings").first
            await settings_link.click()
            await page.wait_for_timeout(1500)
            await save(page, "07_settings_menu_open")

            account_link = page.locator("text=Account Settings").first
            await account_link.click()
            await page.wait_for_timeout(3000)
            print(f"  URL: {page.url}")
            await save(page, "08_account_page")

            page_text = await page.inner_text("body")
            for keyword in ["verif", "pending", "approved", "not verified", "unverified", "under review"]:
                if keyword.lower() in page_text.lower():
                    print(f"  Found keyword: '{keyword}' on account page")
        except Exception as e:
            print(f"  Account page: {e}")

        # --- STEP 7: Check for verification banner ---
        print("\n=== STEP 7: Check Verification Status ===")
        try:
            banners = await page.locator("[class*='alert'], [class*='banner'], [class*='notice'], [class*='info'], [role='alert'], [class*='Alert'], [class*='Banner']").all()
            for banner in banners:
                txt = await banner.inner_text()
                print(f"  Banner text: {txt.strip()[:200]}")
            
            top_section = await page.locator("main, [class*='content'], [class*='Content']").first.inner_text()
            first_200 = top_section[:300]
            print(f"  Top content: {first_200}")
        except Exception as e:
            print(f"  Verification check: {e}")

        # --- STEP 8: Sign out and show email login path ---
        print("\n=== STEP 8: Sign Out ===")
        try:
            settings_link = page.locator("text=Settings").first
            await settings_link.click()
            await page.wait_for_timeout(1000)
            
            signout = page.locator("text=Sign Out").first
            await signout.click()
            await page.wait_for_timeout(3000)
            print(f"  URL after signout: {page.url}")
            await save(page, "09_after_signout")
        except Exception as e:
            print(f"  Sign out: {e}")

        # --- STEP 9: Email login path ---
        print("\n=== STEP 9: Email Login Path ===")
        try:
            await page.goto(f"{BASE_URL}/login", wait_until="networkidle")
            await page.wait_for_timeout(2000)
            
            input_field = page.locator("input").first
            await input_field.fill("user@example.com")
            await page.wait_for_timeout(500)
            await save(page, "10_email_login_entered")
            
            continue_btn = page.get_by_role("button", name="Continue")
            await continue_btn.click()
            await page.wait_for_timeout(3000)
            await save(page, "11_after_email_continue")
            print(f"  URL: {page.url}")
            
            page_content = await page.inner_text("body")
            for keyword in ["magic link", "Magic Link", "magic", "link sent", "check your email", "register", "Register", "password", "Password", "set password", "create account"]:
                if keyword.lower() in page_content.lower():
                    print(f"  Found keyword: '{keyword}'")
        except Exception as e:
            print(f"  Email login: {e}")

        # --- STEP 10: Try registration path with new email ---
        print("\n=== STEP 10: Registration Flow Exploration ===")
        try:
            await page.goto(f"{BASE_URL}/register", wait_until="networkidle")
            await page.wait_for_timeout(2000)
            print(f"  Register URL: {page.url}")
            await save(page, "12_register_page")
            
            body_text = await page.inner_text("body")
            print(f"  Register page content: {body_text[:500]}")
        except Exception as e:
            print(f"  Register page: {e}")

        # --- STEP 11: Try signup path ---
        print("\n=== STEP 11: Signup Path ===")
        try:
            await page.goto(f"{BASE_URL}/signup", wait_until="networkidle")
            await page.wait_for_timeout(2000)
            print(f"  Signup URL: {page.url}")
            await save(page, "13_signup_page")
            body_text = await page.inner_text("body")
            print(f"  Signup content: {body_text[:500]}")
        except Exception as e:
            print(f"  Signup: {e}")

        # --- STEP 12: Try set-password path ---
        print("\n=== STEP 12: Set Password Path ===")
        try:
            await page.goto(f"{BASE_URL}/set-password", wait_until="networkidle")
            await page.wait_for_timeout(2000)
            print(f"  Set password URL: {page.url}")
            await save(page, "14_set_password_page")
            body_text = await page.inner_text("body")
            print(f"  Set password content: {body_text[:500]}")
        except Exception as e:
            print(f"  Set password: {e}")

        await browser.close()
        print("\n=== DONE ===")
        print(f"All screenshots saved to: {SCREENSHOTS_DIR}")


asyncio.run(main())
