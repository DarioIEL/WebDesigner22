
// Commento in linea

/**
 * Commento multiriga
 * Sono sempre dentro il commento 
 * 
 */

//Instanziare una variabile
// e valorizzarla con la string "Dario"

var nome = "Dario";
console.log("Ciao " + nome);

var eta = 33;
console.log(typeof eta);

var presenza = true;
console.log(typeof presenza);

var eta2 = "33";
console.log(typeof eta2);

//dichiaro una varibile
var a;
var b;

//valorizzo le variabili
a = 10;
b = 8;

var somma = (a + b); //+ è utilizzato come operatore matematico della somma

console.log("La somma tra i due numeri è: " + somma); //+ è utilizzato come operatore di concatenazione, cioè unisce Stringa e variabile

console.log("La somma tra i due numeri è: " + (a + b));

// c = "2";
// d = "3";
// var somma2 = Number(c)+Number(d); //cast di una variabile, forziamo la variabile ad essere un determinato tipo
// var prodotto = c*d;
// console.log(somma2);
// console.log(prodotto);

var oreDiLezione = 100;

//passano dei giorni, diminuiscono le ore
//riassegnando la variabile la stiamo di volta in volta aggiornando
oreDiLezione = oreDiLezione - 4;
console.log(oreDiLezione);

oreDiLezione = oreDiLezione - 4;
console.log(oreDiLezione);

//ATTENZIONE: sto saldando da numero a stringa ma non va fatto 
// oreDiLezione = "novantadue";
// console.log(oreDiLezione);

var promemoria = "Mancano ancora " + oreDiLezione + " ore di lezione";

//stampo nella pagina HTML
document.write("<p>" + promemoria + "</p>"); //per inserire HTML va inserito come se fosse una stringa
