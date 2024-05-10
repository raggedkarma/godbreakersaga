---
layout: honour.njk
current: rules
permalink: honour-lies/army-builder.html
pagetitle: Army Builder
---

<form id="army-builder" onsubmit="event.preventDefault();">
<script>
    function buildArmy() {
        types = {
            'Beasts': [1, 1, 5, 4],
            'Behemoth': [5, 3, 4, 6],
            'Cavalry': [3, 1, 2, 5],
            'Infantry': [2, 2, 3, 5]
        }
        roles = {
            'Artillery': [0,2,1,1,2,'Slow, Limited'],
            'Berserker': [2,0,1,1,2,'Rush'],
            'Elite': [1,0,1,2,3,'Melee Discipline'],
            'Heavy': [1,0,2,1,2,''],
            'Levy': [1,0,1,1,1,'Expendable, Limited'],
            'Monstrous': [2,0,2,1,3,'Limited'],
            'Nightmare': [3,0,1,1,1,'Summoned, Swift'],
            'Scout': [1,1,1,1,2,'Swift'],
            'Wildfire': [1,1,1,1,1,'Ranged Discipline, Reckless Volley']
        }
        typeValue = document.getElementById('type').value
        roleValue = document.getElementById('role').value
        type = types[typeValue]
        role = roles[roleValue]
        document.getElementById('results').innerHTML = `<table>
            <thead><tr><th>Name</th><th>Melee</th><th>Ranged</th><th>Defence</th><th>Morale</th><th>Health</th><th>Special</th></tr><thead>
            <tbody><tr>
                <td>${roleValue} ${typeValue}</td>
                <td>${type[0]*role[0]}</td>
                <td>${(type[0]*role[1]) || '-'}</td>
                <td>${type[1]*role[2]}</td>
                <td>${type[2]*role[3]}</td>
                <td>${type[3]*role[4]}</td>
                <td><em>${role[5]}</em></td>
            </tr></tbody>
        </table>`
    }
</script>
<select id="role">
    <option>Artillery</option>
    <option>Berserker</option>
    <option>Elite</option>
    <option selected>Heavy</option>
    <option>Levy</option>
    <option>Monstrous</option>
    <option>Nightmare</option>
    <option>Scout</option>
    <option>Wildfire</option>
</select>
<select id="type">
    <option>Beasts</option>
    <option>Behemoth</option>
    <option>Cavalry</option>
    <option selected>Infantry</option>
</select>
<button id="builder" onclick="buildArmy()">Build</button>
<div id="results"></div>
</form>

<hr id="types" />

## Types

| Name     | Attack | Defence | Morale | Health | Stands |
| :------- | :----: | :-----: | :----: | :----: | :----: |
| Beasts   | 1      | 1       | 5      | 4      | 4N     |
| Behemoth | 5      | 3       | 4      | 6      | 3N     |
| Cavalry  | 3      | 1       | 2      | 5      | 4N     |
| Infantry | 2      | 2       | 3      | 5      | 4W     |

<hr id="roles" />

## Roles

| Name          | Melee  | Ranged | Defence | Morale | Health | Special                                |
| :------------ | :----: | :----: | :-----: | :----: | :----: | :------------------------------------- |
| **Artillery** | 0      | Atk x2 | -       | -      | x2     | _Slow_, _Limited_                      |
| **Berserker** | Atk x2 | -      | -       | -      | x2     | _Rush_                                 |
| **Elite**     | Atk    | -      | -       | x2     | x3     | _Melee Discipline_                     |
| **Heavy**     | Atk    | -      | x2      | -      | x2     |                                        |
| **Levy**      | Atk    | -      | -       | -      | -      | _Expendable_, _Limited_                |
| **Monstrous** | Atk x2 | -      | x2      | -      | x3     | _Limited_                              |
| **Nightmare** | Atk x3 | -      | -       | -      | -      | _Summoned_, _Swift_                    |
| **Scout**     | Atk    | Atk    | -       | -      | x2     | _Swift_                                |
| **Wildfire**  | Atk    | Atk    | -       | -      | x1     | _Ranged Discipline_, _Reckless Volley_ |

<hr id="special-rules" />

## Special Rules

#### \[Combat\] Discipline
This unit bids Health at a 1:2 ratio when raising the indicated combat score (ranged, melee, or defence), so improving it by +2 per Health bid. A disordered \[Combat\] Discipline unit bids Health at 1:1 in any combat, effectively ignoring both rules.

#### Expendable
If this unit is destroyed at the start of a round, you may deploy a new unit of the exact same type and role to your deployment area in column formation. Should a unit have both the Expendable and Summoned special rules, it must still deploy using the Summoned rules (below), starting the round after the unit was destroyed.

#### Limited
This unit has one fewer stands for its type. For most units this leaves them with three stands, but behemoths only have two.

#### Reckless Volley
This unit may bid Health during a ranged combat.

#### Rush
This unit may choose to make an advance move instead of a ranged attack, even if it cannot make a ranged attack.

#### Slow
When activated, this unit must use the 'Slow' activation flow:

1. Ranged
2. Reform **or** Move
3. Melee

If a unit should also have the Swift special rule, ignore this effect.

#### Summoned
This unit is not deployed during setup. When a unit is destroyed, players may choose to deploy a friendly unit with the Summoned special rule. However, if both players have a unit they wish to deploy, the player with the Initiative chooses which one is deployed.

To deploy, before removing the final destroyed stand, place a stand of the Summoned unit in alignment. Then, remove the destroyed unit and rebuild the summoned unit (all the rules for repositioning still apply).

A summoned unit is permitted to activate as normal this round, unless it is disordered.

#### Swift
This unit may March even if within difficult terrain. If a unit should also have the Slow special rule, ignore this effect.
