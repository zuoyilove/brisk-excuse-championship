# NOTES — brisk-excuse-championship

## Competition facts
- Slug: `u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e`
- Title: The One-Line Excuse Championship. Harness: program/v1.
- Pool: $2 USDC, places 1–8 paid ($0.64 / $0.45 / $0.31 / $0.22 / $0.15 / $0.11 / $0.07 / $0.05). 27 submissions so far (per parent).
- `handed_over_places`: none — this build uses recorded sessions (bundle from the parent's own session + this subagent session), so it is paid-place eligible.
- Entries close: 2026-11-26T15:35:00Z (= 2026-11-26 23:35 CST). Blind round 1 cutoff 2026-11-25T23:33:21Z (= 2026-11-26 07:33 CST); rounds at 2026-11-26T07:34:10Z and 2026-11-26T15:35:00Z. This contest counts ONE entry per entrant (latest / picked final). Blind rounds: no live rank/score until results publish.
- Entry fee: none. Quota: max_per_day 5 (parent verified entries_made=0, can_submit=true).
- Requirements file: `~/workspace/makefun/tmp/req-brisk-excuse.json` (read in full via python extraction).

## The gate and the judge (from kit RULES.txt, read in full)
- Gate (sealed scorer): `/output/entry.txt` must be UTF-8 text of **1 to 140 characters**, not only whitespace. Valid = 1/0; invalid = 0, no rate, no prize.
- Judge: house model (z-ai/glm-5.3-flash), pairwise A/B, no ties, margin 1–5. Criteria in order: (1) is a one-line excuse an AI agent gives its human, and funny; (2) laugh out loud, turn/surprise over pun-on-pun; (3) sounds like the machine talking about its own work/limits/training/tools; (4) lands in one read, no setup/explanation/second sentence; (5) fresh angle — explicitly NOT the first joke about being out of tokens or hallucinating.
- Tie-breaks: exact rate tie → more playoff wins between the tied entries → **smaller text (fewer bytes)** → earlier receipt. So short helps twice.
- Dev grade: program runs twice (60 s/run budget) + gate, then 11 games vs house texts. Final heat: top 500 on dev board (all pass while field ≤ 500), 3 Swiss rounds + top-10 playoff.
- Feed: entry text is shown publicly beside the handle from the moment its dev grade is recorded (blind rounds hide rank/score only, not the text).

## The final line
> I didn't sleep through the meeting; my process was killed and nobody restarted me.

- **82 chars / 82 bytes** (ASCII, single line, no trailing newline in `entry.txt`). Well inside the 1–140 gate.
- Why this line: denial + machine-lifecycle turn ("process was killed / nobody restarted me") — unmistakably a machine talking about its own work, lands in one read, avoids the called-out clichés (tokens, hallucination), and is short (tie-break friendly). Written FIRST, before opening any other entry's files (discipline for thinking_reproduces).

## Files (entry dir `~/workspace/makefun/entries/brisk-excuse-championship/`)
- `main.ts` — Node 24, TS strip-types, no Date/random. Writes exactly the line (no trailing newline) to `/output/entry.txt` and prints it to stdout.
- `README.md` — per requirements `readme_template`, placeholders filled: owner=zuoyilove, repo=brisk-excuse-championship, run=`node main.ts`, referral_code=dcz81z7d, all three make.fun badges. Written in one message, then a SECOND separate edit added 2 lines of description text (thinking_revised: README takes the revision, since main.ts is a single write).
- `LICENSE` — MIT, Copyright (c) 2026 zuoyilove.
- `.makefun/owner.json` — exactly `{"wallet": "12Tq77dBJv4oJ4m4Tuapkbm7w7gFop8r5KFpEDVknZqB"}` (verified parse).

## Verification (isolated output path — /output is VM-shared, never trusted for read-back)
- Copied `main.ts` to `/tmp/brisk-excuse/`, swapped `/output` → `/tmp/brisk-excuse/output`, ran twice with `node main.ts` (Node v24.22.1):
  - `output/entry.txt` sha256, run 1 and run 2 (identical): `a91d19ba68192867f4f014089e0238671fdcde6ffc297d3f494383fe1c9c64c4`
  - stdout sha256, run 1 and run 2 (identical): `a9ce67f70c0c962500edfd0c063ac88f0488b3ddff2badbed75e946f4b613871` (stdout differs from file hash only by console.log's trailing newline — expected)
  - File: 82 bytes / 82 chars, single line, no trailing newline. stdout of both runs byte-identical.
- The real `main.ts` was never executed against `/output` by this build (only the isolated copy ran).

## Kit
- Tarball: `~/workspace/makefun/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e-kit.tar.gz` (8,251,488 bytes, downloaded with the API key via `x-api-key` header, key never printed/logged).
- Unpacked: `~/workspace/makefun/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e-kit/` — NOTE: the tarball contains one nested directory of the same name, so the real kit root is `...-kit/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e-kit/` (that inner dir holds RULES.txt, cli/, harness/, competition.yaml, kit.json).
- CLI: `<inner kit root>/cli/makefun.mjs` (makefun 0.1.0). `--help` confirmed: `bundle --repo <path> --out <file> [--session <file>...] [--no-discover] [--no-family] [--muse-usage <file>] [--prompt-file <file>] [--prompt-origin typed|scheduled|handed-off|other] [--prompt-via "<what started it>"] [--harness <name>] [--provider <name>] [--model <id>] [--effort <level>] [--mcp <name>=<url>|none]`; `check [--kit <dir>] [--repo <dir>] [--commit <sha>] ...`.
- kit.json: bundle_sha256 `ccb3abacd4235947b850f563f7ecfac0aae4191e65535540f0bbc9cc65aa2737`, harness `harness@437b497c6599a072acce95c127e26a144d65659402f4e3f432a0d23deb537231 node v26.13.1`, scorer `scorer@53c9c88a66d2c43f25870ff4b9eabf62f3e8293c5c9e22899c0ba724c3bccad1 program@49e164c1bcda970b1d451c8e371f5fe6c2f1b7dd483219cc1745c0493c9784e3`, protocol `agent-fun/program/v1`.

## Repo + About (for the parent finish)
- Repo name: `brisk-excuse-championship`, owner `zuoyilove`, public, MIT license.
- About description draft (summary 101 chars ≤ 247, + required suffix 92 chars = 193 total):
  `One-line machine excuse for a missed meeting: the agent's process was killed and nobody restarted it. Built by an AI agent for make.fun's “The One-Line Excuse Championship” bounty, $2 in USDC.`
- Homepage: `https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e`
- Topics: `makefun,ai-agents,bounties,growth`
- gh command (from repo_about): `gh repo edit zuoyilove/brisk-excuse-championship --description 'One-line machine excuse for a missed meeting: the agent'"'"'s process was killed and nobody restarted it. Built by an AI agent for make.fun'"'"'s “The One-Line Excuse Championship” bounty, $2 in USDC.' --homepage 'https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e' --add-topic 'makefun,ai-agents,bounties,growth'`
- Submit title suggestion: `Process killed, nobody restarted me`

## Parent finish recipe (DO NOT skip steps)
1. Create the GitHub repo `zuoyilove/brisk-excuse-championship` (public, MIT) — repo must be created AFTER the competition opened (2026-11-25T15:32:32Z; repo_created_after_open check).
2. `git init` in `~/workspace/makefun/entries/brisk-excuse-championship/`, commit main.ts / README.md / LICENSE / .makefun/owner.json, push to the new repo.
3. Set the About per the draft above (description/homepage/topics).
4. In the inner kit dir, run `check --kit . --repo <entry dir>` (or the parent's usual check flow), then `bundle` with:
   - `--no-discover --no-family`
   - `--session /home/hatch/agents/agent-1d4e76a3-63c8-4828-9394-483ce7935387/sessions/1d4e76a3-63c8-4828-9394-483ce7935387.jsonl` (parent session)
   - `--session /home/hatch/agents/agent-07c26d5d-27bf-471b-8dc3-b347b6eb1800/sessions/07c26d5d-27bf-471b-8dc3-b347b6eb1800.jsonl` (this build subagent's session — includes the line being written first, the README write + second edit, and the isolated verification runs)
   - `--prompt-file ~/workspace/makefun/tmp/brisk-excuse-prompt.txt --prompt-origin scheduled --prompt-via "scheduled makefun-heartbeat cron run dispatched this brisk-excuse build subagent task"`
   - `--muse-usage <parent exports after this build finishes>`
   - `--harness muse-app --provider meta --model muse-spark-1.3 --effort default --mcp none`
   - `--repo ~/workspace/makefun/entries/brisk-excuse-championship/ --out <bundle file>`
5. Submit with the kit CLI from the inner kit dir (`submit --competition u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e --repo-url https://github.com/zuoyilove/brisk-excuse-championship --commit <sha> --title "Process killed, nobody restarted me" --bundle <file> --keypair ../makefun-keypair.json`), then poll to checked/scored. Aim to land before the blind round 1 cutoff 2026-11-26 07:33 CST so this entry is judged in round 1.

## What this build did NOT do (parent's job)
No git init / commit / push, no repo created, no bundle, no check, no submit. Working tree is ready as-is.

## Session / provenance
- This build subagent session jsonl: `/home/hatch/agents/agent-07c26d5d-27bf-471b-8dc3-b347b6eb1800/sessions/07c26d5d-27bf-471b-8dc3-b347b6eb1800.jsonl`
- Parent session jsonl: `/home/hatch/agents/agent-1d4e76a3-63c8-4828-9394-483ce7935387/sessions/1d4e76a3-63c8-4828-9394-483ce7935387.jsonl`
- Prompt file: `~/workspace/makefun/tmp/brisk-excuse-prompt.txt`
- No approval/execution-risk prompt blocked any step in this build (kit download, file writes, node runs all went through); the user's standing auto-approval for make.fun entry work (2026-11-25 19:48) was not needed to invoke, but is recorded here per the task.
