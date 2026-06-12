# Novera — Final Homepage & Visual Direction

Companion to the FigJam board (https://www.figma.com/board/CB2GkSLygCOU3RrKvCcmbN).
Section 1 (Visual North Star, four screenshots + match/gap notes) is already on the board.
Sections 2–7 below are the remaining board content, paste-ready.

## 2 · Desktop Structure

1. Sidebar — nav (Discover active, Artists, Collectives, Events, Venues, Map, Rooms, Editorial, Messages, Saved), Novera Pro card, Teams card
2. Topbar — search, Rome selector, alerts, profile
3. Hero — 4-line headline (CULTURE / MOVES / THROUGH / US.), CTAs, AI Match pill
4. Creative Map — Centro starburst, district labels, right-side tooltip, zoom controls
5. Stories & Signals row — orbs, LIVE chip, circular view-all chevron
6. Lower Dashboard — 12-column grid:
   - Featured Artists (span 3)
   - Collective Signal / Audio (span 4)
   - Tonight / Upcoming (span 5)
   - Live Activity (span 6)
   - Signals Near You (span 6)

## 3 · Mobile Structure

1. Topbar — logo, Rome pill, search, alerts, menu
2. Hero — 4-line headline, CTA stack, AI Match pill
3. Stories & Signals — edge-to-edge scroll, 20px insets
4. Map Preview card — rounded, bordered, district overlay card
5. Live Now / Audio card — thumbnail, LIVE badge, waveform, listeners, Open Call
6. Featured Artists
7. Tonight / Upcoming
8. Open Calls
9. Live Activity
10. Signals Near You
11. Bottom Nav — Discover active

## 4 · UI/UX Rules

**Eye path (desktop):** headline → Explore CTA → Centro map glow → stories → audio/dashboard.
**Eye path (mobile):** logo/city → headline → CTA → stories → map preview → live now → nav.

- Visual hierarchy: one accent-bordered panel per band (Collective Signal carries the strongest border-top).
- Spacing: mobile sections on a 20px gutter, 28px between sections; desktop panel gutter 18px.
- CTA tiers: solid slanted magenta (primary) → glass slanted w/ glyph chip (secondary) → outline pills (Open Call, Explore Nearby, View All Activity) → text+arrow links.
- Desktop dashboard grid: 12 cols, spans 3/4/5 + 6/6; at 1024–1180px spans 6/6/6/6 + 12; mobile = flex column with explicit order.
- CTA row: `flex-wrap` + `flex: 0 0 auto` on both buttons — clipping structurally impossible; pair fits one row ≥ ~1560px viewports, stacks below.
- Mobile section order: live now → artists → tonight → open calls → activity → nearby (set in homePage.module.css, not DOM order).

**Never break:**
- 4-line hero headline with magenta period
- AI Match pill below CTAs
- Mobile CTA stack (no overlap, `clip-path: none` on mobile secondary)
- Stories never crop (scroll, never shrink)
- Bottom nav clearance (main 84px + lowerGrid 34px padding)
- Single source of grid truth: band slots + dashboard spans live in homePage.module.css only

## 5 · Animation Direction

- CTA hover: lift −1px + magenta bloom, 160ms ease
- Map pulse: Centro radial glow; zoom transform-origin 48% 38%, scale step 1.4%
- Story active: ring glow pulse 2.8s; LIVE chip with dark keyline
- Waveform: per-bar scaleY 1.8s, 70ms stagger
- Live activity: first item dot pulse 2.2s
- Radar / nearby: conic sweep 3.6s linear + expanding rings 2.4s (1.2s offset) + ambient card glow 3.4s
- Listener dot: opacity pulse 2.2s
- Section reveal (future): stagger fade-up on scroll
- All animations gated by the global `prefers-reduced-motion` rule in globals.css

## 6 · Technical Notes

**Active components** (`frontend/components/`): home/HomePage, HeroPanel, MatchedSignals, CreativeMapPanel (+creativeMapData), SceneStories, FeaturedArtists, CollectiveStory, UpcomingEvents, ActivityRail, SignalsNearYou, OpenCallsRail (mobile-only); layout/AppFrame, Sidebar, Topbar, MobileNavigation; ui/Button, Tag.

**Active CSS modules:** one per component + app/globals.css (tokens, reset; Tailwind v4 imported but zero utilities used).

**Conflicts found & fixed (history):**
- Stale ≤1280 two-column dashboard rule orphaning the 5th panel
- Leftover ≥1441 five-equal-columns regime (the "cramped row" users saw at wide widths)
- FeaturedArtists fixed 84px avatars overflowing shrunken grid tracks
- CollectiveStory metaRow not wrap-safe (listeners clipped)
- CTA secondary clipped by clip-path under flex-shrink (fixed via wrap + no-shrink)
- nextjs-portal dev-overlay suppression hiding mobile errors (removed)
- Rigid 8-column stories grid cropping orbs ≤ ~1350px (now scrollable)
- lineMask overflow mask risking headline glyph clipping (removed)

**Dead code to remove (cleanup checklist):**
- [ ] `.trending` block + `trendTags` + unused `Tag` import in HeroPanel
- [ ] `styles.chipReveal` reference (class doesn't exist)
- [ ] `data-api-events` / `data-api-activities` debug attributes in HomePage
- [ ] `novera.code-workspace` misplaced in components/home/
- [ ] Decide Tailwind: unused — either adopt or drop the import

**API mismatch:** frontend fetches `http://127.0.0.1:8000/api` (.env.local); Laravel runs on 8001–8003 via three stacked `php artisan serve` processes. Nothing listens on 8000 → homepage always renders fallback data. Fix: kill stale processes, run one backend on 8000 (or point .env.local at 8001).

## 7 · Next Steps

1. Commit the current homepage baseline (working tree holds several passes of changes)
2. Technical cleanup (checklist above + API port fix)
3. Creative Map page — "Explore the Map" destination; visual language already established by the hero map panel
4. Internal pages (Artists, Events, Rooms, district views)
