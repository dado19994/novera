import { ArrowRight, Sparkles } from "lucide-react";
import type { CSSProperties } from "react";
import type { AiMatchSummary, BasicDistrict } from "@/types/api";
import styles from "./matchedSignals.module.css";

interface MatchedSignal {
  id: string;
  score: number;
  title: string;
  type: string;
  district: string;
  reason: string;
  status?: string;
}

interface MatchedSignalsProps {
  matches?: AiMatchSummary[] | null;
}

const fallbackMatches: MatchedSignal[] = [
  {
    id: "fallback-light-artist",
    score: 92,
    title: "Light artist for live score",
    type: "Open call",
    district: "San Lorenzo",
    reason: "Your visual work aligns with a projection-led live room request.",
    status: "new",
  },
  {
    id: "fallback-ruins-frequency",
    score: 88,
    title: "Ruins in Frequency",
    type: "Event",
    district: "Ostiense",
    reason: "A spatial audio session matching your sound and moving-image interests.",
    status: "tonight",
  },
  {
    id: "fallback-alba-forma",
    score: 84,
    title: "Alba Forma",
    type: "Artist",
    district: "Pigneto",
    reason: "Shares your interest in stage-responsive sensory work.",
    status: "aligned",
  },
  {
    id: "fallback-forma-cinema",
    score: 76,
    title: "Forma Cinema",
    type: "Space",
    district: "Testaccio",
    reason: "A flexible venue for immersive visuals, screenings and live sets.",
    status: "nearby",
  },
];

function clampScore(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function getDistrictName(district: AiMatchSummary["district"], fallbackLocation?: string | null) {
  if (typeof district === "string" && district.trim()) {
    return district;
  }

  if (district && typeof district === "object") {
    return (district as BasicDistrict).name ?? fallbackLocation ?? "Rome";
  }

  return fallbackLocation || "Rome";
}

function formatLabel(value: string) {
  return value
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function normalizeMatch(match: AiMatchSummary, index: number): MatchedSignal {
  const rawScore = match.score ?? match.match_score ?? 84;
  const type = match.type || match.category || "Signal";

  return {
    id: String(match.id ?? `${match.title ?? match.name ?? "signal"}-${index}`),
    score: clampScore(Number(rawScore) || 84),
    title: match.title || match.name || "Creative signal",
    type: formatLabel(type),
    district: getDistrictName(match.district, match.location),
    reason: match.reason || match.description || "A creative signal aligned with your current map.",
    status: match.status || match.cta || undefined,
  };
}

function getTone(type: string) {
  const value = type.toLowerCase();

  if (value.includes("artist")) {
    return styles.toneCyan;
  }

  if (value.includes("event")) {
    return styles.toneAmber;
  }

  if (value.includes("space")) {
    return styles.toneViolet;
  }

  if (value.includes("call")) {
    return styles.toneMagenta;
  }

  return styles.toneRose;
}

export function MatchedSignals({ matches }: MatchedSignalsProps) {
  const normalizedMatches = matches?.length
    ? matches.slice(0, 4).map(normalizeMatch)
    : fallbackMatches;
  const visibleMatches = normalizedMatches.slice(0, 3);

  return (
    <section className={styles.section} id="signals" aria-labelledby="matched-signals-title">
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <span className={styles.spark} aria-hidden="true">
            <Sparkles size={14} />
          </span>
          <div>
            <h2 id="matched-signals-title">AI MATCH</h2>
            <p>{visibleMatches.length} curated matches for you</p>
          </div>
        </div>
        <button className={styles.viewAll} type="button">
          View all matches <ArrowRight size={15} aria-hidden="true" />
        </button>
      </div>

      <div className={styles.signalGrid}>
        {visibleMatches.map((match, index) => (
          <button
            aria-label={`Open matched signal: ${match.title}, ${match.score}% match`}
            className={`${styles.card} ${getTone(match.type)}`}
            key={match.id}
            style={{ "--signal-index": index } as CSSProperties}
            type="button"
          >
            <span className={styles.orbit} aria-hidden="true" />
            <span className={styles.score} aria-label={`${match.score}% match`}>
              {match.score}
              <small>%</small>
            </span>
            <span className={styles.content}>
              <span className={styles.meta}>
                <b>{match.type}</b>
                <i>{match.district}</i>
              </span>
              <strong>{match.title}</strong>
              <span className={styles.reason}>{match.reason}</span>
              <span className={styles.cta}>
                {match.status ? <em>{match.status}</em> : null}
                View match <ArrowRight size={15} aria-hidden="true" />
              </span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
