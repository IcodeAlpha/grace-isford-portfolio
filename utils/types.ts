/**
 * Type definitions for the portfolio application
 */

export interface ContentItem {
  id: number;
  title: string;
  description: string;
}

export interface FocusArea {
  id: number;
  title: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
}

export interface Article {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
  source?: string;
  featured?: boolean;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
}

export interface Stat {
  label: string;
  value: string | number;
}

export interface SocialLink {
  label: string;
  url: string;
  icon?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Contact {
  email: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
}

export type ThemeMode = 'dark' | 'light';
