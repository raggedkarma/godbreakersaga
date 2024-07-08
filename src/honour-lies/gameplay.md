---
layout: honour.njk
current: rules
permalink: honour-lies/gameplay.html
pagetitle: Gameplay
---

<hr id="setup" />

## Setup

### Build Forces
To begin, both players must agree to a maximum number of units, then each ready that many units from their model collection. When readying a unit, use a role and type to calculate its profile.

#### Specialists
A player may ready one [specialist unit](/honour-lies/index.html#units) for every two regular units in their force. When readying a specialist unit, use a combination of **two** roles with a type to calculate its profile. A specialist unit's profile uses the better modifier for each value, but gains the special rules of both roles.

> While readying a Heavy Elite unit, for example, the Heavy role has the better defence modifier, but the Elite role has superior morale.

> Roles which are both [Limited](/honour-lies/army-builder.html#special-rules) may **never** be combined to ready a specialist unit.

#### Battlefield & Initiative
Players place terrain as determined by the scenario, then seize the Initiative. For basic play, the youngest player always seizes the Initiative. That's just what they're like. The player with the Initiative is referred to as the **first player**, and their opponent the **second player**.

#### Deploy Units
Starting with the second player, players take turns to deploy their units anywhere within their deployment area, in any formation.

<hr id="rounds" />

## Rounds
Each round, starting with the first player, players take turns to activate a unit and perform actions. Each unit may only be activated once per round. The round is over once there are no more units left to activate.

#### Scoring
During play, player's increase their tally for every enemy unit destroyed (or otherwise removed from play):
- Regular: +1VP
- Specialist: +3VP

At the end of the game, occupied command holdings are worth 5VP. The side with the highest VP total is declared the winner.

<hr id="activation" />

## Activation
Units have the following activation flow, which is a list of actions that must be performed (or skipped) in order:

1. Ranged Attack
2. Reform
3. Move
4. March
5. Melee

Outside of special rules, a unit is not required to do any particular action, but must perform them in order. For example, a unit cannot shoot or reform after it has moved, unless specifically permitted. Once a unit is activated it becomes the 'active unit' until another unit is activated. A unit may be required to [rebuild the formation](/honour-lies/#formations) during a reform or move, so players should be familiar with this process.

### Ranged Attack
A unit with a ranged value may, at the start of its turn, engage a visible unit directly ahead of it in [ranged combat](#combat). To determine facing, use the majority of the attacker's front facing to determine the facing of the defending unit.

![ranged vision](/resources/images/honour-lies/ranged-vision.png)
_If either unit was activated, it could make a Ranged attack against Unit 1. Only the unit in wall formation can shoot Unit 2. The square formation unit attacking Unit 1 is majority in the flank, though with the target in the wall formation it makes little difference._

> Friendly units do **not** block sight, and so may be fired over. Enemy units do block lines of sight, however.

### Reform
The unit changes its formation from either regular to wall or column, or from wall or column to regular. To reform, select one of the central stands in the front rank from which to rebuild the chosen formation. During a reform, no stand may be placed in front of the current front rank.

### Move
Moving a unit requires repositioning one of its stands in alignment with the unit, then rebuilding the formation around the placed stand. There are three ways a unit can move: _Advance_, _Retreat_, and _Pivot_. If a Retreat or Pivot move ends with any stand in the active unit in contact with an enemy unit, or overlapping any unit, that stand is destroyed.

#### Advance
Reposition a stand from the rear rank in front of the unit, with either corner in contact and the other no more than 30mm forward. If a stand would be placed overlapping or in contact with an enemy stand during an Advance, the unit immediately engages it in melee.

![advance move](/resources/images/honour-lies/advance-move.png)

When a stand engages an enemy, align it to the enemy's facing that is directly ahead by majority. From the engaging stand, rebuild the formation, in contact with the enemy unit if possible.

![advance engage](/resources/images/honour-lies/advance-engage.png)

An engaging unit may adopt any other formation when rebuilding, but only to prevent making contact with another enemy unit, or causing overlap.

![advance engage reform](/resources/images/honour-lies/advance-engage-reform.png)

#### Retreat
Reposition a stand from the front rank behind the unit, in alignment, then rebuild the formation.

![retreat move](/resources/images/honour-lies/retreat-move.png)

If fleeing from combat after being attacked in the rear, a unit makes a Retreat move but instead repositions a stand from the back rank in front of the unit, in alignment.

If a stand would be placed overlapping a friendly stand after a Retreat, the unit may flee through it. Place the stand in alignment with the opposite face of the friendly unit, facing toward it, then rebuild the formation. A unit cannot flee through multiple friendly units in the same turn, and subsequent overlapping stands are removed.

Finally, destroy a stand from the unit that has been fled through.

![retreat through move](/resources/images/honour-lies/retreat-through-move.png)

#### Pivot
Reposition a stand from the rear rank to either side of the unit, in alignment and oriented to face toward the unit, then rebuild the formation.

![pivot move](/resources/images/honour-lies/pivot-move.png)

#### Single Stand Unit
To make any move a unit with a singe stand, place one a removed stand in full alignment, then remove the original stand. Once moved, you may rotate the new stand up to 90 degrees.

![single stand move](/resources/images/honour-lies/single-stand-move.png)

### March
A unit may not march if disordered, engaged or in difficult terrain. A march is another **Advance** move, as detailed above.

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

> For example:
> - Four stands (defence 4), defending in a square formation, would count two stands for a base defence score of **8** (4+4).
> - Three stands (melee 3), attacking in a wide formation, would count three stands for a base melee score of **9** (3+3+3).
> - Two stands (ranged 6), attacking in a column formation, would count one stand for a base ranged score of **6**.

#### Flank & Rear
A defender being attacked in the flank may only count a single stand for defence. A unit being attacked in the rear has a base defence score 0, regardless of the unit or its formation, though terrain may still apply.

#### High Ground
A stand increases its base melee score by +1 if on high ground. High ground does not increase ranged or defence scores for either unit, but units on high ground can see over obscuring terrain.

> For example: if a unit (melee 4) is fully on high ground in square formation, they would have a melee score of 10 (5+5).

#### Obscuring Terrain
During a ranged combat, stands within obscuring terrain increase their base defence score by +1.

### Health Bid
The formation and placement of each unit can greatly impact the odds of victory, but soldiers must give their lives to secure it.

Both players now bid the remaining Health of their unit, improving its combat score by +1 per Health bid. Those attacking at range are usually safe from reprisals, so units making a ranged attack cannot bid their Health, unless they have [Reckless Volley](/honour-lies/army-builder#special-rules).

#### Disorder
Disordered units bid at a 2:1 ratio in combat. For example, a disordered unit bidding two of its Health would improve their combat score by only +1.

### Resolution
The side with the greater final combat score is victorious, with the difference being the **margin of victory**. The defeated unit, unless destroyed or a ranged attacker, must check for lost cohesion and then make a Retreat move.

#### Tied Combat Score
If the final opposing combat scores should tie, the first player claims victory with 0 margin of victory. The defeated unit must retreat, but is not disordered and cannot lose cohesion.

#### Disorder
Defeat causes even capable warriors to consider the terrible cost of holding fast. The defeated unit is **disordered** for the rest of the round.

#### Cohesion
If the margin of victory is equal to or greater than the Morale value of the defeated unit, one stand from that unit is removed. If the margin of victory is equal to or greater than twice the Morale value of the defeated unit, one additional stand from that unit is removed, to a maximum of two.

#### Retreat
The defeated unit, if not destroyed, must now make a Retreat move. If they were attacked in the rear, then they must Retreat forward.
