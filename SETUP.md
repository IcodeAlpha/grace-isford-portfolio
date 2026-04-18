# Setup & Configuration Guide

Complete guide to getting the Grace Isford portfolio up and running, customizing it, and deploying it.

## 🚀 Quick Start (5 minutes)

### 1. Install Dependencies
```bash
cd grace-isford-portfolio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### Step 1: Update Site Metadata

**File**: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Grace Isford - Venture Investor | AI & Frontier Tech',
  description: 'Your custom description here',
  // ... update other metadata
};
```

### Step 2: Update Navigation

**File**: `components/Header.tsx`

The navigation links are already configured to:
- Home (`/`)
- About (`/about`)
- Portfolio (`/portfolio`)
- Insights (`/articles`)

To add more pages, add new nav links:
```typescript
const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  // Add new link:
  { label: 'Blog', href: '/blog' },
];
```

### Step 3: Update Investment Focus Areas

**File**: `components/FocusAreas.tsx`

Update the `focusAreas` array:

```typescript
const focusAreas = [
  {
    id: 1,
    title: 'Your Focus Area Title',
    icon: '⚡',
    shortDesc: 'Short description shown by default',
    fullDesc: 'Longer description shown when expanded',
    tags: ['tag1', 'tag2', 'tag3']
  },
  // Add more...
];
```

**Icons**: Use any emoji. Popular choices:
- AI/ML: ⚡ 🤖 🧠 🔬
- Finance: 💳 💰 📈 🏦
- Infrastructure: 🏗️ 🔧 ⚙️ 🌐

### Step 4: Update Your Portfolio Companies

**File**: `app/portfolio/page.tsx`

Update the `investments` array:

```typescript
const investments = [
  {
    id: 1,
    name: 'Company Name',
    stage: 'Series A', // Series A, Series B, Post-IPO, etc.
    category: 'AI/ML Infrastructure',
    description: 'What the company does',
    role: 'Investor', // Your role
    year: '2024',
    image: '⚡', // Use emoji
    featured: true // Show in featured section
  },
  // Add more...
];
```

Update stats if needed:
```typescript
const stats = [
  { label: 'Companies Invested', value: '6+' },
  { label: 'Total Capital Deployed', value: '$500M+' },
  // ...
];
```

### Step 5: Update Articles & Insights

**File**: `app/articles/page.tsx`

Update the `featuredContent` array in Featured component:

```typescript
const articles = [
  {
    id: 1,
    title: 'Article Title',
    date: 'January 2025',
    category: 'AI Engineering',
    excerpt: 'Brief description of the article',
    image: '📚', // Use emoji
    featured: true,
    source: 'Publication Name' // Optional
  },
  // Add more...
];
```

### Step 6: Update About Page

**File**: `app/about/page.tsx`

Update the `timeline` array:

```typescript
const timeline = [
  {
    year: '2024 - Present',
    title: 'Your Current Role',
    company: 'Your Company',
    description: 'What you do'
  },
  // Add more...
];
```

Update the `values` array for investment philosophy:

```typescript
const values = [
  {
    title: 'Your Philosophy Point',
    description: 'Explanation of why this matters'
  },
  // Add more...
];
```

### Step 7: Update Contact Information

**File**: `components/Contact.tsx` and `app/about/page.tsx`

Update social links:
```typescript
<a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
  Twitter / X
</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
  LinkedIn
</a>
```

Update email:
```typescript
<a href="mailto:your@email.com">Email</a>
```

### Step 8: Update Footer

**File**: `components/Footer.tsx`

Update copyright and description:

```typescript
<p className={styles.description}>
  Your custom description here
</p>
```

Update social links:
```typescript
<li><a href="https://twitter.com/yourhandle">Twitter / X</a></li>
```

## 🎨 Theme Customization

### Change Colors

**File**: `styles/globals.css`

Update the `:root` CSS variables:

```css
:root {
  /* Change accent color */
  --color-accent-primary: #00d9ff;    /* Cyan (default) */
  --color-accent-secondary: #ff006e;  /* Magenta (default) */
  --color-accent-tertiary: #8338ec;   /* Purple (default) */
  
  /* Change backgrounds */
  --color-bg-primary: #0a0e27;
  --color-bg-secondary: #131829;
  --color-bg-tertiary: #1a202c;
}
```

**Popular color combinations**:

Blue theme:
```css
--color-accent-primary: #0ea5e9;      /* Sky blue */
--color-accent-secondary: #3b82f6;    /* Blue */
--color-accent-tertiary: #1e3a8a;     /* Dark blue */
```

Green theme:
```css
--color-accent-primary: #10b981;      /* Emerald */
--color-accent-secondary: #059669;    /* Green */
--color-accent-tertiary: #047857;     /* Dark green */
```

