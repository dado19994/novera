import type { ReactNode } from "react";
import styles from "./badge.module.css";

interface BadgeProps {
  children: ReactNode;
  tone?: string | null;
}

export function Badge({ children, tone }: BadgeProps) {
  const toneClass = tone && tone in styles ? styles[tone] : "";

  return (
    <span className={[styles.badge, toneClass].filter(Boolean).join(" ")}>
      {children}
    </span>
  );
}
