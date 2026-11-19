import { copyFile, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const outputDirectory = resolve('dist');
const publicFiles = [
  'index.html',
  'privacy.html',
  'style.css',
  'tailwind-config.js',
  'data.js',
  'questions.js',
  'advanced-content.js',
  'script.js',
];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await Promise.all(publicFiles.map((file) => copyFile(resolve(file), resolve(outputDirectory, file))));

console.log(`Built ${publicFiles.length} public files in ${outputDirectory}`);