### Change Typography

**File**: `styles/globals.css`

```css
:root {
  /* Import new fonts at top of file */
  @import url('https://fonts.googleapis.com/css2?family=YOUR+FONT:wght@400;700&display=swap');
  
  --font-display: 'Your Font', sans-serif;
  --font-mono: 'Space Mono', monospace;
}
```

Popular font combinations:
- **Modern**: Sora, Inter, Roboto Flex
- **Elegant**: Poppins, Outfit, Clash Display
- **Serif**: Playfair Display, Crimson Pro

## 🔧 Adding New Pages

### Create a New Page

1. Create a new folder: `app/your-page/`
2. Create `page.tsx`:

```typescript
'use client';

import styles from './your-page.module.css';

export default function YourPage() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h1>Your Title</h1>
        <p>Your content</p>
      </section>
    </div>
  );
}
```

3. Create `your-page.module.css` for styling

4. Add to navigation in `components/Header.tsx`:

```typescript
const navLinks = [
  { label: 'Your Page', href: '/your-page' }
];
```

## 📧 Newsletter Setup

The contact form in Contact.tsx needs backend integration. Options:

### Option 1: Mailchimp (Easy)

1. Go to mailchimp.com, create account
2. Set up form in Contact.tsx:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  const formData = new FormData(e.currentTarget);
  const email = formData.get('email');
  
  // Send to Mailchimp
  await fetch('https://your-mailchimp-endpoint', {
    method: 'POST',
    body: JSON.stringify({ email })
  });
};
```

### Option 2: Vercel KV

If deploying to Vercel, use KV storage:

```bash
npm install @vercel/kv
```

### Option 3: Your Own Backend

Set up an API route in `app/api/subscribe/route.ts`

## 🌐 Domain Setup

### Purchase Domain

Options:
- Vercel Domains (recommended)
- Namecheap
- GoDaddy
- Google Domains

### Connect to Vercel

1. Dashboard → Settings → Domains
2. Add domain
3. Update DNS records (Vercel will provide)
4. Wait for propagation (usually 24 hours)

## 🔒 Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourhandle
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourprofile
NEXT_PUBLIC_LUX_URL=https://lux.com/yourprofile
```

Never commit `.env.local` to git!

## 📊 Analytics Setup

### Google Analytics

1. Create property at google.com/analytics
2. Get measurement ID (format: G-XXXXXXXXXX)
3. Add to `.env.local`:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

4. Install analytics in package.json (if needed):

```bash
npm install next-gtag
```

## 📱 Testing

### Mobile Testing

```bash
npm run dev
# Visit http://localhost:3000 on mobile
# Or use Chrome DevTools device emulator
```

### Performance Testing

```bash
npm run build
# Check build size
npm run build -- --debug

# Lighthouse audit
npx lighthouse http://localhost:3000
```

## 🚀 Building for Production

```bash
npm run build
npm start
```

Or for deployment:
```bash
npm run build
# Files ready in .next/
```

## 🐛 Debugging

### Enable Debug Mode

Set in `.env.local`:
```
DEBUG=grace:*
```

### Check Build Issues

```bash
npm run build -- --debug
```

### Test Production Build Locally

```bash
npm run build
npm start
# Visit http://localhost:3000
```

## 📝 Content Best Practices

### Writing Descriptions
- Keep it concise and punchy
- Focus on impact and value
- Use clear, jargon-free language
- Include specific numbers/metrics when possible

### Organizing Content
- Group related items
- Order by recency or importance
- Use consistent formatting
- Include metadata (dates, categories)

### SEO Tips
- Use descriptive page titles
- Include keywords naturally
- Add meta descriptions
- Keep URLs short and descriptive

## 🔄 Maintenance

### Regular Updates
- Update article/portfolio quarterly
- Review and update LinkedIn/social links
- Keep dependencies updated
- Monitor analytics

### Update Dependencies

```bash
npm outdated              # See what needs updating
npm update               # Update to latest
npm audit                # Check for security issues
npm audit fix            # Fix vulnerabilities
```

## 💡 Tips & Tricks

- Use emoji for visual interest (but don't overdo it)
- Keep sections concise - long text loses readers
- Update portfolio quarterly with new investments
- Write new articles/insights monthly
- Monitor analytics to see what resonates
- A/B test different headlines

## 🆘 Getting Help

- Next.js docs: https://nextjs.org/docs
- React docs: https://react.dev
- CSS tricks: https://css-tricks.com
- TypeScript handbook: https://www.typescriptlang.org/docs

---

**Questions?** Contact grace@graceisford.com
