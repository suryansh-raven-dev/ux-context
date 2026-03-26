from PIL import Image
import os

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/apps/raven/help-doc/screenshots"


def sample_row(img, y, x_start, x_end, step=1):
    """Sample pixel colors along a row and find distinct regions."""
    if y >= img.size[1]:
        return []
    pixels = img.load()
    regions = []
    current_start = x_start
    prev_color = pixels[x_start, y][:3]
    
    for x in range(x_start + step, min(x_end + 1, img.size[0]), step):
        cur = pixels[x, y][:3]
        diff = sum(abs(cur[i] - prev_color[i]) for i in range(3))
        if diff > 40:
            regions.append((current_start, x - 1, prev_color))
            current_start = x
            prev_color = cur
    regions.append((current_start, min(x_end, img.size[0] - 1), prev_color))
    return regions


def find_element_bounds(img, y_scan_start, y_scan_end, x_range, bg_color, threshold=30):
    """Find a rectangular element that differs from background."""
    pixels = img.load()
    element_rows = []
    
    for y in range(y_scan_start, min(y_scan_end, img.size[1])):
        non_bg = 0
        min_x = None
        max_x = None
        for x in range(x_range[0], min(x_range[1], img.size[0])):
            p = pixels[x, y][:3]
            diff = sum(abs(p[i] - bg_color[i]) for i in range(3))
            if diff > threshold:
                non_bg += 1
                if min_x is None:
                    min_x = x
                max_x = x
        if non_bg > 20:
            element_rows.append((y, min_x, max_x))
    
    if not element_rows:
        return None
    return (min(r[1] for r in element_rows), element_rows[0][0],
            max(r[2] for r in element_rows), element_rows[-1][0])


def map_login_pages():
    for fname in ['01_login_page_initial.png', '02_login_employee_id_entered.png']:
        filepath = os.path.join(SCREENSHOTS_DIR, fname)
        img = Image.open(filepath).convert("RGB")
        pixels = img.load()
        print(f"\n=== {fname} ===")
        
        # The card background is white. Let's find the card edges.
        # Scan at y=400 to find where white card starts/ends
        for y in [380, 400, 450, 470, 500, 530, 540, 560]:
            white_start = None
            white_end = None
            for x in range(600, 1400):
                p = pixels[x, y][:3]
                is_white = all(c > 245 for c in p)
                if is_white and white_start is None:
                    white_start = x
                if is_white:
                    white_end = x
            
            # Check for purple button at this row
            purple_start = None
            purple_end = None
            for x in range(600, 1400):
                p = pixels[x, y][:3]
                is_purple = (60 < p[0] < 140 and 20 < p[1] < 80 and 140 < p[2] < 220)
                if is_purple and purple_start is None:
                    purple_start = x
                if is_purple:
                    purple_end = x
            
            # Check for input border (darker outline)
            border_start = None
            border_end = None
            for x in range(850, 1300):
                p = pixels[x, y][:3]
                is_border = all(100 < c < 190 for c in p) and max(p) - min(p) < 20
                if is_border and border_start is None:
                    border_start = x
                if is_border:
                    border_end = x
            
            result = f"  y={y}: "
            if white_start:
                result += f"white=[{white_start}-{white_end}] "
            if purple_start:
                result += f"PURPLE=[{purple_start}-{purple_end}] "
            if border_start:
                result += f"border=[{border_start}-{border_end}]"
            print(result)
        
        # Find the "Sign in" heading text
        for y in range(350, 420):
            dark_start = None
            dark_end = None
            for x in range(900, 1200):
                p = pixels[x, y][:3]
                if all(c < 50 for c in p):
                    if dark_start is None: dark_start = x
                    dark_end = x
            if dark_start and (dark_end - dark_start) > 20:
                print(f"  Heading text at y={y}: x={dark_start}-{dark_end}")

        # Find the "Email or Employee ID" label text
        for y in range(420, 500):
            dark_start = None
            dark_end = None
            for x in range(900, 1200):
                p = pixels[x, y][:3]
                if all(c < 80 for c in p):
                    if dark_start is None: dark_start = x
                    dark_end = x
            if dark_start and (dark_end - dark_start) > 20:
                print(f"  Label/text at y={y}: x={dark_start}-{dark_end}")


