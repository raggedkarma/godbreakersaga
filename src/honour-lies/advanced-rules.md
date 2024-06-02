---
layout: honour.njk
current: rules
permalink: honour-lies/advanced-rules.html
pagetitle: Advanced Rules
---

<hr id="strategy" />

## Strategy
If using the advanced rules, all players must select a **faction** when building their army. Each faction introduces a Strategy value, which is used during setup to determine Initiative and during the [Ready Orders](#orders) phase at the start of each round. Some factions have an army rule that may improve or hinder units of a certain type, role or specific combination of both. All factions have a selection of orders unique to them which only those armies can use.

### Setup
To seize the Initiative during setup, players must instead bid using their chosen faction's Strategy. The highest bidder claims the Initiative. If Strategy bids are tied, both players lose a single point of Strategy (regardless of their bid amount) and must bid again. If both players have no Strategy left, the youngest player seizes the Initiative as normal.

<hr id="orders" />

## Orders
In the advanced game, rounds are broken up into the following phases:

1. Ready Orders
2. Open Orders
3. Activations

During the Ready Orders phase, starting with the second player, players take turns to ready orders. Orders are readied by player's spending remaining Strategy. Orders may be selected from common orders and those unique to their faction.

### Ready
Players must share the Strategy cost of any order they ready, but keep the specific order secret. Players can ready any number of orders, though only one of each order can be readied per round.

### Open Orders
Orders without a trigger are considered 'open', and are revealed during this phase, starting with the first player. Many open order effects last the entire round, though some take immediate effect.

### Activations
This phase proceeds as normal for the round, however if a situation occurs that matches the trigger condition for an order, it may be played. Should both players have orders with the same trigger, the first player has the final say which is resolved first. 

At the end of a round, all orders are discarded, even if unplayed.

### Common Effects
Some orders effects are pretty standard, and are presented below.

#### Ruin(X)
If Ruin(X) affects a unit, that unit must either:
- Remove a stand, **or**;
- Lose X Health.

### Common Orders
| Name                  | Cost | Trigger                           | Effect |
| :-------------------- | :--: | :-------------------------------- | :----- |
| Minor Bluff!          | 1    | Activating a friendly unit        | Recover 1 Strategy. |
| We're surrounded!     | 1    | Melee defeat                      | Defeated unit is disordered for the rest of this round |
| Rally!                | 1    | Defeated unit removes a stand     | Return the stand to the unit. |
| Major Bluff!          | 2    | Activating a friendly unit        | Recover 2 Strategy. |
| But Sir- KEEP FIRING! | 2    | Activating an Artillery unit      | Unit gains [Reckless Volley](/honour-lies/army-builder.html#special-rules) for this turn. |
| No Mercy!             | 2    | Melee victory                     | Victorious unit may Advance and potentially engage in another melee. |
| Fortify Our Position! | 2    | -                                 | Nominate an infantry or cavalry unit to be disordered for this round. At the end of the round, position a command holding in alignment. |
| Their Finest Hour!    | 3    | Melee victory                     | Return a stand to the victorious unit. It also gains 3 Health, and for the rest of the round is +3 Morale. |
| Claim Their Standard! | 3    | Melee defeat                      | Ruin(5) the defeated unit, and it must retreat again. |
| Ambush!               | 3    | Unit moves into obscuring terrain | Reposition the unit anywhere on the board within obscuring terrain. Recover 1 Strategy if the unit's role is **Scout** |

> If an order modifies a value, it is always the unit & role calculated value, not the type attribute. No value may be reduced below 0, but may be raised beyond its starting amount.

<hr id="factions" />

## Factions
| Name                  | Strategy | Army Rule |
| :-------------------- | :------: | :--- |
| **Undead**            | 7        | _Shambling Hordes_ |
| **Orcs & Goblins**    | 7        | _Get Stuck In!_ |
| **Skaven**            | 8        | _Flee-flee!_ |
| **Bretonnians**       | 9        | _The Knight's Vow_ |
| **Chaos Dwarfs**      | 9        | _Cruel Masters_ |
| **Warriors of Chaos** | 9        | _Gaze of the Gods_ |
| **Empire**            | 10       | _Drilled_ |
| **Dwarfs**            | 10       | _Stubborn_ |
| **Beastmen**          | 11       | _Roving Warbands_ |
| **Wood Elves**        | 12       | _Forest Marches_ |
| **High Elves**        | 12       | _Courtly Intrigue_ |
| **Dark Elves**        | 12       | _Courtly Intrigue_ |
| **Lizardmen**         | 12       | _Cold-blooded_ |

### Undead (7)
#### Army Rule: Shambling Hordes
All friendly infantry units gain [Ponderous](/honour-lies/army-builder.html#special-rules), and are +2 Morale if not disordered, but –2 Morale while disordered.

| Name            | Cost | Trigger                | Effect |
| :-------------- | :--: | :--------------------- | :----- |
| Danse Macabre!  | 1    | -                      | All friendly infantry units lose the Ponderous special rule for this round. |
| Arise!          | 2    | Infantry unit retreats | Return all removed stands to the unit. |
| Cower, Mortals! | 3    | -                      | All enemy infantry and cavalry units are -2 Morale for this round. |

### Orcs & Goblins (7)
#### Army Rule: Get Stuck In!
Infantry and cavalry units gain [Rush](/honour-lies/army-builder.html#special-rules) and [Melee Discipline](/honour-lies/army-builder.html#special-rules) while disordered

| Name              | Cost | Trigger        | Effect |
| :---------------- | :--: | :------------- | :----- |
| Release Fanatics! | 1    | Start of melee | The active unit is disordered for this combat. |
| Foot of Gork!     | 2    | -              | Nominate two enemy units. Your opponent must Ruin(3) one of them. |
| Waaaagh!          | 3    | -              | All friendly units gain [Rush](/honour-lies/army-builder.html#special-rules) for this round. |

### Skaven (8)
#### Army Rule: Flee-flee!
Infantry and beast units may use the March action to Retreat.

| Name         | Cost | Trigger                          | Effect |
| :----------- | :--: | :------------------------------- | :----- |
| Assassin!    | 1    | Start of melee                   | The active unit is disordered for this combat. |
| Plague Wind! | 2    | -                                | All units (friend and foe) are -1 Morale for this round. |
| Kill-kill!   | 3    | Resolving combat removes a stand | Ruin(5) the **victorious** unit, then destroy the defeated unit. |

### Bretonnians (9)
#### Army Rule: The Knight's Vow
If a friendly cavalry unit is fled through by an infantry unit, it does not lose a stand.

| Name                   | Cost | Trigger                                    | Effect |
| :--------------------- | :--: | :----------------------------------------- | :----- |
| Finest Mounts!         | 1    | Activating a cavalry unit                  | The unit gains [Rush](/honour-lies/army-builder.html#special-rules) for this turn. |
| Lance Formation!       | 2    | Calculating melee value for cavalry unit   | The unit may count all its stands in melee this turn, regardless of formation. |
| Blessings of the Lady! | 3    | -                                          | All friendly cavalry units ignore Ruin this round. |

### Chaos Dwarfs (9)
#### Army Rule: Cruel Masters
If a friendly Levy unit is ever disordered, it is destroyed. All friendly Heavy infantry units are immune to disorder.

| Name                    | Cost | Trigger                                | Effect |
| :---------------------- | :--: | :------------------------------------- | :----- |
| Backstab!               | 1    | Start of melee with friendly Levy unit | Ruin(1) engaged enemy unit. |
| Shieldwall!             | 2    | Calculating defence value              | The defending unit may count all its stands. |
| Incendiary Bombardment! | 3    | Activating an Artillery unit           | For this turn, ranged attacks may be made in any direction and count all stands. |

### Warriors of Chaos (9)
#### Army Rule: Gaze of the Gods
This army has an additional free unique Order. This is not mandatory, and is readied as any other order if the player wishes.

| Name                    | Cost | Trigger                            | Effect |
| :---------------------- | :--: | :--------------------------------- | :----- |
| Gaze of the Gods!       | 0    | -                                  | Nominate two friendly units. For the rest of the round, as decided by the opposing player: one nominated unit has [Melee Discipline](/honour-lies/army-builder.html#special-rules), and the other unit is disordered. |
| Runic Shields!          | 1    | Ruin affects a friendly Heavy unit | Ignore the Ruin effect. |
| Chosen of ...!          | 2    | -                                  | Name one of the Chaos gods and select two friendly units. Your opponent must choose one of the selected units to immediately change its role to that for the named god for the rest of the game: <br />&#x2022; Khorne: **Berserker**<br />&#x2022; Nurgle: **Heavy**<br />&#x2022; Tzeentch: **Wildfire**<br />&#x2022; Slaanesh: **Elite** |
| Wild Magics!            | 3    | -                                  | Select one friendly and one enemy unit on the field. Your opponent must pick one of them to immediately change its role to Monstrous and gain 3 Health. |

### Empire (10)
#### Army Rule: Drilled
All friendly infantry units may reform after retreating from combat.

| Name                    | Cost | Trigger                      | Effect |
| :---------------------- | :--: | :--------------------------- | :----- |
| Hold the Line!          | 1    | Melee defeat                 | The **victorous** unit must retreat from combat, though defender still has to check cohesion. |
| Glad We Din't Burn 'Im! | 2    | Start of melee               | Ruin(3) engaged enemy unit. |
| We Have Their Range!    | 3    | Activating an Artillery unit | For this turn, ranged attacks may be made in any direction and count all stands. |

### Dwarfs (10)
#### Army Rule: Stubborn
All friendly Heavy infantry units gain [Ponderous](/honour-lies/army-builder.html#special-rules) & [Defence Discipline](/honour-lies/army-builder.html#special-rules).

| Name               | Cost | Trigger                   | Effect |
| :----------------- | :--: | :------------------------ | :----- |
| So Predicable!     | 1    | Order is played           | The enemy tactic is not played. It may be played again later, but not during this round. |
| Shieldwall!        | 2    | Calculating defence value | The defending unit may count all its stands. |
| Honour The Grudge! | 3    | -                         | For this round, all friendly units are immune to disorder. |

### Beastmen (11)
#### Army Rule: Roving Warbands
All friendly infantry units have -1 Morale.

| Name              | Cost | Trigger               | Effect |
| :---------------- | :--: | :-------------------- | :----- |
| Prey on the Weak! | 1    | Enemy unit retreats   | All friendly infantry gain [Rush](/honour-lies/army-builder.html#special-rules) for this round. |
| Devolve!          | 2    | Start of melee        | Ruin(3) engaged enemy unit. |
| Primal Fury!      | 3    | -                     | For the rest of the round, all friendly infantry units gain [Melee Discipline](/honour-lies/army-builder.html#special-rules). |

### Wood Elves (12)
#### Army Rule: Forest Marches
All friendly Heavy units gain [Ponderous](/honour-lies/army-builder.html#special-rules).

| Name                    | Cost | Trigger                            | Effect |
| :---------------------- | :--: | :--------------------------------- | :----- |
| Eyes of the Asrai!      | 1    | -                                  | For this turn, all Scout units can see through obscuring terrain. |
| Waking The Forest!      | 2    | Enemy unit is in obscuring terrain | For the rest of the round, all friendly Heavy units gain [Melee Discipline](/honour-lies/army-builder.html#special-rules). |
| Tree Singing!           | 3    | -                                  | Place a new command holding anywhere, following the normal rules for holding placement. |

### High Elves (12)
#### Army Rule: Courtly Intrigue
Before deploying, your opponent unit may nominate a different unit to be your General's. If this new unit cannot occupy a command holding, it must deploy in alignment with it.

| Name                | Cost | Trigger                  | Effect |
| :------------------ | :--: | :----------------------- | :----- |
| A Future Unwritten! | 1    | -                        | State a value of 1, 2 or 3. Your opponent must reveal all orders they have readied of that value. |
| Witchfire!          | 2    | Ranged victory           | Ruin(5) defeated unit. |
| Apotheosis!         | 3    | -                        | All friendly units gain 2 Health. |

### Dark Elves (12)
#### Army Rule: Courtly Intrigue
Before deploying, your opponent unit may nominate a different unit to be your General's. If this new unit cannot occupy a command holding, it must deploy in alignment with it.

| Name                  | Cost | Trigger        | Effect |
| :-------------------- | :--: | :------------- | :----- |
| Malicious Fate!       | 1    | -              | One order the opponent has readied (of their choice) must be revealed and discarded for no effect. |
| Witchfire!            | 2    | Ranged victory | Ruin(5) defeated unit. |
| Purple Sun!           | 3    | -              | Ruin(1) **all** enemy units. |

### Lizardmen (12)
#### Army Rule: Cold-blooded
This army cannot bid more than 3 Strategy to seize the Initiative. All friendly behemoth units gain [Ponderous](/honour-lies/army-builder.html#special-rules).

| Name        | Cost | Trigger                                  | Effect |
| :---------- | :--: | :--------------------------------------- | :----- |
| Stampede!   | 1    | Melee victory for beast or behemoth unit | Ruin(3) defeated unit |
| Shieldwall! | 2    | Calculating melee value                  | The defending unit may count all its stands, regardless of formation. |
| Apotheosis! | 3    | -                                        | All friendly units gain 2 Health. |
