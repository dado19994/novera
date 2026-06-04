import type { ReactNode } from "react";
import { ShellHeader } from "./ShellHeader";
import styles from "./appShell.module.css";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className={styles.shell}>
      <ShellHeader />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