def map_password_page():
    for fname in ['03_login_password_step.png', '04_login_password_filled.png']:
        filepath = os.path.join(SCREENSHOTS_DIR, fname)
        img = Image.open(filepath).convert("RGB")
        pixels = img.load()
        print(f"\n=== {fname} ===")
        
        for y in [300, 350, 370, 390, 400, 420, 440, 460, 470, 490, 500, 520, 530, 550, 560, 580, 590]:
            white_start = None
            white_end = None
            purple_start = None
            purple_end = None
            grey_btn_start = None
            grey_btn_end = None
            
            for x in range(600, 1400):
                p = pixels[x, y][:3]
                if all(c > 245 for c in p):
                    if white_start is None: white_start = x
                    white_end = x
                if 60 < p[0] < 140 and 20 < p[1] < 80 and 140 < p[2] < 220:
                    if purple_start is None: purple_start = x
                    purple_end = x
                if all(180 < c < 210 for c in p) and max(p) - min(p) < 10:
                    if grey_btn_start is None: grey_btn_start = x
                    grey_btn_end = x
            
            # Also check for blue text (BACK link)
            blue_start = None
            blue_end = None
            for x in range(900, 1200):
                p = pixels[x, y][:3]
                if p[2] > 180 and p[0] < 80 and p[1] < 80:
                    if blue_start is None: blue_start = x
                    blue_end = x
            
            result = f"  y={y}: "
            if white_start: result += f"white=[{white_start}-{white_end}] "
            if purple_start: result += f"PURPLE=[{purple_start}-{purple_end}] "
            if grey_btn_start: result += f"GREY=[{grey_btn_start}-{grey_btn_end}] "
            if blue_start: result += f"BLUE=[{blue_start}-{blue_end}] "
            print(result)
        
        # Find "Login" heading
        for y in range(350, 410):
            dark_pixels = []
            for x in range(900, 1200):
                p = pixels[x, y][:3]
                if all(c < 50 for c in p):
                    dark_pixels.append(x)
            if len(dark_pixels) > 10:
                print(f"  Heading text at y={y}: x={min(dark_pixels)}-{max(dark_pixels)}")

        # Find Employee ID label / value
        for y in range(410, 470):
            dark_pixels = []
            for x in range(900, 1250):
                p = pixels[x, y][:3]
                if all(c < 80 for c in p):
                    dark_pixels.append(x)
            if len(dark_pixels) > 10:
                print(f"  Text at y={y}: x={min(dark_pixels)}-{max(dark_pixels)}")

        # Password label/text
        for y in range(470, 520):
            dark_pixels = []
            for x in range(900, 1250):
                p = pixels[x, y][:3]
                if all(c < 80 for c in p):
                    dark_pixels.append(x)
            if len(dark_pixels) > 10:
                print(f"  Text at y={y}: x={min(dark_pixels)}-{max(dark_pixels)}")

        # Eye icon area
        for y in range(480, 520):
            for x in range(1200, 1260):
                p = pixels[x, y][:3]
                if all(c < 120 for c in p):
                    print(f"  Eye icon pixel at ({x}, {y}): {p}")
                    break


def map_domain_modal():
    filepath = os.path.join(SCREENSHOTS_DIR, '05_domain_selection_modal.png')
    img = Image.open(filepath).convert("RGB")
    pixels = img.load()
    print(f"\n=== 05_domain_selection_modal.png ===")
    
    for y in range(200, 750, 10):
        # Look for the modal boundaries
        regions = []
        for x in range(400, 1100):
            p = pixels[x, y][:3]
            if all(c > 245 for c in p):
                regions.append(x)
        if regions:
            print(f"  y={y}: white x={min(regions)}-{max(regions)}", end="")
        
        # Check for purple sidebar dots
        purple_px = []
        for x in range(500, 560):
            p = pixels[x, y][:3]
            if 60 < p[0] < 140 and 20 < p[1] < 80 and 140 < p[2] < 220:
                purple_px.append(x)
        if purple_px:
            print(f" PURPLE_DOT=[{min(purple_px)}-{max(purple_px)}]", end="")
        
        # Domain labels
        dark_px = []
        for x in range(560, 900):
            p = pixels[x, y][:3]
            if all(c < 80 for c in p):
                dark_px.append(x)
        if dark_px:
            print(f" text=[{min(dark_px)}-{max(dark_px)}]", end="")
        print()


map_login_pages()
map_password_page()
map_domain_modal()
