const idTunnus = document.querySelector("#kayttajaID").value;
const kielet = document.querySelectorAll("input[name='kieli']");

document.getElementById("kayttajaID").addEventListener("invalid", idSisaltaa);
document.getElementById("send").addEventListener("click", radioValittu);

function idSisaltaa() {
    console.log("Täytyy sisältää vähintään 6 merkkiä");
    alert ("ID:n täytyy sisältää vähintään 6 merkkiä");
}

function radioValittu() {
    // element.preventDefault();
    var mies = document.getElementById("sukupuoliMies").Checked;
    var nainen = document.getElementById("sukupuoliNainen").Checked;
    var muu = document.getElementById("sukupuoliMuu").Checked;

    if (mies === false, nainen === false, muu === false) {
        alert = ("Valitse sukupuoli");
    }
 }