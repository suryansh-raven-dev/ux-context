# Selectors Memory

## Purpose
Track stable selectors, reliable labels, and fallback targeting strategies discovered during exploration.

## Stable Targets

### Login Flow
| Target | Selector | Confirmed |
|--------|----------|-----------|
| Employee ID input | `input` (first on page) | 2026-03-21 |
| Continue button | `button:has-text('Continue')` | 2026-03-21 |
| Password input | `input[type='password']` | 2026-03-21 |
| Login button | `button:has-text('Login')` | 2026-03-21 |
| Back link | `text=BACK` | 2026-03-21 |

### Domain Selection
| Target | Selector | Confirmed |
|--------|----------|-----------|
| Domain modal heading | `h2:has-text('Select a domain')` | 2026-03-21 |
| Domain option (e.g. HSEF) | `text=HSEF` | 2026-03-21 |

### Sidebar Navigation
| Target | Selector | Confirmed |
|--------|----------|-----------|
| Search link | `a[href='/search']` | 2026-03-21 |
| P&ID link | `a[href='/pid']` or `a:has-text('P&ID')` | 2026-03-21 |
| Data Explorer link | `a[href='/data/data-explorer']` | 2026-03-21 |
| Settings trigger | `li:has-text('Settings')` (in sidebar, role=menuitem) | 2026-03-21 |
| View All sessions | `text=View All` | 2026-03-21 |

### Search / Knowledge Hub
| Target | Selector | Confirmed |
|--------|----------|-----------|
| Search input (new session) | `textarea[placeholder='Search, or ask anything...']` | 2026-03-21 |
| Follow-up input | `textarea[placeholder='Ask a follow-up...']` | 2026-03-21 |
| AI Answer tab | `text=AI ANSWER` | 2026-03-21 |
| Sources tab | `text=SOURCES` | 2026-03-21 |
| AI Thoughts section | `text=AI Thoughts` | 2026-03-21 |
| New Session button | `button:has-text('NEW SESSION')` | 2026-03-21 |
| Refine Search | `text=Refine Search` | 2026-03-21 |

### P&ID
| Target | Selector | Confirmed |
|--------|----------|-----------|
| P&ID search | `input[placeholder='Search by P&ID no or Equipment tag...']` | 2026-03-21 |

### Data Explorer
| Target | Selector | Confirmed |
|--------|----------|-----------|
| Upload button | `button:has-text('UPLOAD FILE')` | 2026-03-21 |
| Filter button | `button:has-text('FILTER')` | 2026-03-21 |
| Sort button | `button:has-text('SORT')` | 2026-03-21 |
| Search files input | `input[placeholder='Search files']` | 2026-03-21 |
| Confirm upload | `button:has-text('CONFIRM UPLOAD')` | 2026-03-21 |
| Cancel upload | `button:has-text('CANCEL')` | 2026-03-21 |

### Settings Popup
| Target | Selector | Confirmed |
|--------|----------|-----------|
| Account Settings | `li:has-text('Account Settings')` in popup | 2026-03-21 |
| Workplace Settings | `li:has-text('Workplace Settings')` in popup | 2026-03-21 |
| Saved Answers | `li:has-text('Saved Answers')` in popup | 2026-03-21 |
| Feedback | `li:has-text('Feedback')` in popup | 2026-03-21 |
| Dark Mode toggle | `li:has-text('Dark Mode')` in popup | 2026-03-21 |
| Sign Out | `li:has-text('Sign Out')` in popup | 2026-03-21 |
| Popup container | `.MuiPopover-root.MuiMenu-root` | 2026-03-21 |

## Fallback Strategies
- Prefer accessible labels and visible text before brittle CSS chains.
- If the UI is canvas-heavy or visually complex, document the visual anchor instead of forcing an unstable selector.
- MUI uses dynamically generated CSS class names (e.g., `css-5ms4u1`) — avoid targeting these.
- Use `role` attributes where available (e.g., `role='menuitem'` for sidebar and settings items).
- `text=` selectors work well in Playwright for this app since labels are consistent.

## Unreliable Areas
- MUI CSS class hashes (e.g., `css-749mnm`) — dynamically generated, will change between builds.
- Domain selector in sidebar — clicking it opens a MUI dropdown, but the backdrop intercepts clicks on underlying elements.
- Settings popup backdrop — `MuiBackdrop-root` can intercept clicks if not properly dismissed first.

## Multi-Environment Notes
- Selectors confirmed on `ifz.startraven.com` as of 2026-03-21.
- `copilot.startraven.com` (Block Imaging) uses the same UI framework but may have configuration differences:
  - Dept dropdown may be empty (no options).
  - P&ID navigation may show "coming soon" instead of "No files found."
  - File action menu lacks "Add Tag" option.
  - Data Management may use a single-option dropdown instead of direct nav.
- Test accounts for Block Imaging: `ben.rolff@blockimaging.com` / `BlockImaging@123`
- Test accounts for Indorama IFZ: Employee ID `SURYANSH-04` / `RavenTesting@123`
- Test accounts for Indorama IPL: Employee ID `copilot-admin-ipl` / `RavenTesting@123`
- Admin portals: `admin.startraven.com`, `admin.ifz.startraven.com`

## Update Rule
Whenever a selector is added, note the workflow and the last environment where it was confirmed.
