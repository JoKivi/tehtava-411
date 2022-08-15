const idTunnus = document.querySelector("#kayttajaID").value;
const kielet = document.querySelectorAll("input[name='kieli']");

document.getElementById("send").addEventListener("click", kaynnista);
// document.getElementById("send").addEventListener("click", radioValittu);
// document.getElementById("send").addEventListener("click", kieliValittu);

function kaynnista(event) {
    event.preventDefault();

    // Pakollinen ID 6 merkkiä
    let idLength = idTunnus.length;
    if (idLength <6) {
        console.log("Täytyy sisältää vähintään 6 merkkiä");
        alert ("ID:n täytyy sisältää vähintään 6 merkkiä");
    }


    // Sukupuolen pakollinen valinta
    var mies = document.getElementById("sukupuoliMies").checked;
    var nainen = document.getElementById("sukupuoliNainen").checked;
    var muu = document.getElementById("sukupuoliMuu").checked;

    if (!mies && !nainen && !muu) {
        console.log("Valitse sukupuoli");
        alert("Valitse sukupuoli");
    }

    //Kielen pakollinen valinta 
    var suomi = document.getElementById("kieliSuomi").checked;
    var svenska = document.getElementById("kieliSve").checked;
    var englanti = document.getElementById("kieliEng").checked;

    if (!suomi && !svenska && !englanti) {
        console.log("Valitse kieli");
        alert("Valitse kieli");
    }
}

// function radioValittu() {
//     Event.preventDefault();
//     var mies = document.getElementById("sukupuoliMies").checked;
//     var nainen = document.getElementById("sukupuoliNainen").checked;
//     var muu = document.getElementById("sukupuoliMuu").checked;

//     if (!mies && !nainen && !muu) {
//         console.log("Valitse sukupuoli");
//         alert("Valitse sukupuoli");
//     }
//  }

//  function kieliValittu() {
//     event.preventDefault();
//     var suomi = document.getElementById("kieliSuomi").checked;
//     var svenska = document.getElementById("kieliSve").checked;
//     var englanti = document.getElementById("kieliEng").checked;

//     if (!suomi && !svenska && !englanti) {
//         console.log("Valitse kieli");
//         alert("Valitse kieli");
//     }
//  }