import type { HomePayload } from "@/types/api";
import styles from "./homeHero.module.css";

interface HomeHeroProps {
  data: HomePayload;
}

const cityOptions = ["Rome", "Barcelona", "Milan", "Berlin", "More cities"];
const trendChips = ["Neo Soul", "Audio", "Open calls", "Motion", "Night culture"];

export function HomeHero({ data }: HomeHeroProps) {
  return (
    <header className={styles.hero}>
      <div className={styles.copy}>
        <p className={styles.kicker}>Welcome to Novera / {data.city.name}</p>
        <h1 className={styles.title}>
          <span>Discover.</span>
          <span>Create.</span>
          <span>Collaborate.</span>
          <span className={styles.editorial}>Beyond.</span>
        </h1>
        <p className={styles.summary}>
          A living cultural ecosystem for artists, events, spaces and live
          rooms across {data.city.name}.
        </p>

        <div className={styles.actions} aria-label="Homepage actions">
          <a className={styles.primaryAction} href="#quick-access">
            Explore ecosystem
          </a>
          <a className={styles.secondaryAction} href="#open-calls">
            Start a collaboration
          </a>
        </div>
      </div>

      <div className={styles.cityRail} aria-label="City selector">
        {cityOptions.map((city) => {
          const isActive = city === data.city.name;

          return (
            <button
              key={city}
              className={isActive ? styles.cityActive : styles.city}
              type="button"
              aria-current={isActive ? "true" : undefined}
            >
              {city}
            </button>
          );
        })}
      </div>

      <div className={styles.trends} aria-label="Trending now">
        <span>Trending now</span>
        {trendChips.map((chip) => (
          <a href="#" key={chip}>
            {chip}
          </a>
        ))}
      </div>
    </header>
  );
}
