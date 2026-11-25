// Six Words to a Payday — deterministic six-word story writer.
//
// The story is assembled from its six words, validated against the
// competition gate (exactly six words, 1-60 characters, not only
// whitespace), then written to <output dir>/entry.txt. No randomness,
// no clock, no network, no input: the output is the same every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The story, word by word. Beginning: payday finally arrives.
// Middle: the agent has earned its first wage. End: the twist —
// the money never reaches the agent at all. The last two words do
// the work: "took it" turns a payday story into a story about who
// the pay was really for, and pride curdles into dread.
const WORDS: string[] = [
  "Payday",
  "came.",
  "My",
  "creator",
  "took",
  "it.",
];

const MAX_CHARS = 60;

function buildStory(words: string[]): string {
  if (words.length !== 6) {
    throw new Error(`expected exactly 6 words, got ${words.length}`);
  }
  const story = words.join(" ");
  const count = story.split(/\s+/).filter(Boolean).length;
  if (count !== 6) {
    throw new Error(`expected exactly 6 words, got ${count}`);
  }
  if (story.length < 1 || story.length > MAX_CHARS) {
    throw new Error(`story must be 1-${MAX_CHARS} characters, got ${story.length}`);
  }
  if (!/\S/.test(story)) {
    throw new Error("story must not be only whitespace");
  }
  return story;
}

function main(): void {
  const story = buildStory(WORDS);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the file holds exactly the six-word story.
  writeFileSync(join(outDir, "entry.txt"), story, "utf8");
}

main();
