import type { BasicCity, BasicDistrict } from "@/types/api";
import styles from "./homeMapPreview.module.css";

interface HomeMapPreviewProps {
  city: BasicCity;
  districts: BasicDistrict[];
}

const fallbackPoints: Record<string, { x: number; y: number }> = {
  "san-lorenzo": { x: 32, y: 42 },
  ostiense: { x: 56, y: 56 },
  pigneto: { x: 78, y: 34 },
  trastevere: { x: 42, y: 68 },
  testaccio: { x: 72, y: 62 },
  monti: { x: 48, y: 32 },
};

const labelOffsets: Record<string, { x: number; y: number }> = {
  "san-lorenzo": { x: -12, y: -12 },
  ostiense: { x: 8, y: 9 },
  pigneto: { x: -24, y: -14 },
  trastevere: { x: -18, y: 12 },
  testaccio: { x: 7, y: -18 },
  monti: { x: 8, y: -16 },
};

function getPoint(district: BasicDistrict) {
  const fallback = fallbackPoints[district.slug] ?? { x: 50, y: 50 };

  return {
    x: district.map_x ?? fallback.x,
    y: district.map_y ?? fallback.y,
  };
}

function getToneClass(tone?: string | null) {
  if (tone === "audio") {
    return styles.audio;
  }

  if (tone === "events") {
    return styles.events;
  }

  if (tone === "spaces") {
    return styles.spaces;
  }

  if (tone === "collectives") {
    return styles.collectives;
  }

  return styles.artists;
}

export function HomeMapPreview({ city, districts }: HomeMapPreviewProps) {
  const visibleDistricts = districts.slice(0, 6);
  const selected =
    visibleDistricts.find((district) => district.slug === "ostiense") ??
    visibleDistricts[0];

  return (
    <section className={styles.panel} aria-label={`${city.name} creative map`}>
      <div className={styles.header}>
        <div>
          <p>Creative Map</p>
          <h2>{city.name} live ecosystem</h2>
        </div>
        <a href="#">View full map</a>
      </div>

      <div className={styles.mapStage}>
        <svg
          className={styles.topology}
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <path d="M5 72 C22 48 34 54 49 30 S76 22 95 11" />
          <path d="M9 28 C24 36 30 22 45 42 S65 68 92 62" />
          <path d="M14 84 C30 70 52 77 62 53 S75 34 92 38" />
          <path
            className={styles.routeRose}
            d="M32 42 C43 34 47 36 56 56 C62 68 69 65 72 62"
          />
          <path
            className={styles.routeViolet}
            d="M42 68 C51 52 62 40 78 34"
          />
          <path
            className={styles.routeAmber}
            d="M48 32 C50 43 53 48 56 56"
          />
        </svg>

        {visibleDistricts.map((district) => {
          const point = getPoint(district);
          const offset = labelOffsets[district.slug] ?? { x: 8, y: -14 };

          return (
            <div
              className={[styles.nodeWrap, getToneClass(district.tone)].join(
                " ",
              )}
              key={district.id}
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
              }}
            >
              <span className={styles.node} />
              <span
                className={styles.label}
                style={{
                  transform: `translate(${offset.x}px, ${offset.y}px)`,
                }}
              >
                {district.name}
              </span>
            </div>
          );
        })}

        {selected ? (
          <div className={styles.signalCard}>
            <p>Selected signal</p>
            <strong>{selected.name}</strong>
            <span>{selected.tone ?? "creative"} activity rising</span>
          </div>
        ) : null}
      </div>

      <div className={styles.legend} aria-label="Map legend">
        <span className={styles.legendArtists}>Artists</span>
        <span className={styles.legendEvents}>Events</span>
        <span className={styles.legendAudio}>Live/audio</span>
        <span className={styles.legendSpaces}>Spaces</span>
      </div>
    </section>
  );
}
