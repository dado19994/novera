import { Activity, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import type { AiMatchSummary } from "@/types/api";
import { MatchedSignals } from "./MatchedSignals";
import styles from "./heroPanel.module.css";

const trendTags = [
  "Live rooms",
  "Open calls",
  "Sound art",
  "Visual culture",
  "Night cinema",
  "+4",
];

const headlineLines = ["CULTURE", "MOVES", "THROUGH US"];

interface HeroPanelProps {
  matches?: AiMatchSummary[] | null;
}

export function HeroPanel({ matches }: HeroPanelProps) {
  return (
    <article className={styles.hero}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>THE CREATIVE NETWORK</p>
        <h1 className={styles.headline}>
          {headlineLines.map((line, index) => (
            <span className={styles.lineMask} key={line}>
              <span>
                {line}
                {index === headlineLines.length - 1 ? (
                  <span className={styles.dot}>.</span>
                ) : null}
              </span>
            </span>
          ))}
        </h1>
        <p className={styles.description}>
          Novera connects artists, collectives, spaces and events into one
          living cultural map. Discover what moves now and create what comes
          next.
        </p>

        <div className={styles.actions}>
          <Button href="#map">
            EXPLORE THE MAP <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button href="#signals" variant="text">
            START A SIGNAL <Activity size={16} aria-hidden="true" />
          </Button>
        </div>

        <MatchedSignals matches={matches} />

        <div className={styles.trending}>
          <span>TRENDING NOW</span>
          {trendTags.map((tag) => (
            <span className={styles.chipReveal} key={tag}>
              <Tag tone={tag === "+4" ? "violet" : "magenta"}>{tag}</Tag>
            </span>
          ))}
        </div>
      </div>

      <div className={styles.portrait} aria-hidden="true">
        <Image
          src="/images/reference/benjamin-wedemeyer-KzCFxg52zFk-unsplash.jpg"
          alt=""
          fill
          priority
          sizes="44vw"
        />
      </div>
    </article>
  );
}
