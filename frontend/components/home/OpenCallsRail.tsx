import { ArrowRight } from "lucide-react";
import styles from "./openCallsRail.module.css";

const openCalls = [
  {
    title: "Light artist for live score",
    meta: "San Lorenzo · Live room",
    deadline: "12H LEFT",
    tone: "magenta",
  },
  {
    title: "Sound engineer for Bassline Society",
    meta: "Ostiense · Collective",
    deadline: "2D LEFT",
    tone: "violet",
  },
  {
    title: "Visual duo for night cinema",
    meta: "Pigneto · Screening",
    deadline: "NEW",
    tone: "cyan",
  },
];

export function OpenCallsRail() {
  return (
    <section className={styles.panel}>
      <header className={styles.header}>
        <p>OPEN CALLS</p>
        <a href="#calls">
          VIEW ALL <ArrowRight size={14} aria-hidden="true" />
        </a>
      </header>
      <div className={styles.list}>
        {openCalls.map((call) => (
          <a
            className={`${styles.call} ${styles[call.tone as keyof typeof styles]}`}
            href="#calls"
            key={call.title}
          >
            <span className={styles.glyph} aria-hidden="true" />
            <span className={styles.copy}>
              <strong>{call.title}</strong>
              <small>{call.meta}</small>
            </span>
            <span className={styles.deadline}>{call.deadline}</span>
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}
