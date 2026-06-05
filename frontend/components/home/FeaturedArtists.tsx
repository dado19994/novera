import { ArrowRight } from "lucide-react";
import Image from "next/image";
import styles from "./featuredArtists.module.css";

const artists = [
  [
    "MIA DEVEREAUX",
    "Neo Soul",
    "Pigneto",
    "/images/reference/pexels-yankrukov-9008800.jpg",
  ],
  [
    "JALEN KAI",
    "Hip Hop · Producer",
    "San Lorenzo",
    "/images/reference/fernand-de-canne-Zia8y5tXxp8-unsplash.jpg",
  ],
  [
    "RE:FORMED",
    "Design · Sound · Film",
    "Ostiense",
    "/images/reference/neon-wang-gHizpv7OnNE-unsplash.jpg",
  ],
  [
    "ELARA VOSS",
    "Alternative R&B",
    "Rome",
    "/images/reference/benjamin-wedemeyer-KzCFxg52zFk-unsplash.jpg",
  ],
];

export function FeaturedArtists() {
  return (
    <section className={styles.panel}>
      <header className={styles.header}>
        <h2>FEATURED ARTISTS</h2>
        <a href="#artists">VIEW ALL</a>
      </header>
      <div className={styles.list}>
        {artists.map(([name, discipline, location, image]) => (
          <a className={styles.artist} href="#artists" key={name}>
            <span className={styles.thumb}>
              <Image src={image} alt="" fill sizes="72px" />
            </span>
            <span className={styles.meta}>
              <strong>{name}</strong>
              <small>{discipline}</small>
              <small>{location}</small>
            </span>
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}
