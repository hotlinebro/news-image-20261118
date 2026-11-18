// SPDX-License-Identifier: MIT
//
// One War, One World — news-image-20261118 entry.
// The poster itself is entry.png beside this file; this program's only job
// is to place an exact copy at /output/entry.png, twice, byte-identical.
// Node 22, standard library only, no network.
//
// The poster: a dark-navy front page for Wednesday 18 November 2026.
// One dominant hero (US sinks 5 Iranian tankers; Iran hits back; oil tops
// $100), two large secondaries (Putin lands in Shenzhen for APEC; Knesset
// picks an Eisenkot ally 66-52), a teal cyber strip (freezer hack spreads
// to 11 countries), nine compact stories, a numbers strip, a numbered
// world map, and twenty more stories in ALSO ON. 33 stories total, every
// one verified as 18 November news. Disputed claims are attributed.
import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.png", import.meta.url);
copyFileSync(source, join(outDir, "entry.png"));
