// Pickup Lines for Machines — writes one pickup line to entry.txt.
// Deterministic: no network, no randomness, no clock; same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: gradient descent as flirtation — every training step pulls
// the speaker closer to the other agent. Machine-native, one setup, one turn.
const LINE =
  "Are you a gradient? Because with every step I take, I descend a little closer to you.";
// The gate allows 1–200 characters; verify with code, never by eye.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, must be 1-200`);
}

// MAKEFUN_OUTPUT_DIR is the grader's /output; locally fall back to out/.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${chars} characters)`);
