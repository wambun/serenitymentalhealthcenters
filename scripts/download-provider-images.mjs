import fs from 'fs';
import path from 'path';
import https from 'https';

const providerImages = [
  // Leadership
  { id: 'teejay-tripp', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1294817-1.jpg' },
  { id: 'jayson-tripp', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1294209-2.jpg' },

  // Arizona - Gilbert
  { id: 'sarah-buttles', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1401169-1-830x1024.jpg' },
  { id: 'aaron-dahl', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1420547-1.jpg' },
  { id: 'sarah-moody', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1435367.jpg' },
  { id: 'ryan-wandler', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1424033-1.png' },
  { id: 'brad-zehring', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1474521-1-1024x807.jpg' },
  { id: 'mikayla-butkus', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-19-at-12.43.43-1-899x1024.jpeg' },

  // Arizona - Chandler
  { id: 'aaron-clay', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1294867-1.jpg' },
  { id: 'jeffrey-ely', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1424048-1.jpg' },
  { id: 'david-gallegos', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1420538-1.jpg' },
  { id: 'david-hauser', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1401247-950x1024.jpg' },
  { id: 'michelle-reijonen', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1420123-1.jpeg' },
  { id: 'elizabeth-rotella', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1424027-1.png' },

  // Arizona - Desert Ridge
  { id: 'winona-belmonte', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1294885-1.jpg' },
  { id: 'kayla-cartwright', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1401186-1-874x1024.jpg' },
  { id: 'yong-lee', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1420549-1-977x1024.jpg' },
  { id: 'melissa-leuzzi', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1433526-1-906x1024.jpg' },
  { id: 'lauren-marienau', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1474525-1-1024x806.jpg' },
  { id: 'angela-oakley', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1445676-1.jpg' },
  { id: 'ekus-onosode', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1401218-1-1.jpeg' },
  { id: 'elias-ruiloba', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1420550-1-1-933x1024.jpg' },

  // Arizona - Biltmore
  { id: 'nathaniel-brooks', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1420553-984x1024.webp' },
  { id: 'tara-leedham', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1474523-1-1024x838.webp' },
  { id: 'marcus-nielson', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1401207-1-683x1024.webp' },
  { id: 'alexandria-penner', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1493045.webp' },
  { id: 'laura-skiba', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1431008-1.png' },
  { id: 'deborah-stegner', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1294854-1.jpg' },
  { id: 'naomi-park', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/10/naomi-park-1-1-1024x1024.jpg' },
  { id: 'marci-bastien', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2026/01/Marci-Bastien-Temp-photo-883x1024.jpeg' },
  { id: 'christian-gerwe', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/10/naomi-park-1-1-1024x1024.jpg' },

  // Colorado - Cherry Creek
  { id: 'austin-alderton', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1424031-1.jpg' },
  { id: 'nico-bohm', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1424053-1.jpg' },
  { id: 'jennifer-french', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1294912-1.jpg' },
  { id: 'johnny-patterson', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1401245-1.jpg' },
  { id: 'michael-wolfe', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2026/01/michael-wolfe-1-1024x1024.jpg' },
  { id: 'emily-brookshire', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-20-at-08.11.14-1-855x1024.jpeg' },

  // Colorado - Colorado Springs
  { id: 'sarah-gates', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1474341-1.jpg' },
  { id: 'matthew-mills', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1445691-1.jpg' },
  { id: 'roselie-woodard', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1483009-1-1024x854.jpg' },
  { id: 'elaina-wooten', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1506293-1.jpg' },
  { id: 'talmage-nielsen', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/10/talmage-nielsen-1.jpg' },

  // Colorado - Lakewood
  { id: 'michaela-black', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/07/1508967.webp' },
  { id: 'kara-guglielmo', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1483010-1-1024x807.jpg' },
  { id: 'aimee-jackowski', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1424032-1.png' },
  { id: 'jordan-suchy', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1420244-1.jpg' },
  { id: 'angela-zimmerman', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1420236.jpg' },
  { id: 'dustin-froehlich', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1420544-1-915x1024.jpg' },

  // Florida - Jacksonville
  { id: 'sherry-carter', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1428593-1.jpg' },
  { id: 'dianne-dekeyser', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1294922-1.jpg' },
  { id: 'cristina-lopez-seiler', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1508277.jpg' },
  { id: 'david-tyson', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2026/01/admin-ajax-3.jpg' },

  // Florida - Orlando
  { id: 'joshua-lotfallah', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1424045-1.png' },
  { id: 'modupe-mcintosh', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1424035-1.png' },

  // Florida - Lake Mary
  { id: 'tim-larson', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/12/1424045-1.png' },

  // Georgia - Sandy Springs
  { id: 'bianca-mitchell', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1460788-1.jpg' },
  { id: 'tiffany-talton', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1474529-1-1024x813.jpg' },
  { id: 'avis-gibson-holmes', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2026/01/admin-ajax-4.jpg' },
  { id: 'lacey-jeong', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2026/01/lacey-jeong-1-1024x1024.jpg' },
  { id: 'nia-anderson', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2026/01/nia-anderson.jpg' },
  { id: 'paul-ferns', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2026/01/paul-ferns-1024x1024.jpg' },

  // Nevada - Las Vegas
  { id: 'rowena-de-la-cruz', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1492453-1.jpg' },
  { id: 'david-gibson', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1430809-1.jpg' },
  { id: 'tavi-thongdy', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1424050-1.png' },

  // Nevada - Henderson
  { id: 'sterling-hahn', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1424054-1.png' },
  { id: 'jayison-mccorkle', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1451002-1.jpg' },
  { id: 'anna-simonenko', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1428606.jpg' },

  // Texas - Austin
  { id: 'jeffrey-twiss', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1474528-1024x967.jpg' },
  { id: 'joseph-houchins', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2026/01/Joseph-Houchins-1-1024x1024.jpg' },
  { id: 'ryan-jones', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2026/01/ryan-jones-1.jpg' },

  // Texas - San Antonio
  { id: 'carlos-aleman', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1451018-1.jpg' },
  { id: 'lucy-flores', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1474718-1-1005x1024.jpg' },
  { id: 'shadi-lavasani', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1431820-1.jpg' },
  { id: 'erik-lundmark', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1294920-1.jpg' },
  { id: 'andrew-norman', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1401174-1-886x1024.jpg' },
  { id: 'monique-reyes-lester', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1467375-1.jpg' },

  // Texas - Fort Worth
  { id: 'alexa-westbrook-quintanilla', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/10/alexa-westbrook.jpg' },

  // Texas - Frisco
  { id: 'elise-griffin', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/12/1401184-1-217x300-1.jpg' },
  { id: 'alex-chung', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/10/alex-chung-1.jpg' },
  { id: 'zahra-hassanally', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/12/zahra-hassanally-1-819x1024.jpg' },
  { id: 'erica-canterbury', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/10/erica-canterbury-1.jpg' },

  // Utah - Holladay
  { id: 'benjamin-shapiro', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1420551-1-1019x1024.jpg' },
  { id: 'elizabeth-zeker', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1294798-1.jpg' },
  { id: 'ivan-mayor', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2026/01/ivan-mayor-1-1024x1024.jpg' },

  // Utah - Provo
  { id: 'jenna-hyer', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1506326.jpg' },
  { id: 'tanner-manwaring', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1294843.jpg' },
  { id: 'jenn-zeer', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1424042.jpg' },

  // Utah - Lehi
  { id: 'mah-mekolle', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1294787-1.jpg' },
  { id: 'pamela-ziel', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1294791-1.jpg' },

  // Utah - Layton
  { id: 'brenda-galvez', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1294811-1.jpg' },
  { id: 'bryce-gosney', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1401201-1.jpg' },
  { id: 'sarah-samsky', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1294810-1.jpg' },
  { id: 'anthony-vita', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/06/1483750-1.jpg' },

  // Virginia - Fairfax
  { id: 'vanessa-freeman', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2026/01/vanessa-freeman-crop-1024x975.jpg' },
  { id: 'lan-anh-tran', url: 'https://serenitymentalhealthcenters.com/wp-content/uploads/2025/09/lan-anh-tran-crop.jpg' },
];

const outputDir = path.join(process.cwd(), 'public/images/providers');

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const ext = url.split('.').pop().split('?')[0].toLowerCase();
    const validExt = ['jpg', 'jpeg', 'png', 'webp'].includes(ext) ? ext : 'jpg';
    const filepath = path.join(outputDir, `${filename}.${validExt}`);

    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        https.get(response.headers.location, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve({ id: filename, path: `/images/providers/${filename}.${validExt}` });
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve({ id: filename, path: `/images/providers/${filename}.${validExt}` });
        });
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file on error
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log(`Downloading ${providerImages.length} provider images...\\n`);

  const results = [];
  const errors = [];

  for (const provider of providerImages) {
    try {
      process.stdout.write(`Downloading ${provider.id}... `);
      const result = await downloadImage(provider.url, provider.id);
      results.push(result);
      console.log('✓');
    } catch (error) {
      errors.push({ id: provider.id, error: error.message });
      console.log(`✗ ${error.message}`);
    }
    // Small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 100));
  }

  console.log(`\\n✅ Downloaded ${results.length} images`);
  if (errors.length > 0) {
    console.log(`⚠️  ${errors.length} errors:`);
    errors.forEach(e => console.log(`   - ${e.id}: ${e.error}`));
  }

  // Output the image paths for updating providers.ts
  console.log('\\n// Image paths for providers.ts:');
  results.forEach(r => {
    console.log(`  { id: '${r.id}', image: '${r.path}' },`);
  });
}

downloadAllImages();
