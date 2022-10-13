//Operatori di Confronto --->>> boolean

var num1 = 3;
var num2 = 4;

var confronto = (num1 == num2); //false

console.log(confronto);

console.log(num1 > num2); //false;
console.log(num1 < num2); //true;
console.log(num1 <= num2);//true;
console.log(num1 != num2); //true

var num3 = 42;
var num4 = "42";
console.log("---------------------");
console.log(num3 == num4); //true perchéP sta valutando solo il contenuto
console.log(num3 === num4); //false perché sta valutando anche il tipo

console.log("-----------------------");
var stringa1 = "pippo";
var stringa2 = "pluto";

console.log(stringa1 == stringa2);//false
console.log(stringa1.length == stringa2.length); //true

console.log("-------------");

var num5 = 10;
var num6 = 10;

console.log(num5 >= num6); //true

//Operatori di confronto logico
//Valuteremo più condizioni contemporanemente
// && LOGICO  condizione1 && condizione2

var punteggio = 40;
var skill = 15;

//per vincere il gioco il punteggio deve essere superiore a 30, le skill superiore a 20
//affinché vinca il gioco deveono valere tutte e due le condizioni

var vittoria = (punteggio >= 30) && (skill >= 20); //false
//                      True     &&        False

console.log("la vittoria è: " + vittoria);

//in questo caso si vince anche se uno dei due punteggi è sotto la soglia

var vittoria2 = (punteggio >= 30) || (skill >= 20); //true
//                      True      ||    False

console.log("in questo caso la vittoria è " + vittoria2);

///GIOCO2

var punteggio2 = 40;
var skill2 = 20;

var vittoria3 = (punteggio2 >= 30) && (skill2 >= 20);
console.log("La vittoria vale: " + vittoria3); //true

var vittoria4 = (punteggio2 >=30 ) || (skill2 >=20);
console.log("La vittoria vale: " + vittoria4); //true

