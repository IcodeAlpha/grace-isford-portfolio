# Deployment Guide

This guide covers deploying the Grace Isford portfolio to various hosting platforms.

## Vercel (Recommended)

Vercel is the optimal choice as it's built by the creators of Next.js.

### Step-by-Step:

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Settings > Environment Variables
   - Add your variables from `.env.local`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at `grace-isford.vercel.app`

5. **Custom Domain**
   - Go to Settings > Domains
   - Add your domain (e.g., graceisford.com)
   - Update DNS records as instructed

## Netlify

### Step-by-Step:

1. **Create a Netlify account** at https://netlify.com

2. **Connect your repository**
   - Click "New site from Git"
   - Select GitHub
   - Choose your repository
   - Configure build settings (leave defaults)

3. **Deploy**
   - Netlify will automatically build and deploy
   - Your site will be live

## Self-Hosted (AWS, DigitalOcean, etc.)

### Using Docker:

1. **Build the Docker image**
   ```bash
   docker build -t grace-isford .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 grace-isford
   ```

3. **Deploy to your server**
   - Push image to Docker Hub or your registry
   - Pull and run on your server
   - Set up reverse proxy (nginx/Apache)

### Using PM2:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start with PM2**
   ```bash
   pm2 start "npm start" --name "grace-portfolio"
   pm2 save
   pm2 startup
   ```

## CloudFlare Pages

1. **Connect your GitHub**
   - Go to CloudFlare Pages
   - Connect GitHub repository
   - Build settings: `npm run build` → `.next`

2. **Deploy**
   - CloudFlare will build and deploy automatically

## Performance Optimization

### Before Deploying:

1. **Optimize images**
   ```bash
   npm install sharp
   ```

2. **Enable compression**
   - Already configured in Next.js

3. **Check performance**
   ```bash
   npm run build
   npm start
   # Test with Chrome DevTools Lighthouse
   ```

### After Deploying:

1. **Monitor Core Web Vitals**
   - Set up analytics in `.env.local`
   - Use Google PageSpeed Insights
   - Monitor with Vercel Analytics

2. **Set up monitoring**
   - Install Sentry for error tracking
   - Set up uptime monitoring

## Database Integration (if needed)

For a portfolio with dynamic content, you may want:

### Option 1: Headless CMS
- **Contentful** - Easy integration, good for content
- **Sanity** - Full customization, great DX
- **Strapi** - Self-hosted option

### Option 2: Database
- **PostgreSQL** - Reliable, scalable
- **MongoDB** - Flexible schema
- **Firebase** - Real-time, easy setup

## CI/CD Pipeline

### GitHub Actions (Free)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      - name: Deploy to Vercel
        uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## Environment Variables

Set these in your deployment platform's dashboard:

```
NEXT_PUBLIC_CONTACT_EMAIL=grace@graceisford.com
NEXT_PUBLIC_GA_ID=your-ga-id
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourhandle
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourprofile
NEXT_PUBLIC_LUX_URL=https://lux.com/profile
```

## Monitoring & Analytics

### Google Analytics

1. Create GA4 property
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### Error Tracking (Sentry)

```bash
npm install @sentry/nextjs
```

Configure in `next.config.js`

### Performance Monitoring

- Vercel Analytics (included with Vercel)
- Google PageSpeed Insights
- WebPageTest.org

## Troubleshooting

### 404 errors after deploy
- Check that all routes are correctly configured
- Verify `.next` folder is included in build

### Slow performance
- Enable image optimization
- Check CloudFlare cache settings
- Review bundle size with `npm analyze`

### Build failures
- Clear cache: `npm run build` with fresh dependencies
- Check Node version (18+)
- Review build logs for errors

## Rollback

### Vercel
- Dashboard → Deployments → Select previous version → "Promote to Production"

### GitHub
```bash
git revert <commit-hash>
git push origin main
```

## Support

For platform-specific help:
- **Vercel Support**: https://vercel.com/support
- **Netlify Support**: https://support.netlify.com
- **CloudFlare Support**: https://support.cloudflare.com

---

Need help? Contact: grace@graceisford.com
