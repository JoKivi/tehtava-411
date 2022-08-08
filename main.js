const idTunnus = document.querySelector("#kayttajaID").value;
const sukupuolet = document.querySelectorAll("input[name='sukupuoli']");
const kielet = document.querySelectorAll("input[name='kieli']");

let valittuSukupuoli;
for (const sukupuoliValinta of sukupuolet) {
    if (sukupuoliValinta.checked) {
        valittuSukupuoli = sukupuoliValinta.value;
        break;
    }
}

let valittuKieli;
for (const kieliValinta of kielet) {
    if (kieliValinta.checked) {
        valittuKieli = kieliValinta.value;
        break;
    }
}