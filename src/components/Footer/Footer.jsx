import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        Created by <span>kv.frontdev24</span> <small>@{year}</small>
      </div>
    </footer>
  );
}
