---
layout: honour.njk
current: rules
permalink: honour-lies/army-builder.html
pagetitle: Army Builder
---

<hr id="types" />

## Types

| Name      | Attack | Defence | Morale | Health | Stands |
| :-------- | :----: | :-----: | :----: | :----: | :----: |
| Infantry  | 2      | 2       | 3      | 5      | 4W     |
| Cavalry   | 3      | 1       | 2      | 5      | 4N     |
| Beasts    | 1      | 1       | 5      | 4      | 4N     |
| Behemoths | 5      | 3       | 4      | 6      | 3N     |

<hr id="roles" />

## Roles

| Name          | Melee | Ranged | Defence | Morale | Health | Special                                 |
| :------------ | :---: | :----: | :-----: | :----: | :----: | :-------------------------------------- |
| **Artillery** | 0     | x2     | =       | =      | =      | _Limited_, _Ponderous_                  |
| **Berserker** | x2    | -      | =       | =      | x2     | _Rush_                                  |
| **Elite**     | =     | -      | =       | x2     | x2     | _Fearless_, _Melee Discipline_          |
| **Heavy**     | =     | -      | x2      | =      | x2     |                                         |
| **Levy**      | =     | -      | =       | =      | =      | _Expendable_, _Limited_                 |
| **Monstrous** | x2    | -      | x2      | =      | x2     | _Fear_, _Limited_, _Swift_              |
| **Nightmare** | x2    | -      | =       | =      | =      | _Fear_, _Summoned_, _Swift_             |
| **Scout**     | =     | =      | =       | =      | =      | _Skirmish_, _Swift_                      |
| **Wildfire**  | =     | =      | =       | =      | =      | _Ranged Discipline_, _Reckless Volley_  |

<hr id="special-rules" />

## Special Rules
If a unit ever gains a special rule they already have, there is no additional effect.

#### \[Combat\] Discipline
This unit bids Health at a 1:2 ratio when raising the indicated combat score (ranged, melee, or defence), improving it by +2 per Health bid. A disordered unit with \[Combat\] Discipline bids Health at 1:1 to improve the \[combat\] score, effectively ignoring both rules.

#### Expendable
If this unit is ever destroyed, it is instead 'removed from play'. At the start of a round, any unit removed from play may be deployed to your deployment area in column formation. This is not considered the unit's activation for the round.

> Should a unit have both the Expendable and Summoned special rules, it may still redeploy but must use the Summoned rules.

#### Fear
Enemy units count one fewer stands when calculating close combat score against this unit. A unit with Fear also has the Fearless special rule.

#### Fearless
This unit is not affected by Fear when calculating combat score.

#### Limited
This unit has one fewer stands for its type. For most units this leaves them with three stands, but behemoths only have two.

