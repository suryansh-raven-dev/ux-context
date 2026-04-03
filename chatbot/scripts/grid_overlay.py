"""Draw coordinate grids on raw screenshots to identify exact element positions."""
from PIL import Image, ImageDraw, ImageFont
import os

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/apps/raven/help-doc/screenshots"
GRID_DIR = os.path.join(SCREENSHOTS_DIR, "grid")
os.makedirs(GRID_DIR, exist_ok=True)

try:
    FONT = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 12)
except Exception:
    FONT = ImageFont.load_default()


def add_grid(filename):
    img = Image.open(os.path.join(SCREENSHOTS_DIR, filename)).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    w, h = img.size

    for x in range(0, w, 50):
        color = (255, 0, 0, 100) if x % 100 == 0 else (255, 0, 0, 40)
        draw.line([(x, 0), (x, h)], fill=color, width=1)
        if x % 100 == 0:
            draw.text((x + 2, 2), str(x), fill=(255, 0, 0, 180), font=FONT)

    for y in range(0, h, 50):
        color = (0, 0, 255, 100) if y % 100 == 0 else (0, 0, 255, 40)
        draw.line([(0, y), (w, y)], fill=color, width=1)
        if y % 100 == 0:
            draw.text((2, y + 2), str(y), fill=(0, 0, 255, 180), font=FONT)

    result = Image.alpha_composite(img, overlay).convert("RGB")
    out = os.path.join(GRID_DIR, filename)
    result.save(out)
    print(f"  [OK] {filename}")


targets = [
    "01_login_page_initial.png",
    "02_login_employee_id_entered.png",
    "03_login_password_step.png",
    "04_login_password_filled.png",
    "05_domain_selection_modal.png",
    "06_main_app_after_domain.png",
    "07_settings_menu_open.png",
    "08_account_page.png",
    "10_email_login_entered.png",
    "15_email_company_entered.png",
    "16_after_company_email_continue.png",
    "33_ifz_admin_users.png",
    "verify_status_filter_open.png",
    "verify_unverified_users.png",
    "verification_banner.png",
]

for f in targets:
    if os.path.exists(os.path.join(SCREENSHOTS_DIR, f)):
        add_grid(f)
    else:
        print(f"  [MISSING] {f}")
