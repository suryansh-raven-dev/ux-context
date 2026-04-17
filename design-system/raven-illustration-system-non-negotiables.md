# Raven Illustration System Non-Negotiables Checklist

**Purpose:** The complete list of what Raven's illustration system MUST define and ship to stay coherent across Copilot, NMMS, and P&ID without forcing any product to source stock art, commission one-offs, or drift in style.
**Audience:** Design owner (to audit current system and fill gaps), Frontend team (to know how to consume), LLMs / image-generation tools (to stay inside style when generating variations).
**How to use:** Each line is a checkbox. `[x]` means the rule is defined, documented, and enforced. `[~]` means partial. `[ ]` means missing. Anything not `[x]` is a drift risk.
**Context note:** This checklist was drafted without the author having seen the actual current Raven illustration system. Sections below are what a mature illustration system for an industrial B2B product with three archetypes MUST have. Calibrate every section against what you actually ship and mark gaps honestly.

---

## Section A. Style foundations

Style is what makes two illustrations made by two different people on two different days still read as Raven. Without explicit style rules, every new illustration introduces drift.

### A.1 Style definition

- [ ] One named visual style (for example, "flat geometric," "semi-flat with depth," "line-and-fill," "isometric industrial") documented with a one-paragraph definition
- [ ] One or two reference illustrations marked as canonical examples of the style
- [ ] A short list of styles that are explicitly NOT Raven (for example, "not hand-drawn," "not photorealistic," "not 3D-rendered") so contributors know the boundaries
- [ ] Style applies uniformly across all three products (archetype does not change the style; see Section F for what archetype actually changes)

### A.2 Geometry rules

- [ ] Stroke weight scale (for example, 1.5px, 2px, 3px for different illustration sizes)
- [ ] Corner radius convention (all corners rounded at a documented value, or a mix by object type)
- [ ] Line endings (butt, round, square) specified
- [ ] Construction grid documented (for example, 8px base, all strokes and shapes snap to it)
- [ ] Angle constraints (for example, 0, 45, 90 only; or any angle permitted)

### A.3 Perspective

- [ ] Perspective convention (flat 2D, isometric at specified angle, axonometric, 2-point) specified
- [ ] All illustrations MUST use the same perspective
- [ ] If isometric: the exact angle (commonly 30 degrees) MUST be locked

### A.4 Level of detail

- [ ] Minimum and maximum detail guidance per illustration size
- [ ] Detail density rule (for example, a hero illustration may have 5-8 focal elements; a small empty-state may have 1-3)
- [ ] Texture, grain, noise rules (on / off; consistent application)

### A.5 Depth and shadow

- [ ] Shadow style (hard-edge, soft, flat color offset, none) specified
- [ ] Shadow direction (for example, always bottom-right at 45 degrees)
- [ ] Layer stacking (foreground, mid, background) convention

### A.6 Visual metaphor rules

- [ ] Documented list of acceptable metaphors (for example, control rooms, pipes, data flows, plant operators, search-as-discovery)
- [ ] Documented list of forbidden metaphors (cliches to avoid: exploding brains for AI, people with laptops, glowing lightbulbs)
- [ ] Metaphor rules specific to industrial safety context (NMMS): no imagery that trivializes incidents, no cartoonish accidents

---

## Section B. Color system for illustrations

Illustration color is a separate discipline from UI color. UI tokens do not map 1:1 to illustration palettes.

### B.1 Primary illustration palette

- [ ] Core palette of 6 to 10 colors documented
- [ ] Every color in the palette tokenized with a name (for example, `illustration.raven.primary`, `illustration.raven.accent`)
- [ ] Primary palette is a derivative of the brand tokens, not arbitrary
- [ ] Specific hex values locked and versioned alongside raven-ui tokens

### B.2 Secondary and neutral palettes

- [ ] Neutral palette (3 to 5 grays or desaturated shades) for environmental elements, backgrounds, shadows
- [ ] Secondary palette (2 to 4 colors) for emphasis, accents within an illustration
- [ ] Rules for when to use primary vs secondary vs neutral

