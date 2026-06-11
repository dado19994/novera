import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./collectiveStory.module.css";

export function CollectiveStory() {
  return (
    <section className={styles.panel}>
      <div className={styles.storyVisual} aria-hidden="true">
        <Image
          src="/images/reference/neon-wang-gHizpv7OnNE-unsplash.jpg"
          alt=""
          fill
          sizes="38vw"
        />
      </div>
      <div className={styles.copy}>
        <p>
          <span className={styles.desktopLabel}>COLLECTIVE SIGNAL</span>
          <span className={styles.mobileLabel}>LIVE NOW</span>
        </p>
        <h2>Berlin–Rome Exchange</h2>
        <span>Sound · Visual · Performance</span>
        <a href="#story">
          OPEN CALL <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div className={styles.miniCard}>
        <span className={styles.symbol}>LIVE</span>
        <div>
          <strong>12 LISTENING LIVE</strong>
          <small>12H LEFT</small>
          <span className={styles.waveform} aria-hidden="true">
            {Array.from({ length: 10 }).map((_, index) => (
              <i key={index} style={{ "--bar": index } as CSSProperties} />
            ))}
          </span>
        </div>
        <button type="button" aria-label="Play collective story">
          <Play size={20} fill="currentColor" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
