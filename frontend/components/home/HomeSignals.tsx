import { Badge } from "@/components/ui/Badge";
import type { AiMatchSummary } from "@/types/api";
import styles from "./homeSignals.module.css";

interface HomeSignalsProps {
  matches: AiMatchSummary[];
}

export function HomeSignals({ matches }: HomeSignalsProps) {
  return (
    <aside className={styles.section} aria-label="Matched signals">
      <div className={styles.header}>
        <p>Matched signals</p>
        <span>AI assisted</span>
      </div>

      <div className={styles.signalList}>
        {matches.slice(0, 4).map((match) => (
          <article className={styles.signalCard} key={match.id}>
            <div className={styles.score}>
              <strong>{match.score}</strong>
              <span>%</span>
            </div>
            <div className={styles.signalCopy}>
              <h3>{match.title}</h3>
              {match.reason ? <p>{match.reason}</p> : null}
              <Badge tone={match.status === "new" ? "match" : null}>
                {match.category ?? match.status ?? "match"}
              </Badge>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}
