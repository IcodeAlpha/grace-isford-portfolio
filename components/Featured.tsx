'use client';

import { useState, useEffect } from 'react';
import styles from './Featured.module.css';

const featuredContent = [
  {
    id: 1,
    title: 'Navigating AI\'s Frontier in 2025',
    date: 'January 2025',
    category: 'AI Engineering',
    excerpt: 'Exploring the cutting edge of AI development and what\'s next for the industry. A deep dive into the technologies shaping our future.',
    image: '🚀',
    featured: true,
    url: 'https://example.com/navigating-ai-frontier-2025',
    color: '#FF6B6B'
  },
  {
    id: 2,
    title: 'AI Engineer Summit Presentation',
    date: 'January 2025',
    category: 'AI Engineering',
    excerpt: 'Key takeaways and insights from the AI Engineer Summit presentation.',
    image: '🎤',
    featured: true,
    url: 'https://example.com/ai-engineer-summit',
    color: '#FF6B6B'
  },
  {
    id: 3,
    title: 'Bloomberg: AI Agents',
    date: 'December 2024',
    category: 'Market Analysis',
    source: 'Bloomberg',
    excerpt: 'Analysis of the emerging AI agents market and enterprise implications.',
    image: '🤖',
    featured: true,
    url: 'https://bloomberg.com/ai-agents',
    color: '#4ECDC4'
  },
  {
    id: 4,
    title: 'China wants to dominate in AI',
    date: 'December 2024',
    category: 'Market Analysis',
    source: 'CNBC',
    excerpt: 'Analysis of how Chinese AI models are already beating their U.S. rivals in key metrics.',
    image: '🌍',
    featured: true,
    url: 'https://www.cnbc.com/articles/china-ai-dominance',
    color: '#4ECDC4'
  },
  {
    id: 5,
    title: 'CNBC: Lux Capital VC reveals what she looks for in an AI company',
    date: 'December 2024',
    category: 'Venture Investing',
    source: 'CNBC',
    excerpt: 'Investment criteria and what makes an AI company investable.',
    image: '💡',
    url: 'https://www.cnbc.com/ai-investment-criteria',
    color: '#45B7D1'
  },
  {
    id: 6,
    title: 'Cerebral Valley: How Businesses Can Implement AI Agents',
    date: 'November 2024',
    category: 'Enterprise AI',
    source: 'Cerebral Valley',
    excerpt: 'Practical strategies for integrating AI agents into enterprise workflows.',
    image: '⚙️',
    url: 'https://cerebralvalley.ai/implement-ai-agents',
    color: '#FFA07A'
  },
  {
    id: 7,
    title: 'Bloomberg: NYC Sees Unprecedented Demand for AI',
    date: 'November 2024',
    category: 'Venture Investing',
    source: 'Bloomberg',
    excerpt: 'The booming AI startup ecosystem and venture capital activity in New York.',
    image: '🗽',
    featured: true,
    url: 'https://bloomberg.com/nyc-ai-demand',
    color: '#45B7D1'
  },
  {
    id: 8,
    title: 'NYC\'s AI Opportunity + NYC AI Map',
    date: 'November 2024',
    category: 'Venture Investing',
    excerpt: 'Comprehensive map and analysis of NYC\'s AI startup ecosystem.',
    image: '🗺️',
    url: 'https://example.com/nyc-ai-opportunity',
    color: '#45B7D1'
  },
  {
    id: 9,
    title: 'Forbes 30U30',
    date: 'October 2024',
    category: 'Career',
    excerpt: 'Recognition and insights on emerging leaders in venture capital.',
    image: '⭐',
    url: 'https://forbes.com/30under30',
    color: '#FFD93D'
  },
  {
    id: 10,
    title: 'Five Takeaways from the AI Economy of April 2023',
    date: 'October 2024',
    category: 'AI Engineering',
    excerpt: 'Key insights and analysis from the AI economy landscape.',
    image: '📊',
    url: 'https://example.com/ai-economy-april-2023',
    color: '#FF6B6B'
  },
  {
    id: 11,
    title: 'Building the Next AI & ML Infrastructure Stack',
    date: 'September 2024',
    category: 'Infrastructure',
    excerpt: 'The foundational technologies and frameworks shaping AI infrastructure.',
    image: '🏗️',
    url: 'https://example.com/ai-ml-infrastructure-stack',
    color: '#98D8C8'
  },
  {
    id: 12,
    title: 'Fintech Predictions for 2023',
    date: 'August 2024',
    category: 'Fintech',
    excerpt: 'What\'s ahead for payments, blockchain, and decentralized finance.',
    image: '💳',
    url: 'https://example.com/fintech-predictions-2023',
    color: '#F7DC6F'
  },
  {
    id: 13,
    title: 'Business Insider Rising Star',
    date: 'August 2024',
    category: 'Career',
    excerpt: 'Recognition as a rising star in venture capital and technology.',
    image: '🌟',
    url: 'https://businessinsider.com/rising-star',
    color: '#FFD93D'
  },
  {
    id: 14,
    title: 'The Web3 World',
    date: 'July 2024',
    category: 'Web3',
    excerpt: 'Comprehensive overview of the Web3 ecosystem and implications.',
    image: '🌐',
    url: 'https://example.com/web3-world',
    color: '#BB8FCE'
  },
  {
    id: 15,
    title: 'Web3 - What\'s All the Hype About?',
    date: 'July 2024',
    category: 'Web3',
    excerpt: 'Separating fact from fiction in the Web3 narrative.',
    image: '❓',
    url: 'https://example.com/web3-hype',
    color: '#BB8FCE'
  },
  {
    id: 16,
    title: 'The Third-Party API Economy & Third-Party API Directory',
    date: 'June 2024',
    category: 'Infrastructure',
    excerpt: 'Understanding the growing importance of API integrations.',
    image: '🔌',
    url: 'https://example.com/api-economy',
    color: '#98D8C8'
  },
  {
    id: 17,
    title: 'Venture Investing in the Age of Coronavirus',
    date: 'May 2024',
    category: 'Venture Investing',
    excerpt: 'How venture capital adapted and evolved during unprecedented times.',
    image: '📈',
    url: 'https://example.com/venture-coronavirus-era',
    color: '#45B7D1'
  },
  {
    id: 18,
    title: 'Crisis Coverage with Grace Isford',
    date: 'April 2024',
    category: 'Venture Investing',
    excerpt: 'Analysis and insights on navigating crisis periods in investing.',
    image: '⚠️',
    url: 'https://example.com/crisis-coverage',
    color: '#45B7D1'
  },
  {
    id: 19,
    title: 'Profile in Venture: Grace Isford',
    date: 'March 2024',
    category: 'Career',
    excerpt: 'Personal profile and career journey in venture capital.',
    image: '👤',
    url: 'https://example.com/grace-isford-profile',
    color: '#FFD93D'
  },
  {
    id: 20,
    title: 'How I Became a VC',
    date: 'February 2024',
    category: 'Career',
    excerpt: 'My journey from product to venture capital. Lessons learned.',
    image: '🚀',
    url: 'https://example.com/how-i-became-vc',
    color: '#FFD93D'
  },
  {
    id: 21,
    title: 'Guide to building a design-first company',
    date: 'January 2024',
    category: 'Product',
    excerpt: 'Design principles and strategies for building customer-centric companies.',
    image: '🎨',
    url: 'https://example.com/design-first-company',
    color: '#F8C471'
  },
  {
    id: 22,
    title: 'Handshake: Revamping the FDS Product',
    date: 'December 2023',
    category: 'Product',
    excerpt: 'Product strategy and implementation insights from Handshake.',
    image: '🤝',
    url: 'https://example.com/handshake-fds-product',
    color: '#F8C471'
  },
];

