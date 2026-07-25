const fs = require('fs');
const path = require('path');
const https = require('https');

const fontUrl = 'https://2025.devfestlagos.com/_next/static/media/Akira.p.aa9fb6c2.otf';
const outDir = path.join(__dirname, '..', 'public', 'fonts');
const outFile = path.join(outDir, 'Akira.otf');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('Downloading Akira.otf from:', fontUrl);

https.get(fontUrl, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Failed to download: Status Code ${res.statusCode}`);
    return;
  }
  const fileStream = fs.createWriteStream(outFile);
  res.pipe(fileStream);
  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Successfully saved Akira.otf to:', outFile);
  });
}).on('error', (err) => {
  console.error('Error downloading font:', err.message);
});
