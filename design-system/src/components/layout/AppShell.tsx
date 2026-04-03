import type { ReactNode } from 'react';

import './AppShell.css';

export type AppShellProps = {
  sidebar: ReactNode;
  children: ReactNode;
};

/**
 * Desktop shell: fixed-width sidebar and bordered main region.
 */
export function AppShell({ sidebar, children }: AppShellProps) {
  return (
    <div className="raven-app-shell">
      <div className="raven-app-shell__sidebar" role="navigation">
        {sidebar}
      </div>
      <div className="raven-app-shell__content-wrapper">
        <main className="raven-app-shell__content" role="main">
          {children}
        </main>
      </div>
    </div>
  );
}
