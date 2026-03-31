# Session Log: Design System GitHub Sync Workflow

**Date**: 2026-03-30
**Application**: Raven / Design System
**Focus**: Add a safe no-config workflow for pushing local design-system work to GitHub

## User-Provided Truth

- Future pushes should go to `https://github.com/suryansh-raven-dev/design-system`.
- Local work currently lives in `design-system/`, while the GitHub repo tracks the app at `apps/raven/design-system/raven-ui/`.

## What Was Done

1. Confirmed the local and remote paths do not match directly.
2. Added a local helper script:
   - `design-system/push-to-design-system-repo.sh`
3. The script:
   - clones the GitHub repo into a temp folder
   - syncs local `design-system/` into `apps/raven/design-system/raven-ui/`
   - shows status and diff summary
   - commits and pushes from the temp clone when not using `--dry-run`
4. Verified the script with `--dry-run`.
5. Ensured the helper script itself is excluded from sync output.

## Observed Behavior

- Dry run completes successfully.
- Current local design-system content reports no pending push changes after the latest sync.
- No git config or remote settings are changed in the original workspace.

## Outcome

- A repeatable, safer push workflow now exists without repointing `origin` in the QA repo.

## Usage

```bash
cd "/Users/suryanshsrivastava/Raven Cursor/design-system"
./push-to-design-system-repo.sh --dry-run
./push-to-design-system-repo.sh "Your commit message"
```
