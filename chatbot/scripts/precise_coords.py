from PIL import Image
import os

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/apps/raven/help-doc/screenshots"


def find_text_rows(img, x_range, y_range, threshold=80):
    """Find rows containing dark text pixels in the given x range."""
    pixels = img.load()
    results = []
    for y in range(y_range[0], min(y_range[1], img.size[1])):
        dark_pixels = []
        for x in range(x_range[0], min(x_range[1], img.size[0])):
            p = pixels[x, y][:3]
            if all(c < threshold for c in p):
                dark_pixels.append(x)
        if len(dark_pixels) > 5:
            results.append((y, min(dark_pixels), max(dark_pixels), len(dark_pixels)))
    return results


def find_colored_text_rows(img, x_range, y_range, rgb, tolerance=50):
    """Find rows containing colored text."""
    pixels = img.load()
    results = []
    for y in range(y_range[0], min(y_range[1], img.size[1])):
        matches = []
        for x in range(x_range[0], min(x_range[1], img.size[0])):
            p = pixels[x, y][:3]
            if all(abs(p[i] - rgb[i]) < tolerance for i in range(3)):
                matches.append(x)
        if len(matches) > 3:
            results.append((y, min(matches), max(matches), len(matches)))
    return results


def group_text_rows(rows, gap=5):
    """Group consecutive rows into text blocks."""
    if not rows:
        return []
    groups = []
    current = [rows[0]]
    for r in rows[1:]:
        if r[0] - current[-1][0] <= gap:
            current.append(r)
        else:
            y_start = current[0][0]
            y_end = current[-1][0]
            x_min = min(r[1] for r in current)
            x_max = max(r[2] for r in current)
            groups.append((y_start, y_end, x_min, x_max))
            current = [r]
    y_start = current[0][0]
    y_end = current[-1][0]
    x_min = min(r[1] for r in current)
    x_max = max(r[2] for r in current)
    groups.append((y_start, y_end, x_min, x_max))
    return groups


print("\n=== 07_settings_menu_open.png ===")
img07 = Image.open(os.path.join(SCREENSHOTS_DIR, "07_settings_menu_open.png")).convert("RGB")
dark_rows = find_text_rows(img07, (30, 160), (380, 600))
groups = group_text_rows(dark_rows)
for g in groups:
    print(f"  Text block: y={g[0]}-{g[1]}, x={g[2]}-{g[3]}")
red_rows = find_colored_text_rows(img07, (30, 160), (380, 600), (220, 50, 50), tolerance=60)
red_groups = group_text_rows(red_rows)
for g in red_groups:
    print(f"  Red text: y={g[0]}-{g[1]}, x={g[2]}-{g[3]}")


print("\n=== 08_account_page.png ===")
img08 = Image.open(os.path.join(SCREENSHOTS_DIR, "08_account_page.png")).convert("RGB")
dark_rows = find_text_rows(img08, (300, 900), (60, 400))
groups = group_text_rows(dark_rows)
for g in groups:
    print(f"  Text block: y={g[0]}-{g[1]}, x={g[2]}-{g[3]}")

# Find input field borders (the underline-style borders)
pixels08 = img08.load()
for y in range(60, 400):
    border_px = 0
    for x in range(300, 900):
        p = pixels08[x, y][:3]
        if all(180 < c < 220 for c in p) and max(p) - min(p) < 15:
            border_px += 1
    if border_px > 200:
        print(f"  Border line at y={y}: {border_px}px wide")


print("\n=== 16_after_company_email_continue.png (registration form) ===")
img16 = Image.open(os.path.join(SCREENSHOTS_DIR, "16_after_company_email_continue.png")).convert("RGB")
dark_rows = find_text_rows(img16, (650, 900), (80, 600))
groups = group_text_rows(dark_rows)
for g in groups:
    print(f"  Text block: y={g[0]}-{g[1]}, x={g[2]}-{g[3]}")

# Find input field borders
pixels16 = img16.load()
for y in range(130, 600):
    border_px = 0
    min_x = None
    max_x = None
    for x in range(650, 900):
        p = pixels16[x, y][:3]
        if all(170 < c < 220 for c in p) and max(p) - min(p) < 15:
            border_px += 1
            if min_x is None: min_x = x
            max_x = x
    if border_px > 100:
        print(f"  Border at y={y}: x={min_x}-{max_x}")


print("\n=== 33_ifz_admin_users.png (admin) ===")
img33 = Image.open(os.path.join(SCREENSHOTS_DIR, "33_ifz_admin_users.png")).convert("RGB")
# Find search bar
dark_rows = find_text_rows(img33, (200, 650), (100, 200))
groups = group_text_rows(dark_rows)
for g in groups:
    print(f"  Search area text: y={g[0]}-{g[1]}, x={g[2]}-{g[3]}")
# Find table header
dark_rows = find_text_rows(img33, (190, 1000), (195, 250))
groups = group_text_rows(dark_rows)
for g in groups:
    print(f"  Table header text: y={g[0]}-{g[1]}, x={g[2]}-{g[3]}")
# Status dropdown
dark_rows = find_text_rows(img33, (850, 1000), (90, 160))
groups = group_text_rows(dark_rows)
for g in groups:
    print(f"  Status area text: y={g[0]}-{g[1]}, x={g[2]}-{g[3]}")

# ADD USER button - find purple button
purple_rows = find_colored_text_rows(img33, (900, 1000), (145, 185), (103, 48, 181), tolerance=40)
purple_groups = group_text_rows(purple_rows)
for g in purple_groups:
    print(f"  Purple button: y={g[0]}-{g[1]}, x={g[2]}-{g[3]}")


print("\n=== verify_status_filter_open.png ===")
imgVF = Image.open(os.path.join(SCREENSHOTS_DIR, "verify_status_filter_open.png")).convert("RGB")
# Find the dropdown menu items
dark_rows = find_text_rows(imgVF, (850, 1000), (140, 230))
groups = group_text_rows(dark_rows)
for g in groups:
    print(f"  Dropdown text: y={g[0]}-{g[1]}, x={g[2]}-{g[3]}")


print("\n=== verify_unverified_users.png ===")
imgVU = Image.open(os.path.join(SCREENSHOTS_DIR, "verify_unverified_users.png")).convert("RGB")
# Find the data row
dark_rows = find_text_rows(imgVU, (190, 1000), (270, 320))
groups = group_text_rows(dark_rows)
for g in groups:
    print(f"  Data row text: y={g[0]}-{g[1]}, x={g[2]}-{g[3]}")
# Find orange "Unverified" badge
orange_rows = find_colored_text_rows(imgVU, (850, 950), (270, 310), (200, 100, 0), tolerance=80)
orange_groups = group_text_rows(orange_rows)
for g in orange_groups:
    print(f"  Unverified badge: y={g[0]}-{g[1]}, x={g[2]}-{g[3]}")


print("\n=== 05_domain_selection_modal.png ===")
img05 = Image.open(os.path.join(SCREENSHOTS_DIR, "05_domain_selection_modal.png")).convert("RGB")
# Find the info message at bottom of modal
blue_rows = find_colored_text_rows(img05, (380, 650), (450, 530), (50, 100, 180), tolerance=60)
blue_groups = group_text_rows(blue_rows)
for g in blue_groups:
    print(f"  Info text: y={g[0]}-{g[1]}, x={g[2]}-{g[3]}")
# also find domain text items
dark_rows = find_text_rows(img05, (380, 650), (130, 470))
groups = group_text_rows(dark_rows)
for g in groups:
    print(f"  Domain text: y={g[0]}-{g[1]}, x={g[2]}-{g[3]}")
