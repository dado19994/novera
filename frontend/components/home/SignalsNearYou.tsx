import { ArrowRight } from "lucide-react";
import Image from "next/image";
import styles from "./signalsNearYou.module.css";

const nearbySignals = [
  {
    title: "San Lorenzo live room",
    image: "/images/reference/pexels-gigxels-7638111.jpg",
  },
  {
    title: "Ostiense new drop",
    image: "/images/reference/diane-picchiottino-GLZseQ2XYCs-unsplash.jpg",
  },
  {
    title: "Pigneto audio live",
    image: "/images/reference/john-matychuk-gUK3lA3K7Yo-unsplash.jpg",
  },
];

export function SignalsNearYou() {
  return (
    <section className={styles.panel}>
      <header className={styles.header}>
        <h2>SIGNALS NEAR YOU</h2>
        <a href="#map">VIEW MAP</a>
      </header>

      <div className={styles.card}>
        <strong>Near San Lorenzo</strong>
        <span>3 live signals happening now</span>
        <div className={styles.thumbs}>
          {nearbySignals.map((signal) => (
            <span className={styles.thumb} key={signal.title} title={signal.title}>
              <Image src={signal.image} alt="" fill sizes="44px" />
            </span>
          ))}
          <span className={styles.radar} aria-hidden="true">
            <i />
          </span>
        </div>
      </div>

      <a className={styles.explore} href="#map">
        EXPLORE NEARBY <ArrowRight size={15} aria-hidden="true" />
      </a>
    </section>
  );
}
