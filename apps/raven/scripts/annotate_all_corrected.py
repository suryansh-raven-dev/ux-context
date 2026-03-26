from PIL import Image, ImageDraw, ImageFont
import os
import math

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/apps/raven/help-doc/screenshots"
ANNOTATED_DIR = os.path.join(SCREENSHOTS_DIR, "annotated")
os.makedirs(ANNOTATED_DIR, exist_ok=True)

RED = (220, 50, 50)
GREEN = (0, 150, 0)
BLUE = (0, 100, 200)
GREY = (130, 130, 130)
CALLOUT_BG = (220, 50, 50)
CALLOUT_TEXT = (255, 255, 255)

try:
    FONT = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 18)
    FONT_SMALL = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 14)
    FONT_LARGE = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 22)
except Exception:
    FONT = ImageFont.load_default()
    FONT_SMALL = FONT
    FONT_LARGE = FONT


def draw_arrow(draw, start, end, color=RED, width=3):
    draw.line([start, end], fill=color, width=width)
    angle = math.atan2(end[1] - start[1], end[0] - start[0])
    arrow_len = 14
    arrow_angle = math.pi / 6
    x1 = end[0] - arrow_len * math.cos(angle - arrow_angle)
    y1 = end[1] - arrow_len * math.sin(angle - arrow_angle)
    x2 = end[0] - arrow_len * math.cos(angle + arrow_angle)
    y2 = end[1] - arrow_len * math.sin(angle + arrow_angle)
    draw.polygon([end, (x1, y1), (x2, y2)], fill=color)


def draw_label(draw, position, text, font=FONT, color=RED):
    bbox = font.getbbox(text)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x, y = position
    pad = 5
    draw.rectangle([x - pad, y - pad, x + tw + pad, y + th + pad],
                    fill=(255, 255, 255, 230), outline=color, width=2)
    draw.text(position, text, fill=color, font=font)


