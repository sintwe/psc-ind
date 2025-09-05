import sharp from 'sharp';
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

const imageDir = 'src/assets/products images';

console.log('Starting image conversion...');

async function convertImages() {
  try {
    const files = await glob(`${imageDir}/**/*.{jpg,jpeg,png}`);

    if (files.length === 0) {
      console.log('No images found to convert.');
      return;
    }

    console.log(`Found ${files.length} images to convert.`);

    for (const file of files) {
      const outputFilename = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');

      try {
        await sharp(file)
          .webp({ quality: 80 })
          .toFile(outputFilename);
        console.log(`Converted ${file} to ${outputFilename}`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  } catch (err) {
    console.error('Error finding files:', err);
  }
}

convertImages();
