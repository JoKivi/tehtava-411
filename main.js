const idTunnus = document.querySelector("#kayttajaID");


// const kielet = document.querySelectorAll("input[name='kieli']");

document.getElementById("send").addEventListener("click", kaynnista);

function kaynnista(event) {
    event.preventDefault();

    const salasana = document.querySelector("#salasana").value.length;
    const nimi = document.querySelector("#nimi").value.length;
    const osoite = document.querySelector("#osoite").value.length;
    const postinumero = document.querySelector("#postinumero").value.length;
    const email = document.querySelector("#email");

    // Pakollinen ID 6 merkkiä
        if (idTunnus.value.length < 6) {
        console.log("Täytyy sisältää vähintään 6 merkkiä");
        alert("ID:n täytyy sisältää vähintään 6 merkkiä");
        return false;
    } 
        
    if (salasana === 0 || nimi === 0 || osoite === 0) {
        console.log("Täytä kaikki kohdat. Viesti on vapaaehtoinen.");
        alert("Täytä kaikki kohdat. Viesti on vapaaehtoinen.");
        return false;
    } if (postinumero !==5) {
        console.log("Postinumero sisältää viisi numeroa.");
        alert("Postinumero sisältää viisi numeroa..");
        return false;
    }

    // Sahkopostin tarkistus
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(validRegex)) {
        return true;
    } else {
        console.log("Syötä kunnollinen sähköpostiosoite");
        alert("Syötä kunnollinen sähköpostiosoite");
        return false;
    }

    // Sukupuolen pakollinen valinta
    var mies = document.getElementById("sukupuoliMies").checked;
    var nainen = document.getElementById("sukupuoliNainen").checked;
    var muu = document.getElementById("sukupuoliMuu").checked;

    if (!mies && !nainen && !muu) {
        console.log("Valitse sukupuoli");
        alert("Valitse sukupuoli");
        return false;
    }

    //Kielen pakollinen valinta 
    var suomi = document.getElementById("kieliSuomi").checked;
    var svenska = document.getElementById("kieliSve").checked;
    var englanti = document.getElementById("kieliEng").checked;

    if (!suomi && !svenska && !englanti) {
        console.log("Valitse kieli");
        alert("Valitse kieli");
        return false;
    }
    return true;
}
