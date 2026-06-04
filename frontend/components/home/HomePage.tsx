import type { HomePayload } from "@/types/api";
import { ActivityFeed } from "./ActivityFeed";
import { FeaturedEvents } from "./FeaturedEvents";
import { HomeSection } from "./HomeSection";
import { HomeStats } from "./HomeStats";
import { LiveRooms } from "./LiveRooms";
import { OpenCalls } from "./OpenCalls";
import styles from "./home.module.css";

interface HomePageProps {
  data: HomePayload;
}

export function HomePage({ data }: HomePageProps) {
  return (
    <div className={styles.home}>
      <header className={styles.hero}>
        <p className={styles.kicker}>API data check</p>
        <h1 className={styles.title}>{data.city.name}</h1>
        <p className={styles.summary}>
          Rendering live data from the Laravel home endpoint.
        </p>
      </header>

      <HomeSection title="Stats">
        <HomeStats stats={data.stats} />
      </HomeSection>

      <HomeSection title="Featured Events">
        <FeaturedEvents events={data.featured_events} />
      </HomeSection>

      <HomeSection title="Live Rooms">
        <LiveRooms rooms={data.live_rooms} />
      </HomeSection>

      <HomeSection title="Open Calls">
        <OpenCalls openCalls={data.open_calls} />
      </HomeSection>

      <HomeSection title="Activities">
        <ActivityFeed activities={data.activities} />
      </HomeSection>
    </div>
  );
}