### B.3 Color application rules

- [ ] Maximum number of colors per illustration (common rule: 4 to 6 including neutrals)
- [ ] Proportion guidance (for example, 60% neutral, 30% primary, 10% accent)
- [ ] Color blocking vs gradient policy (if gradients are allowed, their rules are documented: direction, stops, opacity)
- [ ] Semantic colors (success green, danger red, warning yellow) MAY appear in illustrations only when the illustration is expressing that exact meaning (a success celebration, a danger warning)

### B.4 Category / status / engineering color collision

- [ ] Plant-section category colors (HSEF purple, Ammonia Train-1 yellow, etc.) MUST NOT appear as decorative color inside illustrations
- [ ] NMMS status colors MUST NOT appear as decorative color inside illustrations
- [ ] P&ID engineering colors (equipment blue, lines green) MUST NOT appear as decorative color in illustrations that do not represent engineering drawings
- [ ] If an illustration depicts a P&ID drawing literally, engineering colors MAY be used, but that illustration MUST be flagged as a technical illustration and kept separate from the general illustration library

### B.5 Dark mode variants

- [ ] Every illustration ships a dark mode variant (or a rule for automatic transformation)
- [ ] Dark mode variant MUST NOT be a naive color inversion; contrast and mood MUST be preserved
- [ ] Palette for dark mode tokenized separately

---

## Section C. Character system

Only fill in this section if Raven illustrations use human figures. If the system is object-only, mark Section C as not applicable and move on.

### C.1 Character style

- [ ] Figure style (for example, "stylized geometric," "silhouette," "detailed but flat") documented
- [ ] Proportions (head to body ratio) specified
- [ ] Face detail rule (features shown, stylized, or no face)
- [ ] Character always wears industrial PPE where contextually appropriate (hard hat, safety vest, gloves) or the rule for when PPE is shown

### C.2 Representation

- [ ] Diversity standard defined (skin tones, body types, genders, ages)
- [ ] Neutral color palette for skin tones (avoiding tokenized "flesh" which carries bias)
- [ ] Rules about depicting workers (competent, active, not victims; not stereotypical)
- [ ] Cultural sensitivity for global tenants (clothing, gestures, context)

### C.3 Character library

- [ ] Reusable character set (3 to 6 canonical characters) documented
- [ ] Poses per character (for example, standing, walking, gesturing, thinking, operating equipment)
- [ ] Characters are used consistently across illustrations (if "Alex" is the operator in one illustration, Alex looks the same in the next)
- [ ] File naming convention for character variants

### C.4 When NOT to use characters

- [ ] Empty states with heavy emotional weight (a critical error, a deletion confirmation) MUST NOT center a smiling character
- [ ] Technical surfaces (P&ID canvas errors, data warehouse empties) SHOULD avoid characters
- [ ] Rule: if the illustration would be confusing or patronizing with a person in it, it MUST NOT have one

---

## Section D. Objects, props, and iconographic elements

Industrial context means Raven's illustration library has a specialized object vocabulary.

### D.1 Core object library

- [ ] Industrial objects catalogued (pipes, valves, gauges, control panels, safety signs, ladders, platforms)
- [ ] Abstract objects catalogued (data cards, document shapes, speech bubbles, search orbs, citation markers)
- [ ] Natural elements if used (plants, clouds, ground line)
- [ ] Every object rendered in the locked style (Section A)

### D.2 Object accuracy

- [ ] Industrial objects MUST be recognizable to a plant operator, not stylized into cartoon versions (for example, a P&ID symbol MUST be a proper P&ID symbol, not an invented squiggle)
- [ ] Safety-related objects (PPE, signs, equipment) MUST be technically accurate
- [ ] Hazard imagery MUST NOT be stylized cute

### D.3 Reuse library

