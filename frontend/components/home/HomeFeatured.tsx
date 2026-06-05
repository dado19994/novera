import { Badge } from "@/components/ui/Badge";
import type { EventSummary, LiveRoomSummary } from "@/types/api";
import styles from "./homeFeatured.module.css";

interface HomeFeaturedProps {
  events: EventSummary[];
  liveRooms: LiveRoomSummary[];
}

function formatTime(value?: string | null) {
  if (!value) {
    return "Time TBA";
  }

  return new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function isLiveRoomSummary(
  item: EventSummary | LiveRoomSummary,
): item is LiveRoomSummary {
  return "listeners_count" in item;
}

export function HomeFeatured({ events, liveRooms }: HomeFeaturedProps) {
  const primaryEvent = events[0];
  const supportingEvents = events.slice(1, 3);
  const visibleRooms = liveRooms.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <div>
          <p className={styles.eyebrow}>Featured / Live now</p>
          <h2>What is moving tonight</h2>
        </div>
        <span>{events.length + liveRooms.length} signals</span>
      </div>

      <div className={styles.featuredGrid}>
        {primaryEvent ? (
          <article className={styles.primaryCard}>
            <div className={styles.imageField} aria-hidden="true">
              <span>{primaryEvent.type ?? "event"}</span>
            </div>
            <div className={styles.primaryCopy}>
              <Badge tone={primaryEvent.district?.tone}>
                {primaryEvent.status ?? "featured"}
              </Badge>
              <h3>{primaryEvent.title}</h3>
              <p>
                {primaryEvent.type ?? "Event"}
                {primaryEvent.district?.name
                  ? ` in ${primaryEvent.district.name}`
                  : ""}
              </p>
              <small>{formatTime(primaryEvent.starts_at)}</small>
            </div>
          </article>
        ) : null}

        <div className={styles.compactList}>
          {[...supportingEvents, ...visibleRooms].map((item) => {
            const isRoom = isLiveRoomSummary(item);

            return (
              <article className={styles.compactCard} key={`${item.slug}`}>
                <span className={styles.marker} aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    {isRoom
                      ? `${item.listeners_count ?? 0} listeners`
                      : item.type ?? "Event"}
                    {item.district?.name ? ` · ${item.district.name}` : ""}
                  </p>
                </div>
                <Badge tone={item.district?.tone}>
                  {item.status ?? (isRoom ? "room" : "event")}
                </Badge>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
