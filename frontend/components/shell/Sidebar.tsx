import styles from "./sidebar.module.css";

const navItems = [
  { label: "Home", glyph: "H", tone: "home" },
  { label: "Explore", glyph: "Ex", tone: "explore" },
  { label: "Artists", glyph: "Ar", tone: "artists" },
  { label: "Events", glyph: "Ev", tone: "events" },
  { label: "Creative Map", glyph: "Cm", tone: "venues" },
  { label: "Live Rooms", glyph: "Lr", tone: "rooms" },
  { label: "Spaces", glyph: "Sp", tone: "venues" },
  { label: "Collectives", glyph: "Co", tone: "collectives" },
  { label: "Open Calls", glyph: "Oc", tone: "events" },
  { label: "AI Match", glyph: "Ai", tone: "match" },
  { label: "Activity", glyph: "Ac", tone: "activity" },
];

export function Sidebar() {
  return (
    <aside className={styles.sidebar} aria-label="Primary navigation">
      <div className={styles.brand}>
        <span className={styles.brandMark} aria-hidden="true">
          N
        </span>
        <div>
          <p className={styles.brandName}>Novera</p>
          <p className={styles.brandMeta}>Creative Map</p>
        </div>
      </div>

      <p className={styles.navLabel}>Workspace</p>
      <nav className={styles.nav}>
        {navItems.map((item) => {
          const isActive = item.label === "Home";
          const toneClass = styles[item.tone as keyof typeof styles] ?? "";

          return (
            <a
              key={item.label}
              className={[
                styles.navItem,
                toneClass,
                isActive ? styles.active : "",
              ]
                .filter(Boolean)
                .join(" ")}
              href={isActive ? "/" : "#"}
              aria-current={isActive ? "page" : undefined}
            >
              <span className={styles.navGlyph} aria-hidden="true">
                {item.glyph}
              </span>
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      <div className={styles.profileCard}>
        <div>
          <p className={styles.profileName}>Luca Moretti</p>
          <p className={styles.profileRole}>Creator / Visionary</p>
        </div>
        <div className={styles.rank}>
          <span>Creative Rank</span>
          <strong>72%</strong>
        </div>
        <div className={styles.rankBar} aria-hidden="true">
          <span />
        </div>
      </div>
    </aside>
  );
}
