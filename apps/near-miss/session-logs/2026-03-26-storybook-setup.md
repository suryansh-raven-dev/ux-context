# Session Log: 2026-03-26 — NMMS Storybook Setup

## Objective
Restore local Storybook for the NMMS frontend after `npm run storybook` failed with `sh: storybook: command not found` and the browser showed `localhost refused to connect`.

## Environment
- App: NMMS / Near-Miss
- Local code checkout: `/Users/suryanshsrivastava/nmms`
- Date: 2026-03-26
- Tooling: npm, Storybook, local shell

## Observed Behavior
- `npm create storybook@latest` detected an existing `.storybook` directory and force-initialized anyway.
- That process added `@storybook/addon-a11y@^10.3.3` to `package.json`.
- The existing Storybook stack in the project remained on v9 (`storybook`, `@storybook/react-webpack5`, `@storybook/addon-docs`, `@storybook/addon-onboarding`, `@storybook/preset-create-react-app` all on `^9.1.10`).
- Subsequent `npm install` failed with an `ERESOLVE unable to resolve dependency tree` error because `@storybook/addon-a11y@10.3.3` requires Storybook 10.
- Because install failed, the local `storybook` binary was not available, producing `sh: storybook: command not found`.
- Later browser access to `http://localhost:6006` failed because the Storybook dev server was not running.

## Fix Applied
- Changed `@storybook/addon-a11y` to `^9.1.10` so all Storybook packages use the same major version.
- Removed the broken install state and reinstalled dependencies cleanly.
- Restarted Storybook locally and verified the server responds on port `6006`.

## Evidence
- Dependency conflict observed: `@storybook/addon-a11y@10.3.3` vs `storybook@9.1.20`
- Verification command result: `curl -I http://127.0.0.1:6006` returned `HTTP/1.1 200 OK`
- Storybook runtime verified on local port `6006`

## Notes
- For this project, avoid running `npm create storybook@latest` again unless intentionally migrating the whole Storybook stack to v10.
- If Storybook needs to be regenerated, keep all `@storybook/*` packages on the same major version.
