var numeroIniziale = 36.764539786324;

var numArr = numeroIniziale.toFixed(3); //arrotonda a cifre decimali
console.log(numArr);

console.log(numeroIniziale.toPrecision(7)); //cifre significative

var num2 = "48";
var num3 = true;
var num4 = false;
var num5 = new Date();
var num6 = "123 456";

//Cast del numero
var num2Vero = Number(num2);
console.log(typeof num2Vero); //Number

console.log(Number(num3));//1
console.log(Number(num4));//0
console.log(num5);
console.log(Number(num5));//117687638712
console.log(Number(num6)); //NaN == Not a Number

var num7 = 12.56;
console.log(parseInt(num7));

var num8 = "34.67";
console.log(parseInt( num8));
console.log(parseFloat(num8));

var num9 = 10;
console.log(Number(num9).toPrecision(4));


//isNan restituisce un boolean per capire se quello che stiamo valutando è un non numero

var numProva = "Dario";
console.log(isNaN(numProva)); //true

var numProva2 = 56;
console.log(isNaN(numProva2)); //false 

var numProva3 = "56";
console.log(isNaN(numProva3));//false





