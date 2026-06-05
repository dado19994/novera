import type { HomeStats as HomeStatsType } from "@/types/api";
import styles from "./homeStats.module.css";

interface HomeStatsProps {
  stats: HomeStatsType;
}

const labels: Record<keyof HomeStatsType, string> = {
  artists_active: "Active artists",
  live_rooms: "Live rooms",
  open_calls: "Open calls",
  spaces_active: "Active spaces",
};

export function HomeStats({ stats }: HomeStatsProps) {
  return (
    <dl className={styles.statsStrip} aria-label="Novera city stats">
      {Object.entries(stats).map(([key, value]) => (
        <div className={styles.statItem} key={key}>
          <dt className={styles.statLabel}>
            {labels[key as keyof HomeStatsType]}
          </dt>
          <dd className={styles.statValue}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
