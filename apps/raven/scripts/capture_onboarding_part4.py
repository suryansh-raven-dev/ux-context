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

        # --- Login as admin ---
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

        # Select domain
        try:
            domain = page.locator("text=HSEF").first
            if await domain.is_visible():
                await domain.click()
                await page.wait_for_timeout(3000)
        except:
            pass

        # --- Navigate to Workplace Settings > Users ---
        print("\n=== Workplace Users ===")
        await page.goto(f"{BASE_URL}/workplace/dashboard", wait_until="networkidle")
        await page.wait_for_timeout(3000)

        # Click "Users" in the left sidebar of Workplace
        try:
            users_link = page.locator("text=Users").first
            await users_link.click()
            await page.wait_for_timeout(3000)
            print(f"  Users page URL: {page.url}")
            await save(page, "30_workplace_users_page")

            body = await page.inner_text("body")
            print(f"  Users page content: {body[:800]}")

            # Look for verification-related elements
            for kw in ["verified", "Verified", "unverified", "Unverified", "pending", "Pending",
                        "active", "Active", "inactive", "Inactive", "status", "Status",
                        "approve", "Approve", "reject", "Reject"]:
                if kw in body:
                    print(f"  Found: '{kw}'")

            # Try scrolling to see more users
            await page.evaluate("window.scrollBy(0, 300)")
            await page.wait_for_timeout(1000)
            await save(page, "31_workplace_users_scrolled")

            # Look for any action buttons on users
            buttons = await page.locator("button").all()
            for btn in buttons:
                txt = (await btn.inner_text()).strip()
                if txt and len(txt) < 50:
                    print(f"  Button: '{txt}'")

            # Check if there's a table with user data
            rows = await page.locator("tr, [role='row']").all()
            print(f"  Table rows found: {len(rows)}")
            for i, row in enumerate(rows[:10]):
                txt = (await row.inner_text()).strip()
                print(f"  Row {i}: {txt[:150]}")

        except Exception as e:
            print(f"  Users page error: {e}")

        # --- Check if Users link opens externally ---
        print("\n=== Check external Users link ===")
        try:
            await page.goto(f"{BASE_URL}/workplace/dashboard", wait_until="networkidle")
            await page.wait_for_timeout(2000)

            # Check if the Users link has an external icon or target
            users_el = page.locator("text=Users").first
            href = await users_el.get_attribute("href")
            target = await users_el.get_attribute("target")
            print(f"  Users href: {href}")
            print(f"  Users target: {target}")

            # Look for external link icon next to Users
            parent = page.locator("text=Users").locator("..")
            parent_html = await parent.inner_html()
            print(f"  Users parent HTML: {parent_html[:300]}")
        except Exception as e:
            print(f"  External check: {e}")

        # --- Try admin.startraven.com/users ---
        print("\n=== External Admin Portal ===")
        try:
            await page.goto("https://admin.startraven.com/users", wait_until="networkidle")
            await page.wait_for_timeout(3000)
            print(f"  Admin portal URL: {page.url}")
            await save(page, "32_admin_portal_users")
            body = await page.inner_text("body")
            print(f"  Admin portal content: {body[:500]}")
        except Exception as e:
            print(f"  Admin portal: {e}")

        # --- Try admin.ifz.startraven.com/users ---
        print("\n=== IFZ Admin Portal ===")
        try:
            await page.goto("https://admin.ifz.startraven.com/users", wait_until="networkidle")
            await page.wait_for_timeout(3000)
            print(f"  IFZ Admin URL: {page.url}")
            await save(page, "33_ifz_admin_users")
            body = await page.inner_text("body")
            print(f"  IFZ Admin content: {body[:500]}")
        except Exception as e:
            print(f"  IFZ Admin: {e}")

        # --- Now sign out and try magic link flow ---
        print("\n=== Sign Out ===")
        await page.goto(f"{BASE_URL}/search", wait_until="networkidle")
        await page.wait_for_timeout(2000)

        try:
            settings = page.locator("text=Settings").first
            await settings.click()
            await page.wait_for_timeout(1000)

            signout = page.locator("text=Sign Out").first
            await signout.click()
            await page.wait_for_timeout(3000)
        except:
            await page.goto(f"{BASE_URL}/login", wait_until="networkidle")
            await page.wait_for_timeout(2000)

        # --- Try magic link with registered email ---
        print("\n=== Magic Link Exploration ===")
        await page.goto(f"{BASE_URL}/login", wait_until="networkidle")
        await page.wait_for_timeout(2000)

        # Try with the admin email
        input_field = page.locator("input").first
        await input_field.fill("manikandan@indorama.com")
        await page.wait_for_timeout(1000)

        try:
            continue_btn = page.get_by_role("button", name="Continue")
            is_disabled = await continue_btn.get_attribute("disabled")
            print(f"  CONTINUE disabled for manikandan@indorama.com: {is_disabled}")

            if is_disabled is None:
                await continue_btn.click()
                await page.wait_for_timeout(3000)
                print(f"  URL after continue: {page.url}")
                await save(page, "34_registered_email_next_step")

                body = await page.inner_text("body")
                print(f"  Content: {body[:500]}")

                # Check for magic link option
                all_elements = await page.locator("button, a, [role='button']").all()
                for el in all_elements:
                    txt = (await el.inner_text()).strip()
                    if txt:
                        print(f"  Clickable: '{txt}'")
            else:
                print("  CONTINUE is disabled, email may not be valid")
                await save(page, "34_email_disabled")
        except Exception as e:
            print(f"  Magic link error: {e}")

        await browser.close()
        print("\n=== DONE ===")


asyncio.run(main())
