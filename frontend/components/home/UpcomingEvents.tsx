import Image from "next/image";
import type { EventSummary } from "@/types/api";
import styles from "./upcomingEvents.module.css";

const fallbackEvents = [
  [
    "MAY",
    "24",
    "LATE NIGHT PRODUCERS",
    "Live Room Session",
    "8:00 PM · San Lorenzo",
    "/images/reference/pexels-gigxels-7638111.jpg",
  ],
  [
    "MAY",
    "25",
    "DESIGN IN MOTION",
    "Visual Showcase",
    "7:00 PM · Ostiense",
    "/images/reference/tyron-van-de-beek-0E9RjAKXHKs-unsplash.jpg",
  ],
  [
    "MAY",
    "28",
    "SOLSTICE SHOWCASE",
    "Live Set & Visuals",
    "10:00 PM · Testaccio",
    "/images/reference/david-magalhaes-hunYJNQZAio-unsplash.jpg",
  ],
  [
    "MAY",
    "31",
    "VOICES IN COLOR",
    "Curated Listening Session",
    "6:30 PM · Pigneto",
    "/images/reference/pexels-yankrukov-9008800.jpg",
  ],
];

const fallbackEventImages = fallbackEvents.map((event) => event[5]);

interface EventItem {
  month: string;
  day: string;
  title: string;
  type: string;
  meta: string;
  image: string;
}

interface UpcomingEventsProps {
  events?: EventSummary[] | null;
}

function formatEventDate(startsAt?: string | null) {
  if (!startsAt) {
    return { month: "MAY", day: "24", time: "8:00 PM" };
  }

  const date = new Date(startsAt);

  if (Number.isNaN(date.getTime())) {
    return { month: "MAY", day: "24", time: "8:00 PM" };
  }

  return {
    month: new Intl.DateTimeFormat("en", { month: "short", timeZone: "Europe/Rome" })
      .format(date)
      .toUpperCase(),
    day: new Intl.DateTimeFormat("en", { day: "2-digit", timeZone: "Europe/Rome" }).format(
      date,
    ),
    time: new Intl.DateTimeFormat("en", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "Europe/Rome",
    }).format(date),
  };
}

function normalizeEvent(event: EventSummary, index: number): EventItem {
  const date = formatEventDate(event.starts_at);
  const district = event.district?.name;
  const location = district ?? event.location_name ?? "Rome";

  return {
    month: date.month,
    day: date.day,
    title: event.title.toUpperCase(),
    type: event.type ?? event.status ?? "Creative event",
    meta: `${date.time} · ${location}`,
    image: fallbackEventImages[index % fallbackEventImages.length],
  };
}

export function UpcomingEvents({ events }: UpcomingEventsProps) {
  const visibleEvents =
    events && events.length > 0
      ? events.slice(0, 4).map(normalizeEvent)
      : fallbackEvents.map(([month, day, title, type, meta, image]) => ({
          month,
          day,
          title,
          type,
          meta,
          image,
        }));

  return (
    <section className={styles.panel}>
      <header className={styles.header}>
        <h2>TONIGHT / UPCOMING</h2>
        <a href="#events">VIEW ALL</a>
      </header>
      <div className={styles.list}>
        {visibleEvents.map(({ month, day, title, type, meta, image }) => (
          <article className={styles.event} key={title}>
            <div className={styles.date}>
              <span>{month}</span>
              <strong>{day}</strong>
            </div>
            <div className={styles.meta}>
              <strong>{title}</strong>
              <small>{type}</small>
              <small>{meta}</small>
            </div>
            <span className={styles.thumb}>
              <Image src={image} alt="" fill sizes="58px" />
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
