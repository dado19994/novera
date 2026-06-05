import type { HomePayload } from "@/types/api";
import { ActivityRail } from "./ActivityRail";
import { CollectiveStory } from "./CollectiveStory";
import { CreativeMapPanel } from "./CreativeMapPanel";
import { FeaturedArtists } from "./FeaturedArtists";
import { HeroPanel } from "./HeroPanel";
import { UpcomingEvents } from "./UpcomingEvents";
import styles from "./homePage.module.css";

interface HomePageProps {
  data: HomePayload;
}

export function HomePage({ data }: HomePageProps) {
  return (
    <div
      className={styles.page}
      data-api-events={data.featured_events.length}
      data-api-activities={data.activities.length}
    >
      <section className={styles.topBand} aria-label="Novera creative overview">
        <HeroPanel />
        <CreativeMapPanel cityName="Rome" />
      </section>

      <section className={styles.lowerGrid} aria-label="Novera dashboard">
        <FeaturedArtists />
        <CollectiveStory />
        <UpcomingEvents />
        <ActivityRail />
      </section>
    </div>
  );
}
