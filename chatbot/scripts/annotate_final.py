"""
Final annotation script with pixel-scan-verified coordinates.

Key coordinate reference (from actual pixel sampling):
- Login/registration card: starts at x≈720, fields at x=920-1240
- Sidebar width: x=0-240
- Main app search box: x=449-1223, y=450-530
- Settings popup menu: x=4-225, y=565-810
- Account page form fields: x=410-1262
- Admin page content: starts at x=257
- Verification banner (1024px): x=159-922, y=95-120
"""
from PIL import Image, ImageDraw, ImageFont
import os
import math

SCREENSHOTS_DIR = "/Users/suryanshsrivastava/Testing Files/apps/raven/help-doc/screenshots"
ANNOTATED_DIR = os.path.join(SCREENSHOTS_DIR, "annotated")
os.makedirs(ANNOTATED_DIR, exist_ok=True)

RED = (220, 50, 50)
GREEN = (0, 150, 0)
BLUE = (0, 100, 200)
GREY = (140, 140, 140)

try:
    FONT = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 18)
    FONT_SM = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 14)
    FONT_LG = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 22)
except Exception:
    FONT = ImageFont.load_default()
    FONT_SM = FONT
    FONT_LG = FONT


def draw_arrow(d, start, end, color=RED, width=3):
    d.line([start, end], fill=color, width=width)
    angle = math.atan2(end[1] - start[1], end[0] - start[0])
    arrow_len = 14
    arrow_angle = math.pi / 6
    d.polygon([
        end,
        (end[0] - arrow_len * math.cos(angle - arrow_angle),
         end[1] - arrow_len * math.sin(angle - arrow_angle)),
        (end[0] - arrow_len * math.cos(angle + arrow_angle),
         end[1] - arrow_len * math.sin(angle + arrow_angle)),
    ], fill=color)


def draw_label(d, pos, text, font=None, color=RED):
    if font is None:
        font = FONT_SM
    bb = font.getbbox(text)
    tw, th = bb[2] - bb[0], bb[3] - bb[1]
    x, y = pos
    pad = 5
    lines = text.split('\n')
    if len(lines) > 1:
        th = sum(font.getbbox(l)[3] - font.getbbox(l)[1] for l in lines) + 4 * (len(lines) - 1)
        tw = max(font.getbbox(l)[2] - font.getbbox(l)[0] for l in lines)
    d.rectangle([x - pad, y - pad, x + tw + pad, y + th + pad],
                fill=(255, 255, 255, 230), outline=color, width=2)
    d.text(pos, text, fill=color, font=font)


def draw_callout(d, pos, number, color=RED, size=28):
    x, y = pos
    d.ellipse([x, y, x + size, y + size], fill=color)
    t = str(number)
    bb = FONT.getbbox(t)
    tw, th = bb[2] - bb[0], bb[3] - bb[1]
    d.text((x + (size - tw) // 2, y + (size - th) // 2 - 2), t,
           fill=(255, 255, 255), font=FONT)


def draw_rect(d, box, color=RED, width=3):
    d.rectangle(box, outline=color, width=width)


def open_img(name):
    return Image.open(os.path.join(SCREENSHOTS_DIR, name)).convert("RGBA")


def save_img(base, overlay, name):
    Image.alpha_composite(base, overlay).convert("RGB").save(
        os.path.join(ANNOTATED_DIR, name))
    print(f"  [OK] {name}")


# ─── 01: Login Page (initial) ───
# Input field: x=920-1240, y=440-475
# CONTINUE button: x=920-1240, y=525-555
def annotate_01():
    img = open_img("01_login_page_initial.png")
    ov = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)

    draw_rect(d, [917, 437, 1243, 478], RED)
    draw_callout(d, (1255, 443), 1)
    draw_label(d, (1290, 445), "Enter Email or\nEmployee ID")

    draw_rect(d, [917, 522, 1243, 558], GREEN)
    draw_callout(d, (1255, 528), 2, GREEN)
    draw_label(d, (1290, 530), "Click CONTINUE", color=GREEN)

    save_img(img, ov, "01_login_page.png")


