export type MapCategory = "spaces" | "artists" | "collectives" | "events";

export interface MapCategoryMeta {
  id: MapCategory;
  label: string;
}

export interface DistrictStats {
  spaces: number;
  rooms: number;
  calls: number;
  artists: number;
}

export interface DistrictSignal {
  title: string;
  type: string;
  status: string;
}

export interface DistrictPopover {
  x: number;
  y: number;
  offsetX: string;
  offsetY: string;
}

export interface MapDistrict {
  id: string;
  name: string;
  x: number;
  y: number;
  tone: "hot" | "magenta" | "violet" | "amber" | "cyan";
  description: string;
  pulse: string;
  stats: DistrictStats;
  categories: MapCategory[];
  featuredSignal: DistrictSignal;
  popover: DistrictPopover;
}

export interface MapSignal {
  id: string;
  districtId: string;
  category: MapCategory;
  x: number;
  y: number;
  title: string;
  status: string;
  size?: "large" | "medium";
}

export interface MapRoute {
  id: string;
  districtId: string;
  category: MapCategory;
  path: string;
}

export const mapCategories: MapCategoryMeta[] = [
  { id: "spaces", label: "Spaces" },
  { id: "artists", label: "Artists" },
  { id: "collectives", label: "Collectives" },
  { id: "events", label: "Events" },
];

export const mapDistricts: MapDistrict[] = [
  {
    id: "centro",
    name: "Centro",
    x: 57,
    y: 48,
    tone: "hot",
    description: "Gallery openings, listening bars and late-night cultural crossings.",
    pulse: "High cultural density",
    stats: { spaces: 12, rooms: 3, calls: 5, artists: 48 },
    categories: ["spaces", "artists", "collectives", "events"],
    featuredSignal: {
      title: "Night cinema crossing",
      type: "Event",
      status: "tonight",
    },
    popover: { x: 68, y: 59, offsetX: "-50%", offsetY: "-112%" },
  },
  {
    id: "san-lorenzo",
    name: "San Lorenzo",
    x: 70,
    y: 14,
    tone: "violet",
    description: "Studios, collectives and live rooms moving between sound and visual culture.",
    pulse: "Audio-visual scene rising",
    stats: { spaces: 8, rooms: 4, calls: 3, artists: 36 },
    categories: ["spaces", "artists", "collectives"],
    featuredSignal: {
      title: "Light artist for live score",
      type: "Open call",
      status: "new",
    },
    popover: { x: 72, y: 25, offsetX: "-50%", offsetY: "18px" },
  },
  {
    id: "pigneto",
    name: "Pigneto",
    x: 83,
    y: 21,
    tone: "magenta",
    description: "Independent venues, night cinema and experimental rooms.",
    pulse: "Night culture active",
    stats: { spaces: 7, rooms: 2, calls: 4, artists: 31 },
    categories: ["spaces", "artists", "events"],
    featuredSignal: {
      title: "Afterlight Studies",
      type: "Event",
      status: "scheduled",
    },
    popover: { x: 82, y: 36, offsetX: "-100%", offsetY: "8px" },
  },
  {
    id: "ostiense",
    name: "Ostiense",
    x: 36,
    y: 54,
    tone: "violet",
    description: "Industrial spaces, installations, sound art and moving-image labs.",
    pulse: "Spatial media cluster",
    stats: { spaces: 9, rooms: 2, calls: 6, artists: 28 },
    categories: ["spaces", "artists", "events"],
    featuredSignal: {
      title: "Field recordings archive",
      type: "Open call",
      status: "new",
    },
    popover: { x: 39, y: 58, offsetX: "16px", offsetY: "-50%" },
  },
  {
    id: "trastevere",
    name: "Trastevere",
    x: 30,
    y: 86,
    tone: "cyan",
    description: "Intimate rooms, screenings and cross-discipline cultural signals.",
    pulse: "Soft signal flow",
    stats: { spaces: 6, rooms: 3, calls: 2, artists: 24 },
    categories: ["artists", "collectives", "events"],
    featuredSignal: {
      title: "Riva Ensemble joined the scene",
      type: "Collective",
      status: "active",
    },
    popover: { x: 35, y: 76, offsetX: "16px", offsetY: "-100%" },
  },
  {
    id: "garbatella",
    name: "Garbatella",
    x: 61,
    y: 75,
    tone: "magenta",
    description: "Sessions, visual collectives and late cultural signals.",
    pulse: "Session cluster active",
    stats: { spaces: 5, rooms: 2, calls: 3, artists: 22 },
    categories: ["spaces", "collectives", "events"],
    featuredSignal: {
      title: "Garbatella session",
      type: "Live room",
      status: "live",
    },
    popover: { x: 66, y: 68, offsetX: "-100%", offsetY: "-100%" },
  },
];

