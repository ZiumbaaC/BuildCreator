const atk = document.getElementById("atkInput").innerHTML;
const def = document.getElementById("defInput").innerHTML;
const hp = document.getElementById("hpInput").innerHTML;
const em = document.getElementById("emInput").innerHTML;
const cd = document.getElementById("cdInput").innerHTML;
const cr = document.getElementById("crInput").innerHTML;
const db = document.getElementById("dbInput").innerHTML;
const as = document.getElementById("asInput").innerHTML;
const aas = document.getElementById("aasInput").innerHTML;
const element = document.getElementById("elementInput").innerHTML;
const scaling = document.getElementById("scalingInput").innerHTML;
const baseDmgMulti = document.getElementById("baseDmgMultiInput").innerHTML;
const enemyDmgReduction = document.getElementById("enemyDmgReductionInput").innerHTML;
const enemyLvl = document.getElementById("enemyLvlInput").innerHTML;
const lvl = document.getElementById("lvlInput").innerHTML;
const enemyRes = document.getElementById("enemyResInput").innerHTML;
const reactionBonus = document.getElementById("reactionBonusInput").innerHTML;
const reaction = document.getElementById("reactionInput").innerHTML;

const atkScaling = scaling == "atk";
const defScaling = scaling == "def";
const hpScaling = scaling == "hp";
const emScaling = scaling == "em";

while(true) {
    
}

function calculate() {
    let baseDmg = atkScaling ? as * atk : defScaling ? as * def : hpScaling ? as * hp : as * em;

    let additiveBaseDmg = atkScaling ? aas * atk : defScaling ? aas * def : hpScaling ? aas * hp : aas * em;

    let dmgBonusMulti = 1 + db - enemyDmgReduction;

    let defMulti = (5 * enemyLvl + 500)/((5 * enemyLvl + 500) + 5 * lvl + 500)

    let resMulti = (enemyRes / 100) < 0 ? 1 - (enemyRes / 100) / 2 : (enemyRes / 100) >= 0 && (enemyRes / 100) < 0.75 ? 1 - (enemyRes / 100) : 1 / (4 * (enemyRes / 100) + 1);

    let emBonusAmplifying = 2.78 * em / (em + 1400);

    let ReactionMulti = reaction == "vaporize" ? (element == "hydro" ? 2 : 1.5) : reaction == "melt" ? (element == "pyro" ? 2 : 1.5) : -1;

    let amplifyingMulti = ReactionMulti == -1 ? 1 : ReactionMulti * (1 + emBonusAmplifying + reactionBonus);

    let damage = (baseDmg * baseDmgMulti + additiveBaseDmg) * dmgBonusMulti * defMulti * resMulti * amplifyingMulti;

    let critDamage = damage * (1 + cd / 100);

    let averageDamage = critDamage * (cr / 100) + damage * (1 - cr / 100);

    document.getElementById("result1").innerHTML = "Non Crit Damage = " + damage;
    document.getElementById("result2").innerHTML = "Crit Damage = " + critDamage;
    document.getElementById("result3").innerHTML = "Average Damage = " + averageDamage;
}