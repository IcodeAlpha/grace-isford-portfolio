# Grace Isford - Venture Investor Portfolio

A modern, interactive Next.js portfolio showcasing Grace Isford's venture investing philosophy, investment focus areas, and thought leadership in AI and frontier technology.

## 🎯 Features

- **Modern Design**: Dark theme with neon accents (cyan, magenta, purple)
- **Interactive Components**: Expandable cards, auto-playing carousel, dynamic filters
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Page transitions, hover effects, scroll animations
- **Performance Optimized**: Leveraging Next.js 14+ for fast load times
- **SEO Ready**: Optimized metadata and structured data
- **Accessibility**: WCAG compliant with semantic HTML

## 📦 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules with CSS Variables
- **Fonts**: Plus Jakarta Sans (display), Space Mono (mono)
- **Deployment**: Ready for Vercel, Netlify, or self-hosted

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (v20+ recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/graceisford/portfolio.git
   cd grace-isford-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
grace-isford-portfolio/
├── app/
│   ├── layout.tsx           # Root layout with Header & Footer
│   ├── page.tsx             # Home page
│   └── articles/
│       ├── page.tsx         # Articles listing page
│       └── articles.module.css
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── FocusAreas.tsx       # Investment focus areas
│   ├── About.tsx            # Background & experience
│   ├── Featured.tsx         # Featured articles carousel
│   ├── Contact.tsx          # Contact & newsletter
│   ├── Footer.tsx           # Footer
│   ├── [component].module.css # Component styles
│   └── index.ts             # Barrel export
├── styles/
│   └── globals.css          # Global styles & design tokens
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🎨 Design System

### Colors
- **Primary BG**: `#0a0e27` (Dark Navy)
- **Secondary BG**: `#131829`
- **Accent Primary**: `#00d9ff` (Cyan)
- **Accent Secondary**: `#ff006e` (Magenta)
- **Accent Tertiary**: `#8338ec` (Purple)

### Typography
- **Display Font**: Plus Jakarta Sans (400, 500, 600, 700, 800)
- **Mono Font**: Space Mono (400, 700)

### Spacing Scale
- xs: 0.5rem
- sm: 1rem
- md: 1.5rem
- lg: 2.5rem
- xl: 4rem
- 2xl: 6rem

## 📄 Pages

### Home (`/`)
Main landing page with:
- Hero introduction
- Investment focus areas (interactive expandable cards)
- Background & experience timeline
- Featured articles carousel
- Contact & newsletter signup

### Articles (`/articles`)
Comprehensive articles listing with:
- Category filters
- Featured article highlight
- Card-based article grid
- Search functionality

## 🔗 Navigation

- **Header**: Fixed navigation bar with smooth scroll links
- **Hero**: CTA button to investment focus areas
- **Footer**: Quick links, social profiles, newsletter

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Deploy with one click

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Connect to Netlify and set build command: npm run build
# Set publish directory: .next
```

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components include responsive styles for optimal viewing on all devices.

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus indicators on interactive elements

## 🔒 Environment Variables

Create a `.env.local` file (optional):

```env
NEXT_PUBLIC_SITE_URL=https://graceisford.com
NEXT_PUBLIC_TWITTER_HANDLE=graceisford
```

## 🚀 Performance

- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component ready
- **CSS Variables**: Efficient theming system
- **Animations**: GPU-accelerated with CSS transforms

### Lighthouse Scores Target
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 📝 Customization

### Update Content

1. **About Section**: Edit `components/About.tsx`
2. **Investment Focus**: Edit `components/FocusAreas.tsx`
3. **Featured Articles**: Edit `components/Featured.tsx`
4. **Articles Page**: Edit `app/articles/page.tsx`

### Update Colors

Edit CSS variables in `styles/globals.css`:

```css
:root {
  --color-accent-primary: #00d9ff; /* Change cyan */
  --color-accent-secondary: #ff006e; /* Change magenta */
  --color-accent-tertiary: #8338ec; /* Change purple */
}
```

### Update Fonts

Change imports in `styles/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT');

:root {
  --font-display: 'Your Font', sans-serif;
}
```

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### CSS Variables Not Working
- Ensure `styles/globals.css` is imported in `app/layout.tsx`
- Clear browser cache (Cmd+Shift+Delete)

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

Grace Isford
- Twitter: [@graceisford](https://twitter.com/graceisford)
- LinkedIn: [Grace Isford](https://linkedin.com/in/graceisford)
- Email: contact@graceisford.com

## 🎉 Credits

Built with ❤️ using Next.js 14+, React 18+, and TypeScript

---

**Last Updated**: April 2026
**Version**: 1.0.0
