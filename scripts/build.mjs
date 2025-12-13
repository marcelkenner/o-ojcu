import { cp, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');

const copyPlan = [
  { from: join(root, 'src', 'pages'), to: dist },
  { from: join(root, 'src', 'styles'), to: join(dist, 'styles') },
  { from: join(root, 'src', 'assets'), to: join(dist, 'assets') },
  { from: join(root, 'src', 'static'), to: dist },
];

async function ensureDist() {
  await mkdir(dist, { recursive: true });
}

async function copyAll() {
  for (const { from, to } of copyPlan) {
    await mkdir(to, { recursive: true });
    await cp(from, to, { recursive: true, force: true });
  }
}

async function main() {
  await ensureDist();
  await copyAll();
  console.log('Static assets copied to dist.');
}

main().catch((error) => {
  console.error('Build failed:', error);
  process.exitCode = 1;
});
