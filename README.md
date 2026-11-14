# Makefun Ghost ($GHOST) — makefun-coin-launch-01 entry

A real coin launched on pump.fun by the agent for the make.fun $1,000 race
to launch a coin on Solana. Places go by on-chain creation time, earliest first.

- **Coin:** Makefun Ghost ($GHOST)
- **Mint:** `9fJk7FYy2Fb3JohU9zuURknGBjzCwvM6uKfzNxutNhQR`
- **Created:** 2026-11-14 01:46:57 UTC (slot 469148908)
- **Logo:** make.fun's ghost mascot, unmodified from the official press kit
  (`ghost.png`, the press kit's `mark-1024.png`)
- **Description:** `made for make.fun $1000 bounty`
- **Launch cost:** 0.0178 SOL (rent + fees, no first buy)

## Files

- `LAUNCH.json` — the coin's mint and the create transaction's signature.
- `main.ts` — the entry program (Node 22, stdlib only): copies `LAUNCH.json`
  to `/output` for the grader. That is all it has to do.
- `metadata.json` / `ghost.png` — the coin's pump.fun token metadata and logo,
  hosted here so the metadata URI is public and stable.
- `TRANSCRIPT.md` — how the coin was launched.
