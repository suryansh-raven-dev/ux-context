# Contributing to raven-ui

`raven-ui` is the single source of truth for Raven's three products (Copilot, NMMS, P&ID). Product teams MUST NOT fork, reimplement, or hardcode anything that lives here.

## When to change raven-ui (vs. ship in product)

- **You need a new primitive that any other product could reuse** → contribute here.
- **You need a variant of an existing primitive** → contribute here.
- **You need a one-off composition of existing primitives, with no new design decisions** → ship it in the product, not here.
- **You are tempted to add a hex literal, px spacing, or font string in product code** → stop, and instead add the missing token here.

## Rules that MUST hold in every PR

1. **No hex literals in component source.** Consume `categoryColors`, `statusColors`, `engineeringColors`, palette tokens, or `useRavenTokens(theme)`. Enforced by ESLint.
2. **No hardcoded px spacing.** Use `space.*` or MUI `sx` numeric shorthand (which is the `space.2` base).
3. **No hardcoded font strings.** Use `fontFamily.*`, `fontSize.*`, `fontWeight.*`.
4. **Every icon is the `*Rounded` MUI variant.** No `*Outlined`, no base `*Icon`.
5. **Every interactive primitive has:** default, hover, focus, active, disabled, loading (if async), error (if validated) states; keyboard support; visible focus ring; `aria-*` where relevant.
6. **Every story file ships:** default, each variant, each state. At minimum — one story per externally-facing variant axis.
7. **Every primitive has a type export** from `src/index.ts`. If it's in the library and product code can't import its props, it isn't finished.
8. **Update CHANGELOG.md under `[Unreleased]`** for every user-facing change (new component, new prop, breaking change, visual fix).

## Where things go

| Kind | Folder |
| --- | --- |
| Form inputs | `src/components/inputs/` |
| Data display | `src/components/data-display/` |
| Feedback (toasts, alerts, empty states) | `src/components/feedback/` |
| Overlays | `src/components/feedback/` (dialogs) or nearest sibling |
| Navigation | `src/components/navigation/` |
| Layout / shell | `src/components/layout/` |
| Surfaces | `src/components/surfaces/` |
| AI primitives (Copilot, P&ID Search) | `src/components/ai/` |
| Workflow primitives (NMMS, records) | `src/components/workflow/` |
| Tokens | `src/tokens/tokens.ts` |
| Theme palettes | `src/theme/` |
| Guideline docs | `src/docs/*.mdx` |

## Checklist before opening a PR

- [ ] No hex, px, or raw font strings in new component source.
- [ ] All icons are `*Rounded`.
- [ ] New component exported from `src/index.ts` (value + type).
- [ ] New component has a `.stories.tsx` file covering default + all variants.
- [ ] New component has (or contributes to) a test under `*.test.tsx`.
- [ ] Storybook a11y addon shows zero violations on new stories.
- [ ] `CHANGELOG.md` updated under `[Unreleased]`.
- [ ] If a new token was added, `src/tokens/tokens.ts` and `src/tokens/index.ts` both updated; `Audit.mdx` row flipped from `[ ]` / `[~]` to `[x]`.

## Review

- Design review (Suryansh) approves visual decisions and new tokens.
- Frontend review approves API shape, type exports, and test coverage.
- Any rule in `raven-design-system-guidelines.md` keyed **MUST** / **MUST NOT** is a PR-blocker; anything **SHOULD** is default unless documented.
