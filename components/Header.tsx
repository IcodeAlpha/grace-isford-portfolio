'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Insights', href: '/articles' }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Grace Isford</span>
          <span className={styles.subtitle}>Venture Investor</span>
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
