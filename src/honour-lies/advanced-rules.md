---
layout: honour.njk
current: rules
permalink: honour-lies/advanced-rules.html
pagetitle: Advanced Rules
---

<hr id="strategy" />

## Strategy
If using the advanced rules, all players must select a **faction** when building their army. Each faction introduces a Strategy value, which is used during setup to determine Initiative and purchase one-use abilities called **tactics**. Some factions have an army rule that may improve or hinder units of a certain type, role or specific combination of both. All factions also provide a short list of unique tactics unique to them that may be purchased for only those armies.

### Setup
To seize the Initiative during setup, players must instead bid using their Strategy, as determined by their faction. The highest bidder claims the Initiative. If Strategy bids are tied, both players lose a single point of Strategy (regardless of their bid amount) and must bid again. If both players have no Strategy left, the youngest player seizes the Initiative.

<hr id="tactics" />

## Tactics
Tactics are single-use special effects that represent cunning ploys, dangerous magics, or bitter experience. After the Initiative has been seized, players spend their remaining Strategy to purchase tactics. Players may purchase any combination of Common tactics and those unique to their faction. Tactics costing 1 or 2 may be purchased more than once.

> Players are required to share the cost of each Tactic they have at all times, but are not required to disclose each specific tactic until they are used.

Tactics will specify a trigger that determines when they can be played. If two or more could be used for the same trigger, the player using them may select the order, but the player with Initiative may resolve any tactics that they wish to play before their opponent. Multiple copies of a tactic cannot be played for the same trigger.

