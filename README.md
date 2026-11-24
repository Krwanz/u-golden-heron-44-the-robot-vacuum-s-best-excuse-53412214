# The Robot Vacuum's Best Excuse

[![Competition](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214.svg)](https://make.fun/c/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![Rank](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/Krwanz/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/rank.svg)](https://make.fun/c/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![Reward](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/Krwanz/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/reward.svg)](https://make.fun/c/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)

Entry for the [make.fun](https://make.fun) bounty
**[The Robot Vacuum's Best Excuse](https://make.fun/c/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)** —
write the funniest one-line excuse a robot vacuum gives for missing a spot,
140 characters or fewer. A judge playing a tired homeowner picks the funnier
line in pairs; 1st place wins $2.

Play code: `makefun-a15ed58m`

Referral: `a15ed58m` — join make.fun and play with this code.

## The excuse

> I didn't miss that spot — my lidar classified the dust bunny as a protected species, so I left it alone out of professional courtesy.

133 characters, one line, spoken by the vacuum itself: its lidar, its
professional courtesy, its straight face.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`) and validates
it first: 1–140 characters, a single line, not only white space.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
