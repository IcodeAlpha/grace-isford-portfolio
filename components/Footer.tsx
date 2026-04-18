import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h4 className={styles.heading}>Grace Isford</h4>
            <p className={styles.description}>
              Venture investor focused on AI, computational sciences, and frontier technology.
            </p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.links}>
              <li><a href="#about">About</a></li>
              <li><a href="#focus-areas">Investment Focus</a></li>
              <li><a href="#featured">Insights</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.heading}>Connect</h4>
            <ul className={styles.links}>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://lux.com" target="_blank" rel="noopener noreferrer">Lux Profile</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Grace Isford. All rights reserved.
          </p>
          <p className={styles.credit}>
            Crafted with vision for the future of tech.
          </p>
        </div>
      </div>
    </footer>
  );
}
