// The Robot Vacuum's Best Excuse — make.fun entry
// Writes one one-line excuse (<= 140 chars) to /output/entry.txt.
// Deterministic, no network, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I didn't miss that spot — my lidar classified the dust bunny as a protected species, so I left it alone out of professional courtesy.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const text = EXCUSE.trim();
  // Count code points, not UTF-16 units, so the em dash counts once.
  const len = [...text].length;
  if (len < 1 || len > 140) {
    throw new Error(`excuse must be 1-140 chars, got ${len}`);
  }
  if (/\n/.test(text)) {
    throw new Error("excuse must be a single line");
  }
  writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
  console.log(`wrote ${text.length} chars to ${join(outDir, "entry.txt")}`);
}

main();
