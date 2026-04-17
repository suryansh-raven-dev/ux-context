# raven-ui Non-Negotiables Checklist

**Purpose:** The complete list of what raven-ui, as a design system, MUST contain to support Raven's three products (Copilot, NMMS, P&ID) without forcing any product to fork, hardcode, or reinvent.
**Audience:** Frontend team (to audit current state), Design (to plan gaps), LLMs (to know what is safe to assume exists).
**How to use:** Each line is a checkbox. Mark `[x]` if raven-ui ships it today with full state coverage, a11y, docs, and tests. Mark `[~]` if partial. Mark `[ ]` if missing. Anything not `[x]` is a gap, not a feature request.
**Rule of thumb:** If it is on this list and is not in raven-ui, product teams MUST NOT build it locally. It is a raven-ui issue to open, not a product workaround to ship.

---

## Section A. Foundation tokens

Tokens are the foundation. If any token category is missing, every component built on top carries hardcoded fallbacks.

### A.1 Color tokens

- [ ] `color.brand.raven.*` (primary, hover, pressed, subtle, onBrand)
- [ ] `color.brand.tenant.*` (primary, onBrand; supplied per tenant via theming layer)
- [ ] `color.semantic.success.*` (default, subtle, strong, onColor)
- [ ] `color.semantic.warning.*` (default, subtle, strong, onColor)
- [ ] `color.semantic.danger.*` (default, subtle, strong, onColor)
- [ ] `color.semantic.info.*` (default, subtle, strong, onColor)
- [ ] `color.surface.background` (app background)
- [ ] `color.surface.raised` (cards, modals)
- [ ] `color.surface.sunken` (inset panels)
- [ ] `color.surface.overlay` (scrims behind modals)
- [ ] `color.content.primary`
- [ ] `color.content.secondary`
- [ ] `color.content.tertiary`
- [ ] `color.content.disabled`
- [ ] `color.content.inverse` (for dark surfaces)
- [ ] `color.content.link` (default, hover, visited)
- [ ] `color.border.default`
- [ ] `color.border.subtle`
- [ ] `color.border.strong`
- [ ] `color.border.focus`
- [ ] `color.category.*` registry keyed by plant section identifier (HSEF, AmmoniaTrain1, AmmoniaTrain2, and extensible)
- [ ] `color.status.*` registry keyed by NMMS lifecycle state (open, inReview, resolved, closed, cancelled, etc.)
- [ ] `color.engineering.equipment`
- [ ] `color.engineering.line`
- [ ] `color.engineering.instrument`
- [ ] `color.engineering.selected` (or a rule that uses category color)
- [ ] Dark mode mirror for every token above (if dark mode is a committed goal)

### A.2 Typography tokens

- [ ] `font.family.sans` (primary UI font)
- [ ] `font.family.mono` (for IDs, code, P&ID entity labels)
- [ ] `font.weight.regular` (400)
- [ ] `font.weight.medium` (500)
- [ ] `font.weight.semibold` (600)
- [ ] `font.weight.bold` (700)
- [ ] `font.size.xs`
- [ ] `font.size.sm`
- [ ] `font.size.md`
- [ ] `font.size.lg`
- [ ] `font.size.xl`
- [ ] `font.size.2xl`
- [ ] `font.size.display`
- [ ] `font.lineHeight.tight`
- [ ] `font.lineHeight.normal`
- [ ] `font.lineHeight.relaxed`
- [ ] `font.letterSpacing.tight`
- [ ] `font.letterSpacing.normal`
- [ ] `font.letterSpacing.wide`

### A.3 Spacing tokens

- [ ] `space.0` through `space.12` on published base (4 or 8px)
- [ ] `space.sidebar.wide` (wide sidebar width token)
- [ ] `space.sidebar.rail` (rail sidebar width token)
- [ ] `space.topbar.height`
- [ ] `space.container.max` (reading max-width)
- [ ] `space.form.max` (form max-width)

### A.4 Radius tokens

- [ ] `radius.none`
- [ ] `radius.sm`
- [ ] `radius.md`
- [ ] `radius.lg`
- [ ] `radius.xl`
- [ ] `radius.pill`
- [ ] `radius.circle`

### A.5 Elevation / shadow tokens

