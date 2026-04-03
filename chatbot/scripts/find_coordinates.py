from PIL import Image
import os

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/apps/raven/help-doc/screenshots"


def find_color_regions(img, target_rgb, tolerance=30):
    """Find bounding boxes of regions matching a target color."""
    w, h = img.size
    pixels = img.load()
    matches = []
    for y in range(h):
        for x in range(w):
            p = pixels[x, y]
            if (abs(p[0] - target_rgb[0]) < tolerance and
                abs(p[1] - target_rgb[1]) < tolerance and
                abs(p[2] - target_rgb[2]) < tolerance):
                matches.append((x, y))
    if not matches:
        return None
    min_x = min(m[0] for m in matches)
    max_x = max(m[0] for m in matches)
    min_y = min(m[1] for m in matches)
    max_y = max(m[1] for m in matches)
    return (min_x, min_y, max_x, max_y)


def find_purple_button(img):
    """Find the purple CONTINUE/LOGIN button."""
    return find_color_regions(img, (103, 58, 183), tolerance=40)


def find_text_region(img, y_start, y_end, x_start=600, x_end=900):
    """Find horizontal extent of dark text in a row range."""
    pixels = img.load()
    text_pixels = []
    for y in range(y_start, min(y_end, img.size[1])):
        for x in range(x_start, min(x_end, img.size[0])):
            p = pixels[x, y]
            if p[0] < 80 and p[1] < 80 and p[2] < 80:
                text_pixels.append((x, y))
    if not text_pixels:
        return None
    return (min(t[0] for t in text_pixels), min(t[1] for t in text_pixels),
            max(t[0] for t in text_pixels), max(t[1] for t in text_pixels))


def analyze_screenshot(filename):
    filepath = os.path.join(SCREENSHOTS_DIR, filename)
    if not os.path.exists(filepath):
        print(f"  {filename}: NOT FOUND")
        return
    
    img = Image.open(filepath).convert("RGB")
    w, h = img.size
    print(f"\n=== {filename} ({w}x{h}) ===")
    
    # Find purple button
    purple = find_purple_button(img)
    if purple:
        print(f"  Purple button: ({purple[0]}, {purple[1]}) to ({purple[2]}, {purple[3]})")
    else:
        print(f"  Purple button: NOT FOUND")
    
    # Find input fields by looking for the characteristic purple/blue border
    purple_border = find_color_regions(img, (103, 58, 183), tolerance=20)
    if purple_border:
        print(f"  Purple border region: ({purple_border[0]}, {purple_border[1]}) to ({purple_border[2]}, {purple_border[3]})")
    
    # Find grey button (disabled LOGIN)
    grey_btn = find_color_regions(img, (224, 224, 224), tolerance=15)
    if grey_btn:
        print(f"  Grey region: ({grey_btn[0]}, {grey_btn[1]}) to ({grey_btn[2]}, {grey_btn[3]})")

    # Scan for the white card area - look for the card shadow/border
    # The form card starts roughly where the white background begins after the blue-gray left side
    pixels = img.load()
    for check_y in [250, 300, 330, 370, 400]:
        if check_y < h:
            row_colors = []
            transitions = []
            prev_bright = False
            for x in range(w):
                p = pixels[x, check_y]
                bright = (p[0] > 240 and p[1] > 240 and p[2] > 240)
                if bright and not prev_bright:
                    transitions.append(x)
                prev_bright = bright
            if transitions:
                print(f"  Row y={check_y} white starts at x={transitions[:3]}")


# Analyze each key screenshot
for f in ['01_login_page_initial.png', '02_login_employee_id_entered.png',
          '03_login_password_step.png', '04_login_password_filled.png',
          '05_domain_selection_modal.png', '06_main_app_after_domain.png',
          '07_settings_menu_open.png', '08_account_page.png',
          '10_email_login_entered.png', '16_after_company_email_continue.png',
          '15_email_company_entered.png', '33_ifz_admin_users.png',
          'verify_status_filter_open.png', 'verify_unverified_users.png',
          'verification_banner.png']:
    analyze_screenshot(f)