# ─── 02: Employee ID Entered ───
# Input field (purple border): x=920-1240, y=434-495
# CONTINUE button: x=920-1240, y=520-560
def annotate_02():
    img = open_img("02_login_employee_id_entered.png")
    ov = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)

    draw_rect(d, [917, 430, 1243, 498], RED)
    draw_label(d, (1255, 455), "Employee ID\nentered")

    draw_rect(d, [917, 517, 1243, 563], GREEN)
    draw_label(d, (1255, 530), "CONTINUE\nis now enabled", color=GREEN)

    save_img(img, ov, "02_employee_id_entered.png")


# ─── 03: Password Step (LOGIN disabled) ───
# Employee ID field (read-only): x=920-1240, y=368-430
# Password field: x=920-1240, y=438-498
# LOGIN button (disabled): x=920-1240, y=508-545
# BACK link: ~x=1080, y=558
def annotate_03():
    img = open_img("03_login_password_step.png")
    ov = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)

    draw_rect(d, [917, 365, 1243, 433], BLUE)
    draw_callout(d, (1255, 380), 1, BLUE)
    draw_label(d, (1290, 382), "Employee ID\n(read-only)", color=BLUE)

    draw_rect(d, [917, 435, 1243, 500], RED)
    draw_callout(d, (1255, 450), 2)
    draw_label(d, (1290, 452), "Enter your\npassword")

    draw_rect(d, [917, 505, 1243, 548], GREY)
    draw_callout(d, (1255, 515), 3, GREY)
    draw_label(d, (1290, 517), "Click LOGIN\n(disabled until\npassword entered)", color=GREY)

    save_img(img, ov, "03_password_step.png")


# ─── 04: Password Filled, LOGIN Enabled ───
# Password field (purple border): x=920-1240, y=426-498
# LOGIN button (purple/enabled): x=920-1240, y=506-550
def annotate_04():
    img = open_img("04_login_password_filled.png")
    ov = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)

    draw_rect(d, [917, 423, 1243, 500], GREEN)
    draw_label(d, (1255, 450), "Password\nentered", color=GREEN)

    draw_rect(d, [917, 503, 1243, 553], GREEN)
    draw_label(d, (1255, 518), "LOGIN is now\nenabled", color=GREEN)

    save_img(img, ov, "04_password_filled.png")


# ─── 05: Domain Selection Modal ───
# Modal card: x=510-930, y=160-540
# Domain items: y=195-470
# Info message: y=470-530
def annotate_05():
    img = open_img("05_domain_selection_modal.png")
    ov = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)

    draw_rect(d, [507, 155, 933, 540], RED)

    draw_label(d, (940, 165), "Select your\nplant/domain", font=FONT_LG)
    draw_arrow(d, (938, 180), (935, 180))

    draw_rect(d, [520, 188, 610, 230], BLUE, 2)
    draw_label(d, (615, 195), "Individual domains", color=BLUE)

    draw_rect(d, [520, 240, 610, 310], GREEN, 2)
    draw_label(d, (615, 260), "Grouped by plant area", color=GREEN)

    draw_label(d, (940, 490), "Can be changed later\nfrom the left sidebar", color=GREEN)
    draw_arrow(d, (938, 500), (935, 500), GREEN)

    save_img(img, ov, "05_domain_selection.png")


