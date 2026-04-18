'use client';

import { useState } from 'react';
import styles from './portfolio.module.css';

const investments = [
  {
    id: 1,
    name: 'Canvas',
    stage: 'Series B',
    category: 'Venture Capital',
    description: 'Canvas is a venture capital platform for institutional investors.',
    role: 'Investor',
    year: '2020',
    image: '💼',
    featured: true
  },
  {
    id: 2,
    name: 'Stripes',
    stage: 'Series A',
    category: 'Growth Equity',
    description: 'Growth equity platform helping companies scale internationally.',
    role: 'Investor',
    year: '2021',
    image: '📈',
    featured: true
  },
  {
    id: 3,
    name: 'Handshake',
    stage: 'Post-IPO',
    category: 'Product',
    description: 'Handshake is reimagining the hiring marketplace for entry-level talent.',
    role: 'Product Advisor',
    year: '2022',
    image: '🤝',
    featured: true
  },
  {
    id: 4,
    name: 'Stanford Management Company',
    stage: 'Established',
    category: 'Asset Management',
    description: 'SMC manages Stanford\'s endowment and private investments.',
    role: 'Advisor',
    year: '2023',
    image: '🏛️',
  },
  {
    id: 5,
    name: 'AI Infrastructure Fund',
    stage: 'Active',
    category: 'AI/ML Infrastructure',
    description: 'Focused on foundational AI and ML infrastructure companies.',
    role: 'Fund Manager',
    year: '2024',
    image: '⚡',
  },
  {
    id: 6,
    name: 'Fintech Accelerator',
    stage: 'Active',
    category: 'Fintech & Blockchain',
    description: 'Accelerating next-generation fintech and blockchain solutions.',
    role: 'Advisor',
    year: '2024',
    image: '💳',
  }
];

const stats = [
  { label: 'Companies Invested', value: '6+' },
  { label: 'Total Capital Deployed', value: '$500M+' },
  { label: 'Average Return', value: '3.2x' },
  { label: 'Active Investments', value: '4' }
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(investments.map(i => i.category)));
  
  const filteredInvestments = selectedCategory
    ? investments.filter(i => i.category === selectedCategory)
    : investments;

  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Investment Portfolio</h1>
          <p className={styles.subtitle}>
            Companies and initiatives where I'm investing time, capital, and expertise.
          </p>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.filters}>
            <button
              className={`${styles.filterBtn} ${!selectedCategory ? styles.active : ''}`}
              onClick={() => setSelectedCategory(null)}
            >
              All Investments
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.featured}>
            {filteredInvestments
              .filter(i => i.featured)
              .map((investment, idx) => (
                <div
                  key={investment.id}
                  className={styles.featuredCard}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className={styles.featuredImage}>{investment.image}</div>
                  <div className={styles.featuredContent}>
                    <div className={styles.badge}>{investment.stage}</div>
                    <h2 className={styles.featuredTitle}>{investment.name}</h2>
                    <p className={styles.featuredDesc}>{investment.description}</p>
                    <div className={styles.meta}>
                      <span className={styles.metaItem}>{investment.category}</span>
                      <span className={styles.metaItem}>•</span>
                      <span className={styles.metaItem}>{investment.year}</span>
                      <span className={styles.metaItem}>•</span>
                      <span className={styles.metaItem}>{investment.role}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className={styles.grid}>
            {filteredInvestments
              .filter(i => !i.featured || selectedCategory)
              .map((investment, idx) => (
                <div
                  key={investment.id}
                  className={styles.card}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className={styles.cardImage}>{investment.image}</div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardBadge}>{investment.stage}</div>
                    <h3 className={styles.cardTitle}>{investment.name}</h3>
                    <p className={styles.cardDesc}>{investment.description}</p>
                    <div className={styles.cardMeta}>
                      <span>{investment.category}</span>
                      <span className={styles.dot}>•</span>
                      <span>{investment.year}</span>
                    </div>
                    <p className={styles.role}>{investment.role}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Interested in exploring opportunities?</h2>
            <p className={styles.ctaSubtitle}>
              If you're building at the intersection of AI, computational sciences, or frontier tech, I'd love to hear from you.
            </p>
            <a href="/#contact" className={styles.ctaButton}>
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