export function Featured() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % featuredContent.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Thoughts & Insights</h2>
          <p className={styles.subtitle}>Latest articles, presentations, and market analysis</p>
        </div>

        <div className={styles.carousel}>
          <div className={styles.carouselInner}>
            {featuredContent.map((item, idx) => (
              <div
                key={item.id}
                className={`${styles.slide} ${idx === activeIndex ? styles.active : ''}`}
              >
                <div
                  className={styles.slideContent}
                  style={{ borderLeftColor: item.color }}
                >
                  <div className={styles.badge} style={{ background: `${item.color}20`, color: item.color }}>
                    {item.source || item.category}
                  </div>
                  <h3 className={styles.slideTitle}>{item.title}</h3>
                  <p className={styles.slideDesc}>{item.excerpt}</p>
                  <div className={styles.slideFooter}>
                    <span className={styles.type}>{item.category}</span>
                    <a href="#" className={styles.readMore}>
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.controls}>
            <button className={styles.prevBtn} onClick={prevSlide} aria-label="Previous slide">
              ←
            </button>
            <button className={styles.nextBtn} onClick={nextSlide} aria-label="Next slide">
              →
            </button>
          </div>

          <div className={styles.indicators}>
            {featuredContent.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.indicator} ${idx === activeIndex ? styles.active : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
