# Session Log: Near Miss Storybook Debug

**Date**: 2026-03-26
**Application**: Raven / Near Miss
**Focus**: Local NMMS Storybook availability and runtime debugging

## User-Provided Truth

- `http://localhost:6007` was not loading for the Near Miss Storybook.
- The issue was later confirmed fixed by the user.

## What Was Done

1. Verified the active local Storybook processes, listening ports, and terminal output for the NMMS app under `/Users/suryanshsrivastava/nmms`.
2. Confirmed from runtime evidence that:
   - Storybook manager and preview endpoints were serving HTTP 200 responses.
   - `preview.js` executed in the browser successfully.
   - Earlier failing sessions included stale/conflicting local Storybook processes and mismatched asset requests during browser reproduction.
3. Restarted Storybook multiple times with explicit port control and cache cleanup to stabilize the local server on `6007`.
4. Added temporary instrumentation in `.storybook/preview.js` to capture:
   - browser initialization
   - window context
   - resource-load failures
   - unhandled promise rejections
5. After the user confirmed the issue was fixed, removed all temporary instrumentation and cleared the debug log file.

## Observed Behavior

- Storybook eventually served successfully on `http://localhost:6007` with `200` responses for both `/` and `/iframe.html`.
- The browser executed `.storybook/preview.js` successfully with React `18.3.1` and light theme initialization confirmed via runtime logs.
- `/__webpack_hmr` behaved as a live event stream endpoint, while `/webpack_hmr` returned `404`.
- Temporary `require('chart.js')` instrumentation caused runtime instability and was reverted; the original static `import` form is the correct configuration here.

## Outcome

- The user confirmed the local Storybook issue was fixed.
- `.storybook/preview.js` was restored to its non-instrumented state.
- No persistent product code changes were kept beyond the operational restart/cache cleanup.

## Open Questions

- The exact browser-side trigger for the originally broken local session was not isolated to a single root cause with full certainty.
- The strongest observed contributors were stale/conflicting local Storybook processes and cached runtime state during repeated local restarts.

## Next Steps

1. If the local Storybook becomes unstable again, first check for duplicate Storybook processes and port conflicts before editing code.
2. Prefer restarting the NMMS Storybook on the intended port explicitly (`6007`) and clearing local build cache if browser requests appear to target stale assets.