- [ ] Objects live in a shared Figma / SVG library with consistent naming
- [ ] Designers MUST compose new illustrations from existing objects before drawing new ones
- [ ] New objects go through a review before being added to the library

---

## Section E. Composition

### E.1 Aspect ratios

- [ ] Defined ratios (for example, 1:1 for icons, 3:2 for cards, 16:9 for banners, 2:1 for hero)
- [ ] Every illustration ships in at least the required ratios for its use contexts
- [ ] Safe area documented inside each ratio (content never goes to the edge)

### E.2 Focal hierarchy

- [ ] Every illustration has one primary focal element
- [ ] Supporting elements MUST NOT compete with the focal
- [ ] Eye path guidance (horizontal, diagonal, centered) documented per illustration

### E.3 Negative space

- [ ] Minimum negative space rule (for example, 15% of canvas)
- [ ] Illustrations MUST breathe; cramming elements is forbidden

### E.4 Anchor and alignment

- [ ] Horizon line or ground plane convention (where does "floor" sit in the composition)
- [ ] Illustrations MUST align to this horizon unless explicitly floating

---

## Section F. Usage contexts

This is where the three archetypes start to differ. The style stays constant (Section A); the use context changes tone and content.

### F.1 Empty states

- [ ] Empty state illustrations for each archetype:
  - [ ] Conversational Canvas (Copilot): inviting, suggests action
  - [ ] Transactional Workflow (NMMS): instructional, factual
  - [ ] Creative Canvas (P&ID): neutral, technical
- [ ] Each empty state illustration paired with EmptyState component's title + description + CTA
- [ ] Empty states MUST NOT moralize or apologize

### F.2 Error states

- [ ] Generic error illustration (something went wrong)
- [ ] Network error illustration (connectivity)
- [ ] Permission error illustration (not authorized)
- [ ] 404 / not found illustration
- [ ] 500 / server error illustration
- [ ] Error illustrations MUST NOT use dark humor in safety-critical contexts (NMMS)

### F.3 Success and confirmation states

- [ ] Generic success illustration (after completing a key action)
- [ ] Submission success (for forms, incident reports)
- [ ] Success illustrations MUST NOT use confetti or celebration tropes in NMMS (an incident resolved is not a party)

### F.4 Loading states

- [ ] Loading skeletons do not use illustrations; they use the Skeleton component
- [ ] Long-load moments (more than 2 seconds) MAY use a loading illustration with a progress affordance
- [ ] Loading illustrations MUST convey "working" not "waiting for you"

### F.5 Onboarding

