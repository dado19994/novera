import type { ReactNode } from "react";
import styles from "./ui.module.css";

interface BadgeProps {
  children: ReactNode;
  tone?: string | null;
}

export function Badge({ children, tone }: BadgeProps) {
  return (
    <span className={[styles.badge, tone ? styles[tone] : ""].join(" ")}>
      {children}
    </span>
  );
}
