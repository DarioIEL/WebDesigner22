//METODI PER STRINGHE

//le stringhe sono 0-based

var str1 = "Oggi è Venerdì";
var lunghezzaStr1 = str1.length;

console.log(lunghezzaStr1);

//Metodi per la ricerca 

var search1 = str1.indexOf("Venerdì"); //trova l'indice iniziale della stringa che noi inseriamo nel metodo
console.log(search1);

var str2 = "Il corso di JS è tenuto da un'azienda di Torino";
var search2 = str2.indexOf('di'); //---> 9 , prima occorrenza
var search3 = str2.lastIndexOf('di'); //---> 38 , l'ultima occorrenza
var search4 = str2.indexOf("Napoli"); //---> -1, non c'è quella stringa
console.log(search2);
console.log(search3);
console.log(search4);

var str3 = "Stiamo studiando le basi del linguaggio";
var search5 = str3.charAt(20); //restituisce in carattere in un dato indice
var search6 = str3.charCodeAt(20) //codice carattere
console.log(search5);
console.log(search6);

//Metodi per il taglio 

var str4 = "Javascript è un linguaggio basato su prototipi";
var sl = str4.slice(6,14); //estrae una porzione della stringa 5: indice di partenza, 10: indice di arrivo
console.log(sl);

var sub = str4.substring(6,14);
console.log(sub);
console.log(str4);


//Metodi per sostituire
var str5 = "Explorer è il miglior browser che ci sia!";
var rep = str5.replace("Explorer", "Chrome");
console.log(rep);

//Metodi vari ed eventuali 
var upp = str5.toUpperCase();
var low = str5.toLowerCase();

console.log(upp);
console.log(low);

//Metodi per scomporre in array 
var str6 = "Scomponiamo in array";
//split taglia la stringa nel punto in cui trova quel preciso pattern e inserisce in un array restituendocelo
var strInArr = str6.split(''); //con '' separo ogni carattere
var strInArr2 = str6.split(' ');
var strInArr3 = str6.split('amo');
var strInArr4 = str6.split('a');
console.log(strInArr);
console.log(strInArr2);
console.log(strInArr3);
console.log(strInArr4);

//ricompongo un array per ritrasformala in stringa
var nuovaStr = strInArr3.join('');
console.log(nuovaStr);

var mioNome = ["D", "A", "R", "I", "O"];
var nome = mioNome.join('');
console.log(nome);

////////////////////////////////

var tuoNome = "Massimiliano";
var nomeInv = tuoNome.split('').reverse().join('');

console.log(nomeInv);

//Trim() taglia gli spazi vuoti
var nomeUtente = "          Pippo";
var nomeCorretto = nomeUtente.trim();
console.log(nomeCorretto);

console.log( nomeUtente.concat("ciao") );

