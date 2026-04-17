# Raven Design System Guidelines

**Version:** 1.0 (draft)
**Owner:** Design (Suryansh)
**Audience:** Frontend engineers, future designers, LLM code/UI generators
**Scope:** Raven Copilot (AI-SEARCH), Near Miss Management System (NMMS), P&ID Tool
**Foundation:** raven-ui (versioned component library distributed as a package)

---

## 0. How to use this document

This document has three readers.

1. **Frontend engineers** building product surfaces. Read Sections 2, 4, 5, 6, 7, 8, 11, 13, 14. Treat every rule with **MUST** as a PR-blocker. Treat **SHOULD** as the default unless you have a documented reason. Treat **MAY** as permission, not encouragement.

2. **Designers** (current and future) extending any product. Read the whole document, end to end. Sections 3, 5, 7, 8 carry the cross-product decisions that keep the system coherent.

3. **LLMs** generating or editing Raven UI code. Load this document as system context before any UI generation request. Section 16 contains a condensed preamble you can paste into a system prompt. When generating UI, follow the rules in the order: Section 4 (component discipline) first, then Section 5 (patterns), then product-specific sections. If rules conflict, the narrower rule wins (product-specific over cross-product, pattern over component default).

Keywords in this doc follow RFC 2119 conventions: **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, **MAY**.

---

## 1. Product taxonomy and archetypes

Raven ships three products today. They share the same component library but serve different cognitive modes. Treating them identically is wrong. Treating them as three separate design languages is also wrong. They are three shapes of the same language.

| Product | Slug | Archetype | Core user task | Deployment |
|---|---|---|---|---|
| Raven Copilot (AI-SEARCH) | `copilot` | Conversational Canvas | Ask questions about plant knowledge, get cited answers | ipl.startraven.com |
| Near Miss Management System | `nmms` | Transactional Workflow | Log, assign, close out near-miss incidents with status tracking | nmms.startraven.com |
| P&ID Tool | `pid` | Creative Canvas (engineering) | Explore, annotate, and query piping & instrumentation diagrams | Bundled in Copilot today; will be standalone |

### 1.1 Archetype definitions (binding)

Archetype determines which patterns a product uses. Every product MUST declare one archetype. A product MAY own sub-surfaces of a different archetype (for example, the Search canvas in P&ID is a Conversational Canvas inside a Creative Canvas product), but the dominant archetype sets the shell, the navigation model, and the default interaction grammar.

- **Conversational Canvas.** Input is free-text intent. Output is streamed, cited, and multi-turn. Session history is persistent and auto-titled. Optimized for recall and exploration. Chrome is quiet. Tenant branding is prominent.

- **Transactional Workflow.** Input is structured form data. Output is records with lifecycle state. Optimized for throughput, filterability, and audit trail. Chrome is dense. Status is the primary semantic channel.

- **Creative Canvas.** Input is direct manipulation (select, pan, zoom, annotate) on a spatial artifact. Output is persistent views of the artifact plus layered metadata. Optimized for comprehension of complex visuals. Chrome collapses to rails to preserve canvas area.

### 1.2 Product personalities

Each product MAY express a distinct flavor inside the archetype, but personality MUST NOT override system tokens. Personality is expressed through:

- Default density (Copilot: comfortable; NMMS: dense; P&ID: dense with expand-on-demand)
- Default sidebar state (Copilot: wide; NMMS: wide; P&ID: rail, expandable)
- Iconography weight (all three share raven-ui icons; variant choice differs)
- Empty-state voice (Copilot: inviting; NMMS: instructional; P&ID: neutral)

Personality MUST NOT be expressed through custom colors, custom typography, or forked components.

---

## 2. The three-tier contract

Every UI decision falls into one of three tiers. This is the single most important frame in this document.

### 2.1 Locked tier (MUST NOT diverge)

Consistent across all products. No exceptions without a raven-ui version bump.

