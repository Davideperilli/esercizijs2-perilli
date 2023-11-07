// esercizio 0
/* Scrivi un programma che dato un numero intero compreso tra 1 a 7
 visualizzi il corrispondente giorno della settimana. Sapendo che:
  1 = lunedì
  2 = martedì
  3 = mercoledì
  ...
  7 = domenica
 Esempi:
   Input: numero = 6
   Output: "Sabato"
   Input: numero = 10
   Output: “Errore! Giorno della settimana non valido!" */

 /*   let numerogiorno = 2

switch (numerogiorno){
    case 1:
      console.log(`il giorno è lunedì`);
     breack;

     case 2:
        console.log(`il giorno è martedì`);
     breack;  

       case 3:
        console.log(`il giorno è mercoledì`);
       breack;

       case 4:
        console.log(`il giorno è giovedì`);
       breack;

       case 5:
        console.log(`il giorno è venerdì`);
       breack;

       case 6:
        console.log(`il giorno è sabato`);
       breack;

       case 7:
        console.log(`il giorno è domenica`);
       breack;

    default: console.log("Errore! Giorno della settimana non valido!");
    
} */



//esercizio1
/* function sommaTraNumeri(a,b,c,d,e) {
    let somma = a+b+c+d+e;
    return somma;

}

let somma = sommatraNumeri (10,30,50,100,40);

ß
function mediaTraNumeri(a,b,c,d,e) {
    let media = (a+b+c+d+e)/5;
    return media

}

let media = mediatraNumeri (10,30,50,100,40)
console.log(`la somma è ${somma} la media è ${media}`);  */

//esercizio 2
/* function giorniSettimana(number){
    if(number == 1){
        console.log('lunedì')
    }else if (number == 2){
        console.log('martedì')
    }else if (number == 3){
        console.log('mercoledì')
    }else if (number == 4){
        console.log('giovedì')
    }else if (number == 5){
        console.log('venerdì')
    }else if (number == 6){
        console.log('sabato')
    }else if (number == 7){
        console.log('domenica')
    } else {
        console.log('numero non valido')
    }
}
giorniSettimana(4); */


//esercizio 3
/* let p1 = 0;
let p2 = 0;
let max = 6;
let min = 1;

function sfidaAiDadi(nTiri){

    for(let i = 1; i <= nTiri; i++){
        p1 += Math.floor(Math.random() * (max - min + 1) + min);
        p2 += Math.floor(Math.random() * (max - min + 1) + min);
    }

    if(p1 > p2){

        return `Il vincitore della sfida con ${nTiri} tiri, è il primo giocatore che ha totalizzato un punteggio di ${p1} punti.`;

    } else if(p2 > p1){

        return `Il vincitore della sfida con ${nTiri} tiri, è il secondo giocatore che ha totalizzato un punteggio di ${p2} punti.`;

    } else {

        return `I giocatori della sfida con ${nTiri} tiri, hanno pareggiato, totalizzando un punteggio di ${p1} punti.`

    }

}

let sfidaCinqueDadi = sfidaAiDadi(5);
console.log(sfidaCinqueDadi);

let sfidaDieciDadi = sfidaAiDadi(10);
console.log(sfidaDieciDadi);

let sfidaDado = sfidaAiDadi(1);
console.log(sfidaDado); */

//esercizio4
/* function tabellina(number){
    for (i=0; i <100; i++){
        if (i % 10 == 0) {
            console.log(i)
        }
    }
    console.log(i)
}
tabellina(10) */


//esercizio5
/* Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,   FALSE altrimenti. */
//   Esempi:
//     Input: n = 2, m = 3
//     Output: FALSE
//     Input: n = 2, m = '2'
//     Output: FALSE
//     Input: n = 2, m = 2
//     Output: TRUE

/* function compara(a1, a2){
    if(a1 == a2){
        return "TRUE";
    } else {
        return "FALSE";
    }
}
let pippo = compara (2 , 2);
console.log(pippo); */