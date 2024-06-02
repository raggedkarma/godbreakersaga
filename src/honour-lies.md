---
layout: honour.njk
current: rules
pagetitle: Here Honour Lies
---
> A diceless wargame of large-scale fantasy battles

Players should be familiar with the following concepts to enjoy the game:

- [Units](#units): A group of stands operating as a block of troops.
- [Formations](#formations): How units stands are arranged, which can change during play.
- [Bidding](#bidding): The core mechanic to introduce uncertainty and allow soldiers to sell their lives dearly.
- [Disorder](#disorder): Supply mechanics.
- [Terrain](#terrain): Where you fight.

<hr id="units" />

## Units
An army is made up of units, which are made up of a number of stands depending on its type. There are no requirements of what should be taken when building up your army, as long as both sides have the same number of units. All stands in a unit must have two corners in contact with another stand of its unit during play, referred to as _alignment_.

![formation alignment](/resources/images/honour-lies/formation-alignment.png)
_In the example above, the most of the stands are in alignment, as they all share two corners in contact with one another. One is not, as its corners are not aligned, even if it is in base contact._

If aligning two stands with different orientation, only one corner must be in contact but otherwise the bases must be in full contact.

![orientation alignment](/resources/images/honour-lies/orientation-alignment.png)

### Stands
A stand is a single rectangular base measuring 60x30mm filled with multiple 15mm scale miniatures that represent the type & role of its unit. A stand may never be placed such that it overlaps other stands, friend or foe. Depending on the circumstances, a situation that would cause a stand to overlap another or even be in base contact may trigger a melee or simply remove the overlapping stand.

As the game progresses, units will lose stands to enemy action. Stands are always removed from the rear of the unit. If the last stand in a unit is removed, the unit is destroyed. If a unit is destroyed, all its stands are removed.

### Facing
All units have a front, two flanks (or sides), and a rear facing. The size of each which will change over the course of the game as the unit adopts different formations.

### Sight
Several rules will require a unit to be able to see another. Units can 'see' in all directions. Terrain, holdings and enemy units block sight if there is no imaginary line that could be drawn that does not pass entirely through.

### Deploy or Reposition
When deploying or repositioning a unit, it cannot be in base contact or overlapping any other unit. A unit may be deployed or repositioned into an unoccupied holding, and immediately occupy it as long as it would not immediately be engaged. If a unit would be repositioned or deployed such that it would be disordered (see [Disorder](#disorder)), a stand is removed after rebuilding the formation.

### Type
A unit's type determines its orientation and attributes: _Attack_, _Defence_, _Morale_, and _Health_. All units must be one of four types: _beasts_, _behemoths_, _cavalry_ and _infantry_. 

The [Army Builder](/honour-lies/army-builder.html#types) will list the attributes for all types.

#### Infantry
These are the backbone of any force, equipped with heavy armour and the best weapons, or pitchforks and fury.

> A unit of infantry consists of four stands, facing toward the longest edge.

#### Cavalry
Capably trained soldiers granted the privilege of riding into battle. They are best used to harass and break enemy lines, and will suffer if caught out or knocked from their mounts. While some armies use them sparingly, others are entirely built on the backs of mobile warfare.

> A unit of cavalry consists of four stands, facing toward the shorter edge.

#### Beasts
Swarms of biting vermin driven before the main force, or great dogs raised from birth to hunt. They are pure havoc for any general to contend with.

> A unit of beasts consists of four stands, facing toward the shorter edge.

#### Behemoths
Great creatures or engines of war that may well turn the tide of any engagement, but may take longer to thunder into the maelstrom. Those who martial such incredible forces may be appreciably careful in their use or equally struck by their majesty and rely on them to their cost.

> A unit of behemoths consists of three stands, facing toward the shorter edge.

### Roles
Regular units select a role which builds from its type to calculate its _Melee_, _Ranged_, _Defence_, _Morale_ and _Health_ values. Certain roles may limit the number of stands in a unit, to represent their rarity or poor fighting discipline. Every faction could rationalise any combination, and players are encouraged to experiment for themselves.

The selected role modifies the type's attribute values, and may grant the unit special rules that alter how it moves or fights. Should the role provide a ranged modifier, it is calculated from the default attack for its type. The final calculated values and rules are referred to as the the unit's profile.

| Calculated Value | From Attribute |
| :--------------: | :------------: |
| Melee            | Attack         |
| Ranged           | Attack         |
| Defence          | Defence        |
| Morale           | Morale         |
| Health           | Health         |

The [Army Builder](/honour-lies/army-builder.html#roles) will list the modifiers for all roles.

#### Artillery
Rain fire with units that can bring terrible forces to bear, from cunning sorcery or alchemy to even more punishing combinations of the two. While their ranged attacks are tremendous, these units are incredibly ponderous and easily overrun.

#### Berserker
The epitome of crude violence, either warriors of barely restrained fury or creatures driven near mad with hunger. These will absolutely bring the fight to the enemy, but can't take it as well as they can dish it out.

#### Elite
Carefully trained as the greatest soldiers that can be fielded. Dependable, but can struggle if they find themselves cut off.

#### Heavy
Brutes who take the hits and keep on coming. These can hold the centre pretty well, though do not discount them on the attack.

#### Levy
Peasants and mercenaries raised from common stock. There are always more that can be convinced to march, by coin or whip. These are completely disposable troops- better to throw them in to trouble than carefully shepherd them.

#### Monstrous
These mighty warriors swell with magics or speak to a potent genetic legacy. Spawn of old tragedies or terrible curses, and often the last of their kind. Not to be wasted on inefficient targets, so make sure to chose their opponents well.

#### Nightmare
Terrible things called by death. These may be forgotten spirits, shrieking wraiths or cruel fae. Should the nemy hold fast before them, such horrors may find their unreal forms little more resilient than shadow.

#### Scout
Those who move with the land and harass the enemy. Usually creatures or people of the wild, who do not fight for promised riches or glory, but to save their home and kin. Quick, but must choose their targets carefully. Find their flanks, and disrupt supply lines.

#### Wildfire
Wielders of terrible magics or experimental weapons, both as dangerous to the user as the target. At personal risk, they can bring greater pressure to bear at range. Use them before you lose them.

### Specialists
Specialist units calculate values using a combined role. A combined role is made from two roles by taking the better modifier for each value, and gains the special rules from both. Roles with the Limited special rule cannot be combined.

<hr id="formations">

## Formations
All units must adopt one of the following formations during play: _wall_, _square_, or _column_. When instructed to rebuild a formation, align the remaining stands until the unit is in its current formation. If the formation cannot be rebuilt due to friendly models, return the unit to its original position. After rebuilding a formation, unless otherwise specified, a stand that could not be placed without overlapping an enemy stand or a battlefield edge is removed.

Switching between formations is one of the most important tactical challenges of the game. Making sure units are in the right formation at the right time is necessary to achieve victory.

| Wall (up to four stands wide) | Square (up to two stands wide)     | Column (up to one stand wide)                  |
| :---------------------------: | :--------------------------------: | :--------------------------------------------: |
| \[ ^ \]\[ ^ \]\[ ^ \]\[ ^ \]  | \[ ^ \]\[ ^ \]<br />\[ ^ \]\[ ^ \] | \[ ^ \]<br />\[ ^ \]<br />\[ ^ \]<br />\[ ^ \] |

> When rebuilding a wall formation with more than two stands, the player must align a stand either side of the initial one.

<hr id="bidding" />

## Bidding
The lives of soldiers are little more than currency, ruthlessly gambled by their commanders. This game does not rely on dice to represent uncertainty and the fog of war. Instead, players secretly bid on the outcome.

A bid is revealed simultaneously, then players then spend their bid amounts and determine the winner. No player may alter their revealed bid, unless explicitly permitted to by a rule. A player is fully permitted to bid nothing, and bluffing is absolutely encouraged!

The most common bid is the Health bid during [combat](/honour-lies/gameplay#combat). After such a bid, the unit's remaining Health is reduced by the bid amount. A unit reduced to 0 Health in this fashion is immediately destroyed.

<hr id="disorder" />

## Disorder
A war is rarely won or lost by pure violence. The cunning general manages their war materiel and messages on the battlefield better than their troops. If cut off from the chain of command and steady resupply, a unit is in serious trouble.

Units become disordered while they cannot see a friendly command holding, or as a result of a Tactic. Some units are immune to disorder, and can never be affected by it. A unit occupying a friendly command holding is immune to disorder.

A disordered unit affected in the following ways:

- The unit may not [March](/honour-lies/gameplay.html#activation)
- The unit may not perform a ranged attack if they did so in the previous round.
- The unit bids at a 2:1 ratio in combat, so its combat score is improved by +1 for every **two** Health bid.

<hr id="terrain" />

## Terrain
Terrain may affect movement and combat for a stand if any part of its base overlaps the terrain feature.

> Units cannot see through terrain, but can see units within terrain.

A single area of terrain may be one or more combinations of _impassable_, _difficult_, _obscuring_, and _high ground_.

#### Impassable
Any stand or marker placed overlapping impassable terrain is removed.

#### Difficult
A unit within difficult terrain after their first move may not perform their second move.

#### Obscuring
A unit within obscuring terrain increase their base defence score in ranged combats by +1 for every stand within it.

#### High Ground
Hills and ridges improve base melee scores by +1 for every affected stand. A unit that is on high ground may also see and be seen through all intervening terrain.

### Holdings
A holding can represent anything from a hastily erected defensive position to a crumbling watchtower. It is a location occupied by soldiers for defence, and can serve as a place to coordinate strategies.

All holdings are impassable 60x60mm markers. A single infantry or cavalry unit may **occupy** a holding during play. Unoccupied markers are treated as enemy units for engagement purposes, though no combat is fought. If a unit is in base contact with an unoccupied holding at the end of a turn, the unit may occupy the holding. While occupying a holding, place a stand from the occupying unit on the marker.

Once occupied, a holding is considered friendly to the occupying force, even if they leave. While occupied, the unit inside counts all stands when calculating defence, and two when calculating ranged (see [Combat](/honour-lies/gameplay.html#combat)). When defending, every edge considered the unit's front face, and all stands are within obscuring terrain.

If it has not made a ranged attack, a unit may use a Move action to 'sally forth' from a holding. The unit places a stand in alignment with one of the holding's facings, facing away from the holding, then rebuild any formation of their choosing. This is considered an Advance, including the potential to engage in combat.

If an occupying unit is ever forced to retreat, first place the unit in column formation on the opposing side to the winning unit, in alignment and facing the holding, then make a retreat move with the losing unit as normal.

<hr id="addenda" />

## Addenda

### Core Concepts
This game was written with certain core concepts in mind:
- No dice
- No measuring
- Soldiers lives are the currency of generals

I wanted to enjoy games at a slightly more removed scale of warfare than I was used to playing, where wars are not won by any single act of heroism but by uncounted minor acts of bloody defiance.

In that spirit it is important to recognise unit Health is never lost through enemy action. The decision to inflict Health- for warriors to die- rests entirely with their General. A combat might even be won by the necessary sacrifice! In contrast, the removal of stands represents the loss of good order, not casualities. They may be injured or weary, but are still alive and fighting, just for themselves instead of each other. It is the burden of command to decide which fight is worth dying for.

I have had fun digging into the many interesting games that support this scale, including _Dragon Rampant_, _Dux Bellorum_, _Fantasy Battles_, _Restless Hordes_ and _Warmaster_, among others. I'd encourage folk to give all of them a try.

### Alternate Scales
These rules are written with the assumption of 15mm miniatures. For reference, use the size of the stand appropriate for its scale:

- 3mm: 20 x 10mm
- 6mm: 30 x 15mm
- 10mm: 40 x 20mm
- 15mm: 60 x 30mm
- 28mm: 100 x 50mm
- 32mm: 120 x 60mm

Given the space and model requirements, I would not encourage below 10mm or above 15mm, but it's absolutely playable. Note that holdings also change size to match the longest base edge square, so a 3mm-scale holding would be a 20mm square.