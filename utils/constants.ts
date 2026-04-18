/**
 * Global constants for the application
 */

export const SITE_CONFIG = {
  name: 'Grace Isford',
  title: 'Grace Isford - Venture Investor & AI Pioneer',
  description:
    'Venture investor focused on AI, computational sciences, and frontier technology. Exploring companies at the nexus of innovation.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://graceisford.com',
  language: 'en',
  charset: 'UTF-8',
  type: 'website',
};

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/graceisford',
  linkedin: 'https://linkedin.com/in/graceisford',
  lux: 'https://lux.com/graceisford',
  email: 'contact@graceisford.com',
};

export const NAVIGATION = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Investment Focus', href: '#focus-areas' },
  { label: 'Insights', href: '/articles' },
  { label: 'Contact', href: '#contact' },
];

export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
  ultraWide: 1536,
};

export const ANIMATION_DURATIONS = {
  fast: 150,
  base: 300,
  slow: 500,
  slower: 800,
};

export const INVESTMENT_FOCUSES = [
  {
    id: 1,
    title: 'Rise of Devsumer',
    icon: '⚡',
    shortDesc: 'LLMs, data & dev tools, AI/ML infrastructure',
    fullDesc:
      'Companies building the next generation of developer tools and infrastructure. LLMs, data & dev tools, AI/ML infrastructure, open source frameworks making legacy processes simpler and more efficient. Next-gen tools for thinking to promote collaboration & maximize efficiency.',
    tags: ['LLMs', 'Developer Tools', 'AI Infrastructure', 'Open Source'],
  },
  {
    id: 2,
    title: 'Vertical LLMs Applications',
    icon: '🎯',
    shortDesc: 'Complex industries with trapped data silos',
    fullDesc:
      'Hyper-personalizing user experiences & applying LLMs to specific verticals with trapped data silos. New consumer interfaces to interact with technology. Building domain-specific solutions that unlock value in industry-specific datasets.',
    tags: ['Vertical AI', 'Data Silos', 'Enterprise', 'User Experience'],
  },
  {
    id: 3,
    title: 'Fintech & Blockchain Infra',
    icon: '🔗',
    shortDesc: 'Modernizing payments and decentralized apps',
    fullDesc:
      'Next-gen fintech stack to modernize payments at scale & decentralized applications building blockchain infrastructure solutions supporting self-governance. Building the financial infrastructure of the future.',
    tags: ['Fintech', 'Blockchain', 'Payments', 'Web3'],
  },
];

export const COLOR_PALETTE = {
  primary: '#00d9ff', // Cyan
  secondary: '#ff006e', // Magenta
  tertiary: '#8338ec', // Purple
  dark: '#0a0e27', // Dark Navy
  background: '#131829',
};
