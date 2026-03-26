from PIL import Image
import os

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/apps/raven/help-doc/screenshots"


def sample_grid(img, x_positions, y_range):
    """Sample pixels at specific x positions across a y range."""
    pixels = img.load()
    for y in range(y_range[0], min(y_range[1], img.size[1])):
        values = []
        for x in x_positions:
            if 0 <= x < img.size[0]:
                p = pixels[x, y][:3]
                values.append(f"({p[0]},{p[1]},{p[2]})")
            else:
                values.append("OOB")
        # Only print rows with interesting (non-uniform) content
        unique = set(values)
        if len(unique) > 1 or (len(unique) == 1 and values[0] != "(255,255,255)"):
            print(f"  y={y}: " + " | ".join(f"x={x}:{v}" for x, v in zip(x_positions, values)))


# --- 07 settings menu ---
print("=== 07 settings menu - popup area ===")
img = Image.open(os.path.join(SCREENSHOTS_DIR, "07_settings_menu_open.png")).convert("RGB")
# Sample every 2px vertically in the popup region
# Try wider x range to capture the full popup
sample_grid(img, [30, 60, 90, 120, 150], (390, 590))


# --- 08 account page - fields and buttons ---
print("\n=== 08 account page - SAVE PROFILE button ===")
img = Image.open(os.path.join(SCREENSHOTS_DIR, "08_account_page.png")).convert("RGB")
sample_grid(img, [750, 790, 830, 860], (370, 400))

# Name field area 
print("\n  --- Name field area ---")
for y in [75, 80, 85, 90, 95, 100, 105, 110, 115]:
    p = img.load()[590, y][:3]
    print(f"  y={y} at x=590: {p}")

# Employee ID area
print("\n  --- Employee ID field area ---")
for y in [130, 135, 140, 145, 150, 155, 160, 165, 170]:
    p = img.load()[590, y][:3]
    print(f"  y={y} at x=590: {p}")


# --- 16 registration form - per-field scanning ---
print("\n=== 16 registration form - field boundaries ===")
img = Image.open(os.path.join(SCREENSHOTS_DIR, "16_after_company_email_continue.png")).convert("RGB")
# Sample at x=770 (center of form) from y=80 to 600
for y in range(80, 600, 3):
    p = img.load()[770, y][:3]
    if not all(c > 240 for c in p):
        print(f"  y={y} at x=770: {p}")


# --- 33 admin page - exact element positions ---
print("\n=== 33 admin - exact element sampling ===")
img = Image.open(os.path.join(SCREENSHOTS_DIR, "33_ifz_admin_users.png")).convert("RGB")
# Sample Status dropdown area
print("  Status dropdown area:")
for y in [105, 108, 112, 116, 120, 124, 128, 132, 136, 140]:
    vals = []
    for x in [855, 880, 920, 960, 990]:
        p = img.load()[x, y][:3]
        vals.append(f"x={x}:{p}")
    print(f"  y={y}: " + " | ".join(vals))

# Search bar
print("\n  Search bar area:")
for y in [112, 116, 120, 124, 128, 132, 136]:
    vals = []
    for x in [220, 300, 450, 630]:
        p = img.load()[x, y][:3]
        vals.append(f"x={x}:{p}")
    print(f"  y={y}: " + " | ".join(vals))

# Action buttons row  
print("\n  Action buttons area:")
for y in [155, 160, 165, 170, 175]:
    vals = []
    for x in [700, 750, 840, 920, 950, 990]:
        p = img.load()[x, y][:3]
        vals.append(f"x={x}:{p}")
    print(f"  y={y}: " + " | ".join(vals))

# Table headers
print("\n  Table headers:")
for y in [215, 220, 225]:
    vals = []
    for x in [220, 360, 445, 590, 670, 755, 880, 965]:
        p = img.load()[x, y][:3]
        vals.append(f"x={x}:{p}")
    print(f"  y={y}: " + " | ".join(vals))
