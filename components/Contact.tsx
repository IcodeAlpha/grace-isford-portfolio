import styles from './Contact.module.css';

export function Contact() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Let's Connect</h2>
          <p className={styles.subtitle}>
            Interested in exploring opportunities at the intersection of AI, computational sciences, and frontier technology? Let's talk.
          </p>

          <div className={styles.contactMethods}>
            <a href="https://x.com/graceisford" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <span className={styles.icon}>𝕏</span>
              <span>Twitter / X</span>
            </a>
            <a href="https://www.linkedin.com/in/graceisford/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <span className={styles.icon}>in</span>
              <span>LinkedIn</span>
            </a>
            <a href="https://www.luxcapital.com/people/grace-isford" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <span className={styles.icon}>✨</span>
              <span>Lux Profile</span>
            </a>
          </div>
        </div>

        <form className={styles.newsletter}>
          <h3 className={styles.newsletterTitle}>Stay Updated</h3>
          <p className={styles.newsletterDesc}>Get insights on AI, frontier tech, and venture investing.</p>
          <div className={styles.formGroup}>
            <input
              type="email"
              placeholder="your@email.com"
              className={styles.input}
              required
            />
            <button type="submit" className={styles.submitBtn}>
              Subscribe
            </button>
          </div>
          <p className={styles.disclaimer}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
}
