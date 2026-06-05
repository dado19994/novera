import { Badge } from "@/components/ui/Badge";
import type { OpenCallSummary } from "@/types/api";
import styles from "./homeOpenCalls.module.css";

interface HomeOpenCallsProps {
  openCalls: OpenCallSummary[];
}

export function HomeOpenCalls({ openCalls }: HomeOpenCallsProps) {
  return (
    <section className={styles.section} id="open-calls">
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Open calls</p>
          <h2>Collaboration requests</h2>
        </div>
        <span>{openCalls.length} open</span>
      </div>

      <div className={styles.callsGrid}>
        {openCalls.slice(0, 4).map((openCall) => (
          <article className={styles.callCard} key={openCall.id}>
            <div className={styles.callTop}>
              <h3>{openCall.title}</h3>
              <Badge tone="opportunities">{openCall.status ?? "open"}</Badge>
            </div>
            <p>{openCall.role_needed ?? "Creative collaborator"}</p>
            <div className={styles.callMeta}>
              <span>{openCall.urgency ?? "listed"}</span>
              {openCall.district?.name ? <span>{openCall.district.name}</span> : null}
              {openCall.reward_type ? <span>{openCall.reward_type}</span> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
