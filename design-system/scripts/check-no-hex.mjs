#!/usr/bin/env node
/**
 * Token-compliance gate: bans hex color literals (#RGB / #RRGGBB / #RRGGBBAA) in
 * component source. Consumers MUST read from tokens.ts or the MUI palette.
 *
 * Scope:
 *  - Scans `src/components/**` excluding `*.stories.tsx` and `*.test.tsx`.
 *  - Allows hex in `src/tokens/**`, `src/theme/**`, `src/catalog/**` (these are
 *    the legitimate sources of truth for color values).
 *  - Allows hex inside `// allow-hex` single-line opt-outs (on the same line).
 *
 * Usage: `node scripts/check-no-hex.mjs`
 * Exit code 0 if clean, 1 if violations found.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');
const scanRoot = join(repoRoot, 'src', 'components');

const HEX = /#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/;

const SKIP_FILE = (p) => /\.(stories|test)\.tsx?$/.test(p);

const violations = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const abs = join(dir, entry);
    const st = statSync(abs);
    if (st.isDirectory()) {
      walk(abs);
      continue;
    }
    if (!/\.(ts|tsx|css)$/.test(entry)) continue;
    if (SKIP_FILE(abs)) continue;
    const src = readFileSync(abs, 'utf8');
    src.split('\n').forEach((line, i) => {
      if (line.includes('allow-hex')) return;
      const m = line.match(HEX);
      if (m) {
        violations.push({
          file: relative(repoRoot, abs).split(sep).join('/'),
          line: i + 1,
          match: m[0],
          snippet: line.trim(),
        });
      }
    });
  }
}

walk(scanRoot);

if (violations.length === 0) {
  console.log('✓ check-no-hex: no hex literals in component source.');
  process.exit(0);
}

console.error(`✗ check-no-hex: ${violations.length} hex literal(s) in component source.`);
console.error('  Consumers MUST read from src/tokens/tokens.ts or the MUI palette.\n');
for (const v of violations.slice(0, 40)) {
  console.error(`  ${v.file}:${v.line}  ${v.match}`);
  console.error(`    ${v.snippet}`);
}
if (violations.length > 40) {
  console.error(`  … and ${violations.length - 40} more.`);
}
console.error('\n  To opt out on a single line, append "// allow-hex" with justification.');
process.exit(1);
