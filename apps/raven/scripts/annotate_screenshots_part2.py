from PIL import Image, ImageDraw, ImageFont
import os
import math

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/apps/raven/help-doc/screenshots"
ANNOTATED_DIR = os.path.join(SCREENSHOTS_DIR, "annotated")
os.makedirs(ANNOTATED_DIR, exist_ok=True)

ARROW_COLOR = (220, 50, 50)
LABEL_COLOR = (220, 50, 50)

try:
    FONT = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 18)
    FONT_SMALL = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 14)
    FONT_LARGE = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 22)
except:
    FONT = ImageFont.load_default()
    FONT_SMALL = FONT
    FONT_LARGE = FONT


def draw_arrow(draw, start, end, color=ARROW_COLOR, width=3):
    draw.line([start, end], fill=color, width=width)
    angle = math.atan2(end[1] - start[1], end[0] - start[0])
    arrow_length = 15
    arrow_angle = math.pi / 6
    x1 = end[0] - arrow_length * math.cos(angle - arrow_angle)
    y1 = end[1] - arrow_length * math.sin(angle - arrow_angle)
    x2 = end[0] - arrow_length * math.cos(angle + arrow_angle)
    y2 = end[1] - arrow_length * math.sin(angle + arrow_angle)
    draw.polygon([end, (x1, y1), (x2, y2)], fill=color)


def draw_label(draw, position, text, font=FONT, color=LABEL_COLOR, bg=True):
    bbox = font.getbbox(text)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x, y = position
    if bg:
        padding = 6
        draw.rectangle(
            [x - padding, y - padding, x + text_width + padding, y + text_height + padding],
            fill=(255, 255, 255, 240),
            outline=color,
            width=2
        )
    draw.text(position, text, fill=color, font=font)


def draw_callout_number(draw, position, number, size=28):
    x, y = position
    draw.ellipse([x, y, x + size, y + size], fill=(220, 50, 50))
    text = str(number)
    bbox = FONT.getbbox(text)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    draw.text((x + (size - tw) // 2, y + (size - th) // 2 - 2), text, fill=(255, 255, 255), font=FONT)


def annotate_admin_users():
    """Admin portal users page"""
    img = Image.open(os.path.join(SCREENSHOTS_DIR, "33_ifz_admin_users.png")).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Title
    draw_label(draw, (300, 55), "Admin: Manage all users", font=FONT_LARGE)
    draw_arrow(draw, (350, 80), (290, 80))

    # Search bar
    draw_callout_number(draw, (175, 100), 1)
    draw_label(draw, (205, 103), "Search users", font=FONT_SMALL)

    # Filter by Roles
    draw_callout_number(draw, (630, 100), 2)
    draw_label(draw, (660, 103), "Filter by role", font=FONT_SMALL, color=(0, 100, 200))

    # Status filter
    draw_callout_number(draw, (835, 85), 3)
    draw_label(draw, (865, 88), "Filter by status", font=FONT_SMALL, color=(0, 100, 200))

    # ADD USER button
    draw.rectangle([908, 148, 990, 176], outline=(0, 150, 0), width=3)
    draw_label(draw, (900, 178), "Add new user", font=FONT_SMALL, color=(0, 150, 0))

    # Status column header
    draw.rectangle([855, 195, 920, 215], outline=ARROW_COLOR, width=3)
    draw_label(draw, (760, 180), "Verification Status", font=FONT_SMALL)
    draw_arrow(draw, (855, 190), (862, 197))

    # Verified badge on first row
    draw.rectangle([860, 220, 920, 240], outline=(0, 150, 0), width=2)
    draw_arrow(draw, (925, 230), (920, 230), color=(0, 150, 0))
    draw_label(draw, (930, 222), "Verified", font=FONT_SMALL, color=(0, 150, 0))

    # Actions (three dots)
    draw.rectangle([960, 220, 985, 240], outline=ARROW_COLOR, width=2)
    draw_label(draw, (930, 245), "User actions", font=FONT_SMALL)

    # Sidebar nav
    draw.rectangle([8, 88, 160, 110], outline=(0, 100, 200), width=2)
    draw_label(draw, (5, 70), "Users section", font=FONT_SMALL, color=(0, 100, 200))

    result = Image.alpha_composite(img, overlay).convert("RGB")
    result.save(os.path.join(ANNOTATED_DIR, "12_admin_users_page.png"))
    print("[OK] 12_admin_users_page.png")


def annotate_workplace_settings():
    """Workplace Settings dashboard"""
    img = Image.open(os.path.join(SCREENSHOTS_DIR, "24_workplace_settings.png")).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Users link in sidebar
    draw.rectangle([5, 148, 165, 170], outline=ARROW_COLOR, width=3)
    draw_label(draw, (5, 172), "Click to manage users", font=FONT_SMALL)
    draw_arrow(draw, (80, 172), (80, 168))

    # Dashboard section
    draw_label(draw, (600, 50), "Admin Dashboard", font=FONT_LARGE, color=(0, 100, 200))

    # External link icon next to Users
    draw_arrow(draw, (165, 158), (155, 158))
    draw_label(draw, (168, 150), "Opens admin portal", font=FONT_SMALL, color=(0, 100, 200))

    result = Image.alpha_composite(img, overlay).convert("RGB")
    result.save(os.path.join(ANNOTATED_DIR, "13_workplace_settings.png"))
    print("[OK] 13_workplace_settings.png")


def annotate_admin_not_auth():
    """Admin portal not authenticated"""
    img = Image.open(os.path.join(SCREENSHOTS_DIR, "20_admin_portal.png")).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    draw_label(draw, (370, 230), "Login required via app first", font=FONT)
    draw_arrow(draw, (500, 250), (510, 275))

    result = Image.alpha_composite(img, overlay).convert("RGB")
    result.save(os.path.join(ANNOTATED_DIR, "14_admin_not_authenticated.png"))
    print("[OK] 14_admin_not_authenticated.png")


if __name__ == "__main__":
    annotate_admin_users()
    annotate_workplace_settings()
    annotate_admin_not_auth()
    print(f"\nAll annotated screenshots saved to: {ANNOTATED_DIR}")