export const mapSignals: MapSignal[] = [
  {
    id: "signal-centro-events",
    districtId: "centro",
    category: "events",
    x: 56,
    y: 50,
    title: "Night cinema crossing",
    status: "tonight",
    size: "large",
  },
  {
    id: "signal-san-lorenzo-spaces",
    districtId: "san-lorenzo",
    category: "spaces",
    x: 37,
    y: 34,
    title: "Forma rehearsal rooms",
    status: "active",
  },
  {
    id: "signal-pigneto-collectives",
    districtId: "pigneto",
    category: "collectives",
    x: 82,
    y: 33,
    title: "Afterlight moving-image circle",
    status: "active",
  },
  {
    id: "signal-garbatella-events",
    districtId: "garbatella",
    category: "events",
    x: 67,
    y: 77,
    title: "Garbatella session",
    status: "live",
  },
  {
    id: "signal-trastevere-artists",
    districtId: "trastevere",
    category: "artists",
    x: 30,
    y: 86,
    title: "Cross-discipline screenings",
    status: "nearby",
  },
  {
    id: "signal-ostiense-artists",
    districtId: "ostiense",
    category: "artists",
    x: 34,
    y: 54,
    title: "Field recordings archive",
    status: "new",
  },
  {
    id: "signal-centro-collectives",
    districtId: "centro",
    category: "collectives",
    x: 58,
    y: 52,
    title: "Late-night cultural crossing",
    status: "active",
    size: "medium",
  },
  {
    id: "signal-san-lorenzo-events",
    districtId: "san-lorenzo",
    category: "events",
    x: 53,
    y: 38,
    title: "Studio pulse session",
    status: "tonight",
  },
];

export const mapRoutes: MapRoute[] = [
  {
    id: "route-centro-events",
    districtId: "centro",
    category: "events",
    path: "M72 392 C170 266 250 244 344 188 C438 132 530 86 652 62",
  },
  {
    id: "route-san-lorenzo-spaces",
    districtId: "san-lorenzo",
    category: "spaces",
    path: "M110 108 C205 154 315 96 426 148 C548 206 596 310 673 368",
  },
  {
    id: "route-pigneto-collectives",
    districtId: "pigneto",
    category: "collectives",
    path: "M94 456 C210 332 334 378 420 264 C492 170 586 144 650 196",
  },
  {
    id: "route-ostiense-artists",
    districtId: "ostiense",
    category: "artists",
    path: "M248 76 C304 150 292 274 378 350 C450 410 536 384 646 422",
  },
  {
    id: "route-trastevere-artists",
    districtId: "trastevere",
    category: "artists",
    path: "M392 52 C390 148 464 196 466 302 C468 378 430 420 398 468",
  },
  {
    id: "route-garbatella-events",
    districtId: "garbatella",
    category: "events",
    path: "M34 246 C144 218 216 156 314 188 C410 220 500 286 684 288",
  },
  {
    id: "route-centro-collectives",
    districtId: "centro",
    category: "collectives",
    path: "M30 304 L690 108",
  },
  {
    id: "route-pigneto-spaces",
    districtId: "pigneto",
    category: "spaces",
    path: "M144 44 L620 456",
  },
  {
    id: "route-san-lorenzo-events",
    districtId: "san-lorenzo",
    category: "events",
    path: "M196 468 L664 238",
  },
];
