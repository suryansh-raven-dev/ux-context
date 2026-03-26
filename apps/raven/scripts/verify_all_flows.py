import asyncio
import os
from playwright.async_api import async_playwright

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/apps/raven/help-doc/screenshots"
os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

BASE_URL = os.environ.get("RAVEN_BASE_URL", "https://ifz.startraven.com")
EMPLOYEE_ID = os.environ["RAVEN_EMPLOYEE_ID"]
ADMIN_ID = os.environ["RAVEN_ADMIN_ID"]
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

        # ============================================================
        # TEST 1: Login as admin, go to admin portal, find a user
        # with a registered email to test email→password flow
        # ============================================================
        print("\n" + "=" * 60)
        print("TEST 1: Find registered emails in admin portal")
        print("=" * 60)

        await page.goto(f"{BASE_URL}/login", wait_until="networkidle")
        await page.wait_for_timeout(2000)

        input_field = page.locator("input").first
        await input_field.fill(ADMIN_ID)
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

        # Navigate to admin portal
        await page.goto("https://admin.ifz.startraven.com/users", wait_until="networkidle")
        await page.wait_for_timeout(5000)
        print(f"  Admin URL: {page.url}")

        if "not-authenticated" not in page.url:
            # We're in! Get emails from the table
            body = await page.inner_text("body")
            print(f"  Page text (first 1000): {body[:1000]}")

            # Look for any rows with emails
            rows = await page.locator("tr").all()
            print(f"  Total rows: {len(rows)}")
            emails_found = []
            for i, row in enumerate(rows[:30]):
                txt = (await row.inner_text()).strip()
                if "@" in txt:
                    emails_found.append(txt)
                    print(f"  Row {i} (has email): {txt[:200]}")
                elif i < 5:
                    print(f"  Row {i}: {txt[:200]}")
        else:
            print("  Admin portal not accessible, trying alternative approach")

        # Sign out from current session
        await page.goto(f"{BASE_URL}/search", wait_until="networkidle")
        await page.wait_for_timeout(2000)
        try:
            await page.locator("text=Settings").first.click()
            await page.wait_for_timeout(1000)
            await page.locator("text=Sign Out").first.click()
            await page.wait_for_timeout(3000)
        except:
            pass

        # ============================================================
        # TEST 2: Try email login with known test accounts
        # These are emails that should be registered on the platform
        # ============================================================
        print("\n" + "=" * 60)
        print("TEST 2: Email login with known registered emails")
        print("=" * 60)

        test_emails = [
            "suryansh@startraven.com",
            "suryansh.srivastava@startraven.com",
            "manikandan@indorama.com",
            "ravi@indorama.com",
        ]

        for email in test_emails:
            print(f"\n  --- Trying: {email} ---")
            await page.goto(f"{BASE_URL}/login", wait_until="networkidle")
            await page.wait_for_timeout(2000)

            input_field = page.locator("input").first
            await input_field.fill(email)
            await page.wait_for_timeout(1000)

            continue_btn = page.get_by_role("button", name="Continue")
            is_disabled = await continue_btn.get_attribute("disabled")

            if is_disabled is not None:
                print(f"  CONTINUE is DISABLED for {email}")
                continue

            await continue_btn.click()
            await page.wait_for_timeout(3000)

            body = await page.inner_text("body")
            page_url = page.url

            if "Create your account" in body:
                print(f"  RESULT: Shows REGISTRATION form (email not registered)")
            elif "Password" in body and "Login" in body and "Create" not in body:
                print(f"  RESULT: Shows PASSWORD step (email IS registered!)")
                await save(page, f"verify_email_password_{email.replace('@','_')}")

                # Check for any magic link option
                for kw in ["magic", "Magic", "link", "Link", "send", "Send",
                           "passwordless", "email me"]:
                    if kw.lower() in body.lower():
                        print(f"  ** FOUND MAGIC LINK REFERENCE: '{kw}' **")

                all_buttons = await page.locator("button, a, [role='button']").all()
                for btn in all_buttons:
                    txt = (await btn.inner_text()).strip()
                    if txt:
                        print(f"  Clickable element: '{txt}'")
            else:
                print(f"  RESULT: Unknown page state")
                print(f"  URL: {page_url}")
                print(f"  Body (first 300): {body[:300]}")
                await save(page, f"verify_email_unknown_{email.replace('@','_')}")

        # ============================================================
        # TEST 3: Try login with Employee ID that has email attached
        # to find the email → password path
        # ============================================================
        print("\n" + "=" * 60)
        print("TEST 3: Login via Employee ID, then check account for email")
        print("=" * 60)

        await page.goto(f"{BASE_URL}/login", wait_until="networkidle")
        await page.wait_for_timeout(2000)

        input_field = page.locator("input").first
        await input_field.fill(EMPLOYEE_ID)
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

        # Check account page for the email associated with this account
        await page.goto(f"{BASE_URL}/account", wait_until="networkidle")
        await page.wait_for_timeout(3000)

        body = await page.inner_text("body")
        print(f"  Account page full text: {body}")

        # Check for email field
        email_inputs = await page.locator("input").all()
        for inp in email_inputs:
            val = await inp.input_value()
            placeholder = await inp.get_attribute("placeholder")
            label = await inp.get_attribute("aria-label")
            print(f"  Input: value='{val}', placeholder='{placeholder}', label='{label}'")

        # ============================================================
        # TEST 4: Verification banner - scroll up and check everything
        # ============================================================
        print("\n" + "=" * 60)
        print("TEST 4: Check for verification banner thoroughly")
        print("=" * 60)

        # Scroll to very top
        await page.evaluate("window.scrollTo(0, 0)")
        await page.wait_for_timeout(500)

        # Get the full HTML of the main content area
        main_html = await page.inner_html("body")

        # Check for any banner/alert/notification in HTML
        import re
        alert_patterns = [
            r'verif\w+', r'pending', r'approved', r'unverified',
            r'account.*status', r'banner', r'alert', r'notification',
            r'warning', r'info.*bar', r'snackbar'
        ]
        for pattern in alert_patterns:
            matches = re.findall(pattern, main_html, re.IGNORECASE)
            if matches:
                print(f"  HTML pattern '{pattern}': {matches[:3]}")

        # Take a very detailed screenshot of just the top of the page
        await save(page, "verify_account_top")

        # ============================================================
        # TEST 5: Sign out and test what happens with the test employee's email
        # ============================================================
        print("\n" + "=" * 60)
        print(f"TEST 5: Sign out and check if {EMPLOYEE_ID} has email login")
        print("=" * 60)

        try:
            await page.locator("text=Settings").first.click()
            await page.wait_for_timeout(1000)
            await page.locator("text=Sign Out").first.click()
            await page.wait_for_timeout(3000)
        except:
            await page.goto(f"{BASE_URL}/login", wait_until="networkidle")
            await page.wait_for_timeout(2000)

        # Try with the startraven email that might be associated
        await page.goto(f"{BASE_URL}/login", wait_until="networkidle")
        await page.wait_for_timeout(2000)

        # Try suryansh.srivastava@startraven.com
        input_field = page.locator("input").first
        await input_field.fill("suryansh.srivastava@startraven.com")
        await page.wait_for_timeout(1000)

        continue_btn = page.get_by_role("button", name="Continue")
        is_disabled = await continue_btn.get_attribute("disabled")
        print(f"  CONTINUE disabled for suryansh.srivastava@startraven.com: {is_disabled}")

        if is_disabled is None:
            await continue_btn.click()
            await page.wait_for_timeout(3000)

            body = await page.inner_text("body")
            if "Create your account" in body:
                print("  RESULT: Registration form (NOT registered)")
            elif "Login" in body and "Password" in body:
                print("  RESULT: Password step (IS registered)")

                # CRITICAL: Check for magic link option here
                all_text = body
                for kw in ["magic", "Magic", "link sent", "email link",
                           "passwordless", "Login with email", "Send link",
                           "Use magic link", "Send magic link"]:
                    if kw.lower() in all_text.lower():
                        print(f"  ** MAGIC LINK FOUND: '{kw}' **")

                all_clickable = await page.locator("button, a, [role='button'], [role='link']").all()
                for el in all_clickable:
                    txt = (await el.inner_text()).strip()
                    href = await el.get_attribute("href")
                    if txt:
                        print(f"  Clickable: '{txt}' (href={href})")

                await save(page, "verify_registered_email_password_step")
            else:
                print(f"  RESULT: Unknown - body: {body[:300]}")
                await save(page, "verify_unknown_state")

        await browser.close()
        print("\n" + "=" * 60)
        print("ALL TESTS COMPLETE")
        print("=" * 60)


asyncio.run(main())
