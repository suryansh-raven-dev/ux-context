# Learned Context: Data Explorer

## Discovery Status
`explored`

## User-Provided Truth
- Data Explorer is a document management section within Raven.
- It is accessible from the main sidebar navigation.

## Observed Behavior
- URL: `/data/data-explorer`
- Page title: "Data Explorer"
- File-browser-style interface with folder/file hierarchy.
- Top toolbar: FILTER button, SORT button, Search files input, UPLOAD FILE button (purple).
- File table columns: Name | Status | Date Modified | Category | Tags | Actions.
- Under HSEF domain, root shows two folders: `HSEF/` and `Reports/`.
- The `Reports/` folder contains at least one file: `04-IFL-HSEF Monthly Report_ April 2025.xlsx` with status "Completed" (green checkmark), date "27 Oct 2025", category "Tabular", and a three-dot action menu.
- Breadcrumb navigation (`Files / Reports`) supports folder traversal.
- Pagination present: "1-1 of 1" with prev/next arrows.

### Upload Feature
- "UPLOAD FILE" button opens a modal dialog.
- Dialog shows drag-and-drop zone: "Click to upload or drag and drop".
- Accepted content types: Documents (PDF or Doc), Images, Excel Sheets.
- Supported formats: pdf, txt, docx, png, jpg, jpeg, csv, xls, xlsx.
- CANCEL and CONFIRM UPLOAD buttons on the modal.

### Filter Options
- Clicking FILTER opens a dropdown with four filter categories:
  - File Category (expandable submenu)
  - File Type (expandable submenu)
  - File Status (expandable submenu)
  - Tags (expandable submenu)

### Sort
- SORT button present but not explored in depth.

## Confirmed Paths
- Browse folders — confirmed
- View file details (name, status, date, category, tags) — confirmed
- Upload file dialog — confirmed
- Filter by category/type/status/tags — confirmed (UI present)
- Search files — confirmed (search input present)
- Breadcrumb navigation — confirmed

## UI Targets
- Data Explorer URL: `/data/data-explorer`
- Sidebar link: `a[href='/data/data-explorer']`
- Upload button: `button:has-text('UPLOAD FILE')`
- Filter button: `button:has-text('FILTER')`
- Sort button: `button:has-text('SORT')`
- Search input: `input[placeholder='Search files']`
- File rows: table rows within the main content area
- Upload dialog confirm: `button:has-text('CONFIRM UPLOAD')`
- Upload dialog cancel: `button:has-text('CANCEL')`

## Success Signals
- Files display with correct metadata (name, status, date, category)
- Upload dialog opens and accepts files
- Filter dropdown shows available filter options
- Folder navigation works via click and breadcrumb

## Failure Signals
- Files fail to load or display incorrectly
- Upload dialog doesn't open or errors on file selection
- Filters don't narrow results

## Evidence Captured
- Screenshot: `screenshots/deep/07_data_explorer_page.png` — Data Explorer root view with HSEF and Reports folders
- Screenshot: `screenshots/final/05_data_explorer_reports_folder.png` — Reports folder with file details table
- Screenshot: `screenshots/final/06_upload_file_dialog.png` — Upload file modal
- Screenshot: `screenshots/final/07_data_explorer_filter.png` — Filter dropdown with four categories

## Cross-Environment Issues (From Slack #product, 2026-03-17)
Environment: `copilot.startraven.com` (Block Imaging)

### File Tagging Gaps
- **ADD TAG feature missing**: The three-dot action menu on files lacks an "Add Tag" option. Users cannot tag files from the file list.
- **Tags not auto-allotted**: Files appear with empty Tags columns, suggesting auto-tagging pipeline is broken or not configured.
- **Tag Management tab missing**: No centralized page exists for viewing, adding, editing, or deleting file tags. Feature request raised.

### File Action Menu UX
- Menu text is repetitive: "Download File", "Rename File", etc. Recommendation: shorten to "Download, Rename, Add/Edit Tag, Delete."

### File Preview
- File preview header is not adaptive/responsive — controls and options get cropped or overflow at certain widths.

### Single-Option Dropdown
- Data Management section uses a dropdown with only one option — anti-pattern. Should navigate directly from sidebar.

## Risks / Unknowns
- File download/preview behavior not tested.
- Actions menu (three dots) on individual files not explored.
- Actual upload functionality not tested (did not upload a file).
- Sort behavior not explored.
- Filter submenu options not fully explored.
- Domain-specific file availability varies.
- **NEW**: File tagging is broken — no add/edit tag in action menu, no auto-tagging (copilot.startraven.com).
- **NEW**: File preview header crops at certain viewport widths (copilot.startraven.com).
- **NEW**: No Tag Management page exists (feature gap).
