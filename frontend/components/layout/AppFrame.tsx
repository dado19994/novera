import type { ReactNode } from "react";
import { MobileNavigation } from "./MobileNavigation";
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
        <MobileNavigation />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
