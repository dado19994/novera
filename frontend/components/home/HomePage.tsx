import type { HomePayload } from "@/types/api";
import { ActivityRail } from "./ActivityRail";
import { CollectiveStory } from "./CollectiveStory";
import { CreativeMapPanel } from "./CreativeMapPanel";
import { FeaturedArtists } from "./FeaturedArtists";
import { HeroPanel } from "./HeroPanel";
import { MatchedSignals } from "./MatchedSignals";
import { SceneStories } from "./SceneStories";
import { UpcomingEvents } from "./UpcomingEvents";
import styles from "./homePage.module.css";

interface HomePageProps {
  data: HomePayload | null;
}

export function HomePage({ data }: HomePageProps) {
  const featuredEvents = data?.featured_events ?? [];
  const activities = data?.activities ?? [];
  const featuredArtists = data?.featured_artists ?? data?.artists ?? [];
  const aiMatches = data?.ai_matches ?? [];

  return (
    <div
      className={styles.page}
      data-api-events={featuredEvents.length}
      data-api-activities={activities.length}
    >
      <section className={styles.topBand} aria-label="Novera creative overview">
        <HeroPanel />
        <CreativeMapPanel cityName="Rome" />
      </section>

      <SceneStories />

      <MatchedSignals matches={aiMatches} />

      <section className={styles.lowerGrid} aria-label="Novera dashboard">
        <FeaturedArtists artists={featuredArtists} />
        <CollectiveStory />
        <UpcomingEvents events={featuredEvents} />
        <ActivityRail activities={activities} />
      </section>
    </div>
  );
}
