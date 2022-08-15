const idTunnus = document.querySelector("#kayttajaID").value;
const kielet = document.querySelectorAll("input[name='kieli']");

document.getElementById("kayttajaID").addEventListener("invalid", idSisaltaa);
document.getElementById("send").addEventListener("click", radioValittu);
document.getElementById("send").addEventListener("click", kieliValittu);

function idSisaltaa() {
    console.log("Täytyy sisältää vähintään 6 merkkiä");
    alert ("ID:n täytyy sisältää vähintään 6 merkkiä");
}

function radioValittu() {
    event.preventDefault();
    var mies = document.getElementById("sukupuoliMies").checked;
    var nainen = document.getElementById("sukupuoliNainen").checked;
    var muu = document.getElementById("sukupuoliMuu").checked;

    if (!mies && !nainen && !muu) {
        alert("Valitse sukupuoli");
    }
 }

 function kieliValittu() {
    event.preventDefault();
    var suomi = document.getElementById("kieliSuomi").checked;
    var svenska = document.getElementById("kieliSve").checked;
    var englanti = document.getElementById("kieliEng").checked;

    if (!suomi && !svenska && !englanti) {
        alert("Valitse kieli");
    }
 }