def draw_callout(draw, position, number, color=CALLOUT_BG, size=28):
    x, y = position
    draw.ellipse([x, y, x + size, y + size], fill=color)
    text = str(number)
    bbox = FONT.getbbox(text)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    draw.text((x + (size - tw) // 2, y + (size - th) // 2 - 2), text,
              fill=CALLOUT_TEXT, font=FONT)


def draw_rect(draw, box, color=RED, width=3):
    draw.rectangle(box, outline=color, width=width)


def open_img(name):
    return Image.open(os.path.join(SCREENSHOTS_DIR, name)).convert("RGBA")


def save_img(img, overlay, name):
    result = Image.alpha_composite(img, overlay).convert("RGB")
    result.save(os.path.join(ANNOTATED_DIR, name))
    print(f"  [OK] {name}")


# ────────────────────────────────────────────────────────
# 01  Login page — initial state
# ────────────────────────────────────────────────────────
def annotate_01():
    img = open_img("01_login_page_initial.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Input field: (920, 436) → (1240, 494)
    draw_rect(draw, [918, 434, 1242, 496], RED)
    draw_callout(draw, (860, 448), 1)
    draw_label(draw, (680, 450), "Enter Email or\nEmployee ID", font=FONT_SMALL)
    draw_arrow(draw, (858, 462), (810, 462))

    # CONTINUE button: (920, 518) → (1240, 562)
    draw_rect(draw, [918, 516, 1242, 564], GREEN)
    draw_callout(draw, (860, 530), 2, GREEN)
    draw_label(draw, (710, 532), "Click CONTINUE", font=FONT_SMALL, color=GREEN)
    draw_arrow(draw, (858, 544), (815, 544), color=GREEN)

    save_img(img, overlay, "01_login_page.png")


# ────────────────────────────────────────────────────────
# 02  Employee ID entered
# ────────────────────────────────────────────────────────
def annotate_02():
    img = open_img("02_login_employee_id_entered.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Input field with Employee ID (purple focused border): (920, 434) → (1240, 496)
    draw_rect(draw, [916, 430, 1244, 498], RED)
    draw_label(draw, (700, 445), "Employee ID entered", font=FONT_SMALL)
    draw_arrow(draw, (842, 458), (914, 458))

    # CONTINUE button enabled: (920, 518) → (1240, 562)
    draw_rect(draw, [916, 514, 1244, 566], GREEN)
    draw_label(draw, (690, 530), "CONTINUE is now enabled", font=FONT_SMALL, color=GREEN)
    draw_arrow(draw, (870, 542), (914, 542), color=GREEN)

    save_img(img, overlay, "02_employee_id_entered.png")


# ────────────────────────────────────────────────────────
# 03  Password step — fields empty, LOGIN disabled
# ────────────────────────────────────────────────────────
def annotate_03():
    img = open_img("03_login_password_step.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Employee ID field (read-only grey): ~(920, 362) → (1240, 418)
    draw_rect(draw, [916, 358, 1244, 422], BLUE)
    draw_callout(draw, (858, 372), 1, BLUE)
    draw_label(draw, (690, 375), "Employee ID (read-only)", font=FONT_SMALL, color=BLUE)
    draw_arrow(draw, (856, 388), (810, 388), color=BLUE)

    # Password field: ~(920, 430) → (1240, 490)
    draw_rect(draw, [916, 428, 1244, 492], RED)
    draw_callout(draw, (858, 442), 2)
    draw_label(draw, (700, 445), "Enter your password", font=FONT_SMALL)
    draw_arrow(draw, (856, 458), (810, 458))

    # Eye icon: around (1200, 460)
    draw_label(draw, (1250, 445), "Toggle\nvisibility", font=FONT_SMALL, color=BLUE)
    draw_arrow(draw, (1248, 460), (1225, 460), color=BLUE)

    # LOGIN button (disabled): ~(920, 500) → (1240, 545)
    draw_rect(draw, [916, 498, 1244, 546], GREY)
    draw_callout(draw, (858, 508), 3, GREY)
    draw_label(draw, (720, 512), "Click LOGIN", font=FONT_SMALL, color=GREY)
    draw_arrow(draw, (856, 524), (810, 524), color=GREY)

    # BACK link: centered around (1080, 578)
    draw_label(draw, (1120, 572), "Go back to Step 1", font=FONT_SMALL, color=BLUE)
    draw_arrow(draw, (1118, 582), (1098, 582), color=BLUE)

    save_img(img, overlay, "03_password_step.png")


# ────────────────────────────────────────────────────────
# 04  Password filled, LOGIN enabled
# ────────────────────────────────────────────────────────
def annotate_04():
    img = open_img("04_login_password_filled.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Password field filled (purple border): ~(920, 428) → (1240, 492)
    draw_rect(draw, [916, 426, 1244, 494], GREEN)
    draw_label(draw, (700, 445), "Password entered", font=FONT_SMALL, color=GREEN)
    draw_arrow(draw, (847, 458), (914, 458), color=GREEN)

    # LOGIN button now enabled/purple: ~(920, 498) → (1240, 545)
    draw_rect(draw, [916, 496, 1244, 548], GREEN)
    draw_label(draw, (680, 512), "LOGIN is now enabled", font=FONT_SMALL, color=GREEN)
    draw_arrow(draw, (842, 525), (914, 525), color=GREEN)

    save_img(img, overlay, "04_password_filled.png")


# ────────────────────────────────────────────────────────
# 05  Domain selection modal
# ────────────────────────────────────────────────────────
def annotate_05():
    img = open_img("05_domain_selection_modal.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Modal boundary: ~(510, 120) → (930, 735)
    draw_rect(draw, [507, 118, 933, 738], RED)

    # "Select a domain" title: around y=195
    draw_label(draw, (320, 130), "Select your\nplant/domain", font=FONT_LARGE)
    draw_arrow(draw, (440, 155), (508, 140))

    # Top two standalone domains: HSEF ~y=250, PHD ~y=280
    draw_rect(draw, [530, 160, 640, 210], BLUE, width=2)
    draw_label(draw, (650, 170), "Individual domains", font=FONT_SMALL, color=BLUE)

    # Ammonia group: ~y=225 to ~y=295
    draw_rect(draw, [530, 220, 640, 300], GREEN, width=2)
    draw_label(draw, (650, 250), "Grouped by plant area", font=FONT_SMALL, color=GREEN)

    # Info text at bottom of modal: ~y=475
    draw_label(draw, (320, 500), "Can be changed later\nfrom left sidebar", font=FONT_SMALL, color=GREEN)
    draw_arrow(draw, (430, 520), (510, 490), color=GREEN)

    save_img(img, overlay, "05_domain_selection.png")


# ────────────────────────────────────────────────────────
# 06  Main app after domain selection
# ────────────────────────────────────────────────────────
def annotate_06():
    img = open_img("06_main_app_after_domain.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Domain selector in sidebar: ~(5, 58) → (163, 100)
    draw_rect(draw, [3, 56, 165, 102], RED)
    draw_label(draw, (175, 65), "Selected domain", font=FONT_SMALL)
    draw_arrow(draw, (173, 78), (167, 78))

    # Search agent link: ~(15, 138) → (155, 160)
    draw_rect(draw, [13, 136, 157, 162], BLUE, width=2)
    draw_label(draw, (175, 140), "AI Search agent", font=FONT_SMALL, color=BLUE)
    draw_arrow(draw, (173, 150), (159, 150), color=BLUE)

    # Search bar in main area: ~(310, 320) → (860, 400)
    draw_rect(draw, [308, 318, 862, 402], GREEN, width=2)
    draw_label(draw, (870, 340), "Start asking\nquestions here", font=FONT_SMALL, color=GREEN)
    draw_arrow(draw, (868, 360), (864, 360), color=GREEN)

    save_img(img, overlay, "06_main_app.png")


# ────────────────────────────────────────────────────────
# 07  Settings menu open
# ────────────────────────────────────────────────────────
def annotate_07():
    img = open_img("07_settings_menu_open.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Account Settings menu item: ~(25, 402) → (150, 428)
    draw_rect(draw, [23, 400, 152, 430], RED)
    draw_label(draw, (165, 405), "Click to view your profile", font=FONT_SMALL)
    draw_arrow(draw, (163, 418), (154, 418))

    # Sign Out menu item: ~(25, 550) → (150, 575)
    draw_rect(draw, [23, 548, 152, 578], RED)
    draw_label(draw, (165, 555), "Sign out of your account", font=FONT_SMALL)
    draw_arrow(draw, (163, 566), (154, 566))

    save_img(img, overlay, "07_settings_menu.png")


# ────────────────────────────────────────────────────────
# 08  Account Settings page
# ────────────────────────────────────────────────────────
def annotate_08():
    img = open_img("08_account_page.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Name field: ~(310, 80) → (870, 125)
    draw_callout(draw, (880, 88), 1)
    draw_label(draw, (920, 90), "Your Name", font=FONT_SMALL)

    # Employee ID field: ~(310, 135) → (870, 180)
    draw_callout(draw, (880, 148), 2)
    draw_label(draw, (920, 150), "Your Employee ID", font=FONT_SMALL)

    # Unit field: ~(310, 190) → (870, 232)
    draw_callout(draw, (880, 202), 3)
    draw_label(draw, (920, 204), "Your Unit", font=FONT_SMALL)

    # Departments field: ~(310, 250) → (870, 295)
    draw_callout(draw, (880, 262), 4)
    draw_label(draw, (920, 264), "Your Departments", font=FONT_SMALL)

    # SAVE PROFILE button: ~(785, 328) → (870, 360)
    draw_rect(draw, [783, 326, 872, 362], GREEN)
    draw_label(draw, (700, 370), "Save changes", font=FONT_SMALL, color=GREEN)
    draw_arrow(draw, (780, 370), (825, 364), color=GREEN)

    save_img(img, overlay, "08_account_page.png")


# ────────────────────────────────────────────────────────
# 09  Email domain validation error (from 10_email_login_entered.png)
# ────────────────────────────────────────────────────────
def annotate_09():
    img = open_img("10_email_login_entered.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Input field with red border: ~(920, 434) → (1240, 496)
    # Error message text below input: ~y=498
    draw_rect(draw, [916, 430, 1244, 512], RED)
    draw_label(draw, (680, 455), "Domain validation error", font=FONT_SMALL)
    draw_arrow(draw, (838, 465), (914, 465))

    # CONTINUE is disabled
    draw_label(draw, (700, 535), "CONTINUE is disabled", font=FONT_SMALL, color=GREY)
    draw_arrow(draw, (858, 545), (918, 545), color=GREY)

    save_img(img, overlay, "09_email_validation_error.png")


# ────────────────────────────────────────────────────────
# 10  Registration form (from 16_after_company_email_continue.png)
# ────────────────────────────────────────────────────────
def annotate_10():
    img = open_img("16_after_company_email_continue.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Form fields are on the right side: roughly x=660-880
    # "Create your account" heading: ~(700, 96)

    # Name* field: ~(660, 143) → (880, 178)
    draw_callout(draw, (600, 150), 1)
    draw_label(draw, (480, 152), "Full Name *", font=FONT_SMALL)
    draw_arrow(draw, (598, 166), (560, 166))

    # Employee ID* field: ~(660, 193) → (880, 228)
    draw_callout(draw, (600, 200), 2)
    draw_label(draw, (468, 202), "Employee ID *", font=FONT_SMALL)
    draw_arrow(draw, (598, 216), (560, 216))

    # Email field (pre-filled): ~(660, 253) → (880, 288)
    draw_callout(draw, (600, 258), 3, BLUE)
    draw_label(draw, (460, 260), "Email (pre-filled)", font=FONT_SMALL, color=BLUE)
    draw_arrow(draw, (598, 274), (560, 274), color=BLUE)

    # Password* field: ~(660, 300) → (880, 335)
    draw_callout(draw, (600, 306), 4)
    draw_label(draw, (470, 308), "Set Password *", font=FONT_SMALL)
    draw_arrow(draw, (598, 322), (560, 322))

    # Confirm Password* field: ~(660, 350) → (880, 385)
    draw_callout(draw, (600, 356), 5)
    draw_label(draw, (440, 358), "Confirm Password *", font=FONT_SMALL)
    draw_arrow(draw, (598, 372), (560, 372))

    # Unit field: ~(660, 398) → (880, 432)
    draw_label(draw, (472, 410), "Unit (auto-filled)", font=FONT_SMALL, color=BLUE)
    draw_arrow(draw, (600, 418), (658, 418), color=BLUE)

    # Department dropdown: ~(660, 448) → (880, 488)
    draw_label(draw, (460, 460), "Select Department", font=FONT_SMALL)
    draw_arrow(draw, (600, 468), (658, 468))

    # REGISTER button: ~(660, 505) → (880, 535)
    draw_rect(draw, [658, 503, 882, 537], GREEN)
    draw_label(draw, (480, 510), "Click to Register", font=FONT_SMALL, color=GREEN)
    draw_arrow(draw, (600, 522), (656, 522), color=GREEN)

    # BACK TO SIGN IN: ~centered, y=555
    draw_label(draw, (660, 555), "Back to Sign In", font=FONT_SMALL, color=BLUE)

    save_img(img, overlay, "10_registration_form.png")


# ────────────────────────────────────────────────────────
# 11  Company email entered (from 15_email_company_entered.png)
# ────────────────────────────────────────────────────────
def annotate_11():
    img = open_img("15_email_company_entered.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Input field with company email: ~(920, 434) → (1240, 496)
    draw_rect(draw, [916, 430, 1244, 498], GREEN)
    draw_label(draw, (690, 450), "Company email entered", font=FONT_SMALL, color=GREEN)
    draw_arrow(draw, (848, 462), (914, 462), color=GREEN)

    # CONTINUE button enabled: ~(920, 518) → (1240, 562)
    draw_rect(draw, [916, 516, 1244, 564], GREEN)
    draw_label(draw, (660, 535), "Click to proceed\nto registration", font=FONT_SMALL, color=GREEN)
    draw_arrow(draw, (810, 542), (914, 542), color=GREEN)

    save_img(img, overlay, "11_company_email_login.png")


# ────────────────────────────────────────────────────────
# Admin pages
# ────────────────────────────────────────────────────────

def annotate_admin_users():
    """33 - Admin Users Page"""
    img = open_img("33_ifz_admin_users.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Search bar: ~(210, 110) → (640, 142)
    draw_rect(draw, [208, 108, 642, 144], RED, width=2)
    draw_label(draw, (210, 80), "Search users", font=FONT_SMALL)

    # Status filter: ~(850, 105) → (990, 140)
    draw_rect(draw, [848, 103, 992, 142], BLUE, width=2)
    draw_label(draw, (855, 78), "Filter by status", font=FONT_SMALL, color=BLUE)

    # ADD USER button: ~(920, 153) → (990, 178)
    draw_rect(draw, [918, 151, 992, 180], GREEN, width=2)
    draw_label(draw, (920, 128), "Add new user", font=FONT_SMALL, color=GREEN)

    # Actions column (3-dot menu): rightmost column
    draw_rect(draw, [960, 208, 992, 290], RED, width=2)
    draw_label(draw, (1000, 230), "User actions\n(verify, edit, etc.)", font=FONT_SMALL)

    save_img(img, overlay, "12_admin_users.png")


def annotate_status_filter():
    """Status filter dropdown open"""
    img = open_img("verify_status_filter_open.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Status dropdown open: ~(850, 100) → (990, 220)
    draw_rect(draw, [848, 98, 992, 222], RED)
    draw_label(draw, (1005, 130), "Status filter options", font=FONT_SMALL)

    # "Unverified" option: ~y=205
    draw_rect(draw, [855, 198, 985, 218], BLUE, width=2)
    draw_label(draw, (1005, 200), "Select to view\nunverified users", font=FONT_SMALL, color=BLUE)

    save_img(img, overlay, "15_status_filter_dropdown.png")


def annotate_unverified_users():
    """Unverified users list"""
    img = open_img("verify_unverified_users.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Status filter shows "Unverified": ~(850, 103) → (990, 142)
    draw_rect(draw, [848, 103, 992, 142], RED)
    draw_label(draw, (1005, 110), "Filtered: Unverified", font=FONT_SMALL)

    # The single unverified user row: ~(192, 275) → (990, 305)
    draw_rect(draw, [190, 273, 992, 307], RED)
    draw_label(draw, (400, 310), "Unverified user — admin must verify", font=FONT_SMALL)

    # "Unverified" status badge: ~(870, 280) → (920, 300)
    draw_rect(draw, [866, 278, 924, 302], BLUE, width=2)
    draw_label(draw, (700, 250), "Status badge", font=FONT_SMALL, color=BLUE)
    draw_arrow(draw, (778, 262), (864, 290), color=BLUE)

    save_img(img, overlay, "16_unverified_users.png")


def annotate_verification_banner():
    """Verification banner on Account Settings"""
    img = open_img("verification_banner.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Banner: ~(160, 88) → (890, 115)
    draw_rect(draw, [158, 86, 892, 118], RED)
    draw_label(draw, (250, 55), "Verification pending banner — visible until admin approves", font=FONT_SMALL)
    draw_arrow(draw, (480, 72), (480, 84))

    save_img(img, overlay, "17_verification_banner.png")


# ────────────────────────────────────────────────────────
if __name__ == "__main__":
    print("Annotating all screenshots with corrected coordinates...\n")
    annotate_01()
    annotate_02()
    annotate_03()
    annotate_04()
    annotate_05()
    annotate_06()
    annotate_07()
    annotate_08()
    annotate_09()
    annotate_10()
    annotate_11()
    annotate_admin_users()
    annotate_status_filter()
    annotate_unverified_users()
    annotate_verification_banner()
    print(f"\nAll done! Annotated images saved to: {ANNOTATED_DIR}")
