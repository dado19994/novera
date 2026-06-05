import { Bell, ChevronDown, MapPin, Search } from "lucide-react";
import styles from "./topbar.module.css";

export function Topbar() {
  return (
    <header className={styles.topbar}>
      <label className={styles.search}>
        <Search size={18} aria-hidden="true" />
        <span>Search artists, spaces, events, rooms...</span>
        <kbd>⌘ K</kbd>
      </label>

      <div className={styles.actions}>
        <button className={styles.citySelector} type="button">
          <MapPin size={16} aria-hidden="true" />
          <span>ROME</span>
          <ChevronDown size={15} aria-hidden="true" />
        </button>
        <button className={styles.iconButton} type="button" aria-label="Notifications">
          <Bell size={18} aria-hidden="true" />
          <span />
        </button>
        <button className={styles.profile} type="button">
          <span className={styles.avatar} />
          <span>
            <strong>LUCA MORETTI</strong>
            <small>Creator</small>
          </span>
          <ChevronDown size={15} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
