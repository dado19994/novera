import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { EventSummary } from "@/types/api";
import styles from "./featuredEvents.module.css";

interface FeaturedEventsProps {
  events: EventSummary[];
}

export function FeaturedEvents({ events }: FeaturedEventsProps) {
  if (events.length === 0) {
    return <p className={styles.empty}>No featured events returned yet.</p>;
  }

  return (
    <div className={styles.cardList}>
      {events.map((event) => (
        <Card key={event.id}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>{event.title}</h3>
            <Badge tone={event.district?.tone}>{event.status ?? "event"}</Badge>
          </div>
          <p className={styles.meta}>
            {event.type ?? "Event"}
            {event.district?.name ? ` in ${event.district.name}` : ""}
          </p>
        </Card>
      ))}
    </div>
  );
}
