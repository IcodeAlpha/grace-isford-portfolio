import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            Venture Investor | AI Pioneer
          </div>
          
          <h1 className={styles.title}>
            <span className={styles.line1}>Grace Isford</span>
            <span className={styles.line2}>Building the Future of AI</span>
          </h1>
          
          <p className={styles.subtitle}>
            Investing in companies at the nexus of computational sciences, LLM applications, and frontier technology. Stanford alumna, former PM at Canvas & Stripes, design-first investor.
          </p>
          
          <div className={styles.cta}>
            <a href="#focus-areas" className={styles.button}>
              Explore Investment Thesis
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 3v14m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className={styles.visualization}>
          <div className={styles.grid}>
            {[...Array(9)].map((_, i) => (
              <div key={i} className={styles.gridItem} style={{animationDelay: `${i * 50}ms`}}></div>
            ))}
          </div>
          <div className={styles.glow}></div>
        </div>
      </div>
    </section>
  );
}
