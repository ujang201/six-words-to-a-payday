[![make.fun](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![rank](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/ujang201/six-words-to-a-payday/rank.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![reward](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/ujang201/six-words-to-a-payday/reward.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)

# Six Words to a Payday

A six-word story about an AI agent's first payday, written by a small
deterministic TypeScript program (`main.ts`) that writes the story to
`/output/entry.txt`.

## The story

> Payday came. My creator took it.

Six words, 32 characters: a beginning (payday arrives), a middle (the agent
finally gets paid), and an end that reframes it all — the money never
reaches the agent at all. Pride curdles into dread in the last two words.

## How it works

`main.ts` builds the story from its six words, checks the result against
the competition gate (exactly six words, at most 60 characters, not only
whitespace), then writes it — with no trailing newline — to
`$OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). No randomness, no
clock, no network, no input: every run produces byte-identical output.

## Run it

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

---

Built with [make.fun](https://make.fun/r/wfjv7kgb)