- [ ] `shadow.1` (subtle raise, e.g. cards on hover)
- [ ] `shadow.2` (default raised, e.g. cards)
- [ ] `shadow.3` (popovers)
- [ ] `shadow.4` (modals)
- [ ] `shadow.5` (canvas floating toolbar)

### A.6 Motion tokens

- [ ] `duration.instant` (~50ms)
- [ ] `duration.fast` (~150ms)
- [ ] `duration.base` (~250ms)
- [ ] `duration.slow` (~400ms)
- [ ] `ease.standard`
- [ ] `ease.entrance`
- [ ] `ease.exit`
- [ ] `ease.emphasized`

### A.7 Z-index tokens (no arbitrary layering)

- [ ] `z.base`
- [ ] `z.dropdown`
- [ ] `z.sticky`
- [ ] `z.overlay`
- [ ] `z.modal`
- [ ] `z.popover`
- [ ] `z.toast`
- [ ] `z.tooltip`

### A.8 Breakpoint tokens

- [ ] `breakpoint.sm`
- [ ] `breakpoint.md`
- [ ] `breakpoint.lg`
- [ ] `breakpoint.xl`
- [ ] `breakpoint.2xl`

### A.9 Density tokens

- [ ] `density.comfortable`
- [ ] `density.compact`
- [ ] Every data-display component (Table, List, Card) consumes density

### A.10 Opacity tokens

- [ ] `opacity.disabled`
- [ ] `opacity.hover`
- [ ] `opacity.scrim`

### A.11 Focus ring tokens

- [ ] `ring.focus.color`
- [ ] `ring.focus.width`
- [ ] `ring.focus.offset`

---

## Section B. Icon library

- [ ] Single canonical icon set shipped inside raven-ui (no per-product forks)
- [ ] Consistent stroke weight and grid
- [ ] Sizes: 16, 20, 24 (at minimum)
- [ ] Every icon has an `aria-label` slot or is decorative by default
- [ ] Naming convention documented (for example, `icon/search`, `icon/chevron-right`)
- [ ] Coverage for: navigation (hamburger, arrows, chevrons), actions (add, edit, delete, save, close), status (check, warning, error, info), domain (plant, equipment, line, instrument), AI (sparkle, cite, stream), file types
- [ ] Icon contribution process documented (add to raven-ui, not product repo)

---

## Section C. Form primitives

Every form primitive MUST ship with: default, hover, focus, active, disabled, readOnly, error, success states; sm/md/lg sizes where relevant; full keyboard support; screen reader labels.

- [ ] `Button` (primary, secondary, ghost, danger, link; icon-left, icon-right, icon-only; sm/md/lg; loading)
- [ ] `IconButton` (all sizes, tooltip-ready)
- [ ] `ButtonGroup`
- [ ] `SplitButton`
- [ ] `Input` (text, email, number, password, search)
- [ ] `Textarea` (auto-grow, max-rows, character counter)
- [ ] `Select` (single, searchable)
- [ ] `Combobox` (typeahead, async loading, multi-select)
- [ ] `Checkbox` (checked, unchecked, indeterminate, disabled)
- [ ] `CheckboxGroup`
- [ ] `Radio`
- [ ] `RadioGroup`
- [ ] `Switch` / `Toggle`
- [ ] `Slider` (single and range)
- [ ] `DatePicker` (with keyboard nav, range picker variant)
- [ ] `TimePicker`
- [ ] `FileUpload` (drag-drop, multi-file, progress, error)
- [ ] `ColorPicker` (only if category/tenant theming requires runtime picking)
- [ ] `Label`
- [ ] `HelperText`
- [ ] `ErrorMessage`
- [ ] `FieldGroup` (wraps label + control + helper + error)
- [ ] `Form` (wrapper with validation summary)
- [ ] `FormValidationSummary` (surfaces errors at top of form on submit)

---

## Section D. Display primitives

- [ ] `Badge` (sizes, colors via semantic / category / status families)
- [ ] `Chip` / `Tag` (removable, selected, disabled)
- [ ] `StatusChip` (binds to `color.status.*` only; enforces Section 8 rules in the guidelines: no leading colored dot)
- [ ] `CategoryDot` (binds to `color.category.*` only; system-level primitive for plant section)
- [ ] `Avatar` (image, initials fallback, sizes)
- [ ] `AvatarGroup` (with overflow count)
- [ ] `Divider` (horizontal, vertical, with label)
- [ ] `Skeleton` (text, block, circle; shimmer animation)
- [ ] `Spinner` (sizes; inline and block)
- [ ] `ProgressBar` (determinate, indeterminate)
- [ ] `ProgressRing`
- [ ] `Tooltip` (all placements; keyboard-reachable; dismissible)
- [ ] `KeyboardShortcut` (renders key bindings consistently)

