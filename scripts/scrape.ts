// ─────────────────────────────────────────────────────────────────────────────
// scripts/scrape.ts
// Web scraping utility using Cheerio + Axios to extract DevFest Lagos 2025
// public data (speakers, sponsors) from the live site for use as seed data.
//
// Usage:
//   npx ts-node scripts/scrape.ts
//   # or
//   npx tsx scripts/scrape.ts
//
// Output: Writes JSON files to lib/data/scraped/ for manual review.
// ─────────────────────────────────────────────────────────────────────────────

import axios from "axios";
import * as cheerio from "cheerio";
import * as fs from "fs";
import * as path from "path";

const BASE_URL = "https://2025.devfestlagos.com";

// Ensure output directory exists
const OUT_DIR = path.join(__dirname, "..", "lib", "data", "scraped");
fs.mkdirSync(OUT_DIR, { recursive: true });

// ── Helper: fetch a URL with retry logic ──────────────────────────────────────
async function fetchPage(url: string): Promise<string> {
  const response = await axios.get<string>(url, {
    headers: {
      // Mimic a browser to avoid bot-detection blocks
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml",
      "Accept-Language": "en-US,en;q=0.9",
    },
    timeout: 15_000,
  });
  return response.data;
}

// ── Scraper 1: Speaker CDN image URLs from homepage <link rel="preload"> ─────
async function scrapeSpeakers(): Promise<void> {
  console.log("📡 Fetching homepage to extract speaker images...");
  const html = await fetchPage(BASE_URL);
  const $ = cheerio.load(html);

  const speakerImages: string[] = [];

  // The live site preloads all speaker images in <head> with rel="preload"
  $('link[rel="preload"][as="image"]').each((_i, el) => {
    const href = $(el).attr("href") ?? "";
    // Only include Google Cloud Storage speaker photos
    if (href.includes("devfestlagos2025") && href.includes("Speaker")) {
      speakerImages.push(href);
    }
  });

  // Extract speaker names from the CDN URL pattern:
  // ".../Approved%20Speaker%20photos%20/John%20Doe.png"
  const speakers = speakerImages.map((url) => {
    const parts = decodeURIComponent(url).split("/");
    const filename = parts[parts.length - 1];
    const name = filename.replace(/\.(png|jpg|jpeg|webp)$/i, "");
    return {
      name,
      imageUrl: url,
      // Placeholder fields to be filled in manually or via another source
      title: "",
      company: "",
      tags: [] as string[],
    };
  });

  const outPath = path.join(OUT_DIR, "speakers.json");
  fs.writeFileSync(outPath, JSON.stringify(speakers, null, 2));
  console.log(`✅ Scraped ${speakers.length} speakers → ${outPath}`);
}

// ── Scraper 2: Sponsor logos from homepage ticker ────────────────────────────
async function scrapeSponsors(): Promise<void> {
  console.log("📡 Fetching homepage to extract sponsor logos...");
  const html = await fetchPage(BASE_URL);
  const $ = cheerio.load(html);

  const sponsorSet = new Set<string>();

  // The live site's sponsor ticker uses <img> tags with class containing 'logo'
  $("img").each((_i, el) => {
    const alt = $(el).attr("alt") ?? "";
    const src = $(el).attr("src") ?? $(el).attr("data-src") ?? "";

    // Filter to sponsor logo images (alt text like "sponsor-N" or known brand names)
    if (alt.startsWith("sponsor-") && src) {
      // Resolve relative URLs
      const fullSrc = src.startsWith("http") ? src : `${BASE_URL}${src}`;
      sponsorSet.add(
        JSON.stringify({
          name: alt,
          logoUrl: fullSrc,
          websiteUrl: "",
          tier: "gold",
        })
      );
    }
  });

  const sponsors = Array.from(sponsorSet).map((s) => JSON.parse(s));
  const outPath = path.join(OUT_DIR, "sponsors.json");
  fs.writeFileSync(outPath, JSON.stringify(sponsors, null, 2));
  console.log(`✅ Scraped ${sponsors.length} sponsors → ${outPath}`);
}

// ── Scraper 3: Page structure / nav links ────────────────────────────────────
async function scrapeNavLinks(): Promise<void> {
  console.log("📡 Fetching nav links...");
  const html = await fetchPage(BASE_URL);
  const $ = cheerio.load(html);

  const navLinks: { label: string; href: string }[] = [];
  $("nav a").each((_i, el) => {
    const label = $(el).text().trim();
    const href = $(el).attr("href") ?? "";
    if (label && href && !href.startsWith("http") && href !== "/") {
      navLinks.push({ label, href });
    }
  });

  const outPath = path.join(OUT_DIR, "nav-links.json");
  fs.writeFileSync(outPath, JSON.stringify(navLinks, null, 2));
  console.log(`✅ Scraped ${navLinks.length} nav links → ${outPath}`);
}

// ── Main runner ───────────────────────────────────────────────────────────────
async function main(): Promise<void> {
  console.log("\n🚀 DevFest Lagos 2025 — Web Scraper\n");

  try {
    await scrapeSpeakers();
    await scrapeSponsors();
    await scrapeNavLinks();

    console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ All scrapers complete!

Next steps:
1. Review the JSON files in lib/data/scraped/
2. Copy/merge relevant data into lib/data/speakers.ts, sponsors.ts, etc.
3. Fill in any missing fields (title, company, tier, websiteUrl)
4. Re-run \`npm run dev\` to see the updated data
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
  } catch (err) {
    console.error("❌ Scraper failed:", err);
    process.exit(1);
  }
}

main();
