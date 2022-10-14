//Math.random() calcola un numero casuale tra 0 e 1
var numeroCasuale = Math.random();

console.log(numeroCasuale);


//Quando voglio espandere l'intervallo di numeri mi basta moltiplicare per il numero massimo che voglio ottenere

//numeri casuali da 0 a 20
var numCas2 = Math.random() * 20;
console.log(numCas2);

//metodo ceil e floor
//ceil: arrotonda all'INTERO superiore (per eccesso)
//floor: arrotonda all'INTERO inferiore (per difetto)

var num = 10.48;

console.log( Math.ceil(num) ); //11
console.log( Math.floor(num) ); //10

//Voglio ottenere un numero casuale (intero) tra 1 e 10;
var numCas3 = Math.ceil( Math.random() * 10 );

console.log( numCas3 );

//CAlcolo un numero casuale tra 1 e 90
var tombola = Math.ceil( (Math.random() * 90));
console.log(tombola);


var numero2 = 7.50;

console.log( Math.round(numero2) );