# ─── 06: Main App After Domain ───
# SELECTED DOMAIN + HSEF: sidebar x=0-170, y=50-100
# Search link: sidebar y=145-160
# Search input box: x=449-1223, y=450-530
def annotate_06():
    img = open_img("06_main_app_after_domain.png")
    ov = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)

    draw_rect(d, [3, 50, 170, 105], RED)
    draw_label(d, (175, 60), "Selected domain")
    draw_arrow(d, (173, 72), (172, 72))

    draw_rect(d, [8, 140, 160, 165], BLUE, 2)
    draw_label(d, (168, 143), "AI Search agent", color=BLUE)
    draw_arrow(d, (166, 155), (162, 155), BLUE)

    draw_rect(d, [446, 447, 1226, 533], GREEN, 2)
    draw_label(d, (450, 538), "Start asking questions here", color=GREEN)

    save_img(img, ov, "06_main_app.png")


# ─── 07: Settings Menu Popup ───
# Popup menu: x=4-225, y=565-810
# Account Settings: y≈575
# Sign Out: y≈790 (red text)
def annotate_07():
    img = open_img("07_settings_menu_open.png")
    ov = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)

    draw_rect(d, [20, 568, 168, 598], RED)
    draw_label(d, (175, 573), "View your profile")
    draw_arrow(d, (173, 583), (170, 583))

    draw_rect(d, [20, 782, 100, 807], RED)
    draw_label(d, (108, 785), "Sign out")
    draw_arrow(d, (106, 795), (102, 795))

    save_img(img, ov, "07_settings_menu.png")


# ─── 08: Account Page ───
# Form area: x=410-1262
# Name: y=85-125, Employee ID: y=140-180, Unit: y=195-240, Dept: y=255-295
# SAVE PROFILE: bottom right area
def annotate_08():
    img = open_img("08_account_page.png")
    ov = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)

    draw_callout(d, (380, 98), 1)
    draw_label(d, (280, 100), "Your Name")
    draw_arrow(d, (378, 112), (340, 112))

    draw_callout(d, (380, 155), 2)
    draw_label(d, (260, 157), "Employee ID")
    draw_arrow(d, (378, 168), (340, 168))

    draw_callout(d, (380, 212), 3)
    draw_label(d, (283, 214), "Your Unit")
    draw_arrow(d, (378, 225), (340, 225))

    draw_callout(d, (380, 270), 4)
    draw_label(d, (260, 272), "Departments")
    draw_arrow(d, (378, 283), (340, 283))

    save_img(img, ov, "08_account_page.png")


# ─── 09: Email Validation Error ───
# Input field (red border): x=920-1240, y=435-475
# Error text: y≈496-505 (red text)
# CONTINUE disabled: x=920-1240, y=540-555
def annotate_09():
    img = open_img("10_email_login_entered.png")
    ov = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)

    draw_rect(d, [917, 432, 1243, 510], RED)
    draw_label(d, (1255, 455), "Domain validation\nerror — use\ncompany email")

    draw_label(d, (1255, 540), "CONTINUE is\ndisabled", color=GREY)

    save_img(img, ov, "09_email_validation_error.png")


# ─── 10: Registration Form ───
# All fields at x=920-1240
# Name: y=195-230, EmpID: y=248-285, Email: y=318-360
# Password: y=388-430, ConfirmPW: y=444-480
# Unit: y=525-560, Dept: y=608-645
# REGISTER: y=705-740, BACK: y=770
def annotate_10():
    img = open_img("16_after_company_email_continue.png")
    ov = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)

    draw_callout(d, (880, 205), 1)
    draw_label(d, (915, 207), "Full Name *")
    draw_arrow(d, (918, 218), (920, 218))

    draw_callout(d, (880, 260), 2)
    draw_label(d, (915, 262), "Employee ID *")
    draw_arrow(d, (918, 273), (920, 273))

    draw_callout(d, (880, 333), 3, BLUE)
    draw_label(d, (915, 335), "Email (pre-filled)", color=BLUE)
    draw_arrow(d, (918, 345), (920, 345), BLUE)

    draw_callout(d, (880, 400), 4)
    draw_label(d, (915, 402), "Set Password *")
    draw_arrow(d, (918, 413), (920, 413))

    draw_callout(d, (880, 458), 5)
    draw_label(d, (915, 460), "Confirm Password *")
    draw_arrow(d, (918, 472), (920, 472))

    draw_label(d, (1255, 540), "Unit (auto-filled)", color=BLUE)
    draw_arrow(d, (1253, 548), (1242, 548), BLUE)

    draw_label(d, (1255, 618), "Select Department")
    draw_arrow(d, (1253, 626), (1242, 626))

    draw_rect(d, [917, 702, 1243, 743], GREEN)
    draw_label(d, (1255, 712), "Click to Register", color=GREEN)
    draw_arrow(d, (1253, 722), (1245, 722), GREEN)

    draw_label(d, (1060, 770), "Back to Sign In", color=BLUE)

    save_img(img, ov, "10_registration_form.png")


