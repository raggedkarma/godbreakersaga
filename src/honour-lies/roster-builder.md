---
layout: honour.njk
current: rules
permalink: honour-lies/roster-builder.html
pagetitle: Roster Builder
---

<hr id="quick-builder" />

## Quick Builder
<script>
    types = {
        'Beasts': [1, 1, 5, 4, [6,'']],
        'Behemoths': [5, 3, 4, 6, [3,'N']],
        'Cavalry': [3, 1, 2, 5, [4,'N']],
        'Infantry': [2, 2, 3, 5, [4,'W']]
    };
    roles = {
        'Artillery': [0,2,1,1,1,['Limited', 'Ponderous']],
        'Berserker': [2,0,1,1,2,['Rush']],
        'Elite': [1,0,1,1.1,2,['Fearless', 'Melee Discipline']],
        'Heavy': [1,0,2,1,2,['Defence Discipline']],
        'Levy': [1,0,1,1,1,['Expendable', 'Limited']],
        'Monstrous': [2,0,2,1,2,['Fear', 'Limited', 'Swift']],
        'Nightmare': [2,0,1,1,1,['Fear', 'Summoned']],
        'Scout': [1,1,1,1,1,['Skirmish', 'Swift']],
        'Wildfire': [1,1,1,1,1,['Ranged Discipline', 'Reckless Volley']]
    };
    function resetForm() {
        document.getElementById('name').value = ""
        document.getElementById('specialist-regular').selected = true
    }
    function addUnit(type, role) {
        nameValue = document.getElementById('name').value
        typeValue = type ?? document.getElementById('type').value
        roleValue = role ?? document.getElementById('role').value
        specialistValue = (type || role) ? null : document.getElementById('specialist').value
        type = types[typeValue]
        standCount = type[4][0]
        role = [...roles[roleValue]]
        if (Object.keys(roles).includes(specialistValue)) {
            specialist = roles[specialistValue]
            if (roleValue === specialistValue) {
                resetForm()
                return window.alert("Specialists should combine different roles for meaningful results.")
            }
            if (role[5].includes('Limited') && specialist[5].includes('Limited')) {
                resetForm()
                console.log({ roleRules: role[5], specialistRoles: specialist[5] })
                return window.alert("Specialist units cannot combine roles that both have the Limited special rule.")
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
        resetForm()
        document.getElementById('quick-builder-table-body').innerHTML += 
            `<tr class="unit-profile ${specials.filter(s => s.substr(-10) === 'Discipline').map(s => s.split(' ')[0].toLowerCase()).join(' ')}"><td>${ [
                `<strong>${ nameValue}</strong>`, // Name
                type[0] * role[0], // Melee
                type[0] * role[1] || '-', // Ranged
                type[1] * role[2], // Defence
                Math.ceil(type[2] * role[3]), // Morale
                type[3] * role[4], // Health
                `${standCount+type[4][1]}`
            ].join('</td><td>') }</td></tr>
            <tr class="unit-details">
                <td><em>${roleValue} ${typeValue}<em></td>
                <td colspan="6">
                    <em>${specials.join('</em>, <em>')}</em>
                </td>
            </tr>`
    }
    function undoLast() {
        const roster = document.getElementById('quick-builder-table-body')
        const { children } = roster
        if (children.length > 0) {
            roster.removeChild(children[children.length-1])
            roster.removeChild(children[children.length-1])
        }
    }
    function undoList() {
        document.getElementById('quick-builder-table-body').innerHTML = ""
    }
    function randomUnit() {
        typeKeys = [
            ...new Array(8).fill('Infantry'),
            ...new Array(4).fill('Cavalry'),
            ...new Array(2).fill('Behemoths'),
            ...new Array(1).fill('Beasts'),
        ]
        roleKeys = Object.keys(roles)
        addUnit(
            typeKeys[Math.floor(Math.random() * typeKeys.length)],
            roleKeys[Math.floor(Math.random() * roleKeys.length)]
        )
    }
</script>
<form id="quick-builder-form" onsubmit="event.preventDefault();">
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
        <optgroup label="Specialist">
            <option>Artillery</option>
            <option>Berserker</option>
            <option>Elite</option>
            <option>Heavy</option>
            <option>Levy</option>
            <option>Monstrous</option>
            <option>Nightmare</option>
            <option>Scout</option>
            <option>Wildfire</option>
        </optgroup>
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
        <th>Melee</th>
        <th>Ranged</th>
        <th>Defence</th>
        <th>Morale</th>
        <th>Health</th>
        <th>Stands</th>
    </tr><thead>
    <tbody id="quick-builder-table-body"></tbody>
    <tfoot><tr>
        <td colspan="4">
            <button onclick="undoLast()">&#08634; Undo</button>
            <button onclick="undoList()">&#08634; Clear All</button>
        </td>
        <td colspan="4"><button onclick="randomUnit()">+ Random Unit</button></td>
    </tr><tfoot>
</table>
</form>

<hr id="special-rules" />

## Special Rules
> If a unit ever gains a special rule twice, there is no additional effect.

#### \[Combat\] Discipline
This unit bids Health at a 1:2 ratio when raising the indicated combat score (ranged, melee, or defence), improving it by +2 per Health bid. A disordered unit with \[Combat\] Discipline bids Health at 1:1 to improve the \[combat\] score, effectively ignoring both rules.

#### Expendable
If this unit would be destroyed, it is instead 'removed from play'. At the start of any subsequent round, any _Expendable_ unit removed from play may be deployed to your deployment area in column formation. This is not considered the unit's activation for the round.

#### Fear
Enemy units count one fewer stands when calculating their close combat score against this unit. A unit with Fear also has the Fearless special rule.

#### Fearless
This unit is not affected by Fear when calculating combat score.

#### Limited
This unit has one fewer stands for its type. For most units this leaves them with three stands, but behemoths only have two.

#### Ponderous
If this unit performs a Reform, they must skip their Move action, but may still [March](/honour-lies/gameplay.html#activation).

#### Reckless Volley
This unit may bid Health during a ranged combat.

#### Rush
If not disordered, this unit can make an Advance move instead for their Reform action.

#### Skirmish
This unit is immune to disorder. In addition, friendly units do not lose a stand if fled through by a unit with this rule.

#### Summoned
This unit may only be deployed via **summoning**:

Whenever a unit is destroyed, a player may choose to immediately deploy a friendly unit with the Summoned special rule. Should both players intend to summon a unit, the first player chooses which is deployed.

> A unit deployed via summoning has not activated this round.

To deploy, before removing the final destroyed stand, place a stand of the Summoned unit in alignment and facing toward it. Then, remove the destroyed unit and rebuild the summoned unit as normal. A summoned unit may be deployed in any formation.

> If a unit with both _Expendable_ **and** _Summoned_ was removed from play, it may only redeploy in a subsequent turn via summoning.

#### Swift
This unit may March even if within difficult terrain, and may Reform instead of making an Advance move.

<hr id="types" />

## Types

| Name      | Attack | Defence | Morale | Health | Stands |
| :-------- | :----: | :-----: | :----: | :----: | :----: |
| Infantry  | 2      | 2       | 3      | 5      | 4W     |
| Cavalry   | 3      | 1       | 2      | 5      | 4N     |
| Beasts    | 1      | 1       | 5      | 4      | 6*     |
| Behemoths | 5      | 3       | 4      | 6      | 3N     |

> \* All beast stands in a unit must face the same edge, either long or short depending on the miniatures.

<hr id="roles" />

## Roles

| Name          | Melee | Ranged | Defence | Morale | Health | Special                                 |
| :------------ | :---: | :----: | :-----: | :----: | :----: | :-------------------------------------- |
| **Artillery** | 0     | x2     | =       | =      | =      | _Limited_, _Ponderous_                  |
| **Berserker** | x2    | -      | =       | =      | x2     | _Rush_                                  |
| **Elite**     | =     | -      | =       | +1     | x2     | _Fearless_, _Melee Discipline_          |
| **Heavy**     | =     | -      | x2      | =      | x2     | _Defence Discipline_                    |
| **Levy**      | =     | -      | =       | =      | =      | _Expendable_, _Limited_                 |
| **Monstrous** | x2    | -      | x2      | =      | x2     | _Fear_, _Limited_, _Swift_              |
| **Nightmare** | x2    | -      | =       | =      | =      | _Fear_, _Summoned_                      |
| **Scout**     | =     | =      | =       | =      | =      | _Skirmish_, _Swift_                     |
| **Wildfire**  | =     | =      | =       | =      | =      | _Ranged Discipline_, _Reckless Volley_  |

### Specialists
A specialist unit may combine any two roles, unless they both have _Limited_, creating a characterful unit for a force. Specialist roles use the better modifier of either of the parent roles, and the special rules of **both**.

The following section will also try to clear up situations where a specialist unit may combine two rules in interesting ways.