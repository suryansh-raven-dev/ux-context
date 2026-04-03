from PIL import Image, ImageDraw, ImageFont
import os
import math

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/apps/raven/help-doc/screenshots"
ANNOTATED_DIR = os.path.join(SCREENSHOTS_DIR, "annotated")

ARROW_COLOR = (220, 50, 50)

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


def draw_label(draw, position, text, font=FONT, color=ARROW_COLOR, bg=True):
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


def annotate_status_filter():
    """Status filter dropdown showing All/Verified/Unverified options"""
    img = Image.open(os.path.join(SCREENSHOTS_DIR, "verify_status_filter_open.png")).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Highlight the dropdown
    draw.rectangle([848, 95, 998, 220], outline=ARROW_COLOR, width=3)
    draw_label(draw, (700, 80), "Status filter", font=FONT)
    draw_arrow(draw, (780, 90), (850, 100))

    # Label options
    draw_label(draw, (680, 155), "All users", font=FONT_SMALL, color=(100, 100, 100))
    draw_arrow(draw, (750, 160), (855, 160), color=(100, 100, 100))

    draw_label(draw, (680, 180), "Verified users", font=FONT_SMALL, color=(0, 150, 0))
    draw_arrow(draw, (770, 185), (855, 185), color=(0, 150, 0))

    draw_label(draw, (650, 205), "Unverified users", font=FONT_SMALL, color=(220, 130, 0))
    draw_arrow(draw, (770, 210), (855, 210), color=(220, 130, 0))

    result = Image.alpha_composite(img, overlay).convert("RGB")
    result.save(os.path.join(ANNOTATED_DIR, "15_status_filter_dropdown.png"))
    print("[OK] 15_status_filter_dropdown.png")


def annotate_unverified():
    """Unverified users view"""
    img = Image.open(os.path.join(SCREENSHOTS_DIR, "verify_unverified_users.png")).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Highlight "Unverified" filter
    draw.rectangle([848, 100, 998, 140], outline=(220, 130, 0), width=3)
    draw_label(draw, (700, 108), "Filtered: Unverified", font=FONT_SMALL, color=(220, 130, 0))
    draw_arrow(draw, (810, 118), (850, 118), color=(220, 130, 0))

    # Highlight the unverified user
    draw.rectangle([185, 270, 995, 305], outline=ARROW_COLOR, width=3)
    draw_label(draw, (300, 308), "Unverified user awaiting admin verification", font=FONT_SMALL)

    # Highlight "Unverified" status badge
    draw.rectangle([855, 278, 935, 298], outline=(220, 130, 0), width=3)
    draw_label(draw, (810, 258), "Status: Unverified", font=FONT_SMALL, color=(220, 130, 0))

    # Highlight Actions column (three dots)
    draw.rectangle([960, 278, 990, 298], outline=ARROW_COLOR, width=2)
    draw_label(draw, (860, 230), "Click to verify user", font=FONT_SMALL)
    draw_arrow(draw, (935, 240), (970, 278))

    # Highlight CLEAR FILTERS
    draw_label(draw, (820, 198), "Clear filters", font=FONT_SMALL, color=(0, 100, 200))

    result = Image.alpha_composite(img, overlay).convert("RGB")
    result.save(os.path.join(ANNOTATED_DIR, "16_unverified_users.png"))
    print("[OK] 16_unverified_users.png")


if __name__ == "__main__":
    annotate_status_filter()
    annotate_unverified()
    print(f"\nSaved to: {ANNOTATED_DIR}")
