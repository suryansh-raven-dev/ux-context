from PIL import Image
import os

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/apps/raven/help-doc/screenshots"


def scan_horizontal_line(img, y, x_start=600, x_end=1300):
    """Show color transitions along a horizontal line."""
    if y >= img.size[1]:
        return
    pixels = img.load()
    transitions = []
    prev = pixels[x_start, y][:3]
    for x in range(x_start + 1, min(x_end, img.size[0])):
        cur = pixels[x, y][:3]
        diff = sum(abs(cur[i] - prev[i]) for i in range(3))
        if diff > 60:
            transitions.append((x, cur[:3]))
        prev = cur
    return transitions


def find_input_fields(img, x_range=(880, 1260)):
    """Find horizontal lines of input field borders (look for distinct colored borders)."""
    pixels = img.load()
    border_rows = {}
    
    for y in range(200, 700):
        border_count = 0
        for x in range(x_range[0], min(x_range[1], img.size[0])):
            p = pixels[x, y][:3]
            gray_val = sum(p) / 3
            if 100 < gray_val < 200 and abs(p[0] - p[1]) < 20 and abs(p[1] - p[2]) < 20:
                border_count += 1
        if border_count > 100:
            border_rows[y] = border_count
    
    if border_rows:
        rows = sorted(border_rows.keys())
        groups = []
        current_group = [rows[0]]
        for r in rows[1:]:
            if r - current_group[-1] <= 2:
                current_group.append(r)
            else:
                groups.append(current_group)
                current_group = [r]
        groups.append(current_group)
        return [(g[0], g[-1]) for g in groups]
    return []


def find_solid_color_rects(img, target_rgb, tolerance, x_range=(880, 1260), y_range=(200, 600)):
    """Find rectangles of a specific solid color."""
    pixels = img.load()
    matching_rows = {}
    
    for y in range(y_range[0], min(y_range[1], img.size[1])):
        count = 0
        min_x = None
        max_x = None
        for x in range(x_range[0], min(x_range[1], img.size[0])):
            p = pixels[x, y][:3]
            if all(abs(p[i] - target_rgb[i]) < tolerance for i in range(3)):
                count += 1
                if min_x is None:
                    min_x = x
                max_x = x
        if count > 50:
            matching_rows[y] = (min_x, max_x, count)
    
    if matching_rows:
        rows = sorted(matching_rows.keys())
        groups = []
        current_group = [rows[0]]
        for r in rows[1:]:
            if r - current_group[-1] <= 2:
                current_group.append(r)
            else:
                groups.append(current_group)
                current_group = [r]
        groups.append(current_group)
        
        results = []
        for g in groups:
            all_min_x = min(matching_rows[r][0] for r in g)
            all_max_x = max(matching_rows[r][1] for r in g)
            results.append((all_min_x, g[0], all_max_x, g[-1]))
        return results
    return []


def analyze(filename):
    filepath = os.path.join(SCREENSHOTS_DIR, filename)
    if not os.path.exists(filepath):
        print(f"\n=== {filename}: NOT FOUND ===")
        return
    
    img = Image.open(filepath).convert("RGB")
    print(f"\n=== {filename} ({img.size[0]}x{img.size[1]}) ===")
    
    # Find the white card boundary (left edge)
    pixels = img.load()
    card_left = None
    for x in range(500, 900):
        p = pixels[x, 350][:3]
        if p[0] > 248 and p[1] > 248 and p[2] > 248:
            card_left = x
            break
    if card_left:
        print(f"  Card left edge at x={card_left} (at y=350)")
    
    # Find specific purple button (deep purple ~#6730B5 / ~103,48,181)
    purple_buttons = find_solid_color_rects(img, (103, 48, 181), 45, 
                                            x_range=(880, 1260), y_range=(200, 800))
    for i, btn in enumerate(purple_buttons):
        print(f"  Purple button {i}: ({btn[0]}, {btn[1]}) to ({btn[2]}, {btn[3]})")
    
    # Find grey disabled button
    grey_buttons = find_solid_color_rects(img, (189, 189, 189), 20,
                                          x_range=(880, 1260), y_range=(200, 800))
    for i, btn in enumerate(grey_buttons):
        if btn[3] - btn[1] > 10 and btn[3] - btn[1] < 60:
            print(f"  Grey button {i}: ({btn[0]}, {btn[1]}) to ({btn[2]}, {btn[3]})")
    
    # Scan specific rows for dark text clusters (headings, links)
    for check_y in [255, 290, 320, 350, 410, 440, 475, 500, 540, 570, 600]:
        if check_y < img.size[1]:
            dark_pixels = []
            for x in range(880, min(1260, img.size[0])):
                p = pixels[x, check_y][:3]
                if p[0] < 60 and p[1] < 60 and p[2] < 60:
                    dark_pixels.append(x)
            if dark_pixels:
                print(f"  Dark text at y={check_y}: x={min(dark_pixels)}-{max(dark_pixels)}")
    
    # Look for the input field outline (dark border pixels)
    for check_y in range(400, 600):
        border_count = 0
        min_x = None
        max_x = None
        for x in range(880, min(1260, img.size[0])):
            p = pixels[x, check_y][:3]
            if 80 < p[0] < 170 and 80 < p[1] < 170 and 80 < p[2] < 170 and abs(p[0]-p[1]) < 10:
                border_count += 1
                if min_x is None: min_x = x
                max_x = x
        if border_count > 200:
            print(f"  Grey border line at y={check_y}: x={min_x}-{max_x}")


for f in ['01_login_page_initial.png', '02_login_employee_id_entered.png',
          '03_login_password_step.png', '04_login_password_filled.png',
          '05_domain_selection_modal.png', '08_account_page.png',
          '16_after_company_email_continue.png',
          '33_ifz_admin_users.png', 'verification_banner.png']:
    analyze(f)
