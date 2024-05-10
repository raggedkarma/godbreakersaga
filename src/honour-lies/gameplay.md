---
layout: honour.njk
current: rules
permalink: honour-lies/gameplay.html
pagetitle: Gameplay
---

<hr id="setup" />

## Setup

#### Build Forces
To begin, both players must agree to maximum number of units armies may bring. Players then ready that many units, from any combination of role & type that fits their collection, and nominate one to be the General's unit.

#### Battlefield & Initiative
Players place terrain as determined by the scenario, then seize the Initiative. For basic play, the youngest player always seizes the Initiative. That's just what they're like.

#### Deploy Units
Players first deploy their General's unit to their command holding. Then, starting with the player without Initiative, players take turns to deploy remaining units anywhere within their deployment area.

<hr id="rounds" />

## Rounds
Every round, starting with the player with Initiative, players take turns to activate a unit. Each unit may only be activated once per round, and if there are no more units left to activate for either player the round is over and a new round begins.

#### Conclusion
During play, add 1VP to a player's tally for every destroyed enemy unit. At the end of the game, occupied command holdings are worth 5VP. The side with the highest VP total is declared the winner.

<hr id="activation" />

## Activation
Units have the following activation flow, which is a list of actions that must be performed (or skipped) in order:

1. Ranged Attack
2. Reform
3. Move
4. March
5. Melee

Outside of special rules, a unit is not expected to perform any specific action, but must perform actions in the order provided. For example, a unit cannot shoot or reform after it has moved, unless specifically permitted. Once a unit is activated it becomes the 'active unit' until another unit is activated. A unit may be required to [rebuild the formation](/honour-lies/#formations) during a reform or move, so players should be familiar with this process.

### Ranged Attack
A unit with a ranged value may, at the start of its turn, engage a visible unit directly ahead of it in [ranged combat](#combat). To determine facing, use the majority of the attacker's front facing to determine the facing of the defending unit.

### Reform
The unit changes its formation from either regular to wall or column, or from wall or column to regular. A unit with two stands may reform directly from wall to column.

To reform, select one of the central stands in the front rank from which to rebuild the chosen formation. During a reform, no stand may be placed in front of the current front rank.

### Move
Moving a unit requires repositioning one of its stands in alignment with the unit, then rebuilding the formation around the placed stand. There are three ways a unit can move: _Advance_, _Retreat_, and _Pivot_. If a Retreat or Pivot move ends with any stand in the active unit in contact with an enemy unit, or overlapping any unit, that stand is destroyed.

> A unit with only a single stand remaining may not move, but may rotate on the spot up to 90 degrees.

#### Advance
Reposition a stand from the rear rank in front of the unit, with either corner in contact and the other no more than 30mm forward. If a stand would be placed overlapping or in contact with an enemy stand during an Advance, the unit immediately engages it in melee.

![advance move](/resources/images/honour-lies/advance-move.png)

When a stand engages an enemy, align it to the enemy's facing that is directly ahead by majority. From the engaging stand, rebuild the formation, in contact with the enemy unit if possible. An engaging unit may adopt any other formation when rebuilding, but only to prevent making contact with another enemy unit, or causing overlap.

![advance engage](/resources/images/honour-lies/advance-engage.png)

#### Retreat
Reposition a stand from the front rank behind the unit, in alignment, then rebuild the formation.

![retreat move](/resources/images/honour-lies/retreat-move.png)

If a stand would be placed overlapping a friendly stand during a Retreat, the unit may flee through it. Place the stand in alignment with the opposite face of the friendly unit, facing toward it, then rebuild the formation. A unit cannot flee through multiple friendly units in the same turn.

Finally, destroy a stand from the unit that has been fled through.

![retreat through move](/resources/images/honour-lies/retreat-through-move.png)

#### Pivot
Reposition a stand from the rear rank to either side of the unit, in alignment and oriented to face toward the unit, then rebuild the formation.

![pivot move](/resources/images/honour-lies/pivot-move.png)

### March
A unit may not march if engaged or in difficult terrain. A march is an **Advance** or **Retreat** move, as detailed above.

### Melee
An engaged unit must now fight a [melee combat](#combat):

<hr id="combat" />

## Combat
Both ranged and melee combats are fought in the following order:
1. Calculate Base Combat Score
2. Health Bid
3. Resolution

### Calculate Base Combat Score
The active unit is the attacker, and counts every stand in the front rank of their unit. The unit being engaged is the defender, and counts every stand in their unit's longest column:

| Attacker                           | Defender                           |
| :--------------------------------: | :--------------------------------: |
| \[ + \]\[ + \]<br />\[ ^ \]\[ ^ \] | \[ + \]\[ ^ \]<br />\[ + \]\[ ^ \] |

To calculate a unit's base combat score, total the appropriate value for each counted stand:
- **Attacker:**
    - **Ranged:** ranged
    - **Melee:** melee
- **Defender:** defence

> For Example:
> - Four stands (defence 4) defending in a regular formation, would count two stands for a base defence score of **8** (4+4).
> - Three stands (melee 3) attacking in a wide formation, would count three stands for a base melee score of **9** (3+3+3).
> - Two stands (ranged 6) attacking in a column formation, would count one stand for a base ranged score of **6**.

#### Flank & Rear
A defender being attacked in the flank may only count a single stand for defence. A unit being attacked in the rear has a base defence score 0, regardless of the unit or its formation, though terrain may still apply.

#### High Ground
A unit increases its base melee score by +1 for every stand on high ground, even those not counted. For example, if there are four stands (melee 4) all on high ground in regular formation, they would have a melee score of 12 (4+4+1+1+1+1). High ground does not increase ranged or defence scores for either unit, but units on high ground can see over obscuring terrain.

#### Obscuring Terrain
During a ranged combat, units within obscuring terrain increase their base defence score by +1 for every stand in obscuring terrain, even those not counted.

### Health Bid
The formation and placement of each unit can greatly impact the odds of victory, but soldiers must give their lives to secure it.

Both players now bid the remaining Health of their unit, improving its combat score by +1 per Health bid. Those attacking at range are usually safe from reprisals, so units making a ranged attack cannot bid their Health, unless they have [Reckless Volley](/honour-lies/army-builder#special-rules).

#### Disorder
Disordered units bid at a 2:1 ratio in combat. For example, a disordered unit bidding two of its Health would improve their combat score by only +1.

### Resolution
The side with the greater final combat score is victorious, with the difference being the **margin of victory**. The defeated unit, unless destroyed or a ranged attacker, must check for lost cohesion and then make a Retreat move.

#### Tied Combat Score
If the final opposing combat scores should tie, the player with the Initiative claims victory, with a margin of victory of 0.

#### Lost Cohesion
Defeat causes even capable warriors to consider the terrible cost of holding fast. If the margin of victory is equal to or greater than the Morale value of the defeated unit, one stand from that unit is removed.

The defeated unit, if not destroyed, must now make a Retreat move.

> It is important to note that Health is not lost through defeat. Indeed, it is the only path to victory, but you must decide which fight is worth dying for. A combat might even be won by making the ultimate sacrifice! The removal of stands represents the loss of good order, not casualities- the soldiers are still around, just fighting for themselves instead of each other.