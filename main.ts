// Entry for makefun-coin-launch-01: the coin itself was launched on pump.fun by
// the agent (see LAUNCH.json for its mint and create signature). This program's
// only job is to hand LAUNCH.json to the grader: it copies it from the
// repository root to the output directory. Node 22, standard library only,
// no network, no clock, deterministic.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(BOT_DIR, 'LAUNCH.json'), join(OUTPUT_DIR, 'LAUNCH.json'));
