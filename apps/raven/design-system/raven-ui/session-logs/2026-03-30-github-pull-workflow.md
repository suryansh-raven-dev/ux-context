# Session Log: Design System GitHub Pull Workflow

**Date**: 2026-03-30
**Application**: Raven / Design System
**Focus**: Add a safe no-config workflow for pulling the GitHub design-system repo into the local workspace

## User-Provided Truth

- A matching pull workflow was needed alongside the push workflow.

## What Was Done

1. Added a local helper script:
   - `design-system/pull-from-design-system-repo.sh`
2. The script:
   - clones `https://github.com/suryansh-raven-dev/design-system` into a temp folder
   - syncs `apps/raven/design-system/raven-ui/` back into the local `design-system/` folder
   - uses `rsync --delete` to mirror the tracked GitHub path
   - supports `--dry-run` for inspection before applying local changes
3. Made the script executable and verified it with a dry run.
4. Corrected the helper text URL typo and documented that mirror sync may delete local-only files.

## Observed Behavior

- Dry run succeeds.
- Mirror behavior correctly reports files that differ from or do not exist in the tracked GitHub path.
- No git config or remotes are changed in the current workspace.

## Outcome

- A repeatable pull workflow now exists alongside the push workflow.

## Usage

```bash
cd "/Users/suryanshsrivastava/Raven Cursor/design-system"
./pull-from-design-system-repo.sh --dry-run
./pull-from-design-system-repo.sh
```
