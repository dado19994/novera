import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { ShellHeader } from "./ShellHeader";
import styles from "./appShell.module.css";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className={styles.shell}>
      <Sidebar />
      <div className={styles.content}>
        <ShellHeader />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
