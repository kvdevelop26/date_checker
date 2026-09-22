import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header-container']}>
        <a href="#">
          <h1 className={styles.logo}>
            Date
            <span className={styles['logo-accent']}>Check</span>
          </h1>
          <p className={styles.tagline}>Verify whether a date is valid</p>
        </a>
      </div>
    </header>
  );
}
