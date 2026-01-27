import FirecrawlApp from '@mendable/firecrawl-js';
import fs from 'fs';
import path from 'path';

const FIRECRAWL_API_KEY = process.env.FIRECRAWL_API_KEY;

if (!FIRECRAWL_API_KEY) {
  console.error('❌ FIRECRAWL_API_KEY environment variable is required');
  process.exit(1);
}
const OLD_SITE_URL = 'https://serenitymentalhealthcenters.com';

const app = new FirecrawlApp({ apiKey: FIRECRAWL_API_KEY });

async function crawlSite() {
  console.log(`🔍 Starting crawl of ${OLD_SITE_URL}...\n`);

  try {
    // Crawl the entire site using v2 API
    const crawlResponse = await app.crawl(OLD_SITE_URL, {
      limit: 100,
      scrapeOptions: {
        formats: ['markdown', 'html'],
      },
    });

    if (!crawlResponse.success) {
      console.error('❌ Crawl failed:', crawlResponse.error);
      return;
    }

    console.log(`✅ Crawl complete! Found ${crawlResponse.data.length} pages.\n`);

    // Create output directory
    const outputDir = path.join(process.cwd(), 'crawl-results');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Save each page
    const pages = [];
    for (const page of crawlResponse.data) {
      const url = page.metadata?.sourceURL || page.url || 'unknown';
      const title = page.metadata?.title || 'Untitled';

      pages.push({
        url,
        title,
        description: page.metadata?.description || '',
      });

      console.log(`📄 ${title}`);
      console.log(`   URL: ${url}`);
      console.log('');
    }

    // Save summary
    const summary = {
      crawledAt: new Date().toISOString(),
      siteUrl: OLD_SITE_URL,
      totalPages: crawlResponse.data.length,
      pages: pages
    };

    fs.writeFileSync(
      path.join(outputDir, 'summary.json'),
      JSON.stringify(summary, null, 2)
    );

    // Save full crawl data
    fs.writeFileSync(
      path.join(outputDir, 'full-crawl.json'),
      JSON.stringify(crawlResponse.data, null, 2)
    );

    console.log(`\n📁 Results saved to ${outputDir}/`);
    console.log('   - summary.json (page list)');
    console.log('   - full-crawl.json (all content)');

    // Print content summary
    console.log('\n' + '='.repeat(60));
    console.log('📋 CONTENT SUMMARY');
    console.log('='.repeat(60) + '\n');

    for (const page of crawlResponse.data) {
      const url = page.metadata?.sourceURL || page.url || 'unknown';
      const title = page.metadata?.title || 'Untitled';
      const markdown = page.markdown || '';

      console.log(`\n${'─'.repeat(60)}`);
      console.log(`📄 ${title}`);
      console.log(`🔗 ${url}`);
      console.log(`${'─'.repeat(60)}`);

      // Print first 1000 chars of content
      if (markdown) {
        const preview = markdown.substring(0, 1000).trim();
        console.log(preview);
        if (markdown.length > 1000) {
          console.log('\n... [content truncated]');
        }
      }
    }

  } catch (error) {
    console.error('❌ Error during crawl:', error.message);

    // Try alternative: scrape individual pages
    console.log('\n🔄 Trying to scrape main pages individually...\n');

    const pagesToScrape = [
      '/',
      '/about',
      '/treatments',
      '/conditions',
      '/locations',
      '/contact',
      '/tms-therapy',
      '/ketamine-therapy',
      '/medication-management',
      '/depression',
      '/anxiety',
      '/ptsd',
      '/adhd',
      '/bipolar-disorder',
      '/ocd',
    ];

    const results = [];

    for (const pagePath of pagesToScrape) {
      try {
        const url = `${OLD_SITE_URL}${pagePath}`;
        console.log(`Scraping: ${url}`);

        const scrapeResult = await app.scrapeUrl(url, {
          formats: ['markdown'],
        });

        if (scrapeResult.success) {
          results.push({
            url,
            title: scrapeResult.metadata?.title || pagePath,
            description: scrapeResult.metadata?.description || '',
            markdown: scrapeResult.markdown || '',
          });
          console.log(`  ✅ ${scrapeResult.metadata?.title || pagePath}`);
        }
      } catch (e) {
        console.log(`  ⚠️ Could not scrape ${pagePath}: ${e.message}`);
      }
    }

    if (results.length > 0) {
      // Create output directory
      const outputDir = path.join(process.cwd(), 'crawl-results');
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      fs.writeFileSync(
        path.join(outputDir, 'scraped-pages.json'),
        JSON.stringify(results, null, 2)
      );

      console.log(`\n📁 Results saved to ${outputDir}/scraped-pages.json`);

      // Print content
      console.log('\n' + '='.repeat(60));
      console.log('📋 SCRAPED CONTENT');
      console.log('='.repeat(60));

      for (const page of results) {
        console.log(`\n${'─'.repeat(60)}`);
        console.log(`📄 ${page.title}`);
        console.log(`🔗 ${page.url}`);
        console.log(`${'─'.repeat(60)}`);

        if (page.markdown) {
          const preview = page.markdown.substring(0, 1500).trim();
          console.log(preview);
          if (page.markdown.length > 1500) {
            console.log('\n... [content truncated]');
          }
        }
      }
    }
  }
}

crawlSite();
