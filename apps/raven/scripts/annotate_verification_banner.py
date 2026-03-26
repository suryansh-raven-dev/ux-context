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


def annotate_verification_banner():
    img = Image.open(os.path.join(SCREENSHOTS_DIR, "verification_banner.png")).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Highlight the verification banner
    draw.rectangle([155, 85, 920, 120], outline=ARROW_COLOR, width=3)
    draw_label(draw, (300, 60), "Verification pending banner", font=FONT, color=ARROW_COLOR)
    draw_arrow(draw, (430, 80), (500, 87))

    # Label the profile fields
    draw_label(draw, (700, 165), "Name", font=FONT_SMALL, color=(0, 100, 200))
    draw_label(draw, (700, 230), "Employee ID", font=FONT_SMALL, color=(0, 100, 200))
    draw_label(draw, (700, 300), "Unit (auto-filled)", font=FONT_SMALL, color=(0, 100, 200))
    draw_label(draw, (700, 380), "Department", font=FONT_SMALL, color=(0, 100, 200))

    # Note about the banner disappearing
    draw_label(draw, (200, 500), "This banner disappears once an admin verifies your account", font=FONT_SMALL, color=(0, 150, 0))

    result = Image.alpha_composite(img, overlay).convert("RGB")
    result.save(os.path.join(ANNOTATED_DIR, "17_verification_banner.png"))
    print("[OK] 17_verification_banner.png")


if __name__ == "__main__":
    annotate_verification_banner()
