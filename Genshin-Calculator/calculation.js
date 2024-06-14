const atk = document.getElementById("atkInput").innerHTML;
const def = document.getElementById("defInput").innerHTML;
const hp = document.getElementById("hpInput").innerHTML;
const em = document.getElementById("emInput").innerHTML;
const cd = document.getElementById("cdInput").innerHTML;
const cr = document.getElementById("crInput").innerHTML;
const db = document.getElementById("dbInput").innerHTML;
const as = document.getElementById("asInput").innerHTML;
const element = document.getElementById("elementInput").innerHTML;

document.getElementById("emInput").hidden = true;

document.getElementById("elementInput").addEventListener("change", () => {
    if(element != "physical") {
        document.getElementById("emInput").hidden = false;
        document.getElementById("emLabel").hidden = false;
    }
    else {
        document.getElementById("emInput").hidden = true;
        document.getElementById("emLabel").hidden = true;
    }
});


const baseDmg = as;


const damage = (baseDmg * baseDmgMulti + additiveBaseDmg) * dmgBonusMulti * defMulti * resMulti * amplifyingMulti;

const critDamage = damage * (1 + cd / 100);

const averageDamage = critDamage * (cr / 100) + damage * (1 - cr / 100);