- Color tokens (names and hex values)
- Typography scale (families, weights, sizes, line heights)
- Spacing scale (the 4 or 8px base; whichever raven-ui publishes)
- Radius tokens
- Elevation tokens
- Motion durations and easings
- Focus ring styling and visibility
- Error, success, warning, info semantic colors
- Icon library (no custom icons added per-product; contribute to raven-ui or don't use)
- Button component (all variants, states, sizes)
- Input component (all variants, states, sizes)
- Form validation patterns (error placement, message tone)
- Toast / snackbar presentation
- Modal presentation
- Loading skeleton presentation
- Focus trap behavior in overlays

### 2.2 Guided tier (SHOULD follow pattern; MAY deviate with justification)

Patterns that are consistent where they appear but don't appear in every product, or that have documented variants.

- Sidebar shell (see Section 5)
- Top bar composition (see Section 5)
- Tenant branding placement (see Section 6)
- Table density and row chrome
- Empty state anatomy
- Page header anatomy
- Breadcrumb presence and format
- Card anatomy for list items
- Filter panel composition
- Auto-titled history (see Section 10)
- Pagination vs infinite scroll
- Inline edit affordances

### 2.3 Free tier (MAY diverge per product)

Product-specific surfaces where the archetype legitimately demands different shapes.

- Canvas viewport (P&ID only)
- Streaming answer presentation (Copilot, P&ID Search)
- Incident lifecycle state machine visualization (NMMS only)
- P&ID equipment / line overlays
- Domain switcher behavior
- Product-specific dashboards
- Product-specific empty illustrations (subject to raven-ui illustration grammar)

### 2.4 Rule for frontend: default-locked

When in doubt, assume Locked. Engineers MUST NOT promote a surface from Locked to Guided or Free without the design system owner's sign-off. LLMs generating code MUST default to Locked behavior unless the prompt explicitly names a Free-tier surface.

---

## 3. Component layer: raven-ui discipline

raven-ui is the source of truth for every atomic and most composite components. It is consumed as a versioned package across the three repositories.

### 3.1 Consumption rules (frontend)

- Products **MUST** import components from raven-ui. Products **MUST NOT** fork, re-skin, or shadow raven-ui components inside the product repo.
- Products **MUST NOT** override raven-ui component styles via global CSS, deep selectors, or `!important`.
- Products **MUST** use raven-ui design tokens for any color, spacing, typography, or radius value. Hex codes, arbitrary px values for spacing, and raw font-size declarations **MUST NOT** appear in product code.
- Products **SHOULD** pin the raven-ui minor version and upgrade on a planned cadence. Products **MUST NOT** ship against a pre-release or main-branch build.

### 3.2 When raven-ui lacks a component

In order of preference:

1. Compose from existing raven-ui primitives inside the product. If the composition proves reusable, propose it as a new raven-ui pattern in the next version.
2. Build the missing primitive inside raven-ui with full states, sizes, and accessibility, then consume it. This is the correct path when the missing piece is clearly atomic (for example, a stepper, a combobox, a tag input).
3. Build inside the product as a last resort, clearly namespaced (for example, `pid/CanvasToolbar`) with a TODO referencing the raven-ui issue. Product-namespaced components MUST NOT be reused across products.

### 3.3 Tokens exposed by raven-ui (expected surface)

The frontend team MUST be able to call raven-ui tokens by name without knowing hex values. At minimum raven-ui exposes:

- `color.brand.*` (raven's brand palette)
- `color.semantic.{success, warning, danger, info}`
- `color.surface.{background, raised, sunken, overlay}`
- `color.content.{primary, secondary, tertiary, disabled, inverse}`
- `color.border.{default, subtle, strong, focus}`
- `color.category.*` (the plant and domain colors, see Section 7)
- `color.status.*` (incident and workflow statuses, see Section 7)
- `color.engineering.{equipment, line, instrument}` (P&ID specific, see Section 7)
- `font.family.{sans, mono}`
- `font.size.{xs, sm, md, lg, xl, 2xl, display}`
- `font.weight.{regular, medium, semibold, bold}`
- `space.{1..12}` on the published base scale
- `radius.{none, sm, md, lg, pill, circle}`
- `shadow.{1..5}`
- `duration.{instant, fast, base, slow}`
- `ease.{standard, entrance, exit, emphasized}`

If any of these categories is missing from raven-ui as shipped, that is a raven-ui bug, not a license to hardcode.

---

## 4. Pattern layer (the documented gap)

The component layer is healthy. The gap that produces the cross-product inconsistencies we have today is the pattern layer. This section defines the patterns that sit between components and product features.

Each pattern has: a name, the archetype(s) it belongs to, the components it composes, and its invariants.

### 4.1 Shell patterns

See Section 5.

### 4.2 Navigation patterns

- **Wide sidebar nav.** Persistent left rail with text labels. Used by Copilot (default) and NMMS (default). Width token: `space.sidebar.wide`.
- **Icon rail nav.** Persistent left rail, icons only, labels on hover tooltip. Used by P&ID (default). Width token: `space.sidebar.rail`.
- **Rail-with-expand.** Icon rail that expands on user action to reveal the wide sidebar content. Used by P&ID. Expanded state MUST match the wide sidebar information architecture; it MUST NOT introduce new nav items only visible when expanded.
- **Top bar nav.** Used for global actions, tenant branding (when applicable), user menu. All three products have a top bar in some form. Top bar MUST NOT host primary product navigation.

### 4.3 Canvas patterns (P&ID)

See Section 8.

### 4.4 Multi-context navigation

See Section 9.

### 4.5 AI content patterns

See Section 10.

### 4.6 Data display patterns

- **Record list table.** Default for NMMS. Dense row height, status chip in dedicated column, sortable headers, sticky header on scroll.
- **Suggestion cards.** Default for Copilot home and empty states. Card has title, short description, and category dot (see Section 7).
- **Metadata panel.** Right-side panel in P&ID showing equipment / line / instrument properties. Accordion sections, key-value layout.
- **Citation strip.** Inline element under AI answers in Copilot and P&ID Search. Shows source documents with icons.

### 4.7 Form patterns

- **Inline form.** Single surface, fields stacked, save at bottom. Default for NMMS create/edit flows.
- **Multi-step form.** Stepper at top, one step visible at a time, forward/back + save draft. Use for NMMS workflows with more than 8 fields.
- **Slide-over drawer.** For quick-add / quick-edit without navigating away. All three products MAY use.

---

## 5. Shell variants

A product's shell is its top-level chrome: sidebar, top bar, and main stage. There are three shells. A product MUST pick one as default and MAY use others as sub-surface shells.

### 5.1 Wide Sidebar Shell (Copilot, NMMS)

**Anatomy (left to right):**

1. Left sidebar (width: `space.sidebar.wide`, ~240px). Contains:
   - Top-left: Tenant logo OR Raven logo (see Section 6)
   - Primary nav items (text + icon)
   - Contextual sections (for example, chat history in Copilot)
   - Bottom: user menu or settings
2. Main stage (flex-1).

**State rules:**
- Sidebar **SHOULD** remain visible at >= 1024px viewport.
- Sidebar **MUST** collapse to a rail at < 1024px or allow user toggle.
- Collapsed state **MUST** preserve the same information architecture (no items disappear).

### 5.2 Rail Shell (P&ID default)

**Anatomy:**

1. Icon rail (width: `space.sidebar.rail`, ~56px). Icons only, tooltip-on-hover for labels.
2. Main stage (flex-1), which for P&ID is the canvas viewport.
3. Optional right metadata panel.

**State rules:**
- Rail **MUST** show a clear expand affordance.
- Clicking the expand affordance **MUST** transition the rail to the Rail-with-Expand Shell (5.3), not open a modal or overlay.

### 5.3 Rail-with-Expand Shell (P&ID expanded)

**Anatomy:**

- Expanded rail behaves as a wide sidebar for the duration of expansion.
- MUST expand inline (push or overlay main stage), MUST NOT navigate away.
- MUST include brand attribution per Section 6.
- MUST include the same nav items as the collapsed rail plus any text-only subsections (such as chat history under an AI Agents group).

**Rule:** A product whose default is Rail Shell MUST implement Rail-with-Expand. A product whose default is Wide Sidebar Shell does not need Rail-with-Expand as a separate surface; its collapse behavior covers the same case.

### 5.4 Shell selection decision

- If the product's archetype is Creative Canvas: use Rail Shell with Rail-with-Expand.
- If the product's archetype is Transactional Workflow: use Wide Sidebar Shell.
- If the product's archetype is Conversational Canvas: use Wide Sidebar Shell (chat history is part of the nav information architecture; hiding it behind a rail makes session management harder).

---

## 6. Tenant branding model

This is the only area in the current system with a genuine inconsistency across products. This section closes it.

### 6.1 Observed state (as of this doc)

- Copilot wide sidebar: **tenant logo** top-left (for example, INDORAMA). Raven brand is not visible in primary chrome.
- NMMS wide sidebar: **tenant logo** top-left (for example, ACME). Raven brand is not visible in primary chrome.
- P&ID rail collapsed: no visible brand mark.
- P&ID rail expanded: **Raven logo** top-left. "Powered by raven" at bottom. Tenant brand is not visible.

The two branding postures (tenant-owned frame vs Raven-owned frame) carry different commercial stories. A single user on a single day today sees both.

### 6.2 Branding model decision (binding)

Raven ships products to tenants. The primary branding posture **MUST** be:

> **Tenant-owned frame with Raven attribution.**
>
> The top-left mark in every product's primary chrome **MUST** be the tenant's logo when a tenant context is active. Raven attribution **MUST** appear as a "Powered by raven" or equivalent footer mark in the sidebar or page footer. Tenant-less contexts (for example, the demo product, internal staging) **MAY** display the Raven logo in the top-left position.

This aligns Copilot and NMMS behavior and brings P&ID into line when P&ID is shipped to tenants.

### 6.3 Rules per product

- Copilot: already compliant. No change required.
- NMMS: already compliant. No change required.
- P&ID: when bundled inside Copilot, P&ID MUST inherit Copilot's tenant branding (top-left shows tenant logo, not Raven). When P&ID ships standalone to a tenant, same rule. P&ID's internal demo surface MAY keep Raven branding.
- "Powered by raven" placement: bottom of sidebar in Wide Sidebar Shell; bottom of expanded panel in Rail-with-Expand Shell; MAY be omitted from collapsed Rail Shell since the rail has no footer real estate.

### 6.4 Brand asset rules

- Tenant logos MUST be delivered as tenant-supplied SVG with a documented safe zone. raven-ui MUST provide a `TenantLogo` component that handles sizing, fallback, and accessibility.
- Raven's wordmark MUST only appear in the attribution slot (footer, login screen, marketing surfaces). It MUST NOT appear alongside a tenant logo in primary chrome.
- No product MAY render a tenant's logo at a size larger than Raven's attribution mark on marketing surfaces, and vice versa in product chrome.

---

## 7. Semantic color conventions

Raven's products use color to carry meaning. This section defines what each color family means and where it applies. Color tokens are defined in raven-ui; this section governs their usage.

### 7.1 Color families and their semantics

| Family | Token prefix | Meaning | Applies to |
|---|---|---|---|
| Brand | `color.brand.*` | Raven or tenant identity | Logo, brand marks, attribution |
| Semantic | `color.semantic.*` | Universal UI feedback (success, warning, danger, info) | Toasts, banners, validation, badges |
| Surface / content / border | `color.surface.*`, `color.content.*`, `color.border.*` | Structural | All chrome |
| Category | `color.category.*` | Plant section / domain identity | Copilot suggestion cards, P&ID domain selector |
| Status | `color.status.*` | Lifecycle state of a record | NMMS incident chips and dots |
| Engineering | `color.engineering.*` | P&ID drawing semantics | Equipment, lines, instruments in the canvas and its browse panel |

### 7.2 Category colors (plant / domain)

These MUST match across products. A user seeing "Ammonia Train-1" in Copilot and "Ammonia Train-1" in P&ID MUST see the same color swatch.

Examples observed:
- HSEF: purple
- Ammonia Train-1: yellow
- Ammonia Train-2: teal

**Rule:** Category colors are owned by raven-ui and MUST be loaded from tokens keyed by the plant section identifier, not redefined per product. If a tenant adds a new plant section, the new color MUST be added to raven-ui and distributed, not picked locally.

### 7.3 Status colors (NMMS)

Incident lifecycle states use `color.status.*`. Status colors MUST NOT be used for non-status meaning anywhere in any product.

### 7.4 Engineering colors (P&ID)

Equipment badges: blue. Lines badges: green. Instruments (when shown): TBD per raven-ui.

**Rule:** Engineering colors MUST live under their own token prefix and MUST NOT be confused with status or category colors. Within the P&ID canvas, the same blue that marks "equipment" MUST NOT be used to mark "info" status on a toast.

### 7.5 Semantic collision table (cross-product watch list)

| Color | Copilot meaning | NMMS meaning | P&ID meaning |
|---|---|---|---|
| Yellow | Ammonia Train-1 (category) | (must not be status in NMMS) | Ammonia Train-1 (category) |
| Purple | HSEF (category) + brand | (must not be status) | HSEF (category) + brand + selection highlight |
| Teal | Ammonia Train-2 (category) | (must not be status) | Ammonia Train-2 (category) |
| Blue | (info semantic only) | info status | Equipment (engineering) + info |
| Green | success only | "Resolved" status | Lines (engineering) + success |
| Red | danger only | "Open / critical" status | danger only |

**Rule:** Within a single product, a given color MUST have one dominant meaning. Across products, collisions are tolerated only where semantics are scoped to a surface that a user cannot conflate (canvas in P&ID vs chip in NMMS). The category colors MUST be protected across products because those are the colors most likely to travel with the user's mental model.

---

## 8. Colored dot discipline

A colored dot preceding a label is a UI primitive that carries identity or state. Raven products currently use it for two different meanings, which is the observed collision.

### 8.1 Current state (observed)

- Copilot suggestion cards: dot = category identifier (plant section).
- P&ID domain selector: dot = category identifier (plant section).
- NMMS record chips: dot = status identifier (incident lifecycle state).

Two of three products agree on "category." NMMS is the outlier.

### 8.2 Binding rule

A colored dot **MUST** mean category (plant section / domain) in Raven products.

**Consequences:**

- Copilot: no change. Keep the dot for category.
- P&ID: no change. Keep the dot for category.
- NMMS: status **MUST NOT** be represented by a leading colored dot. NMMS MUST use the status chip's background / border as the status channel. If NMMS needs a category indicator in the future, the dot MUST mean category, consistent with the other products.

### 8.3 Redundant encoding is allowed

A status chip MAY have both a colored background and a bold label. That is redundant encoding and is fine. What is not fine is a leading colored dot whose color doesn't match the chip's semantic, or a dot whose meaning differs from the system convention.

### 8.4 Accessibility

Color alone MUST NOT be the only signal. Dots MUST be paired with text labels, and the dot color MUST pass 3:1 contrast against its immediate background for non-text UI components per WCAG 2.1.

---

## 9. Canvas interactions (P&ID)

This section applies only to the P&ID canvas and any future canvas surfaces.

### 9.1 Canvas primitives

- **Selection.** A single click selects one entity (equipment or line). Selected entities are outlined in `color.category.*` matching the selected domain, not a fixed "selection color." Selection MUST be rendered as an outline, not a fill, to preserve the underlying drawing.
- **Hover.** Hovering an interactive entity raises a subtle highlight. Hover MUST NOT commit to selection.
- **Multi-select.** Shift-click or drag-select. Multi-select MUST show the same outline style as single-select.
- **Pan.** Space+drag or middle-mouse drag. Pan MUST NOT deselect.
- **Zoom.** Scroll wheel or pinch. Zoom MUST preserve selection and MUST re-anchor to cursor position.
- **Fit.** Keyboard shortcut (`F`) and toolbar button. Fits selected entity; if nothing is selected, fits the whole drawing.

### 9.2 Canvas layers

The canvas has three logical z-layers:
1. Base drawing (raster or vector of the P&ID).
2. Entity overlays (selection outlines, hover highlights, equipment / line badges).
3. UI chrome (toolbar, floating panels, context menus).

Layers MUST NOT bleed. UI chrome MUST NOT render inside the drawing viewport except as explicit floating elements with a documented anchor.

### 9.3 Canvas toolbar

- Positioned as a floating card at top or top-left of canvas.
- Contains: fit, zoom in, zoom out, pan mode toggle, annotation toggle, export.
- MUST use raven-ui `IconButton` and `ButtonGroup` components.

### 9.4 Metadata panel

- Right-side panel. Default width: 320px. User-resizable within [280, 480].
- Header: entity type + entity ID.
- Content: key-value rows, accordion for sections (Metadata, Connected, Citations).
- Closes with `Esc` or explicit close button.

---

## 10. Multi-context navigation

Raven's AI products produce long-lived artifacts (chats, sessions, queries). How these are represented in navigation depends on the product.

### 10.1 Three context models

1. **Linear.** One active context at a time. Prior contexts are accessible through history but not through tabs. Default for Copilot.
2. **Session.** Multiple named sessions listed in sidebar history, but only one is active in the main stage. Sessions persist and are auto-titled. Default for P&ID Search agent and Copilot chat history.
3. **Tabbed.** Multiple contexts open simultaneously as tabs in the main stage (browser-style tabs). Default for P&ID canvas when a user is working on multiple drawings.

### 10.2 Auto-titling (Session model)

- New sessions MUST be created with a placeholder title ("New search", "New chat").
- Within 2 messages of user input, the title MUST be replaced with an AI-generated short descriptor (examples observed: "Isolation Checklist Request", "Procedure to Isolate Heat Exch...", "A104JA Startup Checklist").
- Auto-titles MUST be 30-45 characters, sentence case, no trailing punctuation.
- Users MUST be able to rename a session manually. Manual titles MUST NOT be overwritten by the AI.

### 10.3 History affordances

- Session history MUST live in the sidebar's product-specific section (not the global nav).
- A "View All" affordance MUST appear when history exceeds a product-defined cap (observed in P&ID: 40).
- History items MUST show title only, not timestamp, at the primary visual level. Timestamp MAY appear on hover or in a secondary row.

### 10.4 NMMS outlier note

NMMS currently displays user-entered titles for records (for example, "hi"). This is not an auto-titling failure; it is a user-content quality problem. The design system does not mandate AI-generated titles for NMMS records. NMMS MAY add placeholder validation ("Description is too short") as a product-level quality guard, but that is a product decision, not a system rule.

---

## 11. AI content patterns

### 11.1 Streaming responses

- AI-generated answer text MUST stream token-by-token.
- Skeletons MUST appear immediately on request (within `duration.fast`). Skeletons MUST use raven-ui `Skeleton` component.
- During streaming, the user input field MUST remain usable or show a clear "stop generation" affordance.
- Completed responses MUST show a citation strip (see 11.2) when the answer references documents.

### 11.2 Citation strip

- Appears immediately below the answer text.
- Each citation: source icon + document name + short context. Clickable to open source in metadata panel or new tab.
- MUST deduplicate: if the same document is cited three times, show it once with a count.

### 11.3 Empty states

- Copilot empty: inviting, suggestion cards (see 4.6) that prompt common queries.
- NMMS empty: instructional, "No incidents yet. Create your first" CTA.
- P&ID empty: neutral, "No drawing loaded" with domain picker.

### 11.4 Error and fallback

- AI errors MUST be recoverable. Show the error, preserve the input, offer a retry.
- Partial responses on error MUST be preserved, not discarded.

---

## 12. Typography

All typography comes from raven-ui tokens.

### 12.1 Scale

- `display` (2.5rem+, used sparingly, hero / onboarding only)
- `2xl` (page titles)
- `xl` (section titles)
- `lg` (card titles, table headers in some densities)
- `md` (body default)
- `sm` (secondary body, captions, table cell in dense tables)
- `xs` (microcopy, badges)

### 12.2 Rules

- Product MUST NOT introduce a new size. If a design calls for a size between `md` and `lg`, use one of the two.
- Line height MUST come from raven-ui; products MUST NOT set `line-height` on ad-hoc elements.
- Font weight `bold` (>= 700) MUST NOT be used for body copy. Use `semibold` for emphasis in running text.
- Monospace (`font.family.mono`) is reserved for code, IDs, and P&ID entity identifiers.

---

## 13. Spacing and layout

### 13.1 Base scale

All padding, margin, and gap values MUST use the published scale (`space.1` through `space.12` or equivalent). Arbitrary px values MUST NOT appear in product code.

### 13.2 Density modes

raven-ui MUST expose a density token (`density.comfortable`, `density.compact`). Products MAY pick a default density but MUST NOT mix densities within a single surface.

- Copilot default: comfortable
- NMMS default: compact (record tables); comfortable (dashboard)
- P&ID default: compact (rail, metadata panel); N/A on canvas

### 13.3 Container widths

- Default reading width for long-form content: `max-width: 72ch`.
- Dashboards and data tables MAY go full-width.
- Forms SHOULD cap at 640px for readability.

---

## 14. Motion

### 14.1 Duration tokens

- `duration.instant` (50ms) for state toggles on hover
- `duration.fast` (150ms) for entering / exiting small elements
- `duration.base` (250ms) for most transitions
- `duration.slow` (400ms) for modals, drawers, large panels

### 14.2 Easing tokens

- `ease.standard` for most motion
- `ease.entrance` for elements appearing
- `ease.exit` for elements disappearing
- `ease.emphasized` for hero or attention-drawing moments (use sparingly)

### 14.3 Rules

- Canvas pan / zoom MUST feel direct: no animation delay on pan, brief inertia on zoom.
- Skeletons MUST fade to content, not snap.
- Motion MUST respect `prefers-reduced-motion`. Products MUST disable non-essential motion when the preference is set.
- Spring physics MAY be used for playful moments but MUST NOT be used for chrome transitions.

---

## 15. Accessibility

### 15.1 Baseline (all products)

- WCAG 2.1 AA is the floor. WCAG 2.2 AA for any new surface shipping after 2026.
- All interactive elements MUST have visible focus rings (raven-ui `ring.focus` token).
- All images and icons carrying meaning MUST have accessible names.
- Color MUST NOT be the only signal (see 8.4).
- Keyboard navigation MUST work for every flow that works with mouse.

### 15.2 Archetype-specific accessibility

- Conversational Canvas (Copilot): streaming content MUST be announced to assistive tech on completion, not on every token (avoid screen-reader flood). Chat history MUST be keyboard-navigable as a list.
- Transactional Workflow (NMMS): tables MUST support keyboard row selection, sort, and filter. Error summaries MUST appear at top of form on submit.
- Creative Canvas (P&ID): the canvas is inherently spatial, but selection, pan, zoom, and metadata panel MUST all be reachable by keyboard. An "entity list" fallback view MUST exist so a keyboard-only user can reach every equipment/line that the canvas shows.

### 15.3 Touch targets

- Minimum 44x44 CSS px for any tap target on touch devices.
- Canvas entity hit zones MAY be smaller but MUST have a keyboard alternative per 15.2.

---

## 16. Governance (lightweight, solo-designer reality)

Raven has one designer. Governance MUST be proportionate. These rules are the minimum that keeps the system from drifting.

### 16.1 Change classification

- **Trivial (frontend ships):** token value correction, raven-ui minor upgrade, typo.
- **Pattern change (design review):** anything that touches a Guided-tier pattern (Section 2.2) or a Section 5, 6, 7, 8, 9, 10, 11 rule.
- **System change (design owner sign-off):** anything that touches a Locked-tier rule or adds a new color, font, or shell variant.

### 16.2 raven-ui PR checklist (for frontend)

Before merging a raven-ui change:
- [ ] New component has all states (default, hover, focus, active, disabled, loading where applicable).
- [ ] New component uses existing tokens; no new hex or px values introduced.
- [ ] Accessibility: keyboard, focus, ARIA reviewed.
- [ ] Storybook or equivalent has coverage for every variant.
- [ ] Version bump follows semver (minor for additive, major for breaking).

### 16.3 Product PR checklist (for frontend)

- [ ] No hardcoded colors, font sizes, or spacing values.
- [ ] No forked raven-ui components.
- [ ] Any deviation from Guided-tier patterns is annotated with a comment referencing the design decision.
- [ ] Touches a canvas / chat / record list? Corresponding keyboard and screen reader flows tested.

### 16.4 Audit cadence

- Quarterly: run a cross-product audit of pattern-layer usage (Sections 5 through 11). The designer owns this.
- Annually: retire or promote patterns. Patterns used in only one product for a year SHOULD be reclassified as Free tier; patterns used in all three SHOULD be considered for promotion to Locked.

---

## 17. Open decisions (pending, tracked here)

These are the live decisions that were flagged during the audit leading to this document. They are listed here so the next version of this doc can close them. Any engineer or LLM generating UI MUST treat open decisions as "follow the current code" until closed.

1. **P&ID standalone tenant branding.** When P&ID ships standalone, does the tenant brand occupy top-left (per Section 6), or does a hybrid pattern emerge? Current answer: Section 6 binding rule applies.
2. **NMMS status chip refactor.** Does NMMS ship a dot-free status chip before or after the next raven-ui version? Current state: rule is binding (Section 8.2); timeline is product-owned.
3. **P&ID tab model specifics.** Browser-style tabs in P&ID canvas need specific rules around tab reordering, close behavior, and max tabs. To be added in v1.1.
4. **Density token formalization.** Section 13.2 assumes raven-ui exposes `density.comfortable` and `density.compact`. If it doesn't today, that is a raven-ui gap to close.
5. **Category color registry.** The list in 7.2 is partial. Full registry keyed by plant section identifier needs to move into raven-ui tokens.

---

## 18. Appendix A: LLM system prompt preamble

Paste the block below into the system prompt of any LLM being asked to generate Raven UI code or mockups.

```
You are generating UI for Raven. Raven ships three products that share a design
system called raven-ui:

- Raven Copilot (slug: copilot) — Conversational Canvas archetype. Wide sidebar
  shell. Tenant-branded. Chat history is auto-titled. Suggestion cards use
  colored dots for plant-section category.
- Near Miss Management System (slug: nmms) — Transactional Workflow archetype.
  Wide sidebar shell. Tenant-branded. Record tables with status chips.
  Status MUST NOT be represented by leading colored dots.
- P&ID Tool (slug: pid) — Creative Canvas archetype. Rail shell with
  rail-with-expand. Tenant-branded when shipped to tenant; Raven-branded in
  demo/standalone internal surfaces. Canvas supports select, pan, zoom,
  multi-select. Colored dots in P&ID mean plant-section category.

Rules you MUST follow:
1. Import components from raven-ui. Do not fork, re-skin, or shadow raven-ui
   components. Do not write custom buttons, inputs, modals, toasts.
2. Use raven-ui tokens for every color, spacing, typography, radius, shadow,
   and motion value. No hex codes, no arbitrary px for spacing, no raw font-size.
3. Colored dots MUST mean plant-section category (HSEF=purple, Ammonia Train-1
   =yellow, Ammonia Train-2=teal). Do not use colored dots for status.
4. Tenant logo goes top-left in wide sidebar shell. Raven attribution ("Powered
   by raven") goes at the bottom of the sidebar.
5. Auto-titled AI sessions use 30-45 char sentence-case titles, no trailing
   punctuation.
6. Streaming AI responses MUST show skeletons within ~150ms and MUST preserve
   partial output on error.
7. Canvas (P&ID only) uses outline-style selection in the active domain's
   category color. UI chrome renders as floating elements, not inline with the
   drawing.
8. Respect `prefers-reduced-motion`. Meet WCAG 2.1 AA.

When the user's request conflicts with these rules, ask before breaking a rule.
When the user's request is silent on a rule, default to the rule.
```

---

## 19. Appendix B: Quick reference tables

### 19.1 Per-product defaults

| | Copilot | NMMS | P&ID |
|---|---|---|---|
| Archetype | Conversational Canvas | Transactional Workflow | Creative Canvas |
| Shell | Wide Sidebar | Wide Sidebar | Rail + Rail-with-Expand |
| Branding | Tenant | Tenant | Tenant (prod) / Raven (demo) |
| Default density | Comfortable | Compact tables, Comfortable dashboards | Compact rail/panel |
| Nav context model | Session (chat history) | Linear | Tabbed (canvas) + Session (search) |
| Status colors used | No | Yes | No |
| Category dots used | Yes | No (binding) | Yes |
| Engineering colors used | No | No | Yes |

### 19.2 Colored dot decision cheat sheet

| Surface | Today | Correct per system |
|---|---|---|
| Copilot suggestion card | dot = category | keep |
| P&ID domain selector | dot = category | keep |
| NMMS record chip | dot = status | remove dot; use chip bg only |

### 19.3 Token cheat sheet (what to reach for first)

| Need | Token family |
|---|---|
| Button, input, any interactive | raven-ui component |
| Page background | `color.surface.background` |
| Card background | `color.surface.raised` |
| Primary text | `color.content.primary` |
| Section divider | `color.border.subtle` |
| Focus ring | `color.border.focus` |
| Plant section badge | `color.category.<section>` |
| Incident status chip | `color.status.<state>` |
| P&ID equipment label | `color.engineering.equipment` |
| Success toast | `color.semantic.success` |

---

**End of v1.0 draft.**

Next revision should close the five open decisions in Section 17 and add the full category color registry.
