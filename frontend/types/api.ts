export interface BasicCity {
  id: number;
  name: string;
  slug: string;
  country?: string | null;
  timezone?: string | null;
  ambient_color?: string | null;
  accent_color?: string | null;
}

export interface BasicDistrict {
  id: number;
  name: string;
  slug: string;
  tone?: string | null;
  map_x?: number | null;
  map_y?: number | null;
}

export interface HomeStats {
  artists_active: number;
  live_rooms: number;
  open_calls: number;
  spaces_active: number;
}

export interface EventSummary {
  id: number;
  title: string;
  slug: string;
  type?: string | null;
  status?: string | null;
  starts_at?: string | null;
  district?: BasicDistrict | null;
}

export interface LiveRoomSummary {
  id: number;
  title: string;
  slug: string;
  status?: string | null;
  topic?: string | null;
  listeners_count?: number;
  speakers_count?: number;
  district?: BasicDistrict | null;
}

export interface SpaceSummary {
  id: number;
  name: string;
  slug: string;
  type?: string | null;
  status?: string | null;
  district?: BasicDistrict | null;
}

export interface CollectiveSummary {
  id: number;
  name: string;
  slug: string;
  discipline?: string | null;
  recruiting_status?: string | null;
  district?: BasicDistrict | null;
}

export interface OpenCallSummary {
  id: number;
  title: string;
  slug: string;
  role_needed?: string | null;
  status?: string | null;
  urgency?: string | null;
  deadline_at?: string | null;
  district?: BasicDistrict | null;
}

export interface ActivitySummary {
  id: number;
  type: string;
  title: string;
  description?: string | null;
  tone?: string | null;
  occurred_at?: string | null;
}

export interface AiMatchSummary {
  id: number;
  title: string;
  reason?: string | null;
  score: number;
  category?: string | null;
  status?: string | null;
}

export interface HomePayload {
  city: BasicCity;
  districts: BasicDistrict[];
  stats: HomeStats;
  featured_events: EventSummary[];
  live_rooms: LiveRoomSummary[];
  featured_spaces: SpaceSummary[];
  featured_collectives: CollectiveSummary[];
  open_calls: OpenCallSummary[];
  activities: ActivitySummary[];
  ai_matches: AiMatchSummary[];
}
