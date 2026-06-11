import {
  CalendarDays,
  Compass,
  FilePenLine,
  Heart,
  Mail,
  Map,
  MapPin,
  Radio,
  Sparkles,
  Users,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import type { ComponentType } from "react";
import styles from "./sidebar.module.css";

interface NavItem {
  label: string;
  href: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
  badge?: string;
}

const primaryNav: NavItem[] = [
  { label: "DISCOVER", href: "/", icon: Compass },
  { label: "ARTISTS", href: "#", icon: Sparkles },
  { label: "COLLECTIVES", href: "#", icon: UsersRound },
  { label: "EVENTS", href: "#", icon: CalendarDays },
  { label: "VENUES", href: "#", icon: MapPin },
  { label: "MAP", href: "#", icon: Map },
  { label: "ROOMS", href: "#", icon: Radio },
  { label: "EDITORIAL", href: "#", icon: FilePenLine },
];

const secondaryNav: NavItem[] = [
  { label: "MESSAGES", href: "#", icon: Mail, badge: "6" },
  { label: "SAVED", href: "#", icon: Heart },
];

function renderItem(item: NavItem, isActive = false) {
  const Icon = item.icon;
  const content = (
    <>
      <span className={styles.navIcon}>
        <Icon size={19} strokeWidth={1.9} />
      </span>
      <span>{item.label}</span>
      {item.badge ? <span className={styles.badge}>{item.badge}</span> : null}
    </>
  );

  if (isActive) {
    return (
      <Link
        key={item.label}
        className={`${styles.navItem} ${styles.active}`}
        href={item.href}
        aria-current="page"
      >
        {content}
      </Link>
    );
  }

  return (
    <a key={item.label} className={styles.navItem} href={item.href}>
      {content}
    </a>
  );
}

export function Sidebar() {
  return (
    <aside className={styles.sidebar} aria-label="Primary navigation">
      <Link className={styles.brand} href="/">
        <span className={styles.brandMark}>N</span>
        <span className={styles.wordmark}>NOVERA</span>
      </Link>

      <div className={styles.sidebarNavs}>
        <nav className={styles.nav} aria-label="Main">
          {primaryNav.map((item, index) => renderItem(item, index === 0))}
        </nav>

        <nav className={`${styles.nav} ${styles.secondary}`} aria-label="Hub">
          {secondaryNav.map((item) => renderItem(item))}
        </nav>
      </div>

      <div className={styles.sidebarBottom}>
        <section className={styles.proCard}>
          <span>NOVERA PRO</span>
          <h2>Go further.</h2>
          <p>Unlock advanced tools, insights, and more ways to shape culture.</p>
          <a href="#">UPGRADE NOW</a>
        </section>

        <section className={styles.teamsCard}>
          <Users size={24} strokeWidth={1.5} />
          <div>
            <h2>NOVERA FOR TEAMS</h2>
            <p>Bring your collective together.</p>
          </div>
        </section>
      </div>
    </aside>
  );
}
