'use client';

import { useState } from 'react';
import styles from './FocusAreas.module.css';

const focusAreas = [
  {
    id: 1,
    title: 'Rise of Devsumer',
    icon: '⚡',
    shortDesc: 'LLMs, data & dev tools, AI/ML infrastructure',
    fullDesc: 'Companies building the next generation of developer tools and infrastructure. LLMs, data & dev tools, AI/ML infrastructure, open source frameworks making legacy processes simpler and more efficient. Next-gen tools for thinking to promote collaboration & maximize efficiency.',
    tags: ['LLMs', 'Developer Tools', 'AI Infrastructure', 'Open Source']
  },
  {
    id: 2,
    title: 'Vertical LLMs Applications',
    icon: '🎯',
    shortDesc: 'Complex industries with trapped data silos',
    fullDesc: 'Hyper-personalizing user experiences & applying LLMs to specific verticals with trapped data silos. New consumer interfaces to interact with technology. Building domain-specific solutions that unlock value in industry-specific datasets.',
    tags: ['Vertical AI', 'Data Silos', 'Enterprise', 'User Experience']
  },
  {
    id: 3,
    title: 'Fintech & Blockchain Infra',
    icon: '🔗',
    shortDesc: 'Modernizing payments and decentralized apps',
    fullDesc: 'Next-gen fintech stack to modernize payments at scale & decentralized applications building blockchain infrastructure solutions supporting self-governance. Building the financial infrastructure of the future.',
    tags: ['Fintech', 'Blockchain', 'Payments', 'Web3']
  }
];

export function FocusAreas() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className={styles.section} id="focus-areas">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Current Investment Focus</h2>
          <p className={styles.subtitle}>
            Investing at the nexus of computational sciences, LLM applications, and frontier technology
          </p>
        </div>

        <div className={styles.grid}>
          {focusAreas.map((area) => (
            <div
              key={area.id}
              className={`${styles.card} ${expandedId === area.id ? styles.expanded : ''}`}
              onClick={() => setExpandedId(expandedId === area.id ? null : area.id)}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <span className={styles.icon}>{area.icon}</span>
                  <h3 className={styles.cardTitle}>{area.title}</h3>
                </div>

                <p className={styles.cardShort}>{area.shortDesc}</p>

                {expandedId === area.id && (
                  <div className={styles.expandedContent}>
                    <p className={styles.cardFull}>{area.fullDesc}</p>
                    <div className={styles.tags}>
                      {area.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <button className={styles.expandBtn}>
                  {expandedId === area.id ? 'Close' : 'Learn More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
