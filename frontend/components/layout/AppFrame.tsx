import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import styles from "./appFrame.module.css";

interface AppFrameProps {
  children: ReactNode;
}

export function AppFrame({ children }: AppFrameProps) {
  return (
    <div className={styles.frame}>
      <Sidebar />
      <div className={styles.workspace}>
        <Topbar />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
