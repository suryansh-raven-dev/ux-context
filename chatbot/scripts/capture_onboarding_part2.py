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

        # --- Try email login with a company email ---
        print("\n=== Email Login with company email ===")
        await page.goto(f"{BASE_URL}/login", wait_until="networkidle")
        await page.wait_for_timeout(2000)
        
        input_field = page.locator("input").first
        await input_field.fill("test@indorama.com")
        await page.wait_for_timeout(1000)
        await save(page, "15_email_company_entered")
        
        continue_btn = page.get_by_role("button", name="Continue")
        try:
            is_disabled = await continue_btn.get_attribute("disabled")
            print(f"  Continue button disabled: {is_disabled}")
            if is_disabled is None:
                await continue_btn.click()
                await page.wait_for_timeout(3000)
                await save(page, "16_after_company_email_continue")
                print(f"  URL: {page.url}")
                body_text = await page.inner_text("body")
                print(f"  Page content: {body_text[:500]}")
                
                for keyword in ["magic link", "Magic Link", "password", "Password", "register", "Register", 
                                "set password", "link sent", "check email", "verification", "OTP", "magic"]:
                    if keyword.lower() in body_text.lower():
                        print(f"  Found: '{keyword}'")
        except Exception as e:
            print(f"  Error: {e}")

        # --- Try with a known test email ---
        print("\n=== Try with registered email ===")
        await page.goto(f"{BASE_URL}/login", wait_until="networkidle")
        await page.wait_for_timeout(2000)
        
        input_field = page.locator("input").first
        await input_field.fill("suryansh@startraven.com")
        await page.wait_for_timeout(1000)
        await save(page, "17_registered_email_entered")
        
        try:
            continue_btn = page.get_by_role("button", name="Continue")
            is_disabled = await continue_btn.get_attribute("disabled")
            print(f"  Continue button disabled: {is_disabled}")
            if is_disabled is None:
                await continue_btn.click()
                await page.wait_for_timeout(3000)
                await save(page, "18_after_registered_email_continue")
                print(f"  URL: {page.url}")
                body_text = await page.inner_text("body")
                print(f"  Page content: {body_text[:500]}")
                
                magic_link_elements = await page.locator("text=magic link").all()
                magic_elements = await page.locator("text=Magic").all()
                password_elements = await page.locator("text=Password").all()
                print(f"  Magic link elements: {len(magic_link_elements)}")
                print(f"  Magic elements: {len(magic_elements)}")
                print(f"  Password elements: {len(password_elements)}")
                
                all_buttons = await page.locator("button").all()
                for btn in all_buttons:
                    btn_text = await btn.inner_text()
                    print(f"  Button: '{btn_text.strip()}'")
                
                all_links = await page.locator("a").all()
                for link in all_links:
                    link_text = await link.inner_text()
                    if link_text.strip():
                        print(f"  Link: '{link_text.strip()}'")
        except Exception as e:
            print(f"  Error: {e}")

        # --- Login and check account page more carefully ---
        print("\n=== Login and check account page in detail ===")
        await page.goto(f"{BASE_URL}/login", wait_until="networkidle")
        await page.wait_for_timeout(2000)
        
        input_field = page.locator("input").first
        await input_field.fill(EMPLOYEE_ID)
        await page.wait_for_timeout(500)
        
        continue_btn = page.get_by_role("button", name="Continue")
        await continue_btn.click()
        await page.wait_for_timeout(2000)
        
        password_input = page.locator("input[type='password']")
        await password_input.fill(PASSWORD)
        
        login_btn = page.get_by_role("button", name="Login")
        await login_btn.click()
        await page.wait_for_timeout(5000)
        
        # Select domain
        try:
            domain = page.locator("text=HSEF").first
            if await domain.is_visible():
                await domain.click()
                await page.wait_for_timeout(3000)
        except:
            pass
        
        # Go directly to account page
        await page.goto(f"{BASE_URL}/account", wait_until="networkidle")
        await page.wait_for_timeout(3000)
        await save(page, "19_account_page_full")
        
        # Check for any verification-related elements
        body_text = await page.inner_text("body")
        print(f"  Full account page text: {body_text[:800]}")
        
        # Check all visible text on the page for verification keywords
        all_elements = await page.locator("*").all()
        for el in all_elements[:100]:
            try:
                text = await el.inner_text()
                text_lower = text.strip().lower()
                if any(kw in text_lower for kw in ["verif", "pending", "approved", "review", "status", "admin"]):
                    tag = await el.evaluate("el => el.tagName")
                    cls = await el.evaluate("el => el.className")
                    print(f"  Found [{tag}.{cls}]: {text.strip()[:150]}")
            except:
                pass

        # Check admin portal for verification status
        print("\n=== Check admin portal for user management ===")
        await page.goto("https://admin.ifz.startraven.com", wait_until="networkidle")
        await page.wait_for_timeout(3000)
        print(f"  Admin URL: {page.url}")
        await save(page, "20_admin_portal")
        body_text = await page.inner_text("body")
        print(f"  Admin page content: {body_text[:500]}")

        await browser.close()
        print("\n=== DONE ===")


asyncio.run(main())