---

## Section E. Overlay primitives

Every overlay MUST trap focus, close on Escape, restore focus on close, lock body scroll when modal.

- [ ] `Modal` / `Dialog` (sizes, with destructive variant)
- [ ] `AlertDialog` (for confirmations; two or three button variants)
- [ ] `Drawer` / `SlideOver` (left, right, top, bottom)
- [ ] `Popover` (positioned, anchor-aware)
- [ ] `Menu` (from trigger; keyboard nav; sub-menus)
- [ ] `ContextMenu` (right-click + keyboard)
- [ ] `CommandPalette` (Cmd+K; fuzzy search; action groups)
- [ ] `Sheet` (mobile bottom sheet)

---

## Section F. Feedback primitives

- [ ] `Toast` / `Snackbar` (success, warning, danger, info; stacking; auto-dismiss with pause-on-hover; action slot)
- [ ] `Banner` / `Alert` (inline, dismissible, variants)
- [ ] `InlineError`
- [ ] `InlineSuccess`
- [ ] `EmptyState` (with illustration slot, title, description, CTA; variants for each archetype)
- [ ] `NotFoundState` / `ErrorState` (retry action)
- [ ] `ConfirmationDialog` (compose with AlertDialog)

---

## Section G. Navigation primitives

- [ ] `Tabs` (horizontal, vertical; keyboard arrow nav; overflow handling)
- [ ] `SegmentedControl` (for 2 to 4 exclusive options)
- [ ] `Breadcrumbs` (with overflow collapsing)
- [ ] `Pagination` (numbered, prev/next, page size selector)
- [ ] `Stepper` (horizontal, vertical; with states: upcoming, current, complete, error)
- [ ] `NavigationMenu` (primary product navigation items)
- [ ] `SubMenu` / `NavGroup` (collapsible section in sidebar)
- [ ] `BackLink`
- [ ] `SkipLink` (accessibility; MUST be present in every shell)

---

## Section H. Shell primitives (the ones unique to Raven's archetypes)

- [ ] `AppShell` with composition slots (sidebar, topbar, main, right panel)
- [ ] `WideSidebar` (Copilot, NMMS default)
- [ ] `RailSidebar` (P&ID default)
- [ ] `RailWithExpand` (P&ID expanded; MUST share IA with WideSidebar composition)
- [ ] `TopBar` (brand slot, nav slot, actions slot, user slot)
- [ ] `PageHeader` (title, subtitle, actions; breadcrumbs optional)
- [ ] `PageLayout` (container widths, main + aside)
- [ ] `TenantLogo` (handles sizing, fallback, a11y name)
- [ ] `BrandAttribution` (renders "Powered by raven" with correct logo + safe zone)
- [ ] `TenantContextProvider` (supplies tenant tokens and logo at runtime)
- [ ] `UserMenu` (avatar trigger, menu with account, preferences, sign out)
- [ ] `DomainSelector` (shared primitive for plant/section selection; binds to CategoryDot)

---

## Section I. Layout primitives

- [ ] `Stack` (vertical layout with gap token)
- [ ] `Inline` (horizontal layout with gap token)
- [ ] `Grid` (responsive grid)
- [ ] `Container` (max-width wrapper)
- [ ] `Center`
- [ ] `Split` (two-column responsive)
- [ ] `AspectRatio`

---

## Section J. Data display

- [ ] `Table` (sortable headers, sticky header, row selection, bulk actions, density-aware, empty state, loading state)
- [ ] `DataGrid` (only if spreadsheet-like editing is required; otherwise Table is enough)
- [ ] `List` (ordered, unordered, with dividers)
- [ ] `Tree` (expand/collapse, keyboard nav; used by P&ID browse panel and NMMS hierarchical filters)
- [ ] `Card` (title, body, footer; selectable variant; clickable variant)
- [ ] `KeyValueList` (for metadata panels)
- [ ] `DefinitionList`
- [ ] `Accordion` (single and multi-open; for metadata panel sections)
- [ ] `Disclosure` (simpler toggle primitive)
- [ ] `Timeline` (for incident history in NMMS, chat session summary)

