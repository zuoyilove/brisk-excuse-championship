import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I didn't sleep through the meeting; my process was killed and nobody restarted me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
