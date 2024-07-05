---
layout: honour.njk
current: rules
permalink: honour-lies/advanced-rules.html
pagetitle: Advanced Rules
---

<hr id="type-majority">

## Force Majority
If a fully readied force has more units of a certain type and/or a certain role, that is considered a majority. If players have agreed to use advanced rules, different majorities will confer additional force rules, Strategy modifiers and specific orders. Specialist units are considered to be **both** of their combined roles to determine if the force has a role majority. 

Players can develop their force to have a particular style using these rules, especially in combination with specialist units. There are some examples provided below.

### Force Rules
The following rules apply to forces depending on the **type** majority:

- **Infantry:** All friendly infantry units may reform for free after a Retreat.
- **Cavalry:** If a friendly cavalry unit is fled through by either a beast or infantry unit, it does not lose a stand.
- **Beasts:** After seizing the Initiative, this unit may ready one additional regular beast unit.
- **Behemoths:** All friendly beast and infantry units consider friendly behemoth units as command holdings for the purposes of disorder.

<hr id="strategy" />

## Strategy
If using the advanced rules, each force has a Strategy value, which is used during setup to determine Initiative and during the [Prepare Orders](#orders) phase at the start of each round. All forces have Strategy equal to the number of regular units in their force, adjusted for majority as follows:

#### Type Majority:
- Infantry: **+2**
- Cavalry: **+1**
- Behemoths: **-1**
- Beasts: **-2**

#### Role Majority:
- Elite/Scout: **+2**
- Artillery/Heavy: **+1**
- Levy/Wildfire: **-1**
- Berserker/Monstrous/Nightmare: **-2**

### Setup
To seize the Initiative during setup, players must instead bid using their final Strategy amount. The highest bidder claims the Initiative, and both must spend their bids as normal. If Strategy bids are tied, both players lose a single point of Strategy (regardless of their bid amount) and must bid again. If both players have no Strategy left, the youngest player seizes the Initiative.

<hr id="orders" />

## Orders
Orders represent a capable general using talents for improvisation or preparation. All forces will have a selection of orders available to them from which they can prepare each round. This selection is made while building the force, and includes all common orders, those for its type majority, and a single General order.

In the advanced game, rounds are broken up into the following phases:

1. Prepare Orders
2. Open Orders
3. Activations

During the Prepare Orders phase, starting with the second player, players take turns to prepare orders. Orders are prepared by spending remaining Strategy, from the selection made when building a force.

### Prepare
Players must share the Strategy cost of any order they prepare, but keep the specific order secret. Players can prepare any number of orders, though only one of each order can be readied per round.

### Open Orders
Orders without a trigger are considered 'open', and are revealed during this phase, starting with the first player. Many open order effects last the entire round, though some take immediate effect.

### Activations
This phase proceeds as normal for the round, however if a situation occurs that matches the trigger condition for an order, it may be played. Should both players have orders with the same trigger, the first player has the final say which is resolved first.

At the end of a round, all orders are discarded and their Strategy costs are fully recovered.

### Common Effects
Some orders effects are pretty standard, and are presented below.

#### Type/Role Specific
Some orders may only affect units of a specific type or role. Specialist units count as both of their roles to be targeted for such orders.

#### Modify Attribute
Some orders may indication attribute modifications, and these all refer to the unit profile. No modification can raise an attribute beyond double or reduce it below 0.

#### Ruin(X)
If Ruin(X) affects a unit, that unit must either:
- Remove a stand, **or**;
- Lose X Health.

### Common Orders
| Name                  | Cost | Trigger                           | Effect |
| :-------------------- | :--: | :-------------------------------- | :----- |
| Sound The Drums!      | 1    | Activating a unit                 | Unit immediately performs a Move action, then activates as normal. |
| Rally!                | 1    | Defeated unit removes a stand     | Return the stand to the unit. |
| Claim Their Standard! | 2    | Melee defeat                      | Ruin(2) the defeated unit, and it must retreat again. |
| Ambush!               | 3    | Unit moves into obscuring terrain | Reposition the unit anywhere on the board within obscuring terrain. Recover 1 Strategy if the unit has [Skirmish](/honour-lies/army-builder.html#special-rules) |

### Type Orders

#### Majority Infantry
| Name                    | Cost | Trigger                    | Effect |
| :---------------------- | :--: | :------------------------- | :----- |
| March On!               | 1    | Activating a unit          | The **victorous** unit must retreat from combat, though defender still has to check cohesion. |
| Shieldwall!             | 2    | Calculating defence value  | The defending infantry unit may count all its stands. |
| We've Trained For This! | 2    | Start of melee             | An engaged infantry unit gains a [Combat Discipline](/honour-lies/army-builder.html#special-rules) of the player's choice. |

#### Majority Cavalry
| Name          | Cost | Trigger                 | Effect |
| :------------ | :--: | :---------------------- | :----- |
| Shock & Awe!  | 1    | Start of melee          | Ruin(1) engaged enemy unit. |
| Brace Lances! | 2    | Calculating melee value | The attacking cavalry unit may count all its stands. |
| Overrun!      | 2    | Melee victory           | Victorious unit may immediately Advance and potentially engage in another melee. |

#### Majority Beasts
| Name          | Cost | Trigger            | Effect |
| :------------ | :--: | :----------------- | :----- |
| Unruly Melee! | 1    | Start of melee     | The engaged enemy unit is disordered for this combat. |
| Wild Magic!   | 2    | Start of the round | Nominate two enemy units. Your opponent must Ruin(3) one of them. |
| Overwhelm!    | 2    | Melee victory      | Ruin(3) the **victorious** unit, then destroy the defeated unit. |

#### Majority Behemoths
| Name          | Cost | Trigger            | Effect |
| :------------ | :--: | :----------------- | :----- |
| Thunderstomp! | 1    | Start of the round | Remove one piece of terrain a Behemoth unit is currently within. |
| Rain of Fire! | 2    | Activating a unit  | Ruin(3) an enemy unit visible to the active unit. |
| Despair!      | 2    | Combat victory     | Ruin(5) defeated unit. |





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
