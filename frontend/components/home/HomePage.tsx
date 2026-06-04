import type { HomePayload } from "@/types/api";
import { ActivityFeed } from "./ActivityFeed";
import { FeaturedEvents } from "./FeaturedEvents";
import { HomeHero } from "./HomeHero";
import { HomeSection } from "./HomeSection";
import { HomeStats } from "./HomeStats";
import { LiveRooms } from "./LiveRooms";
import { OpenCalls } from "./OpenCalls";
import styles from "./homePage.module.css";

interface HomePageProps {
  data: HomePayload;
}

export function HomePage({ data }: HomePageProps) {
  return (
    <div className={styles.home}>
      <HomeHero city={data.city} />

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
