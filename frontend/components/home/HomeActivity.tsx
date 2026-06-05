import { Badge } from "@/components/ui/Badge";
import type { ActivitySummary } from "@/types/api";
import styles from "./homeActivity.module.css";

interface HomeActivityProps {
  activities: ActivitySummary[];
}

function formatActivityTime(value?: string | null) {
  if (!value) {
    return "Recent";
  }

  return new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export function HomeActivity({ activities }: HomeActivityProps) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Activity</p>
          <h2>Live culture feed</h2>
        </div>
        <span>{activities.length} updates</span>
      </div>

      <div className={styles.feed}>
        {activities.slice(0, 8).map((activity) => (
          <article className={styles.activityItem} key={activity.id}>
            <div className={styles.activityMain}>
              <time>{formatActivityTime(activity.occurred_at)}</time>
              <h3>{activity.title}</h3>
              {activity.description ? <p>{activity.description}</p> : null}
            </div>
            <Badge tone={activity.tone}>{activity.tone ?? activity.type}</Badge>
          </article>
        ))}
      </div>
    </section>
  );
}