# ─── 11: Company Email Entered ───
# Same as 02 layout: field at x=920-1240
def annotate_11():
    img = open_img("15_email_company_entered.png")
    ov = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)

    draw_rect(d, [917, 430, 1243, 468], GREEN)
    draw_label(d, (1255, 440), "Company email\nentered", color=GREEN)

    draw_rect(d, [917, 520, 1243, 558], GREEN)
    draw_label(d, (1255, 530), "Click to proceed\nto registration", color=GREEN)

    save_img(img, ov, "11_company_email_login.png")


# ─── 12: Admin Users Page ───
# Content starts at x=257
# Search bar: x≈282, y≈108-140
# Button row at y≈155-190 with buttons at: EXPORT(x≈910-935), IMPORT(x≈1176-1200), ADD USER(x≈1395-1425)
# Table header: y≈220-245
def annotate_12():
    img = open_img("33_ifz_admin_users.png")
    ov = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)

    draw_rect(d, [280, 105, 900, 145], RED, 2)
    draw_label(d, (283, 85), "Search users")

    draw_rect(d, [1390, 152, 1425, 192], GREEN, 2)
    draw_label(d, (1270, 158), "Add new user", color=GREEN)
    draw_arrow(d, (1350, 170), (1388, 170), GREEN)

    save_img(img, ov, "12_admin_users.png")


# ─── 15: Status Filter Open ───
# Based on 33_ifz_admin_users.png layout but with dropdown open
def annotate_15():
    img = open_img("verify_status_filter_open.png")
    ov = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)

    draw_rect(d, [1190, 100, 1425, 210], RED)
    draw_label(d, (1000, 120), "Status filter options")
    draw_arrow(d, (1130, 130), (1188, 130))

    save_img(img, ov, "15_status_filter_dropdown.png")


# ─── 16: Unverified Users ───
def annotate_16():
    img = open_img("verify_unverified_users.png")
    ov = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)

    draw_rect(d, [1190, 100, 1425, 150], RED)
    draw_label(d, (1000, 108), "Filtered: Unverified")
    draw_arrow(d, (1130, 118), (1188, 118))

    draw_rect(d, [260, 290, 1420, 340], RED)
    draw_label(d, (300, 345), "Unverified user — admin must verify")

    save_img(img, ov, "16_unverified_users.png")


# ─── 17: Verification Banner ───
# Image is 1024x661
# Banner: x=159-922, y=95-120
def annotate_17():
    img = open_img("verification_banner.png")
    ov = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)

    draw_rect(d, [156, 90, 925, 125], RED)
    draw_label(d, (200, 60), "Verification pending — visible until admin approves")
    draw_arrow(d, (420, 78), (420, 88))

    save_img(img, ov, "17_verification_banner.png")


if __name__ == "__main__":
    print("Generating all annotations with pixel-verified coordinates...\n")
    fns = [
        annotate_01, annotate_02, annotate_03, annotate_04, annotate_05,
        annotate_06, annotate_07, annotate_08, annotate_09, annotate_10,
        annotate_11, annotate_12, annotate_15, annotate_16, annotate_17,
    ]
    for fn in fns:
        fn()
    print(f"\nDone! All files in: {ANNOTATED_DIR}")
