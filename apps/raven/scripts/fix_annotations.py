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
    al = 14
    aa = math.pi / 6
    x1 = end[0] - al * math.cos(angle - aa)
    y1 = end[1] - al * math.sin(angle - aa)
    x2 = end[0] - al * math.cos(angle + aa)
    y2 = end[1] - al * math.sin(angle + aa)
    draw.polygon([end, (x1, y1), (x2, y2)], fill=color)


def draw_label(draw, pos, text, font=FONT, color=RED):
    bbox = font.getbbox(text)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x, y = pos
    pad = 5
    draw.rectangle([x - pad, y - pad, x + tw + pad, y + th + pad],
                    fill=(255, 255, 255, 230), outline=color, width=2)
    draw.text(pos, text, fill=color, font=font)


def draw_callout(draw, pos, num, color=(220, 50, 50), size=28):
    x, y = pos
    draw.ellipse([x, y, x + size, y + size], fill=color)
    text = str(num)
    bbox = FONT.getbbox(text)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    draw.text((x + (size - tw) // 2, y + (size - th) // 2 - 2), text,
              fill=(255, 255, 255), font=FONT)


def draw_rect(draw, box, color=RED, width=3):
    draw.rectangle(box, outline=color, width=width)


def open_img(name):
    return Image.open(os.path.join(SCREENSHOTS_DIR, name)).convert("RGBA")


def save_img(img, overlay, name):
    result = Image.alpha_composite(img, overlay).convert("RGB")
    result.save(os.path.join(ANNOTATED_DIR, name))
    print(f"  [OK] {name}")


# ──── 05 Domain selection modal ────
# Modal: x=510-929. Info text at y=490-510. Domain items scattered y=160-460
def fix_05():
    img = open_img("05_domain_selection_modal.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    draw_rect(draw, [507, 118, 933, 738], RED)

    draw_label(draw, (260, 130), "Select your\nplant/domain", font=FONT_LARGE)
    draw_arrow(draw, (400, 155), (508, 140))

    draw_rect(draw, [530, 155, 650, 215], BLUE, width=2)
    draw_label(draw, (660, 170), "Individual domains", font=FONT_SMALL, color=BLUE)

    draw_rect(draw, [530, 225, 650, 300], GREEN, width=2)
    draw_label(draw, (660, 250), "Grouped by plant area", font=FONT_SMALL, color=GREEN)

    # Info message is at y≈490-510, inside the modal
    draw_label(draw, (260, 680), "Can be changed later\nfrom left sidebar", font=FONT_SMALL, color=GREEN)
    draw_arrow(draw, (420, 690), (510, 690), color=GREEN)

    save_img(img, overlay, "05_domain_selection.png")


# ──── 06 Main app ────
def fix_06():
    img = open_img("06_main_app_after_domain.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    draw_rect(draw, [3, 56, 165, 102], RED)
    draw_label(draw, (175, 65), "Selected domain", font=FONT_SMALL)
    draw_arrow(draw, (173, 78), (167, 78))

    draw_rect(draw, [13, 138, 157, 162], BLUE, width=2)
    draw_label(draw, (175, 140), "AI Search agent", font=FONT_SMALL, color=BLUE)
    draw_arrow(draw, (173, 150), (159, 150), color=BLUE)

    draw_rect(draw, [308, 310, 865, 400], GREEN, width=2)
    draw_label(draw, (310, 405), "Start asking questions here", font=FONT_SMALL, color=GREEN)

    save_img(img, overlay, "06_main_app.png")


# ──── 07 Settings menu ────
# From pixel data: Account Settings y≈573-590, Sign Out y≈782-799
# Popup spans x=20-169, y=552 (top border) to y=831 (bottom border)
def fix_07():
    img = open_img("07_settings_menu_open.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Account Settings: y=573-590, x=34-169
    draw_rect(draw, [30, 568, 172, 595], RED)
    draw_label(draw, (180, 572), "Click to view your profile", font=FONT_SMALL)
    draw_arrow(draw, (178, 582), (174, 582))

    # Sign Out: y=782-799, x=35-124
    draw_rect(draw, [30, 777, 172, 804], RED)
    draw_label(draw, (180, 782), "Sign out of your account", font=FONT_SMALL)
    draw_arrow(draw, (178, 792), (174, 792))

    save_img(img, overlay, "07_settings_menu.png")


# ──── 08 Account Settings page ────
# Field borders at y=123, 178, 258, 363
# Name text: y=73-122, EmpID: y=123-155, Unit: y=178-235, Dept: y=258-362
# CANCEL text at ~(750, 385-395), SAVE PROFILE button at ~(790, 380-400)
def fix_08():
    img = open_img("08_account_page.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Name field: y=70-123
    draw_callout(draw, (880, 88), 1)
    draw_label(draw, (920, 90), "Your Name", font=FONT_SMALL)

    # Employee ID: y=123-178
    draw_callout(draw, (880, 142), 2)
    draw_label(draw, (920, 144), "Your Employee ID", font=FONT_SMALL)

    # Unit: y=178-258
    draw_callout(draw, (880, 205), 3)
    draw_label(draw, (920, 207), "Your Unit", font=FONT_SMALL)

    # Departments: y=258-363
    draw_callout(draw, (880, 275), 4)
    draw_label(draw, (920, 277), "Your Departments", font=FONT_SMALL)

    # SAVE PROFILE button at approximately (790, 378) to (870, 400)
    draw_rect(draw, [783, 375, 872, 402], GREEN)
    draw_label(draw, (660, 380), "Save changes", font=FONT_SMALL, color=GREEN)
    draw_arrow(draw, (755, 390), (781, 390), color=GREEN)

    save_img(img, overlay, "08_account_page.png")


# ──── 10 Registration form (16_after_company_email_continue.png) ────
# Card shadow at x=650-719, card content starts at x>720
# Form fields start at about x=660 and end at x=880
# Looking at the raw screenshot, fields are:
#   "Create your account" heading ~y=96
#   Name* ~y=143-178, Employee ID* ~y=193-228
#   Email (prefilled) ~y=253-288, Password* ~y=298-335
#   Confirm Password* ~y=348-385, Unit ~y=398-432
#   Department ~y=450-488, REGISTER ~y=505-535
#   BACK TO SIGN IN ~y=555
def fix_10():
    img = open_img("16_after_company_email_continue.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Arrows should point RIGHT (from labels to form fields)
    # Name field
    draw_callout(draw, (600, 150), 1)
    draw_label(draw, (480, 152), "Full Name *", font=FONT_SMALL)
    draw_arrow(draw, (630, 166), (658, 166))

    # Employee ID
    draw_callout(draw, (600, 200), 2)
    draw_label(draw, (468, 202), "Employee ID *", font=FONT_SMALL)
    draw_arrow(draw, (630, 216), (658, 216))

    # Email (pre-filled)
    draw_callout(draw, (600, 260), 3, BLUE)
    draw_label(draw, (460, 262), "Email (pre-filled)", font=FONT_SMALL, color=BLUE)
    draw_arrow(draw, (630, 276), (658, 276), color=BLUE)

    # Password
    draw_callout(draw, (600, 310), 4)
    draw_label(draw, (470, 312), "Set Password *", font=FONT_SMALL)
    draw_arrow(draw, (630, 326), (658, 326))

    # Confirm Password
    draw_callout(draw, (600, 360), 5)
    draw_label(draw, (440, 362), "Confirm Password *", font=FONT_SMALL)
    draw_arrow(draw, (630, 376), (658, 376))

    # Unit
    draw_label(draw, (478, 412), "Unit (auto-filled)", font=FONT_SMALL, color=BLUE)
    draw_arrow(draw, (610, 420), (658, 420), color=BLUE)

    # Department
    draw_label(draw, (470, 462), "Select Department", font=FONT_SMALL)
    draw_arrow(draw, (610, 470), (658, 470))

    # REGISTER button
    draw_rect(draw, [658, 503, 882, 537], GREEN)
    draw_label(draw, (480, 512), "Click to Register", font=FONT_SMALL, color=GREEN)
    draw_arrow(draw, (610, 522), (656, 522), color=GREEN)

    # BACK TO SIGN IN
    draw_label(draw, (680, 555), "Back to Sign In", font=FONT_SMALL, color=BLUE)

    save_img(img, overlay, "10_registration_form.png")


# ──── 12 Admin users (33_ifz_admin_users.png) ────
# Search bar: ~(210, 106) → (640, 140)
# Status dropdown: ~(850, 100) → (990, 140)
# ADD USER button: ~(918, 152) → (992, 178)
# Table header: y≈219
# Actions column: last column, x≈960
def fix_12():
    img = open_img("33_ifz_admin_users.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Search bar
    draw_rect(draw, [208, 104, 644, 142], RED, width=2)
    draw_label(draw, (210, 80), "Search users", font=FONT_SMALL)

    # Status filter dropdown
    draw_rect(draw, [848, 96, 992, 144], BLUE, width=2)
    draw_label(draw, (848, 72), "Filter by status", font=FONT_SMALL, color=BLUE)

    # ADD USER button
    draw_rect(draw, [916, 150, 994, 180], GREEN, width=2)
    draw_label(draw, (770, 182), "Add new user", font=FONT_SMALL, color=GREEN)
    draw_arrow(draw, (850, 188), (914, 168), color=GREEN)

    # Actions column
    draw_rect(draw, [958, 235, 992, 280], RED, width=2)
    draw_label(draw, (1000, 248), "User actions\n(verify, edit)", font=FONT_SMALL)

    save_img(img, overlay, "12_admin_users.png")


# ──── 15 Status filter dropdown open ────
# Status dropdown is open showing: All (y≈167-178), Verified (y≈192-193 line + text), Unverified (y≈220-229)
def fix_15():
    img = open_img("verify_status_filter_open.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Dropdown box
    draw_rect(draw, [848, 96, 992, 235], RED)
    draw_label(draw, (660, 100), "Status filter options", font=FONT_SMALL)
    draw_arrow(draw, (790, 112), (846, 112))

    # "Unverified" option
    draw_rect(draw, [853, 215, 988, 232], BLUE, width=2)
    draw_label(draw, (660, 218), "Select to view\nunverified users", font=FONT_SMALL, color=BLUE)
    draw_arrow(draw, (790, 225), (851, 225), color=BLUE)

    save_img(img, overlay, "15_status_filter_dropdown.png")


# ──── 16 Unverified users ────
# Filtered result - single row: ALOK KUMAR KUSH... at y≈280-305
# "Unverified" badge in Status column at x≈870-920
def fix_16():
    img = open_img("verify_unverified_users.png")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Status filter shows "Unverified"
    draw_rect(draw, [848, 100, 992, 142], RED)
    draw_label(draw, (700, 76), "Filtered: Unverified", font=FONT_SMALL)
    draw_arrow(draw, (830, 88), (846, 118))

    # Unverified user row
    draw_rect(draw, [192, 275, 992, 310], RED)
    draw_label(draw, (250, 318), "Unverified user — admin must verify", font=FONT_SMALL)

    # Unverified status badge
    draw_rect(draw, [865, 280, 932, 305], BLUE, width=2)
    draw_label(draw, (700, 260), "Status badge", font=FONT_SMALL, color=BLUE)
    draw_arrow(draw, (780, 270), (863, 290), color=BLUE)

    save_img(img, overlay, "16_unverified_users.png")


if __name__ == "__main__":
    print("Fixing problematic annotations...\n")
    fix_05()
    fix_06()
    fix_07()
    fix_08()
    fix_10()
    fix_12()
    fix_15()
    fix_16()
    print("\nAll fixes applied!")
