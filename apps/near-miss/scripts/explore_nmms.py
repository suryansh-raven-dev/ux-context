"""
NMMS Comprehensive Exploration Script
Logs in with multiple roles via Select Role, navigates every screen, captures screenshots.
"""

import asyncio
import json
import os
from datetime import datetime
from playwright.async_api import async_playwright

BASE_URL = "https://nmms.staging.startraven.com"
SCREENSHOT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "screenshots", "exploration")
REPORT_PATH = os.path.join(SCREENSHOT_DIR, "exploration_report.json")

ROLES = [
    {"label": "admin", "select_text": "Admin"},
    {"label": "operator", "select_text": "Operator - PP"},
    {"label": "safety-manager", "select_text": "Safety Manager"},
    {"label": "hod-pp", "select_text": "Head of Department - PP"},
    {"label": "hod-pe", "select_text": "Head of Department - PE"},
    {"label": "hos-pp", "select_text": "Head of Section - PP"},
    {"label": "hsef", "select_text": "HSEF Ambassador - PP"},
]

os.makedirs(SCREENSHOT_DIR, exist_ok=True)
report = {"generated_at": datetime.now().isoformat(), "base_url": BASE_URL, "roles": {}}


async def ss(page, name, role_label):
    path = os.path.join(SCREENSHOT_DIR, f"{role_label}_{name}.png")
    await page.screenshot(path=path, full_page=True)
    return path


async def get_page_info(page):
    info = {"url": page.url, "title": await page.title()}
    try:
        info["visible_text"] = await page.evaluate("""() => {
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
            const texts = [];
            let node;
            while (node = walker.nextNode()) {
                const t = node.textContent.trim();
                if (t && t.length > 1 && t.length < 200 && node.parentElement.offsetParent !== null) {
                    texts.push(t);
                }
            }
            return [...new Set(texts)].slice(0, 100);
        }""")
    except Exception:
        info["visible_text"] = []

    try:
        info["buttons"] = await page.evaluate("""() => {
            return Array.from(document.querySelectorAll('button, a[role="button"], [role="button"]'))
                .filter(e => e.offsetParent !== null)
                .map(e => ({text: e.innerText.trim().substring(0,80), disabled: e.disabled || false, tag: e.tagName}))
                .filter(e => e.text.length > 0);
        }""")
    except Exception:
        info["buttons"] = []

    try:
        info["inputs"] = await page.evaluate("""() => {
            return Array.from(document.querySelectorAll('input, textarea, select'))
                .filter(e => e.offsetParent !== null)
                .map(e => ({type: e.type || e.tagName.toLowerCase(), placeholder: e.placeholder || '', name: e.name || '', value: e.value ? e.value.substring(0,50) : ''}));
        }""")
    except Exception:
        info["inputs"] = []

    try:
        info["tabs"] = await page.evaluate("""() => {
            return Array.from(document.querySelectorAll('[role="tab"], .MuiTab-root'))
                .filter(e => e.offsetParent !== null)
                .map(e => ({text: e.innerText.trim(), selected: e.getAttribute('aria-selected') === 'true' || e.classList.contains('Mui-selected')}));
        }""")
    except Exception:
        info["tabs"] = []

    try:
        info["links"] = await page.evaluate("""() => {
            return Array.from(document.querySelectorAll('a[href]'))
                .filter(e => e.offsetParent !== null && e.innerText.trim().length > 0)
                .map(e => ({text: e.innerText.trim().substring(0,80), href: e.href}))
                .slice(0, 50);
        }""")
    except Exception:
        info["links"] = []

    try:
        info["tables"] = await page.evaluate("""() => {
            return Array.from(document.querySelectorAll('table, .MuiTable-root, .MuiDataGrid-root, [role="grid"]'))
                .filter(e => e.offsetParent !== null)
                .map(e => {
                    const headers = Array.from(e.querySelectorAll('th, [role="columnheader"]')).map(th => th.innerText.trim()).filter(h => h);
                    const rows = e.querySelectorAll('tbody tr, [role="row"]').length;
                    return {headers, rowCount: rows};
                });
        }""")
    except Exception:
        info["tables"] = []

    try:
        info["headings"] = await page.evaluate("""() => {
            return Array.from(document.querySelectorAll('h1, h2, h3, h4'))
                .filter(e => e.offsetParent !== null)
                .map(e => ({tag: e.tagName, text: e.innerText.trim().substring(0,150)}))
                .filter(e => e.text.length > 0)
                .slice(0, 20);
        }""")
    except Exception:
        info["headings"] = []

    try:
        info["nav_items"] = await page.evaluate("""() => {
            const selectors = [
                '.MuiDrawer-root a', '.MuiDrawer-root button',
                '[class*="sidebar"] a', '[class*="Sidebar"] a',
                'nav a', 'nav button',
                '.MuiList-root a', '.MuiListItem-root',
                '[class*="nav-"] a', '[class*="menu-"] a'
            ];
            const seen = new Set();
            const items = [];
            for (const sel of selectors) {
                for (const el of document.querySelectorAll(sel)) {
                    const text = el.innerText.trim();
                    const href = el.href || '';
                    if (text && !seen.has(text) && text.length < 100) {
                        seen.add(text);
                        items.push({text, href, visible: el.offsetParent !== null});
                    }
                }
            }
            return items;
        }""")
    except Exception:
        info["nav_items"] = []

    return info


