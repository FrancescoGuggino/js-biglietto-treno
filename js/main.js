// chiedere informazioni al cliente
let name = prompt ("inserisci il nome e cognome:");
let age = prompt ("Inserisci l'età:");
let distance = prompt ("Inserisci i km da percorrere:");
let pricekm = 0.21;


//sconti applicabili e prezzi
let minorsale = distance * pricekm  * 20 / 100;
let seniorsale = distance * pricekm * 40 / 100;
let normalprice = distance * pricekm;
let minor = normalprice - minorsale;
let senior = normalprice - seniorsale;



// calcoli variabile età e stampa
if (age < 18) {
    
    console.log (`Il costo del tuo biglietto è:
    ${minor}`);

    document.getElementById("prezzo").innerHTML = minor;
  } else if (age > 60) {  
    console.log (`Il costo del tuo biglietto è:
    ${senior}`);
    document.getElementById("prezzo").innerHTML = senior
  } else {
    console.log (`Il costo del tuo biglietto è:
    ${normalprice}`);
    document.getElementById("prezzo").innerHTML = normalprice
  }


//Form bonus
function submitForm(event) {
    event.preventDefault();

    console.log("Il FORM FUNZIONA!");

    let userName = document.getElementById("inputname").value;
    let userKm = document.getElementById("inputkm").value;

    let userage = document.getElementById("selectage").value;

    let random = math.floor(math.random() * 7) +1;

}