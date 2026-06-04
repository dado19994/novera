import type { BasicCity } from "@/types/api";
import styles from "./homeHero.module.css";

interface HomeHeroProps {
  city: BasicCity;
}

export function HomeHero({ city }: HomeHeroProps) {
  return (
    <header className={styles.hero}>
      <p className={styles.kicker}>API data check</p>
      <h1 className={styles.title}>{city.name}</h1>
      <p className={styles.summary}>
        Rendering live data from the Laravel home endpoint.
      </p>
    </header>
  );
}