async def explore_role(browser, role):
    context = await browser.new_context(viewport={"width": 1440, "height": 900})
    page = await context.new_page()
    rl = role["label"]
    rr = {"screens": {}, "navigation": [], "profile_menu": [], "errors": []}
    sc = 0

    print(f"\n{'='*60}")
    print(f"  ROLE: {rl} ({role['select_text']})")
    print(f"{'='*60}")

    # Navigate to login
    try:
        await page.goto(BASE_URL, wait_until="networkidle", timeout=30000)
        await page.wait_for_timeout(2000)
    except Exception as e:
        rr["errors"].append(f"Load failed: {e}")
        await context.close()
        return rr

    # Capture login page
    sc += 1
    login_info = await get_page_info(page)
    await ss(page, f"{sc:02d}_login", rl)
    rr["screens"]["login"] = login_info
    print(f"  [1] Login page: {page.url}")

    # Click SELECT ROLE
    try:
        sr_link = await page.query_selector("text=SELECT ROLE")
        if not sr_link:
            sr_link = await page.query_selector("text=Select Role")
        if sr_link:
            await sr_link.click()
            await page.wait_for_timeout(2000)
            sc += 1
            await ss(page, f"{sc:02d}_select_role", rl)

            # Click on the specific role
            role_el = await page.query_selector(f"text='{role['select_text']}'")
            if not role_el:
                role_el = await page.get_by_text(role['select_text'], exact=True).first
            if role_el:
                await role_el.click()
                print(f"  [2] Selected role: {role['select_text']}")
                await page.wait_for_timeout(5000)
            else:
                print(f"  [!] Could not find role option: {role['select_text']}")
                rr["errors"].append(f"Role option not found: {role['select_text']}")
        else:
            print(f"  [!] No SELECT ROLE link found")
            rr["errors"].append("No SELECT ROLE link found")
    except Exception as e:
        print(f"  [!] Login error: {e}")
        rr["errors"].append(f"Login: {e}")

    sc += 1
    await ss(page, f"{sc:02d}_after_login", rl)
    rr["screens"]["after_login"] = await get_page_info(page)
    print(f"  [3] After login: {page.url}")

    # Check if we're actually logged in (not still on login/select-role)
    if "/login" in page.url or "/select-role" in page.url:
        print(f"  [!] Still on login page, trying alternative approach...")
        # Try clicking the role text more aggressively
        try:
            await page.click(f"text={role['select_text']}")
            await page.wait_for_timeout(5000)
            sc += 1
            await ss(page, f"{sc:02d}_retry_login", rl)
            print(f"  [3b] After retry: {page.url}")
        except Exception:
            pass

    if "/login" in page.url or "/select-role" in page.url:
        print(f"  [!] Login failed for {rl}, skipping exploration")
        rr["errors"].append("Login failed - could not get past login/select-role page")
        await context.close()
        return rr

    # Capture the main application page
    main_info = await get_page_info(page)
    rr["screens"]["main"] = main_info
    rr["navigation"] = main_info.get("nav_items", [])
    print(f"  Navigation items: {[n['text'] for n in rr['navigation']]}")

    # Try profile menu
    try:
        avatar_selectors = [
            "[class*='avatar']", "[class*='Avatar']",
            "[class*='profile']", "[class*='Profile']",
            "img[alt*='avatar']", "img[alt*='user']", "img[alt*='profile']",
            ".MuiAvatar-root", "[class*='UserMenu']", "[class*='userMenu']"
        ]
        for sel in avatar_selectors:
            avatar = await page.query_selector(sel)
            if avatar and await avatar.is_visible():
                await avatar.click()
                await page.wait_for_timeout(1000)
                sc += 1
                await ss(page, f"{sc:02d}_profile_menu", rl)
                menu_items = await page.evaluate("""() => {
                    const items = document.querySelectorAll('[role="menu"] [role="menuitem"], [role="menu"] li, .MuiMenu-list li, .MuiPopover-root li, .MuiMenuItem-root');
                    return Array.from(items).map(e => e.innerText.trim()).filter(t => t);
                }""")
                rr["profile_menu"] = menu_items
                print(f"  Profile menu: {menu_items}")
                await page.keyboard.press("Escape")
                await page.wait_for_timeout(500)
                break
    except Exception as e:
        rr["errors"].append(f"Profile menu: {e}")

    # Navigate to each link found in nav
    visited = set()
    nav_links = [n for n in rr["navigation"] if n.get("href") and n.get("visible", True)]

    # Also collect links from the page
    for link in main_info.get("links", []):
        href = link.get("href", "")
        text = link.get("text", "")
        if href and BASE_URL in href and text and "logout" not in text.lower():
            nav_links.append(link)

    for nav in nav_links:
        href = nav.get("href", "")
        text = nav.get("text", "unknown")
        if not href or href in visited or "logout" in href.lower() or "signout" in href.lower() or "javascript" in href:
            continue
        if not href.startswith(BASE_URL):
            continue
        visited.add(href)

        try:
            sc += 1
            name = text.replace(" ", "_").replace("/", "-").lower()[:25]
            print(f"  [{sc}] Navigating: {text} -> {href}")
            await page.goto(href, wait_until="networkidle", timeout=15000)
            await page.wait_for_timeout(2000)

            if "/login" in page.url or "/select-role" in page.url:
                print(f"      Redirected to login, skipping")
                continue

            pg = await get_page_info(page)
            await ss(page, f"{sc:02d}_{name}", rl)
            rr["screens"][name] = pg

            # Explore sub-tabs
            for tab in pg.get("tabs", []):
                tab_text = tab.get("text", "")
                if not tab_text or tab.get("selected"):
                    continue
                try:
                    sc += 1
                    tab_name = f"{name}_tab_{tab_text.replace(' ', '_').lower()[:15]}"
                    await page.get_by_role("tab", name=tab_text).click()
                    await page.wait_for_timeout(2000)
                    tab_pg = await get_page_info(page)
                    await ss(page, f"{sc:02d}_{tab_name}", rl)
                    rr["screens"][tab_name] = tab_pg
                    print(f"      Tab: {tab_text}")
                except Exception:
                    pass

        except Exception as e:
            print(f"      Error: {e}")
            rr["errors"].append(f"Nav to {text}: {e}")

    # Try known paths
    known_paths = [
        ("/reports", "reports"),
        ("/reports?status=active", "reports_active"),
        ("/reports?status=closed", "reports_closed"),
        ("/reports?status=rejected", "reports_rejected"),
        ("/analysis", "analysis"),
        ("/admin", "admin_portal"),
        ("/admin/users", "admin_users"),
        ("/settings", "settings"),
        ("/profile", "profile"),
    ]
    for path, name in known_paths:
        full = BASE_URL + path
        if full in visited:
            continue
        visited.add(full)
        try:
            sc += 1
            await page.goto(full, wait_until="networkidle", timeout=10000)
            await page.wait_for_timeout(1500)
            if "/login" in page.url or "/select-role" in page.url:
                continue
            pg = await get_page_info(page)
            if pg.get("headings") or pg.get("buttons") or pg.get("tables") or pg.get("tabs"):
                await ss(page, f"{sc:02d}_{name}", rl)
                rr["screens"][name] = pg
                print(f"  [{sc}] Found: {path} -> {page.url}")
        except Exception:
            pass

    await context.close()
    return rr


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        print(f"Exploring {BASE_URL}")
        print(f"Screenshots: {SCREENSHOT_DIR}\n")

        for role in ROLES:
            try:
                data = await explore_role(browser, role)
                report["roles"][role["label"]] = data
            except Exception as e:
                print(f"  FATAL: {e}")
                report["roles"][role["label"]] = {"error": str(e)}

        await browser.close()

    with open(REPORT_PATH, "w") as f:
        json.dump(report, f, indent=2, default=str)

    # Print summary
    print(f"\n{'='*60}")
    print(f"SUMMARY")
    print(f"{'='*60}")
    for rl, data in report["roles"].items():
        screens = list(data.get("screens", {}).keys()) if isinstance(data, dict) else []
        errors = data.get("errors", []) if isinstance(data, dict) else []
        nav = data.get("navigation", []) if isinstance(data, dict) else []
        print(f"\n{rl}:")
        print(f"  Screens explored: {len(screens)}")
        print(f"  Nav items: {len(nav)}")
        print(f"  Errors: {len(errors)}")
        if screens:
            print(f"  Screens: {screens}")
        if errors:
            for e in errors[:3]:
                print(f"  Error: {e}")

    print(f"\nReport: {REPORT_PATH}")


if __name__ == "__main__":
    asyncio.run(main())
