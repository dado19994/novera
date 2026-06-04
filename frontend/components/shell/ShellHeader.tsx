import styles from "./shellHeader.module.css";

export function ShellHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.context}>
        <span className={styles.mobileBrand}>Novera</span>
        <div>
          <p className={styles.eyebrow}>Home</p>
          <h2 className={styles.title}>Rome</h2>
        </div>
      </div>
      <div className={styles.searchHint} aria-hidden="true">
        <span>Search</span>
        <strong>Scenes, artists, spaces</strong>
      </div>
      <div className={styles.actions} aria-label="Shell actions">
        <a className={styles.actionLink} href="#scenes">
          Scenes
        </a>
        <a className={styles.actionLink} href="#open-calls">
          Open calls
        </a>
        <a className={styles.primaryAction} href="#share-work">
          Share work
        </a>
      </div>
    </header>
  );
}
