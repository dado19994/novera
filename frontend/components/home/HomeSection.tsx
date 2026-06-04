import type { ReactNode } from "react";
import styles from "./home.module.css";

interface HomeSectionProps {
  title: string;
  children: ReactNode;
}

export function HomeSection({ title, children }: HomeSectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}
