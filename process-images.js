import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'src', 'assets', 'images');
const outputDir = inputDir;

const sizes = [400, 800];

async function processImages() {
  try {
    const files = fs.readdirSync(inputDir);
    
    for (const file of files) {
      // Додано webp у список вхідних форматів, але ігноруємо вже згенеровані -400 та -800
      if (file.match(/\.(jpg|jpeg|png|webp)$/i) && !file.match(/-\d+\.(jpg|jpeg|png|webp|avif)$/i)) {
        const filePath = path.join(inputDir, file);
        const parsed = path.parse(file);
        const baseName = parsed.name;

        console.log(`Processing: ${file}`);

        for (const width of sizes) {
          const image = sharp(filePath).resize({ width, withoutEnlargement: true });

          // AVIF
          await image
            .avif({ quality: 80 })
            .toFile(path.join(outputDir, `${baseName}-${width}.avif`));

          // WebP
          await image
            .webp({ quality: 80 })
            .toFile(path.join(outputDir, `${baseName}-${width}.webp`));

          // JPEG fallback
          await image
            .jpeg({ quality: 80, progressive: true })
            .toFile(path.join(outputDir, `${baseName}-${width}.jpg`));
            
          console.log(`  -> Generated ${width}w variants for ${baseName}`);
        }
      }
    }
    console.log('Image processing complete!');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

processImages();
