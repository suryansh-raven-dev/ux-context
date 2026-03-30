# Raven Design System

This repository hosts the Raven Design System implementation and supporting design-system documentation. The active UI library lives under `apps/raven/design-system/raven-ui/` and is built as a React + MUI v6 component library with Storybook and Vitest.

## Project Location

- App path: `apps/raven/design-system/raven-ui/`
- Theme tokens: `apps/raven/design-system/raven-ui/src/theme/ravenNearMissTheme.ts`
- Global tokens: `apps/raven/design-system/raven-ui/src/global.css`
- Storybook stories: `apps/raven/design-system/raven-ui/src/**/*.stories.tsx`
- Public entrypoint: `apps/raven/design-system/raven-ui/src/index.ts`

## Stack

- React 18 + TypeScript 5
- MUI v6
- Storybook 8
- Vitest + React Testing Library
- Plain CSS with `raven-` prefixed styling

## Getting Started

```bash
cd apps/raven/design-system/raven-ui
npm install
npm run storybook
npm run dev
npm run test
```

Storybook runs locally at `http://localhost:6006`.

## What The Design System Contains

- Layout primitives such as `AppShell`, `SideNavigation`, `PageHeader`, and `MobileAppShell`
- Input components such as `RavenTextField`, `RavenSelect`, `RavenCheckbox`, `RavenRadioGroup`, `RavenSwitch`, `RavenAutocomplete`, and `RavenButton`
- Data display components such as `SummaryCard`, `DataTable`, `DiffCard`, `StatusStepper`, `RavenBadge`, `RavenChip`, and `RavenTypography`
- Feedback components such as `RavenAlert`, `RavenDialog`, `RavenSnackbar`, `RecommendationPanel`, and `ActivityDrawer`
- Catalog and reference pages for MUI v6 component alignment

## Directory Structure

```text
apps/
└── raven/
    └── design-system/
        ├── near-miss-components.md
        └── raven-ui/
            ├── .storybook/
            ├── public/
            ├── session-logs/
            ├── src/
            ├── package.json
            └── package-lock.json
```

## Design System Workflow

1. Build or update components in `apps/raven/design-system/raven-ui/src/components/`.
2. Document and review variants in Storybook stories.
3. Keep theme tokens and component behavior aligned with Figma and product usage.
4. Capture meaningful changes in `apps/raven/design-system/raven-ui/session-logs/`.

## Notes

- The repository still contains broader application and artifact folders, but the tracked UI implementation for this work is `apps/raven/design-system/raven-ui/`.
- Do not store credentials or secrets in tracked files.
