import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const fileArg = args.indexOf('--file');
const actionArg = args.indexOf('--action');

if (fileArg === -1) {
    console.log('Usage: node scripts/image-mimic.mjs --file <path> [--action analyze|optimize]');
    process.exit(1);
}

const filePath = path.resolve(args[fileArg + 1]);
const action = actionArg !== -1 ? args[actionArg + 1] : 'analyze';

// Check if ImageMagick is installed
try {
    execSync('magick -version', { stdio: 'ignore' });
} catch (e) {
    console.error('Error: ImageMagick (magick) is not installed or not in PATH.');
    console.error('On Mac: brew install imagemagick');
    process.exit(1);
}

if (!fs.existsSync(filePath)) {
    console.error(`Error: File not found: ${filePath}`);
    process.exit(1);
}

async function run() {
    if (action === 'analyze') {
        analyzeImage(filePath);
    } else if (action === 'optimize') {
        optimizeImage(filePath);
    }
}

function analyzeImage(file) {
    console.log(`Analyzing ${path.basename(file)}...`);

    // Extract top colors
    try {
        const colors = execSync(`magick "${file}" -colors 5 -define histogram:unique-colors=true -format "%c" histogram:info:-`)
            .toString()
            .split('\n')
            .filter(line => line.trim())
            .map(line => {
                const match = line.match(/#[0-9A-F]{6}/i);
                return match ? match[0] : null;
            })
            .filter(Boolean);

        // Get dimensions
        const dimensions = execSync(`magick identify -format "%wx%h" "${file}"`).toString().trim();

        console.log('--- ANALYSIS RESULTS ---');
        console.log(`Dimensions: ${dimensions}`);
        console.log(`Key Palette: ${colors.join(', ')}`);

        // Save to metadata.json
        const metadataPath = file.replace(path.extname(file), '.metadata.json');
        fs.writeFileSync(metadataPath, JSON.stringify({ dimensions, colors }, null, 2));
        console.log(`Metadata saved to: ${metadataPath}`);
    } catch (error) {
        console.error('Analysis failed:', error.message);
    }
}

function optimizeImage(file) {
    const ext = path.extname(file);
    const targetWebP = file.replace(ext, '.webp');

    console.log(`Optimizing ${path.basename(file)}...`);

    try {
        // Convert to WebP with 80% quality and resize to max 1920 width
        execSync(`magick "${file}" -resize "1920>" -quality 80 "${targetWebP}"`);
        console.log(`Successfully optimized to: ${targetWebP}`);
    } catch (error) {
        console.error('Optimization failed:', error.message);
    }
}

run();
