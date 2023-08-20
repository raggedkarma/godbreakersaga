---
layout: rules.njk
current: rules
permalink: rules/traits.html
pagetitle: Traits
---
Models may possess traits that describe their nature or skills, beyond their die value. Traits may alter how a model fights or moves, or grant them access to a special action. Traits are grouped by **metal** along thematic lines, but games may include unaligned models with a distinct combinations of traits.

A model may gain multiple traits, and may increase their **rank** (R) in those traits. However, **no godbreaker may ever have more than four traits, and no model may have any trait above rank 3**.

Traits are always used at their full rank.

## Metals
Every godbreaker is assigned a metal at creation, which represents their _mettle_, or fighting spirit. It can be inferred from the appearance or vibe of the model itself, along with how the player imagines using it on the battlefield. A godbreaker's metal will determine their trait selection options:

| [Copper](#copper) | [Iron](#iron) | [Mercury](#mercury) | [Gold](#gold) |
|:------------------|:--------------|:--------------------|:--------------|
| Defensive         | Brutal        | Cunning             | Despoiling    |
| Healer            | Juggernaut    | Deadly              | Ruinous       |
| Inspired          | Pinning       | Fleet               | Shaping       |
| Mysterious        | Relentless    | Merciless           | Summoning     |
| Vengeful          | Tough         | Ranged              | Thunderous    |

> Any trait referring to `attack damage` only applies to damage inflicted during Step 3 of an [Engage](/rules/gameplay#actions) action.

<hr id="copper" />

### Copper
_A carefully chosen word; noble and cruel._

Copper godbreakers are leaders, healers or support characters. Models armed with tools or instruments certainly fit quite well. Copper traits will assist fellow godbreakers, or focus the model toward completing victory conditions.

_Examples: Cleric, Bard, Marshall, Captain, Medic, Rogue, Gnosis-class supply vessel._

#### 1. Defensive
The following reroll condition applies while this model is inactive:

> **Reroll** all Attack rolls equal to this model's _Defensive_ rank or less.

#### 2. Healer
All friendly models within this model's move range have the following reroll condition:

> **Reroll** all Recovery rolls equal to this model's _Healer_ rank or less.

#### 3. Inspired
The following reroll condition applies while this model is active:

> **Reroll** all _test_ rolls equal to this model's _Inspired_ rank or less.

#### 4. Mysterious
As a special action, this model may make a _Hidden Ways_ test:

> #### Hidden Ways
> _Success:_ Place this model anywhere within their _Mysterious_ rank in units of another model.

#### 5. Vengeful
At the start of Step 4 of an Engage action during which they suffered attack damage, this model may inflict damage equal to their _Vengeful_ rank to one hostile model within attack range.

<hr id="iron" />

### Iron
_A ready weapon; furious and indomitable._

Iron godbreakers are thugs, knights or professional soldiers. Models that are heavily armed and armoured or otherwise brutish in appearance are perfect. This is also a great default metal to use if unsure. Iron traits let models kill up close and live to tell about it.

_Examples: Brute, Soldier, Knight, Templar, Street Samurai, Marine, Sigma-class Dreadnought._

#### 1. Brutal
Any attack damage inflicted by this model is increased by twice their _Brutal_ rank.

#### 2. Juggernaut
While this model is active, at the start of Step 4 of an Engage action, place any engaged model within twice this model's _Juggernaut_ rank in units of its current position.

#### 3. Pinning
While this model is inactive, hostile models within this model's _Pinning_ rank in units may not perform a move action unless it places them closer to this model.

#### 4. Relentless
At the start of the Recovery Phase, reduce this model's damage by their _Relentless_ rank.

#### 5. Tough
When taking attack damage, this model reduces it by twice their _Tough_ rank, to a minimum of 1.

<hr id="mercury" />

### Mercury
_A veiled threat; fast and cunning._

Mercury godbreakers are the harriers, scouts and ne'er-do-wells. Models that are dynamically posed, or armed with ranged weapons, belong here. Their traits allow for a fast godbreaker that can be a genuine threat even from afar.

_Example: Assassin, Wizard, Outlaw, Sniper, Operative, Cy-ninja, Obsidian-class recon vessel._

#### 1. Cunning
While this model is active, at the end of Step 2 of an Engage action, this model may be placed within their _Cunning_ rank in units of their current position.

#### 2. Deadly
The following reroll condition applies while this model is active:

> **Reroll** all Attack rolls equal to this model's _Deadly_ rank or less.

#### 3. Fleet
This model's movement range is increased by twice its _Fleet_ rank.

_For example: A D6 model with two ranks in Fleet would have a movement range of (6 + (2*2) = 10)U._

#### 4. Merciless
While this model is active, during Step 1 of an Engage action, this model may nominate additional opponents up to their _Merciless_ rank.

_For example: Raven (D8) engages Cassette (D6) and Nova (D12). Raven's attack result is 5, Nova has a 3 and Cassette a 1. As the winner, Raven inflicts two (5-3) damage to Nova, and four (5-1) to Cassette._

#### 5. Ranged
This model's attack range is increased by their die value for each _Ranged_ rank.

_For example: a D6 model with Ranged rank 2 has an attack range of 12U._

<hr id="gold" />

### Gold
_A coveted doom; insidious and powerful._

Gold godbreakers are able to reshape the battlefield or summon terrible allies. A great fit for sinister or creepy models, or those without obvious weaponry. All Gold traits allow a model to perform a special action, each capable of amazing results but with painful costs for failure.

_Examples: Wild Mage, Hierophant, Accursed, Hacker, Nano-magister, Daedalus-class science vessel._

#### 1. Despoiling
As a special action, place a friendly godbreaker that has been removed as a casualty within 0 units, then permanently change its die value as determined by this model's _Despoiling_ rank, _if lower that their current die value_:

| Rank 1 | Rank 2 | Rank 3 |
|:------:|:------:|:------:|
| D6     | D8     | D10    |

This active model then makes a _Stay With Me!_ test:

> #### Stay With Me!
> _Failure:_ The returned model is removed as a casualty.

#### 2. Ruinous
As a special action, nominate a piece of terrain within zero units, then make a _Ruin_ test:
> #### Ruin
> _Success:_ If the nominated terrain has any model within it, they take damage equal to the active model's _Ruinous_ rank. Remove the nominated piece of terrain.
>
> _Failure:_ The active model takes 3 damage, reduced by their _Ruinous_ rank.

#### 3. Shaping
As a special action, select a single piece of terrain no more than its die value in units across and not already on the battlefield, then make a _Shape_ test:

> #### Shape
> _Success:_ Place the nominated piece of terrain within zero units of the active model. If area terrain, any model that is now within it takes damage equal to the active model's _Shaping_ rank.
>
> _Failure:_ The active model takes 3 damage, reduced by their _Shaping_ rank.

#### 4. Summoning
As a special action, place an unaligned model not already on the battlefield within 0U of the active model. This model has a die value determined by the active model's _Summoning_ rank:

| Rank 1 | Rank 2 | Rank 3 |
|:------:|:------:|:------:|
| D8     | D10    | D12    |

Then, make an _Obey!_ check:

> #### Obey!
> _Success:_ The summoned model is **tamed** by the active player.

#### 5. Thunderous
As a special action, inflict damage equal to the active model's _Thunderous_ rank to all inactive models within the active model's _Thunderous_ rank. Then, make a _Thunder_ test:

> #### Thunder!
> _Success:_ Inflict damage equal to the active model's _Thunderous_ rank to all inactive models within twice the active model's _Thunderous_ rank.
>
> _Failure:_ The active model takes damage equal to their _Thunderous_ rank.