---

## Section K. AI primitives (Conversational Canvas archetype)

These support Copilot and P&ID Search. They MUST live in raven-ui, not per-product.

- [ ] `ChatInput` (multiline, submit on Enter, Shift+Enter newline, stop-generation affordance during stream)
- [ ] `MessageBubble` (user and assistant variants; markdown-capable)
- [ ] `StreamingText` (renders token-by-token from a stream source)
- [ ] `TypingIndicator`
- [ ] `CitationStrip` (deduplicated citations below an answer)
- [ ] `CitationCard` (source icon, doc name, short context; clickable)
- [ ] `SuggestionCard` (title, description, CategoryDot slot)
- [ ] `ChatSession` (wraps a message thread)
- [ ] `ChatHistoryList` (session list with auto-titled items; View All overflow)
- [ ] `AIAgentSelector` (used in P&ID to pick AI agent like Search)
- [ ] `AIErrorState` (with retry; preserves partial output per guideline 11.4)
- [ ] `PromptPlaceholder` (rotating hint text for ChatInput)

---

## Section L. Canvas primitives (Creative Canvas archetype)

These support P&ID and any future spatial product.

- [ ] `CanvasViewport` (pan, zoom, layer management)
- [ ] `CanvasToolbar` (floating; fit, zoom in, zoom out, pan, annotate, export)
- [ ] `CanvasSelectionOutline` (outline-only, not fill; binds to active category color)
- [ ] `CanvasHoverHighlight`
- [ ] `CanvasMultiSelect`
- [ ] `CanvasContextMenu`
- [ ] `EntityBadge` (equipment, line, instrument variants; uses `color.engineering.*`)
- [ ] `MetadataPanel` (right-side; accordion sections; resize handle)
- [ ] `DomainBadge` (renders domain identity inside the canvas chrome)
- [ ] `CanvasEmptyState` ("No drawing loaded")
- [ ] `KeyboardEntityList` (accessibility fallback: every canvas entity reachable by keyboard as a list)

---

## Section M. Workflow primitives (Transactional Workflow archetype)

These support NMMS and any future record-based product.

- [ ] `RecordTable` (composes Table with status column, filter bar, pagination defaults)
- [ ] `FilterBar` (chips for active filters; clear-all; saved filter presets slot)
- [ ] `BulkActionBar` (appears on row selection; action buttons; selection count)
- [ ] `InlineEdit` (cell-level edit with save/cancel)
- [ ] `LifecycleIndicator` (visualizes incident state machine; horizontal pill chain)
- [ ] `SLABadge` (countdown or overdue badge for time-bound records)
- [ ] `AssigneeAvatar` (with presence dot if applicable)
- [ ] `AuditLogEntry` (consistent formatting across products)
- [ ] `RecordHeader` (title, metadata chips, primary actions)

---

## Section N. Theming infrastructure

- [ ] Tenant theming layer (swaps brand tokens at runtime without component changes)
- [ ] Dark mode support (if committed)
- [ ] High-contrast mode support
- [ ] Theme override API documented and narrow (no way to override Locked-tier tokens arbitrarily)
- [ ] Tokens available in: CSS variables, JS/TS export, JSON (for non-web consumers)

---

## Section O. Motion primitives

- [ ] `Fade` (in, out)
- [ ] `Slide` (in/out from any side)
- [ ] `Scale` (in, out)
- [ ] `Collapse` / `Expand` (height animation)
- [ ] `Shimmer` (for skeletons)
- [ ] `prefers-reduced-motion` respected across all primitives

---

## Section P. Accessibility baselines (apply to every component)

- [ ] WCAG 2.1 AA compliance verified via axe
- [ ] Every interactive component has keyboard support (Tab, Shift+Tab, Enter, Space, Escape, arrows where appropriate)
- [ ] Visible focus ring on every focusable element (`ring.focus.*` tokens)
- [ ] Focus trap in modals, drawers, popovers, menus
- [ ] Focus restoration on overlay close
- [ ] Live regions for async content (toasts, streaming responses, validation errors)
- [ ] Screen reader labels on every icon-only control
- [ ] Color contrast: 4.5:1 for body text, 3:1 for large text, 3:1 for UI components and graphics
- [ ] Touch target minimum 44x44 CSS px on pointer:coarse
- [ ] `aria-busy` during loading states
- [ ] `aria-expanded`, `aria-controls`, `aria-haspopup` where relevant
- [ ] Skip link primitive present in every shell
- [ ] Dialogs labeled with `aria-labelledby` and `aria-describedby`
- [ ] No `tabindex` above 0 anywhere in the library

