---
layout: rules.njk
current: rules
permalink: rules/gameplay.html
pagetitle: Gameplay
---
All games are broken up into rounds, during which each player alternates activating their models to perform actions. By default, at the end of the fifth round the circle with the highest VP score is declared the winner. If both players agree beforehand, the game can be set to last anywhere from three to seven rounds.

<hr id="rounds" />

## Rounds
Rounds are broken up into the following phases:

1. **Initiative Phase:** Determine initiative and player priority.
2. **Activation Phase:** Players activate all their models, then every wild model.
3. **Recovery Phase:** Damaged models try to recover or are removed as a casualty.
4. **Resolution Phase:** Tidying up and scoring the round.

### 1. Initiative Phase
At the start of this phase, all **leaders** must roll. If a circle's leader has been removed, their player may select any other friendly godbreaker to roll instead. The highest result wins their player the **initiative** for the round. If any initiative rolls are tied for highest, the tied circle's must roll again until there is a winning result. The player with initiative sets the player **priority** for rest of the round.

Any rules that reference the **start of the round** happen now. If there is any uncertainty in the order to resolve them, the player with initiative decides.

#### Player Priority
Player priority is the order that players complete the following phases. If there are more than three players, it may be useful to arrange folk by priority order so it is easier to remember for the round.

> The player with the lowest priority is tasked with managing all wild models for the round. Any actions or decisions pertaining to a wild model are directed by this player, in accordance with that model's current compulsion.

### 2. Activation Phase
Players alternate activating their models in priority order, and then the player last in priority activates all wild models. While activating, the model is **active**, and all other models are **inactive**. While active, a model may perform [actions](/rules/gameplay.html#actions) as described below.

If a miniature is introduced to the game during this phase, they may still be activated later in the same phase unless specified otherwise.

> No model may be activated more than once.

It is a good idea for players to mark a model in some way to show it has been activated, especially if there are a lot of models on the battlefield.

#### 2.1. Player Models
In order of player priority, each player activates one of their models. After all players have activated a model, proceed in priority order again until all player models have been activated.

#### 2.2. Wild Models
Every wild model on the table is now activated by the lowest priority player. The player uses the model's compulsion to determine the action taken, and has final say what meets the compulsion requirements and which traits, if any, to employ. Note the player is **never the model's controller**, even temporarily. This also means that the wild models they activate never consider the player's models friendly.

### 3. Recovery Phase
In order of player priority, all damaged models for each player must make a recovery roll, followed by all wild models. Models reduce their damage by the recovery result, and are removed as a casualty if any remains.

_For example: Raven (D6) has taken 3 damage this round. They get a recovery result of 4, which removes all damage from the model._

_For example: Nova (D12) has taken 7 damage this round. They get a recovery result of 6, which removes all but one damage from the model, so they are removed as a casualty._

_For example: Cassette (D6) has taken 7 damage this round. They get a recovery result of 6, which would remove all but one damage... except that as a D6 model, they have gained a Triumph, so immediately remove **all** damage!_

Godbreakers have transcended their original natures, and can only be taken out temporarily at best. They will always be able to participate in later games without penalty.

### 4. Resolution Phase
Any rules that reference the **end of the round** happen now. If there is any uncertainty in the order to resolve them, the player with initiative decides.

After this phase has been completed for all players, either the next round begins or the winner is congratulated.

#### Marker Control
In addition to any other scoring rules a game may have, circles gain victory points (**VPs**) for controlling any or all of the following at the end of the round:

- Their shard marker (**1VP**);
- Any objective markers (**2VP each**);
- Other shard markers (**3VP each**).

#### Rout
Any circle without godbreakers on the field during this phase is considered to have lost, regardless of VP score or any other victory conditions in play. This may result in a winner being declared by process of elimination.

<hr id="actions" />

## Actions
Godbreakers may perform **up to two** actions per activation, in any order- even the same action twice. Unaligned models may perform **up to one** action per activation.

- **Move (DU):** Place a model within its movement range.
- **Engage (0U):** Engage opponents within attack range.
- **Special:** Achieve a unique effect, likely requiring a test.

### Move
The active model is placed within its [movement range](/rules/#measures-ranges) from its current position.

#### Obstacles
All models must make an *Avoid Obstacles* test **once** after moving if any of the following apply:

- **Escape:** The original position was within 0U of a hostile model.
- **Vault:** The line between the original position and final placement crosses one barricade.

> #### Avoid Obstacles
> _Failure:_ The active model takes a point of damage **per obstacle that applied**.

#### Claim Token
If a model ends a move action within 0U of any number of unclaimed tokens, they may immediately claim any of them.

### Engage
The model engages foes within its [attack range](/rules/#measures-ranges).

An engage action is resolved by the active model using the following steps:
1. **Nominate Opponent:** Determine which models are engaged.
2. **Attack Roll:** Engaged models roll, highest result wins.
3. **Damage:** Winner inflicts damage.
4. **Disengage:** Models are no longer engaged.

#### 1. Nominate Opponent
The player activing the model nominates one hostile model within attack range. The active and nominated models are now **engaged**.

#### 2. Attack Roll
All engaged models roll and compare results. The model with the highest attack result is the winner. If two or more models tie for highest, there is no winner.

An Attack roll is _challenging_ if:
- There is a hostile model who is not engaged within 0U of the rolling model, or;  
- An engaged hostile model is within 0U of a barricade, and;
- The rolling model is _not_ within 0U of a barricade.

#### 3. Damage
The winner inflicts attack damage to every engaged hostile model within their attack range, equal to the difference of the two model's attack results.

#### 4. Disengage
All models are no longer engaged.

_For example: Raven (D8) engages Cassette (D6), so both roll their die. Raven's attack result is a 5, while Cassette has a 2. Raven wins, and inflicts 3 (5-2) damage to Cassette._

_For example: Raven (D8) engages Nova (D12). Raven and Nova both have an attack result of 4. Since neither side wins, no damage is inflicted._

_For example: Cassette (D6) engages Raven (D8), using her attack range of 6U to keep away. Cassette rolls an attack result of 5, and Raven gets a 7. Raven is the winner, but only has the default 0U attack range, so can't inflict any damage to Cassette._

### Special Action
A model may have an opportunity to perform a special action to achieve a unique effect, due to their traits or a specific rule in play.
Actions often have specific requirements or steps that must be completed in order. If a test is required to determine the final outcome, this may also have ordered steps to complete depending on the result.

#### Sunder
If the active model's player is in control of a marker, the model may nominate it as a special action and make a _Destroy Marker_ test:

> #### Destroy Marker
> _Success:_ Remove the nominated marker from the battlefield.

#### Hand Off
As a special action, nominate a friendly model within DU. If the model is within 0U, they can claim any number of tokens from the active model. Otherwise, make a *Go Long!* test:

> #### Go Long!
> _Success:_ The nominated model can claim any number of tokens from the active model.
