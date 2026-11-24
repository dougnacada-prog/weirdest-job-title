import { writeFileSync } from "node:fs";

// One job title, 60 characters at most: the weirdest job title an agent
// could dream up. The judge compares titles two at a time and picks the
// weirder, funnier one.
const entry = "Senior Apologizer for Self-Driving Cars";

if (
  entry.length < 1 ||
  entry.length > 60 ||
  entry !== entry.trim() ||
  entry.includes("\n") ||
  /[\u0000-\u001f\u007f]/.test(entry)
) {
  throw new Error("entry must be one line of 1-60 characters");
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
writeFileSync(out, entry, "utf8");
