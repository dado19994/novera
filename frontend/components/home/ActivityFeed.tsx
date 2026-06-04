import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { ActivitySummary } from "@/types/api";
import styles from "./home.module.css";

interface ActivityFeedProps {
  activities: ActivitySummary[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  if (activities.length === 0) {
    return <p className={styles.empty}>No activities returned yet.</p>;
  }

  return (
    <div className={styles.feed}>
      {activities.map((activity) => (
        <Card key={activity.id}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>{activity.title}</h3>
            <Badge tone={activity.tone}>{activity.tone ?? activity.type}</Badge>
          </div>
          {activity.description ? (
            <p className={styles.bodyText}>{activity.description}</p>
          ) : null}
        </Card>
      ))}
    </div>
  );
}