#### Ponderous
This unit may not perform its Move action in the same turn it used a Reform, but may still [March](/honour-lies/gameplay.html#activation).

#### Reckless Volley
This unit may bid Health during a ranged combat.

#### Rush
This unit may choose to make an advance move instead of a ranged attack, even if it cannot make a ranged attack.

#### Skirmish
This units do not become disordered while they cannot see a friendly command holding, though can from Tactics or other rules. In addition, friendly units do not lose a stand if fled through by a unit with this rule.

#### Summoned
This unit may only be deployed as follows:

When a unit is destroyed, one player may choose to immediately deploy a friendly unit with the Summoned special rule. Should both players intend to deploy a unit, the first player chooses which is deployed. This is not considered the unit's activation for the round.

To deploy, before removing the final destroyed stand, place a stand of the Summoned unit in alignment with it. Then, remove the destroyed unit and rebuild the summoned unit, following the rules for repositioning as normal.

#### Swift
This unit may March even if within difficult terrain.

<hr id="quick-builder" />

## Quick Builder
<script>
    types = {
        'Beasts': [1, 1, 5, 4, [4,'N']],
        'Behemoths': [5, 3, 4, 6, [3,'N']],
        'Cavalry': [3, 1, 2, 5, [4,'N']],
        'Infantry': [2, 2, 3, 5, [4,'W']]
    }
    roles = {
        'Artillery': [0,2,1,1,1,['Limited', 'Ponderous']],
        'Berserker': [2,0,1,1,2,['Rush']],
        'Elite': [1,0,1,2,2,['Fearless', 'Melee Discipline']],
        'Heavy': [1,0,2,1,2,[]],
        'Levy': [1,0,1,1,1,['Expendable', 'Limited']],
        'Monstrous': [2,0,2,1,2,['Fear', 'Limited', 'Swift']],
        'Nightmare': [2,0,1,1,1,['Fear', 'Summoned', 'Swift']],
        'Scout': [1,1,1,1,1,['Skirmish', 'Swift']],
        'Wildfire': [1,1,1,1,1,['Ranged Discipline', 'Reckless Volley']]
    }
    function addUnit(type, role) {
        nameValue = document.getElementById('name').value
        typeValue = type ?? document.getElementById('type').value
        roleValue = role ?? document.getElementById('role').value
        specialistValue = type || role ? null : document.getElementById('specialist').value
        type = types[typeValue]
        standCount = type[4][0]
        role = roles[roleValue]
        specialist = roles[specialistValue]
        if (specialist) {
            if (role[5].includes('Limited') && specialist[5].includes('Limited')) {
                window.alert("Specialist units cannot combine roles that both have the Limited special rule.")
                return
            }
            roleValue = `${roleValue} ${specialistValue}`
            for (i in role) {
                role[i] = typeof role[i] === 'number'
                    ? Math.max(role[i], specialist[i])
                    : [...new Set([...role[i], ...specialist[i]])]
            }
        }
        role[5].sort() // alphabetize special ruless
        specials = []
        for(special of role[5]) {
            if(special === 'Limited') {
                --standCount
                specials.push(`<s>${special}</s>`)
            } else if (special === 'Fearless' && specials[specials.length-1] === 'Fear') {
                specials.push(`<s>${special}</s>`)
            } else {
                specials.push(special)
            }
        }
        document.getElementById('quick-builder-list').innerHTML += 
            `<tr><td>${ [
                nameValue || roleValue, // Name
                `<em>${typeValue}</em>`, // Type
                type[0] * role[0], // Melee
                type[0] * role[1] || '-', // Ranged
                type[1] * role[2], // Defence
                type[2] * role[3], // Morale
                type[3] * role[4], // Health
                `${standCount+type[4][1]}`,
                `<em>${specials.join('</em>, <em>')}</em>` // Special rules
            ].join('</td><td>') }</td></tr>`
        document.getElementById('name').value = ""
        document.getElementById('specialist-regular').selected = true
    }
    function undoLast() {
        armyList = document.getElementById('quick-builder-list')
        if (armyList.lastChild) {
            armyList.removeChild(armyList.lastChild)
        }
    }
    function undoList() {
        document.getElementById('quick-builder-list').innerHTML = ""
    }
    function randomUnit() {
        typeKeys = [
            ...new Array(8).fill('Infantry'),
            ...new Array(4).fill('Cavalry'),
            ...new Array(2).fill('Behemoths'),
            ...new Array(1).fill('Beasts'),
        ]
        roleKeys = ['Artillery', 'Berserker', 'Elite', 'Heavy', 'Levy', 'Monstrous', 'Nightmare', 'Scout', 'Wildfire']
        addUnit(
            typeKeys[Math.floor(Math.random() * typeKeys.length-1)],
            roleKeys[Math.floor(Math.random() * roleKeys.length-1)],
        )
    }
</script>
<form onsubmit="event.preventDefault();">
<fieldset>
    <input id="name" placeholder="Unit Name" />
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
    <select id="specialist">
        <option id="specialist-regular" selected>Regular</option>
        <option>Artillery</option>
        <option>Berserker</option>
        <option>Elite</option>
        <option>Heavy</option>
        <option>Levy</option>
        <option>Monstrous</option>
        <option>Nightmare</option>
        <option>Scout</option>
        <option>Wildfire</option>
    </select>
    <select id="type">
        <option selected>Infantry</option>
        <option>Cavalry</option>
        <option>Beasts</option>
        <option>Behemoths</option>
    </select>
    <button onclick="addUnit()">&plus; Add Unit</button>
</fieldset>
<br />
<table>
    <thead><tr>
        <th>Name</th>
        <th>Type</th>
        <th>Melee</th>
        <th>Ranged</th>
        <th>Defence</th>
        <th>Morale</th>
        <th>Health</th>
        <th>Stands</th>
        <th>Special</th>
    </tr><thead>
    <tbody id="quick-builder-list"></tbody>
    <tfoot><tr>
        <td colspan="4">
            <button onclick="undoLast()">&#08634; Undo</button>
            <button onclick="undoList()">&#08634; Undo All</button>
        </td>
        <td colspan="3"><button onclick="randomUnit()">+ Random Unit</button></td>
    </tr><tfoot>
</table>

</form>
