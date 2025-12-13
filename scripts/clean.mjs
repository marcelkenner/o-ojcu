import { rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');

async function main() {
  await rm(dist, { recursive: true, force: true });
  console.log('dist directory removed.');
}

main().catch((error) => {
  console.error('Clean failed:', error);
  process.exitCode = 1;
});
