import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./sceneStories.module.css";

const stories = [
  {
    title: "San Lorenzo",
    meta: "Live room",
    tone: "magenta",
    image: "/images/reference/pexels-gigxels-7638111.jpg",
  },
  {
    title: "Ostiense",
    meta: "New drop",
    tone: "violet",
    image: "/images/reference/diane-picchiottino-GLZseQ2XYCs-unsplash.jpg",
  },
  {
    title: "Pigneto",
    meta: "Audio live",
    tone: "cyan",
    image: "/images/reference/john-matychuk-gUK3lA3K7Yo-unsplash.jpg",
  },
  {
    title: "Testaccio",
    meta: "Open call",
    tone: "orange",
    image: "/images/reference/david-magalhaes-hunYJNQZAio-unsplash.jpg",
  },
  {
    title: "Trastevere",
    meta: "Tonight",
    tone: "magenta",
    image: "/images/reference/tyron-van-de-beek-0E9RjAKXHKs-unsplash.jpg",
  },
  {
    title: "Centro",
    meta: "District",
    tone: "violet",
    image: "/images/reference/elijah-ekdahl-8XxF2kYHIgo-unsplash.jpg",
  },
  {
    title: "Garbatella",
    meta: "Session",
    tone: "magenta",
    image: "/images/reference/neon-wang-gHizpv7OnNE-unsplash.jpg",
  },
  {
    title: "Artist Upload",
    meta: "Now",
    tone: "cyan",
    image: "/images/reference/benjamin-wedemeyer-KzCFxg52zFk-unsplash.jpg",
  },
];

export function SceneStories() {
  return (
    <section className={styles.strip} id="stories" aria-labelledby="scene-stories-heading">
      <header className={styles.header}>
        <div>
          <h2 id="scene-stories-heading">STORIES &amp; SIGNALS</h2>
          <p>Live moments from the network</p>
        </div>
        <a href="#signals" aria-label="View all stories">
          <span>VIEW ALL</span> <ArrowRight size={15} aria-hidden="true" />
        </a>
      </header>

      <div className={styles.scroller} aria-label="Scene story signals">
        {stories.map((story, index) => (
          <button
            aria-label={`Open ${story.title} ${story.meta.toLowerCase()} story`}
            className={`${styles.storyItem} ${styles[story.tone as keyof typeof styles]} ${index === 0 ? styles.active : ""}`}
            key={story.title}
            style={{ "--story-index": index } as CSSProperties}
            type="button"
          >
            <span className={styles.orb} aria-hidden="true">
              <span className={styles.signalRing} />
              <span className={styles.imageWrap}>
                <Image src={story.image} alt="" fill sizes="72px" />
              </span>
              <span className={styles.statusDot} />
              {index === 0 ? <span className={styles.liveChip}>LIVE</span> : null}
            </span>
            <strong className={styles.storyTitle}>{story.title}</strong>
            <span className={styles.storyMeta}>{story.meta}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
