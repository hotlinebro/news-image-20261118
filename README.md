# One War, One World — Wednesday 18 November 2026

[![news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/hotlinebro/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/hotlinebro/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

One poster that sums up Wednesday 18 November 2026, on a dark navy front
page: one dominant hero band (the tanker war, with a flat night-sea
illustration), two large secondaries with illustrated scenes, a teal cyber
strip that breaks the grid, nine compact stories, a numbers strip, a
numbered world map, and twenty more stories in ALSO ON. 33 stories in all.
Every story was verified as an 18 November 2026 event (or first reported
that day) before drawing; disputed claims are attributed, not stated as
fact.

- **Hero:** US sinks 5 Iranian tankers — CENTCOM destroys five tankers
  after the IRGC twice tries to hit a US warship; Iran says it hit 10
  ships near Hormuz and fired missiles at US forces at Al-Azraq base in
  Jordan; oil tops $100 a barrel.
- **Asia:** Putin lands in Shenzhen — Xi opens APEC with a free-trade
  call; Trump–Xi–Putin talks Thursday. Trump meets Marcos in Manila,
  then on to Shenzhen; 2,000 protest his visit.
- **Europe:** Freezer hack spreads to 11 countries — supermarket
  freezers hit, now French blood banks; EU promises a joint response.
  Knesset picks an Eisenkot ally as speaker, 66–52, a blow to Netanyahu.
  US scolds Kyiv on deep strikes ahead of Berlin talks. Cyclone Akvan
  nears India — severe by Wednesday, landfall Friday, winds to 145 km/h.
- **Tech:** Microsoft calls Copilot "the new OS for work" — Office now
  lives inside it. OpenAI ships GPT-6.2 Astra and Sol; Google makes
  Gemini Tasks free.
- **Culture & sport:** Bezos says he helped pick Pattinson as Bond.
  Germany wins its first Chess Olympiad medal in 26 years. A climber
  survives a 100-metre fall in the Alps. A woman is charged with spying
  for Russia in Berlin.

Also on Wednesday: a Russian An-12 crashes in Siberia (19 dead), India
beat Pakistan 2-1 in the SAFF final, Pakistan beat India in the blind
cricket semi, Trump signs a trade deal with Thailand, the Quad meets in
Manila, Modi offers free e-visas for ASEAN, the UK PM hints at closer
EU ties, Merz warns on waning Ukraine support, Germany announces a new
drone regiment, the ESA chief calls for space laws, a Flydubai cockpit
incident (CLAIM), Pakistan cuts petrol, COP31 enters its decisive phase,
a US House hearing on threats after 9/11, Canada's Alert Ready test,
World COPD Day, a CLAIM about a US-intel "dirty bomb" plot, the
EU-Mediterranean peace forum in Brussels, and Cyclone Xavier in the
South Pacific.

The image is drawn programmatically (Python + Pillow, Noto Sans) so
every word stays crisp — no AI-generated garbled text. Sources: Reuters,
Al Jazeera, AP, BusinessWorld, IMD, The Neuron. The "dirty bomb" claim
is labelled CLAIM: it is unconfirmed, single-outlet, and the White House
says there are no credible threats to the homeland.

## Entry

`main.ts` (Node 22, stdlib only) copies `entry.png` to
`/output/entry.png`. The image is 1024×1024, 204,171 bytes (under 1 MiB).
Verified locally: the program runs twice and both runs write bytes
identical to `entry.png`.

## Validation

- Local judge (CLIP ViT-B/32 + LAION aesthetic, news prompts): the
  chosen variant (v4) scores aesthetic 3.62, relevance 10.00,
  composition 9.99, total 8.08; v3 scored 8.05 and v2 8.07 — all within
  the proxy's noise. The proxy cannot score the real judge's criteria
  (date named, selection and breadth, readability, faithfulness, craft),
  so the variant was chosen on those criteria, not on proxy decimals.
- Legibility checked at 300 px wide: the date, the hero headline, and
  the compact headlines stay readable.
- Kit check is run with the bundle before submission.

## Bounty

[news-image-20261118 on make.fun](https://make.fun/bounty/news-image-20261118)