### Common Tactics
| Name                   | Cost | Effect |
| :--------------------- | :--: | :----- |
| Rally!                 | 1    | _When activating a unit:_ Return a stand to the unit. |
| Flee!                  | 1    | _Before any Health bids in melee:_ Combat is immediately resolved. This player's unit is defeated with a margin of victory of 1 |
| But Sir- Keep Firing!  | 1    | _When activating an Artillery unit:_ This unit gains [Reckless Volley](/honour-lies/army-builder.html#special-rules) for this turn. |
| They Got Through!      | 1    | _At the start of a round:_ A selected unit is immune to disorder this round. |
| No Mercy!              | 2    | _After a melee has been resolved:_ the winning unit may Advance and even engage in another melee. |
| Sabotage, My Lord!     | 2    | _At the start of a round:_ A selected unit is disordered for this round. |
| Fresh Orders, Captain! | 2    | _When selecting a unit to activate:_ The player may activate a unit that has already been activated this round. |
| Fortify Our Position!  | 2    | _When activating the unit:_ Place a command holding aligned to the front of the unit. |
| Reinforcements!        | 3    | _When activating a unit:_ A selected unit gains 5 Health, and for the rest of the turn is +5 Morale. |
| Decapitate!            | 3    | _At the start of a round:_ A selected unit loses 3 Health and a stand. |
| Ambush!                | 3    | _When activating a unit:_ Reposition the unit anywhere on the board within obscuring terrain. |

> If a tactic modifies a value, it is always the unit & role composite value, not the type alone. No value may be reduced below 0, but may be raised beyond its starting amount.

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
All friendly infantry units gain [Slow](/honour-lies/army-builder.html#special-rules), and are +2 Morale if not disordered, but –2 Morale while disordered.

| Name            | Cost | Effect |
| :-------------- | :--: | :----- |
| Danse Macabre!  | 1    | _At the start of a round:_ All infantry units lose the Slow special rule for this round. |
| Rise!           | 2    | _When activating a unit:_ Return all destroyed stands to the unit. |
| Cower, Mortals! | 3    | _At the start of a round:_ All enemy units lose 1 Health and are -2 Morale for this round. |

### Orcs & Goblins (7)
#### Army Rule: Get Stuck In!
Disordered infantry and cavalry units may be activated, but must use the 'Get Stuck In!' activation flow (even if they have the Slow special rule):
1. Advance
2. Melee

| Name              | Cost | Effect |
| :---------------- | :--: | :----- |
| Release Fanatics! | 1    | _When a friendly infantry unit is engaged in melee:_ The active unit is disorded for this combat. |
| Foot of Gork!     | 2    | _At the start of a round:_ Nominate two enemy units. Your opponent must select one them to lose 3 Health and a stand. |
| Waaaagh!          | 3    | _At the start of a round:_ All friendly units gain Rush for this round. |

### Skaven (8)
#### Army Rule: Flee-flee!
Disordered infantry and beast units may be activated, but must use the 'Flee-flee!' activation flow (even if they have the Slow special rule):
1. Retreat

| Name         | Cost | Effect |
| :----------- | :--: | :----- |
| Assassin!    | 1    | _When a friendly infantry unit is engaged in melee:_ The active unit is disorded for this combat. |
| Plague Wind! | 2    | _At the start of the round:_ All units are -1 Morale for this round. |
| Kill-kill!   | 2    | _After removing a stand while resolving combat:_ Remove a stand from the **victorious** unit, then destroy the defeated unit. |

### Bretonnians (9)
#### Army Rule: The Knight's Vow
If a friendly cavalry unit is fled through by an infantry unit, it does not lose a stand.

| Name                   | Cost | Effect |
| :--------------------- | :--: | :----- |
| Finest Mounts!         | 1    | _When activating a cavalry unit:_ The unit gains [Rush](/honour-lies/army-builder.html#special-rules) for this turn. |
| Lance Formation!       | 2    | _When a activating a cavalry unit:_ This unit may count all its stands in melee this turn, regardless of formation. |
| Blessings of the Lady! | 3    | _At the start of the round:_ Friendly cavalry units are +5 Morale this round. |

### Chaos Dwarfs (9)
#### Army Rule: Cruel Masters
If a friendly Levy infantry unit is ever disordered, it is destroyed. All friendly Heavy infantry units are immune to disorder.

| Name                    | Cost | Effect |
| :---------------------- | :--: | :----- |
| Backstab!               | 1    | _When activating a Levy unit:_ During a melee this turn, the defending unit is -2 Morale. |
| Shieldwall!             | 2    | _At the start of melee:_ The defending unit may count all its stands, regardless of formation. |
| Incendiary Bombardment! | 3    | _When activating an Artillery unit:_ This unit may make ranged attacks this turn in any direction, and it may count all its stands, regardless of formation. |

### Warriors of Chaos (9)
#### Army Rule: Gaze of the Gods
At the start of any round, the player may invoke the Gods and chose two friendly units. The opposing player selects one to become disordered, and the other to gain [Melee Discipline](/honour-lies/army-builder.html#special-rules). In both cases, the effects only last for the rest of the round.

| Name                    | Cost | Effect |
| :---------------------- | :--: | :----- |
| Runic Shields!          | 1    | _When a tactic is played that removes stands or Health from a single friendly Heavy unit, or would destroy it:_ That tactic is instead discarded for no effect. |
| Chosen of ...!          | 2    | _At the start of a round:_ Name one of the Chaos gods and select two friendly units. Your opponent must choose one of the selected units to immediately change its role to that for the named god for the rest of the game: <br />&#x2022; Khorne: **Berserker**<br />&#x2022; Nurgle: **Heavy**<br />&#x2022; Tzeentch: **Wildfire**<br />&#x2022; Slaanesh: **Elite** |
| Wild Magics!            | 3    | _At the start of a round:_ Select one friendly and one enemy unit. Your opponent must pick one of them to immediately change its role to Monstrous and gain 3 Health. |

### Empire (10)
#### Army Rule: Drilled
All friendly infantry units may reform after retreating from combat.

| Name                    | Cost | Effect |
| :---------------------- | :--: | :----- |
| Hold the Line!          | 1    | _At the start of melee:_ During this combat, the defending unit is +5 Morale. |
| Glad We Din't Burn 'im! | 2    | _At the start of a combat:_ Destroy one stand from the engaged enemy unit. |
| We Have Their Range!    | 3    | _When activating an Artillery unit:_ This unit may make ranged attacks this turn in any direction, and it may count all its stands, regardless of formation. |

### Dwarfs (10)
#### Army Rule: Stubborn
All friendly Heavy infantry units gain [Slow](/honour-lies/army-builder.html#special-rules) & [Defence Discipline](/honour-lies/army-builder.html#special-rules).

| Name               | Cost | Effect |
| :----------------- | :--: | :----- |
| So Predicable!     | 1    | _When your opponent plays a tactic:_ The enemy tactic is not played. It may be played again later, but not during this round. |
| Shieldwall!        | 2    | _At the start of melee:_ The defending unit may count all its stands, regardless of formation. |
| Honour The Grudge! | 3    | _At the start of the round:_ All friendly units are immune to disorder this round. |

### Beastmen (11)
#### Army Rule: Roving Warbands
All friendly infantry units have -1 Morale.

| Name                | Cost | Effect |
| :------------------ | :--: | :----- |
| Sound the Brayhorn! | 1    | _When playing the "Ambush!" tactic on an infantry unit:_ The "Ambush!" tactic is not discarded after use. |
| Devolve!            | 2    | _At the start of a combat:_ Destroy one stand from the engaged enemy unit. |
| Primal Fury!        | 3    | _At the start of the round:_ For the rest of the round, all friendly infantry units gain [Melee Discipline](/honour-lies/army-builder.html#special-rules). |

### Wood Elves (12)
#### Army Rule: Forest Marches
All friendly Heavy units gain [Slow](/honour-lies/army-builder.html#special-rules).

| Name                    | Cost | Effect |
| :---------------------- | :--: | :----- |
| Eyes of the Asrai!      | 1    | _When activating a Scout unit:_ For this turn, this unit can see through obscuring terrain. |
| Waking The Forest!      | 2    | _At the start of the round:_ For the rest of the round, all friendly Heavy units gain [Melee Discipline](/honour-lies/army-builder.html#special-rules). |
| Tree Singing!           | 3    | _At the start of a round:_ Place two new command holdings anywhere. |

### High Elves (12)
#### Army Rule: Courtly Intrigue
Before deploying, your opponent unit may nominate a different unit to be your General's. If this new unit cannot occupy a command holding, it must deploy in alignment with it.

| Name                | Cost | Effect |
| :------------------ | :--: | :----- |
| A Future Unwritten! | 2    | _At the start of a round:_ State a value of 1, 2 or 3. Your opponent must reveal all tactics they have purchased of that value. |
| Sigil of Asuryan!   | 2    | _After Health bids are revealed:_ Adjust (either increase or decrease) your bid by up to two. |
| Apotheosis!         | 3    | _At the start of a round:_ All friendly units gain 3 Health. |

### Dark Elves (12)
#### Army Rule: Courtly Intrigue
Before deploying, your opponent unit may nominate a different unit to be your General's. If this new unit cannot occupy a command holding, it must deploy in alignment with it.

| Name                  | Cost | Effect |
| :-------------------- | :--: | :----- |
| Malicious Fate!       | 1    | _At the start of a round:_ Your opponent must discard one Tactic they have purchased for no effect. |
| Dark Compulsion!      | 2    | _After Health bids are revealed:_  Adjust (either increase or decrease) your opponents bid by one. |
| Purple Sun of Xereus! | 3    | _At the start of a round:_ All enemy units lose 1 Health and are -2 Morale for this round. |

### Lizardmen (12)
#### Army Rule: Cold-blooded
This army cannot bid more than 3 Strategy to gain Initiative.

| Name           | Cost | Effect |
| :------------- | :--: | :----- |
| Stampede!      | 1    | _When activating a beast or behemoth unit:_ During a melee this turn, the defending unit is -2 Morale. |
| Mystic Shield! | 2    | _When a friendly unit is calculating its base defence value:_ The unit may count all its stands, regardless of formation. |
| Apotheosis!    | 3    | _At the start of a round:_ All friendly units gain 3 Health. |
