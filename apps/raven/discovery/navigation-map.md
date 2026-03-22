# Navigation Map

## Current Status
Populated from first live exploration on 2026-03-21. Complete sidebar and settings popup navigation confirmed.

## User-Provided Truth
- Raven testing started with authentication, Plant Knowledge Hub, Isolation Planning, and review or approval workflows.
- This file stays focused on routes, navigation entry points, and screen-to-screen transitions.

## Confirmed Navigation Structure

### Primary Sidebar (Always Visible)
```
┌─────────────────────────────────┐
│ ☰  INDORAMA (hamburger + logo)  │
├─────────────────────────────────┤
│ SELECTED DOMAIN                 │
│ [HSEF ▼] (dropdown to switch)  │
├─────────────────────────────────┤
│ AI AGENTS                       │
│ ├─ 🔍 Search         /search   │
│ │  ├─ [Session 1 title...]      │
│ │  ├─ [Session 2 title...]      │
│ │  └─ View All (N) →           │
│ └─ 📊 P&ID           /pid      │
├─────────────────────────────────┤
│ 🌐 Data Explorer  /data/data-explorer │
│ ⚙  Settings       (popup menu) │
├─────────────────────────────────┤
│ Powered by [Raven]              │
└─────────────────────────────────┘
```

### Settings Popup Menu (Opens on "Settings" click)
```
┌─────────────────────────────────┐
│ 👤 Account Settings   /account  │
│ 🏢 Workplace Settings           │
│    /workplace/dashboard          │
│ 🔖 Saved Answers      /saved   │
│ 💬 Feedback           /feedback │
│ 🌙 Switch to Dark Mode (toggle)│
├─────────────────────────────────┤
│ 🚪 Sign Out (red)              │
└─────────────────────────────────┘
```

### Workplace Settings Sub-Navigation
```
WORKPLACE
├─ Dashboard (active)  /workplace/dashboard
MANAGEMENT
├─ Users (external link icon)
└─ Help & Support      → redirects to /search
```

### Domain Selection Modal (Post-Login)
Mandatory overlay after login. Domains: HSEF, PHD, Ammonia (Train-1, Train-2), FCU (Line-1F, Line-2F), Urea (Urea-1, Urea-2).

## Route Map

| Route | Page Title | Access Method |
|-------|-----------|---------------|
| `/login` | Login | Direct or redirect |
| `/search` | New Session / Search | Sidebar > Search |
| `/search/<session-uuid>` | Search | Click session in sidebar |
| `/search/all-sessions` (approx) | All Sessions | Sidebar > View All |
| `/pid?tabId=<uuid>` | PID | Sidebar > P&ID |
| `/data/data-explorer` | Data Explorer | Sidebar > Data Explorer |
| `/account` | Account Settings | Settings popup > Account Settings |
| `/workplace/dashboard` | Dashboard | Settings popup > Workplace Settings |
| `/saved` | Saved Answers | Settings popup > Saved Answers |
| `/feedback` | Answer Feedback | Settings popup > Feedback |

## Screen Transitions
- Login → Domain Selection Modal → Search (default landing)
- Search → P&ID (sidebar click)
- Search → Data Explorer (sidebar click)
- Any page → Settings popup → Account/Workplace/Saved/Feedback
- Any page → Domain switch (sidebar dropdown, re-triggers domain modal)
- Search session → Session detail (click in sidebar or All Sessions)

## Hamburger Menu Behavior
- Toggles sidebar collapse/expand
- When collapsed, shows only icons
- Session history and "View All" remain accessible when expanded

## Questions Answered
- **Primary nav vs nested**: Main 4 items in sidebar; Settings options in popup menu; Workplace has its own sub-nav
- **Role-specific areas**: Workplace Settings (admin analytics) may be role-restricted but was accessible to test account
- **Deep-linking**: All routes work directly, SPA handles routing client-side
- **Workflow states**: Reached through pages (Search, P&ID, Data Explorer), popup menu (Settings), and inline modals (domain selection, upload)

## Update Rule
Keep this file route- and navigation-focused. Put selector details in `docs/memory/selectors.md` instead.
