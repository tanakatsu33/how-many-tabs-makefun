// make.fun entry — "How Many Tabs Do You Have Open?" Answer: 189.
//
// Validates the answer and writes it as a single line to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default: /output/entry.txt).
//
// Why 189: surprising yet believable, oddly specific (not a round or meme
// number), and it hints at a research-heavy life of tabs "saved for later".

import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY = "189";
const NEWLINE = "\n";

// A valid entry is a plain number written in 1-5 ASCII digits (no sign, decimals, or spaces).
function isValidEntry(value: string): boolean {
  return /^[0-9]{1,5}$/.test(value);
}

if (!isValidEntry(ENTRY)) {
  throw new Error(`Entry must be a single number in digits (1-5 chars), got: ${JSON.stringify(ENTRY)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, "entry.txt");
fs.writeFileSync(outFile, ENTRY + NEWLINE, "utf8");
