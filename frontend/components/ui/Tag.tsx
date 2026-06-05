import type { ReactNode } from "react";
import styles from "./tag.module.css";

interface TagProps {
  children: ReactNode;
  tone?: "magenta" | "violet" | "amber" | "teal";
}

export function Tag({ children, tone = "violet" }: TagProps) {
  return <span className={`${styles.tag} ${styles[tone]}`}>{children}</span>;
}