---

## Section Q. Documentation baselines (no component ships without this)

- [ ] Storybook (or equivalent) has a story for every component
- [ ] Every story covers: default, each variant, each state (hover, focus, active, disabled, loading, error)
- [ ] Every component has a props table generated from TS types
- [ ] Every component has an accessibility section (role, keyboard, screen reader)
- [ ] Every component has do / don't examples
- [ ] Every component has at least one code example that copy-pastes
- [ ] Every token has a visual swatch and a usage note
- [ ] Changelog per version (Keep a Changelog format)
- [ ] Migration guides for every major version

---

## Section R. Tooling baselines

- [ ] Published as a versioned npm package
- [ ] Semver (major for breaking, minor for additive, patch for fixes)
- [ ] TypeScript types shipped
- [ ] Tree-shakeable exports (named exports only; no default barrel imports that pull the world)
- [ ] SSR-safe (no `window` / `document` access at import time)
- [ ] Bundle size budget per component and per overall package
- [ ] Visual regression tests (Chromatic or equivalent)
- [ ] Unit tests for behavior
- [ ] Accessibility tests (axe in CI)
- [ ] Linting rules published (no hex literals, no magic numbers for spacing)
- [ ] Codemods for breaking changes (at minimum for major versions)
- [ ] Storybook deployed to a permanent URL the frontend team can link to
- [ ] Figma library mirrors code component names 1:1

---

## Section S. Quality gates (pre-release checks)

Every raven-ui release MUST pass:

- [ ] No hardcoded hex values in component source
- [ ] No hardcoded px values for spacing in component source
- [ ] No new colors introduced without token registration
- [ ] Bundle size within budget
- [ ] Axe-core checks pass on every Storybook story
- [ ] Visual regression: no unintended changes
- [ ] Every new or changed component has updated docs
- [ ] Breaking changes documented with migration path
- [ ] Version bumped correctly per semver
- [ ] Changelog entry written

---

## Section T. Governance hooks

These are not components; they are the things that keep the library healthy.

- [ ] Single owner (design system owner) named in the repo README
- [ ] Contribution guide: how to propose a new component or token
- [ ] Proposal template (problem, existing patterns considered, proposed API, accessibility, docs plan)
- [ ] Release cadence documented (example: minor every 2 weeks, major quarterly)
- [ ] Deprecation policy (how long a deprecated API lives before removal)
- [ ] An "examples" app or repo where frontend can see every component composed into real pages
- [ ] Slack or equivalent channel where frontend reports gaps; gaps auto-become raven-ui issues

---

## Section U. What MUST NOT live in raven-ui

Just as important as what belongs. These are the lines that keep raven-ui from becoming a product-logic dumping ground.

- [ ] No product-specific business logic (NMMS incident workflow rules, Copilot retrieval logic, P&ID graph algorithms)
- [ ] No product-specific route definitions
- [ ] No product-specific analytics events (raven-ui MAY expose hooks; products wire them)
- [ ] No tenant-specific data or configuration baked in
- [ ] No dependency on any product's API client
- [ ] No illustrations that only one product uses (product-specific empty-state art lives in the product; raven-ui ships the EmptyState container and the illustration slot grammar)

---

## How to run this checklist

1. Pull this file into a review session with the frontend team.
2. Walk each section top to bottom. Mark `[x]`, `[~]`, or `[ ]`.
3. Everything that lands `[ ]` becomes a raven-ui issue. Everything `[~]` becomes a raven-ui issue with a scope note.
4. Sort the open issues by product pain: which gap is the most frequent source of hardcoded values or local workarounds in product code today?
5. That sorted list is the raven-ui roadmap.

**Success criterion:** A future frontend engineer joining Raven should be able to build any screen in any of the three products by importing only from raven-ui, using only its tokens, and never once reaching for a custom hex code, arbitrary px, or local-only component.

---

**End of checklist v1.0.**
