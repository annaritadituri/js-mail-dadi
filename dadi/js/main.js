'use strict';

//////////////////////////////////////////////////////////

//GENERARE DUE NUMERI RANDOM DA ASSEGNARE UNO AL COMPUTER E L'ALTRO ALL'UTENTE
let numeroComputer = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log({numeroComputer});
let numeroUtente = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log({numeroUtente});

//STABILIRE QUAL È IL NUMERO PIÙ ALTO
if (numeroComputer > numeroUtente) {
    console.log("Il computer ti ha battuto!");
} else if (numeroUtente > numeroComputer) {
    console.log("Hai vinto contro il computer!");
} else {
    console.log("Siete pari per questo giro...");
}