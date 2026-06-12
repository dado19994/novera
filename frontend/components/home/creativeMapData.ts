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
    x: 48,
    y: 38,
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
    popover: { x: 48, y: 44, offsetX: "-50%", offsetY: "20px" },
  },
  {
    id: "san-lorenzo",
    name: "San Lorenzo",
    x: 36,
    y: 9,
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
    popover: { x: 36, y: 13, offsetX: "-50%", offsetY: "22px" },
  },
  {
    id: "pigneto",
    name: "Pigneto",
    x: 68,
    y: 20,
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
    popover: { x: 64, y: 26, offsetX: "-100%", offsetY: "12px" },
  },
  {
    id: "ostiense",
    name: "Ostiense",
    x: 12,
    y: 32,
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
    popover: { x: 58, y: 26, offsetX: "0%", offsetY: "0%" },
  },
  {
    id: "trastevere",
    name: "Trastevere",
    x: 24,
    y: 58,
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
    popover: { x: 26, y: 54, offsetX: "14px", offsetY: "-100%" },
  },
  {
    id: "garbatella",
    name: "Garbatella",
    x: 52,
    y: 70,
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
    popover: { x: 52, y: 66, offsetX: "-50%", offsetY: "-115%" },
  },
];

export const mapSignals: MapSignal[] = [
  {
    id: "signal-centro-events",
    districtId: "centro",
    category: "events",
    x: 47,
    y: 40,
    title: "Night cinema crossing",
    status: "tonight",
    size: "large",
  },
  {
    id: "signal-san-lorenzo-spaces",
    districtId: "san-lorenzo",
    category: "spaces",
    x: 41,
    y: 21,
    title: "Forma rehearsal rooms",
    status: "active",
  },
  {
    id: "signal-pigneto-collectives",
    districtId: "pigneto",
    category: "collectives",
    x: 62,
    y: 24,
    title: "Afterlight moving-image circle",
    status: "active",
  },
  {
    id: "signal-garbatella-events",
    districtId: "garbatella",
    category: "events",
    x: 50,
    y: 60,
    title: "Garbatella session",
    status: "live",
  },
  {
    id: "signal-trastevere-artists",
    districtId: "trastevere",
    category: "artists",
    x: 29,
    y: 50,
    title: "Cross-discipline screenings",
    status: "nearby",
  },
  {
    id: "signal-ostiense-artists",
    districtId: "ostiense",
    category: "artists",
    x: 17,
    y: 33,
    title: "Field recordings archive",
    status: "new",
  },
  {
    id: "signal-centro-collectives",
    districtId: "centro",
    category: "collectives",
    x: 51,
    y: 33,
    title: "Late-night cultural crossing",
    status: "active",
    size: "medium",
  },
  {
    id: "signal-san-lorenzo-events",
    districtId: "san-lorenzo",
    category: "events",
    x: 45,
    y: 14,
    title: "Studio pulse session",
    status: "tonight",
  },
];

export const mapRoutes: MapRoute[] = [
  {
    id: "route-centro-events",
    districtId: "centro",
    category: "events",
    path: "M316 222 C298 188 314 152 350 138 C386 124 424 136 446 164",
  },
  {
    id: "route-san-lorenzo-spaces",
    districtId: "san-lorenzo",
    category: "spaces",
    path: "M336 186 C316 148 296 116 268 90 C254 77 238 68 218 60",
  },
  {
    id: "route-pigneto-collectives",
    districtId: "pigneto",
    category: "collectives",
    path: "M360 190 C404 166 446 142 488 122 C518 108 552 100 586 104",
  },
  {
    id: "route-ostiense-artists",
    districtId: "ostiense",
    category: "artists",
    path: "M326 202 C268 196 204 186 150 178 C116 173 84 172 50 176",
  },
  {
    id: "route-trastevere-artists",
    districtId: "trastevere",
    category: "artists",
    path: "M328 212 C282 230 238 252 198 274 C182 283 166 294 142 310",
  },
  {
    id: "route-garbatella-events",
    districtId: "garbatella",
    category: "events",
    path: "M344 214 C350 250 358 286 366 318 C372 342 380 364 392 388",
  },
  {
    id: "route-centro-collectives",
    districtId: "centro",
    category: "collectives",
    path: "M310 212 C290 238 284 270 298 298 C308 318 328 332 354 336",
  },
  {
    id: "route-pigneto-spaces",
    districtId: "pigneto",
    category: "spaces",
    path: "M366 198 C416 184 462 158 498 132 C526 112 558 102 590 108",
  },
  {
    id: "route-san-lorenzo-events",
    districtId: "san-lorenzo",
    category: "events",
    path: "M348 182 C344 136 320 100 284 80 C264 69 240 64 214 68",
  },
  {
    id: "route-centro-artists",
    districtId: "centro",
    category: "artists",
    path: "M352 214 C386 238 404 270 398 304 C394 328 378 348 354 360",
  },
  {
    id: "route-centro-spaces",
    districtId: "centro",
    category: "spaces",
    path: "M324 184 C300 158 296 126 314 100 C326 82 346 70 372 66",
  },
  {
    id: "route-san-lorenzo-collectives",
    districtId: "san-lorenzo",
    category: "collectives",
    path: "M342 178 C330 142 312 112 286 92 C270 80 250 74 230 76",
  },
  {
    id: "route-pigneto-events",
    districtId: "pigneto",
    category: "events",
    path: "M364 206 C412 200 458 188 500 168 C530 154 558 136 578 114",
  },
  {
    id: "route-ostiense-spaces",
    districtId: "ostiense",
    category: "spaces",
    path: "M324 192 C272 180 216 170 164 164 C130 160 96 160 66 166",
  },
  {
    id: "route-ostiense-collectives",
    districtId: "ostiense",
    category: "collectives",
    path: "M330 210 C282 214 230 212 184 204 C150 198 116 192 84 190",
  },
  {
    id: "route-trastevere-events",
    districtId: "trastevere",
    category: "events",
    path: "M334 218 C296 244 260 274 230 308 C214 326 200 344 188 362",
  },
  {
    id: "route-garbatella-collectives",
    districtId: "garbatella",
    category: "collectives",
    path: "M352 220 C372 252 386 286 392 320 C396 344 396 368 390 390",
  },
  {
    id: "route-centro-collectives-orbit",
    districtId: "centro",
    category: "collectives",
    path: "M320 178 C294 156 278 128 274 96 C272 80 276 64 286 50",
  },
  {
    id: "route-centro-artists-orbit",
    districtId: "centro",
    category: "artists",
    path: "M362 212 C396 222 426 240 446 266 C458 282 464 300 462 320",
  },
  {
    id: "route-san-lorenzo-spaces-fine",
    districtId: "san-lorenzo",
    category: "spaces",
    path: "M344 174 C338 140 326 110 304 86 C292 73 276 64 258 58",
  },
  {
    id: "route-pigneto-artists",
    districtId: "pigneto",
    category: "artists",
    path: "M366 212 C414 212 460 204 502 186 C534 172 562 152 584 128",
  },
  {
    id: "route-ostiense-events",
    districtId: "ostiense",
    category: "events",
    path: "M326 206 C276 206 222 200 172 190 C140 184 108 180 76 180",
  },
  {
    id: "route-trastevere-collectives",
    districtId: "trastevere",
    category: "collectives",
    path: "M332 222 C290 240 252 264 220 292 C202 308 186 326 174 344",
  },
  {
    id: "route-garbatella-spaces",
    districtId: "garbatella",
    category: "spaces",
    path: "M348 222 C362 256 372 292 376 326 C378 348 376 372 368 394",
  },
];
