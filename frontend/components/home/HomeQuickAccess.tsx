import type { HomePayload } from "@/types/api";
import styles from "./homeQuickAccess.module.css";

interface HomeQuickAccessProps {
  data: HomePayload;
}

const accessItems = [
  {
    title: "Artists",
    glyph: "Ar",
    tone: "artists",
    getSubtitle: (data: HomePayload) => `${data.stats.artists_active} active`,
    status: "Profiles",
  },
  {
    title: "Events",
    glyph: "Ev",
    tone: "events",
    getSubtitle: (data: HomePayload) =>
      `${data.featured_events.length} featured`,
    status: "Tonight",
  },
  {
    title: "Live Rooms",
    glyph: "Lr",
    tone: "rooms",
    getSubtitle: (data: HomePayload) => `${data.live_rooms.length} rooms`,
    status: "Live",
  },
  {
    title: "Spaces",
    glyph: "Sp",
    tone: "spaces",
    getSubtitle: (data: HomePayload) => `${data.stats.spaces_active} active`,
    status: "Available",
  },
  {
    title: "Collectives",
    glyph: "Co",
    tone: "collectives",
    getSubtitle: (data: HomePayload) =>
      `${data.featured_collectives.length} featured`,
    status: "Teams",
  },
  {
    title: "Audio",
    glyph: "Au",
    tone: "audio",
    getSubtitle: (data: HomePayload) =>
      `${data.live_rooms.filter((room) => room.topic).length} signals`,
    status: "Rooms",
  },
  {
    title: "AI Match",
    glyph: "Ai",
    tone: "match",
    getSubtitle: (data: HomePayload) => `${data.ai_matches.length} matches`,
    status: "New",
  },
  {
    title: "Open Calls",
    glyph: "Oc",
    tone: "calls",
    getSubtitle: (data: HomePayload) => `${data.stats.open_calls} open`,
    status: "Apply",
  },
];

export function HomeQuickAccess({ data }: HomeQuickAccessProps) {
  return (
    <section className={styles.section} id="quick-access">
      <div className={styles.sectionHeader}>
        <p>Quick access</p>
        <span>{data.city.name} ecosystem</span>
      </div>

      <div className={styles.accessGrid}>
        {accessItems.map((item) => (
          <a
            className={[
              styles.accessCard,
              styles[item.tone as keyof typeof styles],
            ]
              .filter(Boolean)
              .join(" ")}
            href="#"
            key={item.title}
          >
            <span className={styles.glyph}>{item.glyph}</span>
            <span className={styles.copy}>
              <strong>{item.title}</strong>
              <small>{item.getSubtitle(data)}</small>
            </span>
            <span className={styles.status}>{item.status}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
