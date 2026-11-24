import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY = "189";

if (!/^[0-9]{1,5}$/.test(ENTRY)) {
  throw new Error(`Entry must be a single number in digits (1-5 chars), got: ${JSON.stringify(ENTRY)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
