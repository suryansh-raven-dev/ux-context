from PIL import Image, ImageDraw, ImageFont
import os
import math

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/apps/raven/help-doc/screenshots"
ANNOTATED_DIR = os.path.join(SCREENSHOTS_DIR, "annotated")
os.makedirs(ANNOTATED_DIR, exist_ok=True)

ARROW_COLOR = (220, 50, 50)
LABEL_COLOR = (220, 50, 50)
LABEL_BG = (255, 255, 255, 220)
CALLOUT_BG = (220, 50, 50)
CALLOUT_TEXT = (255, 255, 255)

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
    draw.ellipse([x, y, x + size, y + size], fill=CALLOUT_BG)
    text = str(number)
    bbox = FONT.getbbox(text)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    draw.text((x + (size - tw) // 2, y + (size - th) // 2 - 2), text, fill=CALLOUT_TEXT, font=FONT)


def annotate_login_page():
    """01 - Login page with callouts for input field and continue button"""
    img = Image.open(os.path.join(SCREENSHOTS_DIR, "01_login_page_initial.png")).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    draw_callout_number(draw, (620, 280), 1)
    draw_arrow(draw, (648, 298), (690, 322))
    draw_label(draw, (530, 260), "Enter Email or Employee ID", font=FONT_SMALL)

    draw_callout_number(draw, (620, 350), 2)
    draw_arrow(draw, (648, 368), (690, 378))
    draw_label(draw, (545, 335), "Click CONTINUE", font=FONT_SMALL)

    result = Image.alpha_composite(img, overlay).convert("RGB")
    result.save(os.path.join(ANNOTATED_DIR, "01_login_page.png"))
    print("[OK] 01_login_page.png")


def annotate_employee_id():
    """02 - Employee ID entered"""
    img = Image.open(os.path.join(SCREENSHOTS_DIR, "02_login_employee_id_entered.png")).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    draw.rectangle([640, 295, 885, 345], outline=ARROW_COLOR, width=3)
    draw_label(draw, (520, 270), "Employee ID entered", font=FONT_SMALL)
    draw_arrow(draw, (610, 280), (645, 310))

    draw.rectangle([640, 360, 885, 398], outline=(0, 150, 0), width=3)
    draw_label(draw, (555, 405), "CONTINUE is now enabled", font=FONT_SMALL, color=(0, 150, 0))
    draw_arrow(draw, (640, 405), (680, 385), color=(0, 150, 0))

    result = Image.alpha_composite(img, overlay).convert("RGB")
    result.save(os.path.join(ANNOTATED_DIR, "02_employee_id_entered.png"))
    print("[OK] 02_employee_id_entered.png")


def annotate_password_step():
    """03 - Password step"""
    img = Image.open(os.path.join(SCREENSHOTS_DIR, "03_login_password_step.png")).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    draw_callout_number(draw, (620, 245), 1)
    draw_arrow(draw, (648, 262), (650, 280))
    draw_label(draw, (500, 228), "Employee ID (read-only)", font=FONT_SMALL)

    draw_callout_number(draw, (620, 295), 2)
    draw_arrow(draw, (648, 315), (655, 325))
    draw_label(draw, (520, 280), "Enter your password", font=FONT_SMALL)

    draw_arrow(draw, (890, 320), (870, 322), color=(0, 100, 200))
    draw_label(draw, (895, 310), "Toggle visibility", font=FONT_SMALL, color=(0, 100, 200))

    draw_callout_number(draw, (620, 350), 3)
    draw_arrow(draw, (648, 368), (680, 370))
    draw_label(draw, (540, 338), "Click LOGIN", font=FONT_SMALL)

    draw_label(draw, (700, 410), "Go back to Step 1", font=FONT_SMALL, color=(0, 100, 200))
    draw_arrow(draw, (740, 408), (760, 400), color=(0, 100, 200))

    result = Image.alpha_composite(img, overlay).convert("RGB")
    result.save(os.path.join(ANNOTATED_DIR, "03_password_step.png"))
    print("[OK] 03_password_step.png")


def annotate_password_filled():
    """04 - Password filled, LOGIN enabled"""
    img = Image.open(os.path.join(SCREENSHOTS_DIR, "04_login_password_filled.png")).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    draw.rectangle([640, 300, 885, 348], outline=(0, 150, 0), width=3)
    draw_label(draw, (530, 300), "Password entered", font=FONT_SMALL, color=(0, 150, 0))

    draw.rectangle([640, 350, 885, 388], outline=(0, 150, 0), width=3)
    draw_label(draw, (540, 395), "LOGIN is now enabled", font=FONT_SMALL, color=(0, 150, 0))
    draw_arrow(draw, (630, 395), (645, 375), color=(0, 150, 0))

    result = Image.alpha_composite(img, overlay).convert("RGB")
    result.save(os.path.join(ANNOTATED_DIR, "04_password_filled.png"))
    print("[OK] 04_password_filled.png")


def annotate_domain_selection():
    """05 - Domain selection modal"""
    img = Image.open(os.path.join(SCREENSHOTS_DIR, "05_domain_selection_modal.png")).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    draw_label(draw, (270, 100), "Select your plant/domain", font=FONT_LARGE)
    draw_arrow(draw, (370, 125), (410, 145))

    draw.rectangle([370, 155, 650, 185], outline=ARROW_COLOR, width=2)
    draw_label(draw, (660, 160), "Individual domains", font=FONT_SMALL)

    draw.rectangle([370, 215, 650, 295], outline=(0, 100, 200), width=2)
    draw_label(draw, (660, 240), "Grouped by plant area", font=FONT_SMALL, color=(0, 100, 200))

    draw_label(draw, (250, 475), "Can be changed later", font=FONT_SMALL, color=(0, 150, 0))
    draw_arrow(draw, (350, 475), (395, 478), color=(0, 150, 0))

    result = Image.alpha_composite(img, overlay).convert("RGB")
    result.save(os.path.join(ANNOTATED_DIR, "05_domain_selection.png"))
    print("[OK] 05_domain_selection.png")


def annotate_main_app():
    """06 - Main app after domain selection"""
    img = Image.open(os.path.join(SCREENSHOTS_DIR, "06_main_app_after_domain.png")).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    draw.rectangle([5, 55, 160, 100], outline=ARROW_COLOR, width=3)
    draw_label(draw, (170, 62), "Selected domain", font=FONT_SMALL)
    draw_arrow(draw, (168, 72), (162, 78))

    draw_label(draw, (170, 135), "AI Search agent", font=FONT_SMALL, color=(0, 100, 200))
    draw_arrow(draw, (170, 148), (70, 148), color=(0, 100, 200))

    draw_label(draw, (370, 395), "Start asking questions here", font=FONT_SMALL, color=(0, 150, 0))
    draw_arrow(draw, (470, 390), (500, 375), color=(0, 150, 0))

    result = Image.alpha_composite(img, overlay).convert("RGB")
    result.save(os.path.join(ANNOTATED_DIR, "06_main_app.png"))
    print("[OK] 06_main_app.png")


def annotate_settings_menu():
    """07 - Settings menu"""
    img = Image.open(os.path.join(SCREENSHOTS_DIR, "07_settings_menu_open.png")).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    draw.rectangle([15, 395, 165, 420], outline=ARROW_COLOR, width=3)
    draw_label(draw, (170, 398), "Click to view your profile", font=FONT_SMALL)

    draw.rectangle([15, 545, 165, 570], outline=(220, 50, 50), width=3)
    draw_label(draw, (170, 548), "Sign out of your account", font=FONT_SMALL, color=(220, 50, 50))

    result = Image.alpha_composite(img, overlay).convert("RGB")
    result.save(os.path.join(ANNOTATED_DIR, "07_settings_menu.png"))
    print("[OK] 07_settings_menu.png")


def annotate_account_page():
    """08 - Account page"""
    img = Image.open(os.path.join(SCREENSHOTS_DIR, "08_account_page.png")).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    draw_callout_number(draw, (890, 70), 1)
    draw_label(draw, (800, 48), "Your Name", font=FONT_SMALL)

    draw_callout_number(draw, (890, 130), 2)
    draw_label(draw, (790, 110), "Your Employee ID", font=FONT_SMALL)

    draw_callout_number(draw, (890, 185), 3)
    draw_label(draw, (830, 168), "Your Unit", font=FONT_SMALL)

    draw_callout_number(draw, (890, 245), 4)
    draw_label(draw, (790, 225), "Your Departments", font=FONT_SMALL)

    draw.rectangle([780, 320, 875, 355], outline=(0, 150, 0), width=3)
    draw_label(draw, (700, 360), "Save changes", font=FONT_SMALL, color=(0, 150, 0))

    result = Image.alpha_composite(img, overlay).convert("RGB")
    result.save(os.path.join(ANNOTATED_DIR, "08_account_page.png"))
    print("[OK] 08_account_page.png")


def annotate_email_validation():
    """10 - Email domain validation error"""
    img = Image.open(os.path.join(SCREENSHOTS_DIR, "10_email_login_entered.png")).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    draw.rectangle([640, 340, 885, 358], outline=ARROW_COLOR, width=2)
    draw_label(draw, (530, 340), "Domain validation error", font=FONT_SMALL)
    draw_arrow(draw, (630, 350), (645, 350))

    draw_label(draw, (555, 395), "CONTINUE is disabled", font=FONT_SMALL, color=(150, 150, 150))

    result = Image.alpha_composite(img, overlay).convert("RGB")
    result.save(os.path.join(ANNOTATED_DIR, "09_email_validation_error.png"))
    print("[OK] 09_email_validation_error.png")


def annotate_registration_form():
    """16 - Registration form for new users"""
    img = Image.open(os.path.join(SCREENSHOTS_DIR, "16_after_company_email_continue.png")).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    draw_callout_number(draw, (610, 130), 1)
    draw_arrow(draw, (638, 148), (650, 155))
    draw_label(draw, (510, 110), "Full Name *", font=FONT_SMALL)

    draw_callout_number(draw, (610, 180), 2)
    draw_arrow(draw, (638, 198), (650, 208))
    draw_label(draw, (510, 165), "Employee ID *", font=FONT_SMALL)

    draw_callout_number(draw, (610, 250), 3)
    draw_arrow(draw, (638, 268), (650, 268))
    draw_label(draw, (535, 238), "Email (pre-filled)", font=FONT_SMALL, color=(0, 100, 200))

    draw_callout_number(draw, (610, 290), 4)
    draw_arrow(draw, (638, 310), (650, 310))
    draw_label(draw, (525, 278), "Set Password *", font=FONT_SMALL)

    draw_callout_number(draw, (610, 340), 5)
    draw_arrow(draw, (638, 358), (650, 362))
    draw_label(draw, (505, 328), "Confirm Password *", font=FONT_SMALL)

    draw_label(draw, (535, 400), "Unit (auto-filled)", font=FONT_SMALL, color=(0, 100, 200))

    draw_label(draw, (530, 450), "Select Department", font=FONT_SMALL)

    draw.rectangle([640, 490, 885, 520], outline=(0, 150, 0), width=3)
    draw_label(draw, (535, 500), "Click to Register", font=FONT_SMALL, color=(0, 150, 0))

    draw_label(draw, (615, 540), "Back to Sign In", font=FONT_SMALL, color=(0, 100, 200))

    result = Image.alpha_composite(img, overlay).convert("RGB")
    result.save(os.path.join(ANNOTATED_DIR, "10_registration_form.png"))
    print("[OK] 10_registration_form.png")


def annotate_company_email():
    """15 - Company email entered"""
    img = Image.open(os.path.join(SCREENSHOTS_DIR, "15_email_company_entered.png")).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    draw.rectangle([640, 302, 885, 345], outline=(0, 150, 0), width=3)
    draw_label(draw, (510, 310), "Company email entered", font=FONT_SMALL, color=(0, 150, 0))

    draw_label(draw, (530, 385), "Click to proceed to registration", font=FONT_SMALL)
    draw_arrow(draw, (650, 382), (700, 378))

    result = Image.alpha_composite(img, overlay).convert("RGB")
    result.save(os.path.join(ANNOTATED_DIR, "11_company_email_login.png"))
    print("[OK] 11_company_email_login.png")


if __name__ == "__main__":
    annotate_login_page()
    annotate_employee_id()
    annotate_password_step()
    annotate_password_filled()
    annotate_domain_selection()
    annotate_main_app()
    annotate_settings_menu()
    annotate_account_page()
    annotate_email_validation()
    annotate_registration_form()
    annotate_company_email()
    print(f"\nAll annotated screenshots saved to: {ANNOTATED_DIR}")
