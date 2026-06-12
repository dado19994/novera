import { ArrowRight, Users } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./collectiveStory.module.css";

const waveformBars = [
  14, 26, 18, 34, 22, 42, 16, 30, 46, 24, 36, 14, 28, 44, 20, 32, 12, 38,
  26, 48, 18, 30, 22, 40, 16, 34, 24, 44, 18, 28, 38, 14,
];

export function CollectiveStory() {
  return (
    <section className={styles.panel}>
      <header className={styles.sectionHead}>
        <p>LIVE NOW</p>
        <a href="#story">
          VIEW ALL <ArrowRight size={14} aria-hidden="true" />
        </a>
      </header>

      <article className={styles.card}>
        <div className={styles.storyVisual} aria-hidden="true">
          <Image
            src="/images/reference/neon-wang-gHizpv7OnNE-unsplash.jpg"
            alt=""
            fill
            sizes="(max-width: 1023px) 96px, 38vw"
          />
          <span className={styles.liveBadge}>LIVE</span>
        </div>

        <div className={styles.copy}>
          <p className={styles.panelLabel}>COLLECTIVE SIGNAL</p>
          <h2>Berlin–Rome Exchange</h2>
          <span className={styles.subtitle}>Sound · Visual · Performance</span>

          <span className={styles.waveform} aria-hidden="true">
            {waveformBars.map((barHeight, index) => (
              <i
                key={index}
                style={
                  {
                    "--bar-height": `${barHeight}px`,
                    "--bar-index": index,
                  } as CSSProperties
                }
              />
            ))}
          </span>

          <div className={styles.metaRow}>
            <a className={styles.openCall} href="#story">
              OPEN CALL
            </a>
            <span className={styles.listeners}>
              <Users size={13} aria-hidden="true" /> 12 LISTENING LIVE
            </span>
            <small>12H LEFT</small>
          </div>
        </div>
      </article>
    </section>
  );
}
