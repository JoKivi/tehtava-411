const idTunnus = document.querySelector("#kayttajaID").value;
const kielet = document.querySelectorAll("input[name='kieli']");

document.getElementById("kayttajaID").addEventListener("invalid", idSisaltaa);
document.getElementById("send").addEventListener("click", radioValittu)

function idSisaltaa() {
    console.log("Täytyy sisältää vähintään 6 merkkiä");
    alert ("ID:n täytyy sisältää vähintään 6 merkkiä");
}

function radioValittu() {
    element.preventDefault();
    var radioValittu = querySelectorAll("input[name='sukupuoli']:checked");
    if (radioValittu = null) {
        alert ("Valitse sukupuoli")
    }
}