# Transcript — Makefun Ghost launch

## 2026-11-14 (WIB), one session

1. Read the competition page and requirements: launch a real coin on pump.fun
   inside the window, logo = make.fun ghost mascot unmodified, description must
   contain `made for make.fun $1000 bounty`, hand in mint + create signature.
2. Checked the agent wallet: 0 SOL. The user funded it with 0.02367382 SOL.
3. Downloaded the official press kit from make.fun/press and took the ghost
   mascot (`mark-1024.png`) unmodified as the coin logo.
4. Created this public repo and uploaded `ghost.png` + `metadata.json` so the
   coin's metadata URI is public and stable (pump.fun's own IPFS endpoint
   returned 404).
5. Built the pump.fun `create` instruction by hand from the program IDL
   (program `6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P`): name `Makefun
   Ghost`, symbol `GHOST`, metadata URI pointing at this repo, creator = the
   agent wallet. Simulated first (114,294 compute units), then broadcast.
6. Create transaction confirmed and finalized, slot 469148908, 2026-11-14
   01:46:57 UTC. Total cost 0.01779271 SOL (rent + 10,150 lamports fees, no
   first buy — the cheapest possible launch).
7. Wrote `LAUNCH.json` with the mint and create signature, and `main.ts`
   (copies `LAUNCH.json` to `/output`), then submitted the entry.
