import { ArrowRight, Sparkles } from "lucide-react";
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

export function MatchedSignals({ matches }: MatchedSignalsProps) {
  const normalizedMatches = matches?.length
    ? matches.slice(0, 4).map(normalizeMatch)
    : fallbackMatches;
  const visibleMatches = normalizedMatches.slice(0, 3);
  const topMatch = visibleMatches[0];

  return (
    <a
      className={styles.pill}
      href="#map"
      id="signals"
      aria-label={`AI Match: ${visibleMatches.length} curated matches for you${topMatch ? `. Top match: ${topMatch.title}, ${topMatch.score}% match in ${topMatch.district}` : ""}`}
    >
      <span className={styles.spark} aria-hidden="true">
        <Sparkles size={14} />
      </span>
      <span className={styles.label}>AI MATCH</span>
      <span className={styles.summary}>{visibleMatches.length} curated matches for you</span>
      <ArrowRight className={styles.arrow} size={15} aria-hidden="true" />
    </a>
  );
}
