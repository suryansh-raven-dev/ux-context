# Changelog

All notable changes to `raven-ui` are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **Tokens.** Canonical `zIndex`, `breakpoint`, `density`, `opacity`, and `focusRing` families added to `src/tokens/tokens.ts` and re-exported from the package root (`DensityKey` type included). Resolves Checklist §A.7, §A.8, §A.9, §A.10, §A.11.
- **Archetype primitives.**
  - `EmptyState` (Section F) — title / description / action with icon slot; `compact` variant.
  - `SkipLink` (Section G / P) — first-focus accessibility primitive for shells.
  - `CategoryDot` (Section D) — system-level plant/section dot bound to `color.category.*`.
  - `TypingIndicator` (Section K) — animated three-dot AI typing bubble with `prefers-reduced-motion` fallback.
  - `CitationCard` (Section K) — single source card with optional ordinal, context clamp, and keyboard activation.
  - `CitationStrip` (Section K) — deduplicated list wrapper around `CitationCard`.
- **Workflow primitives.**
  - `FilterBar` (Section M) — generic active-filter chip row with clear-all and trigger/saved-view slots.
  - `LifecycleIndicator` (Section M) — horizontal pill chain visualising incident-state lifecycle with `aria-current="step"`.
- **Hidden-input exports.** `RavenButton`, `RavenIconButton`, `RavenButtonGroup`, `RavenSlider`, `RavenRating`, `RavenToggleButton`, `RavenToggleButtonGroup`, `RavenTransferList`, and `RavenFab` are now re-exported from the package root (previously buildable but not consumable).
- **Guideline docs.** `Introduction.mdx`, `ProductArchetypes.mdx`, `ThreeTierContract.mdx`, and `Audit.mdx` published to Storybook under `Guidelines/`.
- **Governance.** `CHANGELOG.md`, `CONTRIBUTING.md`, README owner line, and an ESLint rule banning hex literals in component source.

### Changed

- `ChatBubble` rewritten from CSS hex to theme-aware `sx` props (`alpha(primary.main, 0.12)`) — fixes dark-mode contrast regression where user text was invisible on light-purple ground. `ChatBubble.css` removed.
- **Chip text-only vs. rich usage rule (§7.5).** The grey `RavenChip` with `colorVariant="default"` is now documented as text-only — no icon, avatar, or onDelete. A dev-mode `console.warn` flags misuse. Semantic variants (success/error/warning/info/primary) or `ReportStatusChip` MUST be used whenever the chip carries an icon, leading dot, close, or info affordance. New Storybook story **Usage Rule: Text-only vs Rich** under Components / Data Display / Chip, plus a new rule in `CLAUDE.md`. Figma references: `1328-34470` (grey) and `1328-34344` (status).
- **Tabs page consolidation.** `StatusFilterBar` and `ViewToggle` stories merged under `Components/Navigation/Tabs` (Storybook merges files by title) — the old `Navigation/Status Filter Bar` and `Navigation/View Toggle` sidebar entries are gone; the four variants now live as siblings on the Tabs page. Component source is untouched, so consumer imports continue to work.

## [1.0.0] — earlier

Initial versioned release. See git log for per-commit detail.
