'use client';
 
import { useState } from 'react';
import styles from './articles.module.css';
 
const articles = [
  {
    id: 1,
    title: 'Navigating AI\'s Frontier in 2025',
    date: 'January 2025',
    category: 'AI Engineering',
    excerpt: 'Exploring the cutting edge of AI development and what\'s next for the industry. A deep dive into the technologies shaping our future.',
    image: '🚀',
    featured: true,
    url: 'https://example.com/navigating-ai-frontier-2025'
  },
  {
    id: 2,
    title: 'AI Engineer Summit Presentation',
    date: 'January 2025',
    category: 'AI Engineering',
    excerpt: 'Key takeaways and insights from the AI Engineer Summit presentation.',
    image: '🎤',
    featured: true,
    url: 'https://example.com/ai-engineer-summit'
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
    url: 'https://bloomberg.com/ai-agents'
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
    url: 'https://www.cnbc.com/articles/china-ai-dominance'
  },
  {
    id: 5,
    title: 'CNBC: Lux Capital VC reveals what she looks for in an AI company',
    date: 'December 2024',
    category: 'Venture Investing',
    source: 'CNBC',
    excerpt: 'Investment criteria and what makes an AI company investable.',
    image: '💡',
    url: 'https://www.cnbc.com/ai-investment-criteria'
  },
  {
    id: 6,
    title: 'Cerebral Valley: How Businesses Can Implement AI Agents',
    date: 'November 2024',
    category: 'Enterprise AI',
    source: 'Cerebral Valley',
    excerpt: 'Practical strategies for integrating AI agents into enterprise workflows.',
    image: '⚙️',
    url: 'https://cerebralvalley.ai/implement-ai-agents'
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
    url: 'https://bloomberg.com/nyc-ai-demand'
  },
  {
    id: 8,
    title: 'NYC\'s AI Opportunity + NYC AI Map',
    date: 'November 2024',
    category: 'Venture Investing',
    excerpt: 'Comprehensive map and analysis of NYC\'s AI startup ecosystem.',
    image: '🗺️',
    url: 'https://example.com/nyc-ai-opportunity'
  },
  {
    id: 9,
    title: 'Forbes 30U30',
    date: 'October 2024',
    category: 'Career',
    excerpt: 'Recognition and insights on emerging leaders in venture capital.',
    image: '⭐',
    url: 'https://forbes.com/30under30'
  },
  {
    id: 10,
    title: 'Five Takeaways from the AI Economy of April 2023',
    date: 'October 2024',
    category: 'AI Engineering',
    excerpt: 'Key insights and analysis from the AI economy landscape.',
    image: '📊',
    url: 'https://example.com/ai-economy-april-2023'
  },
  {
    id: 11,
    title: 'Building the Next AI & ML Infrastructure Stack',
    date: 'September 2024',
    category: 'Infrastructure',
    excerpt: 'The foundational technologies and frameworks shaping AI infrastructure.',
    image: '🏗️',
    url: 'https://example.com/ai-ml-infrastructure-stack'
  },
  {
    id: 12,
    title: 'Fintech Predictions for 2023',
    date: 'August 2024',
    category: 'Fintech',
    excerpt: 'What\'s ahead for payments, blockchain, and decentralized finance.',
    image: '💳',
    url: 'https://example.com/fintech-predictions-2023'
  },
  {
    id: 13,
    title: 'Business Insider Rising Star',
    date: 'August 2024',
    category: 'Career',
    excerpt: 'Recognition as a rising star in venture capital and technology.',
    image: '🌟',
    url: 'https://businessinsider.com/rising-star'
  },
  {
    id: 14,
    title: 'The Web3 World',
    date: 'July 2024',
    category: 'Web3',
    excerpt: 'Comprehensive overview of the Web3 ecosystem and implications.',
    image: '🌐',
    url: 'https://example.com/web3-world'
  },
  {
    id: 15,
    title: 'Web3 - What\'s All the Hype About?',
    date: 'July 2024',
    category: 'Web3',
    excerpt: 'Separating fact from fiction in the Web3 narrative.',
    image: '❓',
    url: 'https://example.com/web3-hype'
  },
  {
    id: 16,
    title: 'The Third-Party API Economy & Third-Party API Directory',
    date: 'June 2024',
    category: 'Infrastructure',
    excerpt: 'Understanding the growing importance of API integrations.',
    image: '🔌',
    url: 'https://example.com/api-economy'
  },
  {
    id: 17,
    title: 'Venture Investing in the Age of Coronavirus',
    date: 'May 2024',
    category: 'Venture Investing',
    excerpt: 'How venture capital adapted and evolved during unprecedented times.',
    image: '📈',
    url: 'https://example.com/venture-coronavirus-era'
  },
  {
    id: 18,
    title: 'Crisis Coverage with Grace Isford',
    date: 'April 2024',
    category: 'Venture Investing',
    excerpt: 'Analysis and insights on navigating crisis periods in investing.',
    image: '⚠️',
    url: 'https://example.com/crisis-coverage'
  },
  {
    id: 19,
    title: 'Profile in Venture: Grace Isford',
    date: 'March 2024',
    category: 'Career',
    excerpt: 'Personal profile and career journey in venture capital.',
    image: '👤',
    url: 'https://example.com/grace-isford-profile'
  },
  {
    id: 20,
    title: 'How I Became a VC',
    date: 'February 2024',
    category: 'Career',
    excerpt: 'My journey from product to venture capital. Lessons learned.',
    image: '🚀',
    url: 'https://example.com/how-i-became-vc'
  },
  {
    id: 21,
    title: 'Guide to building a design-first company',
    date: 'January 2024',
    category: 'Product',
    excerpt: 'Design principles and strategies for building customer-centric companies.',
    image: '🎨',
    url: 'https://example.com/design-first-company'
  },
  {
    id: 22,
    title: 'Handshake: Revamping the FDS Product',
    date: 'December 2023',
    category: 'Product',
    excerpt: 'Product strategy and implementation insights from Handshake.',
    image: '🤝',
    url: 'https://example.com/handshake-fds-product'
  },
];
 
