import type { Metadata } from 'next';
import { Header, Footer } from '@/components';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Grace Isford - Venture Investor | AI & Frontier Tech',
  description: 'Venture investor focused on AI, computational sciences, and frontier technology. Explore investment thesis and insights.',
  keywords: ['venture capital', 'AI', 'LLM', 'fintech', 'blockchain', 'startup investing'],
  authors: [{ name: 'Grace Isford' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://graceisford.com',
    title: 'Grace Isford - Venture Investor',
    description: 'Investing in AI, computational sciences, and frontier technology',
    images: [
      {
        url: 'https://graceisford.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grace Isford - Venture Investor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grace Isford - Venture Investor',
    description: 'Investing in the future of AI and frontier technology',
    creator: '@graceisford',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://graceisford.com" />
      </head>
      <body>
        <Header />
        <main style={{ paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
