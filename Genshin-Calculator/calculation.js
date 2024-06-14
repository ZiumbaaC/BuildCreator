const atk = document.getElementById("atkInput").innerHTML;
const def = document.getElementById("defInput").innerHTML;
const hp = document.getElementById("hpInput").innerHTML;
const em = document.getElementById("emInput").innerHTML;
const cd = document.getElementById("cdInput").innerHTML;
const cr = document.getElementById("crInput").innerHTML;
const db = document.getElementById("dbInput").innerHTML;
const element = document.getElementById("elementInput").innerHTML;

document.getElementById("emInput").hidden = true;

document.getElementById("elementInput").addEventListener("change", () => {
    if(element != "physical") {
        document.getElementById("emInput").hidden = false;
    }
});


let baseDmg = dmgScaling;


let damage = (baseDmg * baseDmgMulti + additiveBaseDmg) * dmgBonusMulti * defMulti * resMulti * amplifyingMulti;

let critDamage = damage * (1 + cd / 100);

let averageDamage = critDamage * (cr / 100) + damage * (1 - cr / 100);