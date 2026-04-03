from PIL import Image
import os

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/apps/raven/help-doc/screenshots"


def sample_pixel(img, x, y):
    if 0 <= x < img.size[0] and 0 <= y < img.size[1]:
        return img.load()[x, y][:3]
    return None


def scan_region(img, x_range, y_range, bg_threshold=230):
    """Find non-background content in a region."""
    pixels = img.load()
    content_rows = {}
    for y in range(y_range[0], min(y_range[1], img.size[1])):
        non_bg = []
        for x in range(x_range[0], min(x_range[1], img.size[0])):
            p = pixels[x, y][:3]
            is_bg = all(c > bg_threshold for c in p)
            if not is_bg:
                non_bg.append((x, p))
        if len(non_bg) > 3:
            content_rows[y] = (len(non_bg), non_bg[0][0], non_bg[-1][0])
    return content_rows


print("=== 07_settings_menu_open.png - finding popup menu items ===")
img = Image.open(os.path.join(SCREENSHOTS_DIR, "07_settings_menu_open.png")).convert("RGB")

# Sample specific y positions where menu items might be
# The popup is in the bottom-left area. Let me scan the left sidebar region
rows = scan_region(img, (25, 165), (350, 620), bg_threshold=240)
for y in sorted(rows.keys()):
    count, min_x, max_x = rows[y]
    if count > 10:
        p = sample_pixel(img, 90, y)
        print(f"  y={y}: {count}px content, x={min_x}-{max_x}, sample@90={p}")

# Also specifically look for the "Sign Out" red text
print("\n  Red pixels in sidebar:")
for y in range(500, 600):
    red_count = 0
    for x in range(25, 165):
        p = img.load()[x, y][:3]
        if p[0] > 150 and p[1] < 100 and p[2] < 100:
            red_count += 1
    if red_count > 3:
        print(f"    y={y}: {red_count} red pixels")


print("\n=== 08_account_page.png - finding form fields ===")
img = Image.open(os.path.join(SCREENSHOTS_DIR, "08_account_page.png")).convert("RGB")
# We found border lines at y=123, 178, 203, 258, 283, 338, 363
# These border lines define the field boxes:
# Name field: below some label, above y=123
# Employee ID field: between y=123 and y=178
# etc.
# Let me find the actual text content in each field
for label, y_start, y_end in [("Name area", 60, 123), ("EmpID area", 123, 178), 
                                ("Unit area", 178, 258), ("Dept area", 258, 363)]:
    rows = scan_region(img, (300, 870), (y_start, y_end), bg_threshold=240)
    text_rows = [(y, rows[y]) for y in sorted(rows.keys()) if rows[y][0] > 10]
    if text_rows:
        y_min = text_rows[0][0]
        y_max = text_rows[-1][0]
        print(f"  {label}: text from y={y_min} to y={y_max}")

# Find SAVE PROFILE button - look for darker text/button
for y in range(340, 400):
    p = sample_pixel(img, 830, y)
    if p and all(c < 200 for c in p):
        print(f"  SAVE PROFILE pixel at (830, {y}): {p}")


print("\n=== 16 registration form - finding form fields ===")
img = Image.open(os.path.join(SCREENSHOTS_DIR, "16_after_company_email_continue.png")).convert("RGB")
# Scan the right card area
rows = scan_region(img, (650, 890), (80, 600), bg_threshold=240)
prev_y = None
groups = []
current = []
for y in sorted(rows.keys()):
    if prev_y is not None and y - prev_y > 8:
        if current:
            groups.append(current)
        current = []
    current.append((y, rows[y]))
    prev_y = y
if current:
    groups.append(current)

for g in groups:
    y_start = g[0][0]
    y_end = g[-1][0]
    total_px = sum(r[1][0] for r in g)
    if total_px > 20:
        print(f"  Content block: y={y_start}-{y_end}, total_px={total_px}")


print("\n=== 33 admin users - finding UI elements ===")
img = Image.open(os.path.join(SCREENSHOTS_DIR, "33_ifz_admin_users.png")).convert("RGB")
# Find the search bar input (outlined box)
# Find the Status dropdown
for label, sample_coords in [("Status 'All'", (906, 124)), ("Status label", (878, 106)),
                              ("ADD USER text", (949, 163)), ("Search placeholder", (350, 124)),
                              ("Filter by Roles", (740, 124)), ("Table header Name", (224, 219)),
                              ("Actions col header", (964, 219))]:
    p = sample_pixel(img, *sample_coords)
    print(f"  {label} at {sample_coords}: {p}")

# Scan for Status dropdown position
rows = scan_region(img, (845, 995), (85, 150), bg_threshold=235)
for y in sorted(rows.keys()):
    count = rows[y][0]
    if count > 10:
        print(f"  Status area y={y}: {count}px, x={rows[y][1]}-{rows[y][2]}")


print("\n=== verify_status_filter_open - finding dropdown items ===")
img = Image.open(os.path.join(SCREENSHOTS_DIR, "verify_status_filter_open.png")).convert("RGB")
rows = scan_region(img, (845, 995), (95, 230), bg_threshold=235)
for y in sorted(rows.keys()):
    count = rows[y][0]
    if count > 5:
        p = sample_pixel(img, 880, y)
        print(f"  y={y}: {count}px, sample@880={p}")


print("\n=== verify_unverified_users - finding data row ===")
img = Image.open(os.path.join(SCREENSHOTS_DIR, "verify_unverified_users.png")).convert("RGB")
rows = scan_region(img, (190, 995), (265, 320), bg_threshold=235)
for y in sorted(rows.keys()):
    count = rows[y][0]
    if count > 20:
        print(f"  y={y}: {count}px, x={rows[y][1]}-{rows[y][2]}")

# Find "Unverified" orange text
for y in range(275, 310):
    for x in range(860, 940):
        p = img.load()[x, y][:3]
        if p[0] > 180 and p[1] < 130 and p[2] < 80:
            print(f"  Orange text at ({x}, {y}): {p}")
            break
