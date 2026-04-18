'use client';

import styles from './about.module.css';

const timeline = [
  {
    year: '2023 - Present',
    title: 'Board Member',
    company: 'Stanford Technology Ventures Program',
    description: 'Advising on venture capital trends and supporting the next generation of entrepreneurs.'
  },
  {
    year: '2021 - 2023',
    title: 'Venture Investor',
    company: 'Canvas',
    description: 'Invested in Series B companies across AI infrastructure, developer tools, and fintech.'
  },
  {
    year: '2020 - 2021',
    title: 'Growth Equity Investor',
    company: 'Stripes',
    description: 'Focus on scaling B2B SaaS companies and infrastructure businesses.'
  },
  {
    year: '2019 - 2020',
    title: 'Product Manager',
    company: 'Handshake',
    description: 'Led product initiatives for the entry-level hiring marketplace.'
  },
  {
    year: '2018 - 2020',
    title: 'MBA Candidate',
    company: 'Stanford Graduate School of Business',
    description: 'Mayfield Fellow, focused on venture capital and emerging technologies.'
  },
  {
    year: '2014 - 2018',
    title: 'Undergraduate',
    company: 'Stanford University',
    description: 'BS/MS in Management Science & Engineering. Marathon runner and design enthusiast.'
  }
];

const values = [
  {
    title: 'Design-First Thinking',
    description: 'Companies that prioritize user experience and thoughtful design often create deeper moats and more loyal customers.'
  },
  {
    title: 'Founder-Centric',
    description: 'The best returns come from backing exceptional founders who are intensely focused on their mission.'
  },
  {
    title: 'Thesis-Driven',
    description: 'I invest in clear trends at the intersection of technology, infrastructure, and market opportunity.'
  },
  {
    title: 'Long-Term Vision',
    description: 'Building generational companies requires patience, capital, and belief in transformative technologies.'
  }
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>About Grace Isford</h1>
            <p className={styles.subtitle}>
              Venture investor, advisor, and builder focused on the frontier of AI, computational sciences, and emerging technology. Based in the San Francisco Bay Area.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.bio}>
        <div className={styles.container}>
          <div className={styles.bioGrid}>
            <div className={styles.bioText}>
              <h2 className={styles.sectionTitle}>My Story</h2>
              <p>
                I'm passionate about understanding the future of technology and investing in founders who are building it. Over the past five years, I've been fortunate to work with exceptional teams at Canvas, Stripes, and Handshake, learning how to identify promising companies early and support them through their growth journey.
              </p>
              <p>
                My background in engineering and management science has given me a deep appreciation for technical excellence combined with thoughtful product design. I believe the best venture returns come from companies that obsess over solving real problems with elegant solutions.
              </p>
              <p>
                Today, I focus my investment activities on three core areas: the rise of developer tools and infrastructure (the "Devsumer"), vertical-specific AI applications with trapped data, and next-generation fintech and blockchain infrastructure.
              </p>
            </div>
            <div className={styles.bioStats}>
              <div className={styles.bioStat}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statName}>Years in Tech</div>
              </div>
              <div className={styles.bioStat}>
                <div className={styles.statNumber}>4</div>
                <div className={styles.statName}>Companies Backed</div>
              </div>
              <div className={styles.bioStat}>
                <div className={styles.statNumber}>3</div>
                <div className={styles.statName}>Marathons Run</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.timeline}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Career Timeline</h2>
          <div className={styles.timelineContent}>
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={styles.timelineItem}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineBody}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <div className={styles.timelineCompany}>{item.company}</div>
                  <p className={styles.timelineDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Investment Philosophy</h2>
          <p className={styles.sectionSubtitle}>
            These principles guide my decisions as a venture investor and advisor.
          </p>
          <div className={styles.valuesGrid}>
            {values.map((value, idx) => (
              <div
                key={idx}
                className={styles.valueCard}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDesc}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.interests}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Beyond Venture</h2>
          <div className={styles.interestsContent}>
            <div className={styles.interestItem}>
              <div className={styles.interestIcon}>🏃</div>
              <div>
                <h3>Marathons</h3>
                <p>Passionate marathon runner. Completed races in Boston, NYC, and Napa. Current PR: 3:24.</p>
              </div>
            </div>
            <div className={styles.interestItem}>
              <div className={styles.interestIcon}>🎨</div>
              <div>
                <h3>Design</h3>
                <p>Obsessed with thoughtful design and beautiful user experiences. I believe design is a competitive advantage.</p>
              </div>
            </div>
            <div className={styles.interestItem}>
              <div className={styles.interestIcon}>🧠</div>
              <div>
                <h3>Learning</h3>
                <p>Constantly reading and exploring emerging trends in tech, economics, and philosophy.</p>
              </div>
            </div>
            <div className={styles.interestItem}>
              <div className={styles.interestIcon}>🌍</div>
              <div>
                <h3>Travel</h3>
                <p>Love exploring new cities and understanding how technology shapes different communities globally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contactContent}>
            <h2 className={styles.contactTitle}>Let's Connect</h2>
            <p className={styles.contactSubtitle}>
              If you're working on something interesting in AI, infrastructure, or frontier tech, I'd love to hear from you.
            </p>
            <div className={styles.contactLinks}>
              <a href="https://twitter.com" className={styles.contactLink}>Twitter / X</a>
              <a href="https://linkedin.com" className={styles.contactLink}>LinkedIn</a>
              <a href="https://lux.com" className={styles.contactLink}>Lux Profile</a>
              <a href="mailto:grace@graceisford.com" className={styles.contactLink}>Email</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
