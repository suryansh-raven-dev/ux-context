# QA Testing Workspace

This repository is a dedicated QA harness for testing multiple applications. It is designed to take short workflow descriptions, explore each application with browser/computer-use, capture what was learned in per-app files, and progressively turn stable flows into reusable automation.

## Applications

| App | Description | Production | Staging |
|-----|-------------|-----------|---------|
| **Raven** | AI copilot for process plants — knowledge search, P&ID, data explorer | https://ifz.startraven.com | — |
| **Near-Miss (NMMS)** | AI-powered incident reporting and investigation platform | https://nmms.startraven.com | https://nmms.staging.startraven.com |

## Operating Model

1. Add or update a workflow seed in `<app>/workflows/`.
2. Read the relevant discovery and memory files under `<app>/` before exploring.
3. Explore the workflow with computer-use first when the UI is new, visual, or hard to script.
4. Save confirmed learnings under `<app>/learnings/`, `<app>/discovery/`, and `<app>/memory/`.
5. Capture artifacts in `artifacts/<app>/`.
6. Promote stable flows to script-based automation only when repeatability matters.

## Directory Structure

```
├── chatbot/                    Raven chatbot / copilot docs, learnings, memory, scripts
│   ├── product-summary.md
│   ├── workflows/
│   ├── learnings/
│   ├── discovery/
│   ├── memory/
│   ├── screenshots/
│   └── scripts/
│
├── near-miss/                  Near-Miss (NMMS) specific docs and automation
│   ├── product-summary.md
│   ├── workflows/
│   ├── discovery/
│   ├── memory/
│   ├── session-logs/
│   ├── screenshots/
│   └── scripts/
│
├── design-system/              Shared component library and Storybook workspace
│   ├── src/
│   ├── session-logs/
│   └── ...
│
├── shared/
│   ├── templates/              Shared templates for workflows, learnings, discovery maps
│   └── run-report-template.md
│
├── config/                     Checked-in examples only; local secrets stay out of git
├── artifacts/                  Per-app subdirs for screenshots, traces, recordings, reports
│   ├── raven/
│   └── near-miss/
```

## Adding a New Application

1. Create a new directory under `<app-name>/`.
2. Copy templates from `shared/templates/` to scaffold workflows, learnings, and discovery maps.
3. Create a `product-summary.md` with the app's details.
4. Add the app's environments and accounts to `config/`.
5. Create artifact subdirectories under `artifacts/<app-name>/`.

## Security Notes

- Never store real credentials or deployment secrets in tracked files.
- Put only placeholders in checked-in config examples.
- Save user-provided facts separately from observed behavior and assumptions.