export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
 
  const categories = Array.from(new Set(articles.map(a => a.category)));
  
  const filteredArticles = selectedCategory
    ? articles.filter(a => a.category === selectedCategory)
    : articles;
 
  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Thoughts & Insights</h1>
          <p className={styles.subtitle}>
            Articles, analyses, and perspectives on AI, venture investing, and frontier technology.
          </p>
        </div>
      </section>
 
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.filters}>
            <button
              className={`${styles.filterBtn} ${!selectedCategory ? styles.active : ''}`}
              onClick={() => setSelectedCategory(null)}
            >
              All Articles
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
            {filteredArticles
              .filter(a => a.featured)
              .slice(0, 1)
              .map(article => (
                <a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.featuredCard}
                  style={{ textDecoration: 'none' }}
                >
                  <div className={styles.featuredImage}>{article.image}</div>
                  <div className={styles.featuredContent}>
                    <div className={styles.meta}>
                      <span className={styles.date}>{article.date}</span>
                      <span className={styles.category}>{article.category}</span>
                    </div>
                    <h2 className={styles.featuredTitle}>{article.title}</h2>
                    <p className={styles.featuredExcerpt}>{article.excerpt}</p>
                    <span className={styles.readMore}>
                      Read Full Article →
                    </span>
                  </div>
                </a>
              ))}
          </div>
 
          <div className={styles.grid}>
            {filteredArticles
              .filter(a => !a.featured || selectedCategory)
              .map((article, idx) => (
                <a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                  style={{
                    animationDelay: `${idx * 50}ms`,
                    textDecoration: 'none'
                  }}
                >
                  <div className={styles.cardImage}>{article.image}</div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardDate}>{article.date}</span>
                      {article.source && (
                        <span className={styles.source}>{article.source}</span>
                      )}
                    </div>
                    <h3 className={styles.cardTitle}>{article.title}</h3>
                    <p className={styles.cardExcerpt}>{article.excerpt}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.cardCategory}>{article.category}</span>
                      <span className={styles.cardLink}>
                        Read →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}