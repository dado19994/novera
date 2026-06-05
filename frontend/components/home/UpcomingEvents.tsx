import Image from "next/image";
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

export function UpcomingEvents() {
  return (
    <section className={styles.panel}>
      <header className={styles.header}>
        <h2>TONIGHT / UPCOMING</h2>
        <a href="#events">VIEW ALL</a>
      </header>
      <div className={styles.list}>
        {fallbackEvents.map(([month, day, title, type, meta, image]) => (
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
