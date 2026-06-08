"use client";

import {
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  Compass,
  FilePenLine,
  Heart,
  Layers,
  Mail,
  Map,
  MapPin,
  Megaphone,
  Menu,
  Radio,
  Search,
  Sparkles,
  User,
  UsersRound,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./mobileNavigation.module.css";

const mainItems = [
  { label: "Artists", icon: Sparkles },
  { label: "Collectives", icon: UsersRound },
  { label: "Events", icon: CalendarDays },
  { label: "Venues", icon: MapPin },
  { label: "Editorial", icon: FilePenLine },
];

const workspaceItems = [
  { label: "Messages", icon: Mail, badge: "6" },
  { label: "Saved", icon: Heart },
  { label: "Projects", icon: Layers },
  { label: "Collaborations", icon: BriefcaseBusiness },
];

const bottomItems = [
  { label: "Discover", icon: Compass, active: true },
  { label: "Map", icon: Map },
  { label: "Rooms", icon: Radio },
  { label: "Calls", icon: Megaphone },
  { label: "Profile", icon: User },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <header className={styles.mobileTopbar}>
        <div className={styles.primaryRow}>
          <Link className={styles.brand} href="/" aria-label="Novera home">
            <span aria-hidden="true" />
            <strong>NOVERA</strong>
          </Link>

          <div className={styles.topbarControls}>
            <button className={styles.cityButton} type="button" aria-label="Open city selector">
              <MapPin size={15} aria-hidden="true" />
              <span>ROME</span>
            </button>

            <button
              aria-expanded={isSearchOpen}
              aria-label="Open search"
              className={styles.iconButton}
              onClick={() => setIsSearchOpen((current) => !current)}
              type="button"
            >
              <Search size={18} aria-hidden="true" />
            </button>

            <button className={styles.iconButton} type="button" aria-label="Notifications">
              <Bell size={18} aria-hidden="true" />
              <i aria-hidden="true" />
            </button>

            <button
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Open menu"
            className={styles.iconButton}
            onClick={() => setIsOpen(true)}
            type="button"
          >
              <Menu size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        {isSearchOpen ? (
          <div className={styles.searchPanel}>
            <label className={styles.searchRow}>
              <Search size={18} aria-hidden="true" />
              <input
                autoFocus
                placeholder="Search artists, spaces, events, rooms..."
                type="search"
              />
            </label>
            <button
              aria-label="Close search"
              className={styles.searchClose}
              onClick={() => setIsSearchOpen(false)}
              type="button"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>
        ) : null}
      </header>

      <nav className={styles.bottomNav} aria-label="Mobile navigation">
        {bottomItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              aria-current={item.active ? "page" : undefined}
              className={`${styles.bottomItem} ${item.active ? styles.activeBottomItem : ""}`}
              href={item.active ? "/" : "#"}
              key={item.label}
            >
              <Icon size={19} strokeWidth={1.9} aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {isOpen ? (
        <div className={styles.drawerLayer}>
          <button
            aria-label="Close mobile menu"
            className={styles.backdrop}
            onClick={() => setIsOpen(false)}
            type="button"
          />
          <aside
            aria-label="Mobile menu"
            aria-modal="true"
            className={styles.drawer}
            id="mobile-menu"
            role="dialog"
          >
            <header className={styles.drawerHeader}>
              <div>
                <strong>Novera</strong>
                <span>Creative map</span>
              </div>
              <button
                aria-label="Close menu"
                className={styles.iconButton}
                onClick={() => setIsOpen(false)}
                type="button"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </header>

            <nav className={styles.drawerNav} aria-label="Main mobile menu">
              <p>Main</p>
              {mainItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a href="#" key={item.label} onClick={() => setIsOpen(false)}>
                    <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            <nav className={styles.drawerNav} aria-label="Workspace mobile menu">
              <p>Workspace</p>
              {workspaceItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a href="#" key={item.label} onClick={() => setIsOpen(false)}>
                    <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                    <span>{item.label}</span>
                    {item.badge ? <i>{item.badge}</i> : null}
                  </a>
                );
              })}
            </nav>

            <section className={styles.account}>
              <p>Account</p>
              <div className={styles.profileRow}>
                <span className={styles.avatar} />
                <span>
                  <strong>Luca Moretti</strong>
                  <small>Creator</small>
                </span>
              </div>
              <div className={styles.proCard}>
                <strong>Novera Pro</strong>
                <span>Tools, insights, and space for what&apos;s next.</span>
                <a href="#" onClick={() => setIsOpen(false)}>
                  Upgrade Pro
                </a>
              </div>
            </section>
          </aside>
        </div>
      ) : null}
    </>
  );
}
