import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { ActivitySummary } from "@/types/api";
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

const fallbackActivityImages = fallbackActivity.map((activity) => activity[2]);

interface ActivityItem {
  title: string;
  meta: string;
  image: string;
}

interface ActivityRailProps {
  activities?: ActivitySummary[] | null;
}

function formatActivityTime(occurredAt?: string | null) {
  if (!occurredAt) {
    return "now";
  }

  const date = new Date(occurredAt);

  if (Number.isNaN(date.getTime())) {
    return "now";
  }

  const minutes = Math.max(1, Math.round((Date.now() - date.getTime()) / 60000));

  if (minutes < 60) {
    return `${minutes}m ago`;
  }

  const hours = Math.round(minutes / 60);

  if (hours < 24) {
    return `${hours}h ago`;
  }

  return `${Math.round(hours / 24)}d ago`;
}

function normalizeActivity(activity: ActivitySummary, index: number): ActivityItem {
  const location = activity.district?.name ?? activity.city?.name ?? "Rome";

  return {
    title: activity.title,
    meta: `${formatActivityTime(activity.occurred_at)} · ${location}`,
    image: fallbackActivityImages[index % fallbackActivityImages.length],
  };
}

export function ActivityRail({ activities }: ActivityRailProps) {
  const visibleActivity =
    activities && activities.length > 0
      ? activities.slice(0, 4).map(normalizeActivity)
      : fallbackActivity.map(([title, meta, image]) => ({ title, meta, image }));

  return (
    <section className={styles.panel}>
      <header className={styles.header}>
        <h2>LIVE ACTIVITY</h2>
        <span>VIEW ALL ACTIVITY</span>
      </header>
      <div className={styles.list}>
        {visibleActivity.map(({ title, meta, image }) => (
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
