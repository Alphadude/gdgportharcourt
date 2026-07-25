# DevFest Lagos 2025 — Next.js Clone

A pixel-faithful clone of [2025.devfestlagos.com](https://2025.devfestlagos.com/) built with:

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS**
- **Cheerio + Axios** (web scraping)

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
app/
  layout.tsx              ← Root layout (fonts, metadata, Navbar, Footer)
  page.tsx                ← Homepage
  speakers/page.tsx       ← All speakers
  schedule/page.tsx       ← 5-day schedule with tab switching
  schedule/ScheduleTabs.tsx
  faqs/page.tsx           ← FAQ accordion
  team/page.tsx           ← Organising team

components/
  Navbar.tsx              ← Responsive navbar with mobile drawer
  Footer.tsx              ← Footer with socials
  HeroSection.tsx         ← Animated hero (date, location, CTA)
  SpeakerCard.tsx         ← Speaker image + info card
  SessionCard.tsx         ← Schedule session row
  SponsorGrid.tsx         ← Tiered sponsor grid
  SponsorTicker.tsx       ← Auto-scrolling sponsor ticker

lib/
  types.ts                ← TypeScript interfaces
  data/
    speakers.ts           ← 20 seed speakers (real CDN images)
    sessions.ts           ← Sample 5-day schedule
    sponsors.ts           ← Sponsor list with tiers
    faqs.ts               ← 10 FAQ items

scripts/
  scrape.ts               ← Cheerio scraper utility
```

---

## Akira Font

The hero uses the **Akira Extended** display font. The project currently uses
**Inter Black** as a fallback.

To use real Akira:
1. Download from https://www.dafont.com/akira-expanded.font
2. Place `Akira.otf` in `public/fonts/`
3. Update `app/layout.tsx` to use `localFont` (see comments in the file)

---

## Data Scraping

To re-scrape fresh data from the live site:

```bash
npm run scrape
```

Output JSON files land in `lib/data/scraped/` — review and merge into the
seed data files manually.

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.x | Framework (App Router + SSG) |
| React | 18.x | UI |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Styling |
| Cheerio | 1.x | HTML parsing for scraper |
| Axios | 1.x | HTTP client for scraper |
| tsx | 4.x | Run TypeScript scripts directly |

---

## Deployment

Deploy instantly to Vercel:

```bash
npx vercel
```

Or push to GitHub and connect to [vercel.com](https://vercel.com).
