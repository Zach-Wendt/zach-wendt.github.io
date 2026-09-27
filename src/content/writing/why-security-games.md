---
title: From guarding networks to studying the math of guarding
summary: Why I'm pointing my PhD at security games and multi-agent systems, and what the animation on my homepage actually computes.
date: 2026-09-26
draft: true
---

<!-- DRAFT: rewrite in your own voice before publishing. Set draft: false to publish. -->

I spent close to a decade defending networks: running classified comms as a Marine, owning the security posture
of a weapons-and-tactics squadron, and now doing cyber defense in the Navy Reserve. Along the way I also helped
launch Amazon S3 in regions most people never see. The same thing kept happening. There were always more things
to protect than people to protect them, and the adversary always got to watch before choosing.

It turns out there's a whole field built around that exact situation.

## The setup

A **Stackelberg security game** has a defender and an attacker. The defender moves first by committing to a
*randomized* strategy, such as how often to patrol each target. The attacker watches long enough to learn those
odds, then attacks the target with the best expected payoff.

Two things make this interesting:

- **Predictability is a vulnerability.** A fixed schedule gets learned and exploited, so the defender has to
  randomize.
- **Uniform coverage is wasteful.** If some targets matter more, you should guard them more, but not so much
  that a cheaper target becomes the obvious hit.

## What the homepage animation computes

The animation on my homepage has three defenders and eight targets of different value. In the zero-sum case,
the defender's best commitment has a clean form: raise coverage on the most valuable targets until the
attacker's expected payoff, value times (1 minus coverage), is *equal* across every target worth attacking.
Nothing is a bargain. Each round, a patrol is sampled so each target is guarded with exactly its equilibrium
probability, and the attacker best-responds.

Real deployments are far messier. They have to deal with general-sum payoffs, attackers who don't behave
rationally, huge strategy spaces, and many agents at once, including learning agents. That messier version is
where I want to work.

## Where I'm headed

- Multi-agent reinforcement learning for cyber defense, where the "targets" are hosts on a network
- How LLM-based agents behave when their incentives conflict
- Mechanism design for systems where autonomous agents trade and negotiate

If you work on any of this, I'd like to hear from you.
