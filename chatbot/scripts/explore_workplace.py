import asyncio
import json
import os
from playwright.async_api import async_playwright

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/screenshots/settings"
os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

EMPLOYEE_ID = os.environ["RAVEN_EMPLOYEE_ID"]
PASSWORD = os.environ["RAVEN_PASSWORD"]

sc = 30

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

async def login_and_select_domain(page):
    await page.goto("https://ifz.startraven.com", wait_until="networkidle", timeout=30000)
    emp_input = await page.wait_for_selector("input", timeout=5000)
    await emp_input.fill(EMPLOYEE_ID)
    continue_btn = await page.query_selector("button:has-text('Continue')")
    await continue_btn.click()
    await page.wait_for_timeout(2000)
    pwd_input = await page.wait_for_selector("input[type='password']", timeout=5000)
    await pwd_input.fill(PASSWORD)
    login_btn = await page.query_selector("button:has-text('Login')")
    if login_btn:
        await login_btn.click()
    await page.wait_for_timeout(5000)
    hsef = await page.query_selector("text=HSEF")
    if hsef:
        await hsef.click()
        await page.wait_for_timeout(3000)

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()

        await login_and_select_domain(page)
        print("[Login] Logged in\n")

        # Navigate to Workplace Settings
        print("=" * 60)
        print("WORKPLACE SETTINGS - DASHBOARD (scroll down)")
        print("=" * 60)
        await page.goto("https://ifz.startraven.com/workplace/dashboard", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(3000)
        
        # Scroll down to see full dashboard
        await page.evaluate("window.scrollTo(0, 500)")
        await page.wait_for_timeout(1000)
        await ss(page, "workplace_dashboard_mid")
        body_text = await get_all_text(page)
        print(f"Mid scroll text:\n{body_text[:3000]}")

        await page.evaluate("window.scrollTo(0, 1000)")
        await page.wait_for_timeout(1000)
        await ss(page, "workplace_dashboard_bottom1")
        
        await page.evaluate("window.scrollTo(0, 1500)")
        await page.wait_for_timeout(1000)
        await ss(page, "workplace_dashboard_bottom2")

        await page.evaluate("window.scrollTo(0, 2000)")
        await page.wait_for_timeout(1000)
        await ss(page, "workplace_dashboard_bottom3")

        await page.evaluate("window.scrollTo(0, 2500)")
        await page.wait_for_timeout(1000)
        await ss(page, "workplace_dashboard_bottom4")

        # Full page text
        body_text = await get_all_text(page)
        print(f"\nFull dashboard text:\n{body_text[:5000]}")

        # ===== USERS section =====
        print("\n" + "=" * 60)
        print("WORKPLACE SETTINGS - USERS")
        print("=" * 60)
        users_link = await page.query_selector("a:has-text('Users'), li:has-text('Users')")
        if users_link:
            await users_link.click()
            await page.wait_for_timeout(3000)
            await ss(page, "workplace_users")
            body_text = await get_all_text(page)
            print(f"Users page text:\n{body_text[:5000]}")

            # Scroll to see more
            await page.evaluate("window.scrollTo(0, 500)")
            await page.wait_for_timeout(1000)
            await ss(page, "workplace_users_scrolled")

        # ===== HELP & SUPPORT =====
        print("\n" + "=" * 60)
        print("WORKPLACE SETTINGS - HELP & SUPPORT")
        print("=" * 60)
        help_link = await page.query_selector("a:has-text('Help'), li:has-text('Help')")
        if help_link:
            await help_link.click()
            await page.wait_for_timeout(3000)
            await ss(page, "workplace_help_support")
            body_text = await get_all_text(page)
            print(f"Help & Support text:\n{body_text[:3000]}")

        # ===== Filter by specific plant on Dashboard =====
        print("\n" + "=" * 60)
        print("DASHBOARD - FILTER BY PLANT")
        print("=" * 60)
        await page.goto("https://ifz.startraven.com/workplace/dashboard", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(2000)

        # Click on HSEF plant filter
        hsef_filter = await page.query_selector("text=HSEF")
        if hsef_filter:
            await hsef_filter.click()
            await page.wait_for_timeout(2000)
            await ss(page, "dashboard_hsef_filter")
            body_text = await get_all_text(page)
            print(f"HSEF filtered dashboard:\n{body_text[:3000]}")

        print(f"\n[Done] Total screenshots: {sc-30}")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
