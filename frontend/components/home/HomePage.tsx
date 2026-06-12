import type { HomePayload } from "@/types/api";
import { ActivityRail } from "./ActivityRail";
import { CollectiveStory } from "./CollectiveStory";
import { CreativeMapPanel } from "./CreativeMapPanel";
import { FeaturedArtists } from "./FeaturedArtists";
import { HeroPanel } from "./HeroPanel";
import { SceneStories } from "./SceneStories";
import { SignalsNearYou } from "./SignalsNearYou";
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
      <section className={styles.topBand} id="map" aria-label="Novera creative overview">
        <HeroPanel matches={aiMatches} />
        <CreativeMapPanel cityName="Rome" />
        <SceneStories />
      </section>

      <section className={styles.lowerGrid} id="dashboard" aria-label="Novera dashboard">
        <FeaturedArtists artists={featuredArtists} />
        <CollectiveStory />
        <UpcomingEvents events={featuredEvents} />
        <ActivityRail activities={activities} />
        <SignalsNearYou />
      </section>
    </div>
  );
}
