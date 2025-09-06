import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageDir = 'src/assets/products images';

fs.readdir(imageDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(imageDir, file);
    if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const outputFilename = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      const outputPath = path.join(imageDir, outputFilename);

      sharp(filePath)
        .webp({ quality: 80 })
        .toFile(outputPath, (err, info) => {
          if (err) {
            console.error(`Error converting ${file}:`, err);
          } else {
            console.log(`Converted ${file} to ${outputFilename}`);
          }
        });
    }
  });
});
