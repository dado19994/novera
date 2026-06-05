import { ArrowRight } from "lucide-react";
import Image from "next/image";
import styles from "./activityRail.module.css";

const fallbackActivity = [
  [
    "SOLSTICE uploaded new visuals",
    "2h ago · Rome",
    "/images/reference/diane-picchiottino-GLZseQ2XYCs-unsplash.jpg",
  ],
  [
    "Bassline Society needs a Sound Engineer",
    "4h ago · Ostiense",
    "/images/reference/geekgunda-Xc_C0RSIN7Q-unsplash.jpg",
  ],
  [
    "Mila D. booked a creative session",
    "5h ago · Pigneto",
    "/images/reference/benjamin-wedemeyer-KzCFxg52zFk-unsplash.jpg",
  ],
  [
    "New event added: Design in Motion",
    "7h ago · Testaccio",
    "/images/reference/elijah-ekdahl-8XxF2kYHIgo-unsplash.jpg",
  ],
];

export function ActivityRail() {
  return (
    <section className={styles.panel}>
      <header className={styles.header}>
        <h2>LIVE ACTIVITY</h2>
        <span>VIEW ALL ACTIVITY</span>
      </header>
      <div className={styles.list}>
        {fallbackActivity.map(([title, meta, image]) => (
          <article className={styles.item} key={title}>
            <span className={styles.thumb}>
              <Image src={image} alt="" fill sizes="52px" />
            </span>
            <div>
              <strong>{title}</strong>
              <small>{meta}</small>
            </div>
          </article>
        ))}
      </div>
      <a className={styles.link} href="#activity">
        VIEW ALL ACTIVITY <ArrowRight size={16} aria-hidden="true" />
      </a>
    </section>
  );
}
