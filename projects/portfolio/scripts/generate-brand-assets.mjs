import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const publicDir = path.join(projectRoot, 'public');
const favicon = await fs.readFile(path.join(publicDir, 'favicon.svg'));

const icons = [
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
];

await Promise.all(
  icons.map(([filename, size]) =>
    sharp(favicon, { density: 512 })
      .resize(size, size, { fit: 'fill' })
      .flatten({ background: '#3b231e' })
      .png({ compressionLevel: 9 })
      .toFile(path.join(publicDir, filename)),
  ),
);

const ogSvg = String.raw`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#3b231e"/>

  <g fill="none" stroke="#dfd3a1" opacity=".16">
    <circle cx="1122" cy="82" r="250" stroke-width="2"/>
    <circle cx="1122" cy="82" r="184" stroke-width="1"/>
    <circle cx="68" cy="618" r="190" stroke-width="1.5"/>
  </g>
  <circle cx="1080" cy="182" r="8" fill="#b76f73"/>
  <path d="M1080 103v55M1080 206v55" stroke="#dfd3a1" stroke-width="2" opacity=".62"/>

  <g transform="translate(92 205)">
    <rect width="220" height="220" rx="48" fill="#2d1916" stroke="#dfd3a1" stroke-width="2"/>
    <path d="M27 136C51 180 117 196 166 159C204 130 199 66 153 35" fill="none" stroke="#dfd3a1" stroke-width="5" stroke-linecap="round" opacity=".42"/>
    <g fill="none" stroke="#f4efdc" stroke-width="14" stroke-linecap="round" stroke-linejoin="round">
      <path d="M46 151 84 61l38 90M61 116h45"/>
      <path d="M138 61v90h39"/>
    </g>
    <circle cx="177" cy="58" r="10" fill="#b76f73"/>
  </g>

  <g font-family="Montserrat, Arial, sans-serif">
    <text x="370" y="246" fill="#d89a99" font-size="18" font-weight="600" letter-spacing="5">PORTFÓLIO • SOFTWARE • IA</text>
    <text x="366" y="334" fill="#f4efdc" font-size="61" font-weight="700" letter-spacing="-1.5">Agatha Lafaiety</text>
    <path d="M370 370h88" stroke="#b76f73" stroke-width="4" stroke-linecap="round"/>
    <text x="370" y="418" fill="#dfd3a1" font-size="27" font-weight="400" letter-spacing="2">Engenheira de Software e IA</text>
  </g>

  <g fill="#dfd3a1" opacity=".5">
    <circle cx="102" cy="89" r="3"/><circle cx="128" cy="89" r="3"/><circle cx="154" cy="89" r="3"/>
    <circle cx="102" cy="115" r="3"/><circle cx="128" cy="115" r="3"/><circle cx="154" cy="115" r="3"/>
  </g>
</svg>`;

await sharp(Buffer.from(ogSvg))
  .flatten({ background: '#3b231e' })
  .png({ compressionLevel: 9 })
  .toFile(path.join(publicDir, 'og.png'));

console.log('Generated favicon-derived icons and og.png');