- [ ] First-run illustration per product (introducing the product's archetype)
- [ ] Feature-introduction illustrations (for in-product tours)
- [ ] Onboarding illustrations MUST show the product's value, not Raven's brand

### F.6 Marketing and external surfaces

- [ ] Illustrations for marketing website, pitch decks, sales collateral
- [ ] Rule: marketing illustrations MAY be higher detail and more narrative than in-product illustrations, but MUST stay inside Section A style rules
- [ ] Marketing illustrations MUST NOT use product UI screenshots as a stand-in for illustrations

### F.7 AI-specific contexts

- [ ] Illustrations that represent AI behavior (search, generation, citation, reasoning) without using cliches (no brains, no robots, no glowing orbs as default)
- [ ] "AI at work" illustration for streaming / loading states in Copilot and P&ID Search
- [ ] Citation or "we found sources" illustration
- [ ] AI illustrations MUST NOT anthropomorphize the AI to a degree that misleads users about its capabilities

---

## Section G. Sizing and variants

### G.1 Sizes

- [ ] Size scale documented (for example, sm, md, lg, hero)
- [ ] Every illustration ships in every required size, redrawn where necessary (not just scaled)
- [ ] Detail level reduces as size reduces (the sm version is not just a shrunk lg)

### G.2 Mode variants

- [ ] Light mode (default)
- [ ] Dark mode
- [ ] High contrast mode (if the product supports it)
- [ ] Reduced motion variant (for animated illustrations; see Section I)

### G.3 Tenant variants

- [ ] Tenant-neutral illustration set exists (the default)
- [ ] Rules for whether tenant-branded illustrations exist at all (general guidance: no; tenants consume the Raven set as-is)
- [ ] If a tenant demands customization, that customization MUST be governed (custom logo placement only; not custom style)

---

## Section H. File format, naming, and export

### H.1 Format

- [ ] Primary format: SVG (vector, scalable)
- [ ] Raster format: PNG at 1x, 2x, 3x where raster is required
- [ ] Animated format: Lottie JSON (preferred) or APNG / WebP
- [ ] Format decision per use context documented (in-product: SVG; marketing: SVG + PNG; email: PNG; animated onboarding: Lottie)

### H.2 Optimization

- [ ] SVGs optimized (SVGO or equivalent) before shipping
- [ ] No embedded raster images inside SVGs unless unavoidable
- [ ] No inline styles that conflict with CSS variables (for dark mode / theming)
- [ ] File size budget per illustration (for example, SVG under 50KB, PNG under 150KB at 2x)

### H.3 Naming convention

- [ ] Prefix-based naming (for example, `illustration/empty-search`, `illustration/error-network`, `illustration/onboarding-copilot-welcome`)
- [ ] Naming MUST describe use context, not appearance (not `illustration/happy-person-with-laptop`)
- [ ] Mode and size suffixes (for example, `illustration/empty-search.dark.svg`, `illustration/empty-search.sm.svg`)

### H.4 Accessibility metadata

- [ ] Every illustration shipped with an `aria-label` or `aria-hidden` recommendation
- [ ] Decorative illustrations (purely aesthetic) marked decorative; informational illustrations have alt text
- [ ] Alt text MUST describe function, not appearance (for example, "No incidents recorded yet" not "A person looking at an empty clipboard")

---

## Section I. Animation

Only fill in this section if Raven illustrations animate. If static-only, mark not applicable.

### I.1 Motion principles

- [ ] Animation vocabulary documented (breath, pulse, slide, rotate, scale)
- [ ] Loop behavior (continuous loop, play once, play on trigger) per illustration
- [ ] Duration guidance (no animation longer than 3 seconds per loop)
- [ ] Easing curves consistent with motion tokens from raven-ui

### I.2 When to animate

- [ ] Loading and streaming moments: MAY animate
- [ ] Empty states: SHOULD NOT animate (distracts from the CTA)
- [ ] Error states: MUST NOT animate (respect the user's frustration)
- [ ] Hero moments (first-run onboarding): MAY animate

### I.3 Reduced motion

- [ ] Every animated illustration has a static fallback
- [ ] `prefers-reduced-motion: reduce` MUST swap to the static variant automatically
- [ ] No illustration MAY flash or pulse rapidly (seizure safety; WCAG 2.3)

---

## Section J. Accessibility

### J.1 Visual accessibility

- [ ] Illustrations MUST NOT rely on color alone to convey meaning
- [ ] Contrast between key illustration elements and background MUST meet 3:1 for informational content
- [ ] Illustrations MUST work in grayscale (test every illustration desaturated)
- [ ] Color-blind safe palette (test against deuteranopia, protanopia, tritanopia)

### J.2 Screen reader handling

- [ ] Decorative illustrations: `aria-hidden="true"`, `role="presentation"`
- [ ] Informational illustrations: meaningful `alt` text (see H.4)
- [ ] Complex illustrations (rare) use `<figure>` + `<figcaption>` pattern

### J.3 Cognitive accessibility

- [ ] Illustrations MUST clarify, not clutter (if removing an illustration improves comprehension, remove it)
- [ ] No illustration MUST be required to understand a UI flow; all critical information lives in text

---

## Section K. Governance

### K.1 Ownership

- [ ] Single named owner for the illustration system (likely same as design system owner)
- [ ] Owner has final veto on new illustrations
- [ ] Review process documented (how long, who participates, what's checked)

### K.2 Contribution

- [ ] New illustrations MUST go through review before shipping
- [ ] Contribution template (use context, style adherence check, accessibility check, sizes needed, modes needed)
- [ ] Rejected illustrations get written feedback (what to change)

### K.3 Source of truth

- [ ] Master library lives in Figma (or equivalent) as components with variants
- [ ] Figma library mirrors the shipped SVG set 1:1
- [ ] Source files (layered Figma frames) preserved, not flattened

### K.4 Distribution

- [ ] Illustrations ship alongside raven-ui (either as part of the package or as a sibling package `@raven/illustrations`)
- [ ] Frontend teams import illustrations by name, never by URL or path
- [ ] Illustrations are tree-shakeable (one import does not drag in the whole library)

### K.5 Versioning

- [ ] Illustration package follows semver
- [ ] Breaking changes (renaming an illustration, removing one) require a major version
- [ ] Changelog entry for every added or changed illustration

### K.6 Third-party use

- [ ] Rule about whether external parties (partners, documentation contractors) may use Raven illustrations
- [ ] Brand guidelines for illustration usage outside product (scale, crop, cobranding)
- [ ] No third party MAY create a "Raven-style" illustration on their own; they MUST use the shipped library

---

## Section L. What MUST NOT happen

- [ ] No stock illustrations (unDraw, Storyset, Blush, etc.) mixed into Raven surfaces
- [ ] No AI-generated images used as-is without passing the same style, color, and accessibility checks as hand-designed ones
- [ ] No per-product illustration forks (each product uses the shared library; product-specific needs get added to the library)
- [ ] No hex colors in illustrations outside the tokenized palette
- [ ] No outdated brand marks (old logos) appearing inside illustrations
- [ ] No illustrations in safety-critical NMMS flows that trivialize incidents, injuries, or hazards
- [ ] No illustrations that depict specific real tenants or their facilities (unless commissioned for that tenant's marketing)
- [ ] No decorative illustrations inserted only to "fill space" without a functional reason

---

## Section M. Illustration specific to Raven's three archetypes

This is where the shared system meets archetype-specific needs.

### M.1 Copilot (Conversational Canvas)

- [ ] Illustration set for empty search, empty chat history, suggestion prompts
- [ ] Illustrations convey discovery, knowledge access, assistance
- [ ] Tone: inviting, exploratory, competent
- [ ] AI visualization without cliches (no brains, no robots)

### M.2 NMMS (Transactional Workflow)

- [ ] Illustration set for empty dashboard, empty record list, submission success, permission denied
- [ ] Illustrations convey safety culture, diligence, record-keeping
- [ ] Tone: serious but not grim, instructional, competent
- [ ] No illustrations of accidents or injuries; focus on reporting and improvement
- [ ] Hard hats, PPE, clipboards, control rooms are acceptable metaphors; blood, injuries, crashes are not

### M.3 P&ID (Creative Canvas)

- [ ] Illustration set for empty canvas, no drawing selected, export success, no equipment found
- [ ] Illustrations convey technical precision, engineering care
- [ ] Tone: neutral, technical, not cartoonish
- [ ] Technical accuracy matters: if illustrations depict piping or instruments, they MUST look like real industrial schematics

---

## How to run this checklist

1. Walk the sections with the design owner. Mark `[x]`, `[~]`, `[ ]`.
2. Pay special attention to Sections A (style foundations), B (color rules), and L (must-not-happens). Drift in these three is the fastest way an illustration system loses coherence.
3. For each gap, answer: how often do designers / contractors currently hit this gap and make an ad-hoc decision? That is the pain score.
4. The gaps with the highest pain score are the next illustration work to do.

**Success criterion:** A new designer joining Raven should be able to open the illustration library, pick the right illustration for a use context, and ship a surface without inventing any new art or making a single style decision. If they have to make a style call, the system has a gap.

---

**End of illustration non-negotiables v1.0.**

Next revision should include the actual Raven illustration set as visual references for Sections A, B, C, D, and M.
