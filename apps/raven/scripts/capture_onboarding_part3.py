import asyncio
import os
from playwright.async_api import async_playwright

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/apps/raven/help-doc/screenshots"
os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

BASE_URL = os.environ.get("RAVEN_BASE_URL", "https://ifz.startraven.com")
ADMIN_ID = os.environ["RAVEN_ADMIN_ID"]
ADMIN_PASS = os.environ["RAVEN_PASSWORD"]


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

        # --- Login with admin credentials ---
        print("\n=== Admin Login ===")
        await page.goto(f"{BASE_URL}/login", wait_until="networkidle")
        await page.wait_for_timeout(2000)

        input_field = page.locator("input").first
        await input_field.fill(ADMIN_ID)
        await page.wait_for_timeout(500)

        continue_btn = page.get_by_role("button", name="Continue")
        await continue_btn.click()
        await page.wait_for_timeout(2000)

        password_input = page.locator("input[type='password']")
        await password_input.fill(ADMIN_PASS)

        login_btn = page.get_by_role("button", name="Login")
        await login_btn.click()
        await page.wait_for_timeout(5000)
        print(f"  URL after admin login: {page.url}")
        await save(page, "21_admin_login_domain_select")

        # Select a domain
        try:
            domain = page.locator("text=HSEF").first
            if await domain.is_visible():
                await domain.click()
                await page.wait_for_timeout(3000)
        except:
            pass

        print(f"  URL after domain: {page.url}")
        await save(page, "22_admin_main_app")

        # --- Check Settings for admin-specific options ---
        print("\n=== Admin Settings ===")
        try:
            settings = page.locator("text=Settings").first
            await settings.click()
            await page.wait_for_timeout(1500)
            await save(page, "23_admin_settings_menu")

            body = await page.inner_text("body")
            for kw in ["Manage Users", "Admin", "Workplace", "Users", "Verification", "manage"]:
                if kw.lower() in body.lower():
                    print(f"  Found in settings: '{kw}'")

            # Try Workplace Settings
            ws = page.locator("text=Workplace Settings").first
            if await ws.is_visible():
                await ws.click()
                await page.wait_for_timeout(3000)
                print(f"  Workplace URL: {page.url}")
                await save(page, "24_workplace_settings")
                ws_body = await page.inner_text("body")
                print(f"  Workplace content: {ws_body[:600]}")
        except Exception as e:
            print(f"  Settings error: {e}")

        # --- Check account page for admin ---
        print("\n=== Admin Account Page ===")
        try:
            await page.goto(f"{BASE_URL}/account", wait_until="networkidle")
            await page.wait_for_timeout(3000)
            await save(page, "25_admin_account_page")
            body = await page.inner_text("body")
            print(f"  Admin account page: {body[:500]}")
        except Exception as e:
            print(f"  Account page: {e}")

        # --- Try to access admin/users pages ---
        print("\n=== Admin User Management ===")
        admin_urls = [
            f"{BASE_URL}/admin",
            f"{BASE_URL}/users",
            f"{BASE_URL}/admin/users",
            f"{BASE_URL}/manage-users",
            f"{BASE_URL}/settings/users",
        ]
        for url in admin_urls:
            try:
                await page.goto(url, wait_until="networkidle")
                await page.wait_for_timeout(2000)
                print(f"  {url} -> {page.url}")
                if page.url != f"{BASE_URL}/login" and "/search" not in page.url:
                    await save(page, f"26_admin_{url.split('/')[-1]}")
                    body = await page.inner_text("body")
                    print(f"  Content: {body[:300]}")
            except Exception as e:
                print(f"  {url}: {e}")

        # --- Check Workplace Settings for user management ---
        print("\n=== Workplace Settings Deep Dive ===")
        try:
            await page.goto(f"{BASE_URL}/workplace", wait_until="networkidle")
            await page.wait_for_timeout(3000)
            print(f"  Workplace URL: {page.url}")
            await save(page, "27_workplace_page")
            body = await page.inner_text("body")
            print(f"  Workplace content: {body[:600]}")

            # Look for user-related tabs or sections
            tabs = await page.locator("button, [role='tab'], a").all()
            for tab in tabs:
                txt = await tab.inner_text()
                txt = txt.strip()
                if txt and len(txt) < 50:
                    print(f"  Tab/Button: '{txt}'")
        except Exception as e:
            print(f"  Workplace: {e}")

        # --- Try to find magic link option ---
        print("\n=== Magic Link Flow Search ===")
        await page.goto(f"{BASE_URL}/login", wait_until="networkidle")
        await page.wait_for_timeout(2000)

        # Try with a registered email that might show magic link option
        # Use the admin email if known
        test_emails = ["manikandan@indorama.com", ADMIN_ID]
        for email in test_emails:
            print(f"\n  Trying: {email}")
            await page.goto(f"{BASE_URL}/login", wait_until="networkidle")
            await page.wait_for_timeout(1500)

            input_field = page.locator("input").first
            await input_field.fill(email)
            await page.wait_for_timeout(500)

            try:
                continue_btn = page.get_by_role("button", name="Continue")
                is_disabled = await continue_btn.get_attribute("disabled")
                if is_disabled is None:
                    await continue_btn.click()
                    await page.wait_for_timeout(3000)
                    await save(page, f"28_after_{email.replace('@','_at_').replace('.','_')}")
                    
                    body = await page.inner_text("body")
                    print(f"  Page content: {body[:400]}")
                    
                    for kw in ["magic", "Magic", "link", "Link", "send", "Send", "email", "Email", 
                               "password", "Password", "Login", "Register", "Create"]:
                        if kw in body:
                            print(f"  Contains: '{kw}'")
                    
                    # Look for all buttons and links
                    buttons = await page.locator("button, a").all()
                    for btn in buttons:
                        txt = (await btn.inner_text()).strip()
                        if txt:
                            print(f"  Element: '{txt}'")
                else:
                    print(f"  CONTINUE disabled for {email}")
            except Exception as e:
                print(f"  Error with {email}: {e}")

        await browser.close()
        print("\n=== DONE ===")


asyncio.run(main())
