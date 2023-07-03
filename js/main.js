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
  } else if (age > 60) {  
    console.log (`Il costo del tuo biglietto è:
    ${senior}`);
  } else {
    console.log (`Il costo del tuo biglietto è:
    ${normalprice}`);
  }


  document.getElementById("minor").innerHTML = minor
  document.getElementById("senior").innerHTML = senior
  document.getElementById("normalprice").innerHTML = normalprice