import styles from './About.module.css';

const experiences = [
  { period: '2024 - Present', role: 'Board Member', company: 'Stanford Technology Ventures Program' },
  { period: '2020 - 2024', role: 'Venture Investor', company: 'Canvas, Stripes, Handshake, SMC' },
  { period: '2018 - 2020', role: 'MBA', company: 'Stanford University' }
];

const highlights = [
  { label: 'Focus Areas', value: '3' },
  { label: 'Previous Companies', value: '4' },
  { label: 'Marathons Completed', value: '3+' }
];

export function About() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.timeline}>
            <h2 className={styles.title}>Background</h2>
            {experiences.map((exp, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.dot}></div>
                <div className={styles.content}>
                  <p className={styles.period}>{exp.period}</p>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.statsGrid}>
            {highlights.map((stat, idx) => (
              <div key={idx} className={styles.stat}>
                <div className={styles.value}>{stat.value}</div>
                <div className={styles.label}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.bio}>
            <h3 className={styles.bioTitle}>Education & Interests</h3>
            <ul className={styles.bioList}>
              <li>BS/MS in Management Science & Engineering from Stanford University</li>
              <li>Mayfield Fellow Alum</li>
              <li>Marathon Runner (Boston, NYC, Napa)</li>
              <li>Passionate about design-first companies and thoughtful technology</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
