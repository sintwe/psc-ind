import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputFile = 'src/assets/safety-shoes-hero.jpg';
const outputDir = 'src/assets/optimized';
const outputFile = path.join(outputDir, 'safety-shoes-hero.webp');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

sharp(inputFile)
  .webp({ quality: 80 })
  .toFile(outputFile, (err, info) => {
    if (err) throw err;
    console.log(info);
  });
