import styles from "./shell.module.css";

export function ShellHeader() {
  return (
    <header className={styles.header}>
      <div>
        <p className={styles.logo}>Novera</p>
        <p className={styles.subtitle}>Creative Culture Infrastructure</p>
      </div>
    </header>
  );
}
