'use strict';

//////////////////////////////////////////////////////////

//DEFINIRE VARIABILI
let flag = 0;
let mailCorretta = "";
const lunghezzaArray = 10;
let lunghezzaMail = 0;

//CREARE UNA LISTA DI MAIL
let listaMail = [];

for (let i = 0; i < lunghezzaArray; i++) {

    //variabili
    let mailFormata = "";
    let alfabeto = "abcdefghijklmnopqrstuvwxyz";
    let lunghezzaAlfabeto = alfabeto.length;

    //generare lettera random
    for (let j = 0; j < 8; j++) {
        //generare lettera random
        let cifraRandom = Math.floor(Math.random() * lunghezzaAlfabeto);
        let letteraRandom = alfabeto.charAt(cifraRandom);
        mailFormata += letteraRandom;
        //console.log({letteraRandom});
    }

    //aggiungere @ per mantenere il formato mail
    mailFormata += "@";
    //console.log("@");

    //generare lettera random
    for (let j = 0; j < 4; j++) {
        let cifraRandom = Math.floor(Math.random() * lunghezzaAlfabeto);
        let letteraRandom = alfabeto.charAt(cifraRandom);
        mailFormata += letteraRandom;
        //console.log({letteraRandom});
    }

    //aggiungere . per mantenere il formato mail
    mailFormata += ".";
    //console.log(".");

    //generare lettera random
    for (let j = 0; j < 2; j++) {
        let cifraRandom = Math.floor(Math.random() * lunghezzaAlfabeto);
        let letteraRandom = alfabeto.charAt(cifraRandom);
        mailFormata += letteraRandom;
        //console.log({letteraRandom});
    }

    console.log({mailFormata});
    lunghezzaMail = mailFormata.length;

    listaMail[i] = mailFormata;

}

console.log(listaMail);

//ACQUISIRE I DATI DALL'UTENTE
let mailInserita = prompt("Inserisci la tua mail per controllare che appartenga al database:");
console.log({mailInserita});

//CONTROLLARE CHE LA MAIL INSERITA APPARTENGA ALLA LISTA
for (let i = 0; i < lunghezzaArray && flag === 0 ; i++) {

    let mailControllo = listaMail[i];

    for (let j = 0; j < lunghezzaMail; j++) {

        if (mailInserita[j] === mailControllo[j]) {
            flag = 1;
        } else {
            flag = 0;
        }

        if (flag == 1) {
            mailCorretta = listaMail[i];
        }

    }

}

//STAMPARE IL MESSAGGIO DI ESITO
if (flag == 1) {
    console.log(`La tua mail è presente nel database: ${mailCorretta}`);
} else {
    console.log("La tua mail non è presente in questo database. :(");
}
