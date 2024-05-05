---
layout: honour.njk
current: rules
permalink: honour-lies/gameplay.html
pagetitle: Gameplay
---

<hr id="setup" />

## Setup
Firstly, players place one or more terrain boards in the middle of the play area, then determine Initiative. Players then place their deployment boards aligned with each terain board, starting with the player without Initiative. Players then deploy their units, starting with the player without Initiave. Both players must first deploy a unit to occupy the command holding in their deployment area, then take it in turns to place units anywhere on their deployment board.

For basic play, the youngest player has the Initiative.

<hr id="rounds" />

## Rounds
Each round, players take turns activating a unit, starting with the player with Initiative. Each unit may only be activated once per round. Instead of activating a unit, or if they have no more units to activate, a player may pass for the rest of the round and only their opponent may activate units. Once both players have passed, the round is over and a new round begins.

> Disordered units cannot be activated.

#### Conclusion
Add 1VP to a player's tally for every destroyed enemy unit. At the end of the game, occupied command holdings are worth 5VP. The side with the highest VP total Is declared the winner.

<hr id="activation" />

## Activation
Units have the following activation flow, which is a list of potential actions that must be performed in order:

1. Ranged Combat
2. Reform
3. Move
4. Move (if not engaged or in difficult terrain)
5. Close Combat

Outside of special rules, a unit is not expected to perform any specific action, but must perform actions in the order provided. For example, a unit cannot shoot or reform after it has moved, unless specifically permitted. Once a unit is activated it becomes the 'active unit' until another unit is activated.

### Ranged Combat
A unit with a ranged value may, at the start of its turn, engage a visible unit directly ahead of it in ranged [combat](#combat).

### Reform
The unit changes its formation from either regular to wall or column, or from wall or column to regular. Since a unit with two stands cannot be in the regular formation, it may reform directly from wall to column.

To reform, select one of the central stands in the front rank from which to rebuild the new formation. During a reform, no stand may be placed in front of the current front rank.

### Move
Moving a unit requires repositioning one of its stands in alignment with the unit, then rebuilding the formation from the placed stand. If a unit is in difficult terrain, it may not may the second move in a turn. There are three ways a unit can move: _advance_, _retreat_, and _pivot_.

> A unit with only a single stand remaining may not move, but may rotate on the spot up to 90 degrees.

#### Advance
Reposition a stand in the rear rank in front of the unit, with either corner touching and the other no more than 30mm forward. If a stand would be placed overlapping or touching an enemy stand during an Advance, the unit immediately engages it in close combat instead of being destroyed.

When a unit engages an enemy, align a stand from the engaging unit with the enemy. From the engaging stand, rebuild the formation. An engaging unit may adopt another formation when rebuilding if the alternative is a stand overlapping an enemy.

#### Retreat
Reposition a stand from the front rank behind the unit in alignment, then rebuild the formation.

#### Pivot
Reposition a stand from the front rank to either side of the unit in alignment, oriented to face away from the unit, then rebuild the formation. While rebuilding, no stand may be placed in front of the initially repositioned one.

### Close Combat
A unit that engaged an enemy unit must now fight a close [combat](#combat).

<hr id="combat" />

## Combat
All combats are fought in the following order:
1. Calculate Base Combat Score
2. Bid Health
3. Resolution

### Calculate Base Combat Score
The active unit is the attacker, and counts every stand in the front rank of their unit. The unit being engaged is the defender, and counts every stand in their unit's longest column:

| Attacker                           | Defender                           |
| :--------------------------------: | :--------------------------------: |
| \[ + \]\[ + \]<br />\[ ^ \]\[ ^ \] | \[ + \]\[ ^ \]<br />\[ + \]\[ ^ \] |

To calculate a unit's base combat score, or the `base attack` or `base defence` score, total the appropriate value for each counted stand:
- **Defender:** defence
- **Close Combat Attacker:** attack
- **Ranged Attacker:** ranged

> For Example:
> - Four stands (defence 4) defending in a regular formation, would have a base combat score of **8** (4+4).
> - Three stands (attack 3) attacking in a wide formation, would have a base combat score of **9** (3+3+3).
> - Two stands (attack 6) attacking in a column formation, would have a base combat score of **6**.

## Flank & Rear
A defender being attacked in the flank of the unit may only count a single stand for defence. A unit being attacked in the rear has a base defence score 0, regardless of the unit or its formation.

## High Ground
A unit increases its base close combat score by +1 for every stand on high ground, even those not counted. For example, if there are four stands (defence 4) all on high ground in regular formation, they would have a defence combat score of 12 (4+4+1+1+1+1). High ground does not increase combat score dring ranged combats, but ranged units on high ground can see over obscuring terrain.

## Obscuring Terrain
If defending against a ranged attack, units within obscuring terrain increase their base combat score by +1 for every stand in the terrain, even those not counted.

### Health Bid
The formation and placement of each unit can greatly impact the odds of victory, with soldiers spending their lives to secure it.

Units may now bid their remaining Health. A unit's combat score is improved by +1 for every Health bid. If the final combat scores should tie, both units lose a Health and a new bid is made. If a unit should lose its last Health this way, it is immediately destroyed.

Units attacking at range are removed from harm, so cannot bid their Health.

#### Disorder
Disordered units raise their combat score by only half the value of their bid (rounding down). For example, a disordered unit bidding 3 of its Health would improve their combat score by only +1.

### Resolution
The side with the greater final combat score is victorious, with the difference being the **margin of victory**. The defeated unit, unless a ranged attacker, must check for lost cohesion and then make a retreat move.

#### Lost Cohesion & Retreat
Defeat causes even capable warriors to consider the terrible cost of holding fast. If the margin of victory is equal to or greater than the Morale value of the defeated unit, one stand from that unit is removed. These warriors have chosen dishonour over death.

#### Tally Health
Finally, each unit reduces their Health value by their bid. A unit that has no Health remaining is immediately destroyed.
