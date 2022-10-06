// ARRAY, nuovo tipo di dato, sono un contenitore di elementi simili tra loro. 0-based

var mioPrimoArr = ["Dario", "Pluto", "Pippo", "Anna", "Maria", "Carola"];
console.log(mioPrimoArr);

// var secondoArr = ["Dario", "Mennillo", 33, "Torino", false]; //per quanto fattibile non ha senso
// console.log(secondoArr);

var colori = ['bianco', "rosso", 'giallo'];
console.log(colori);
// stampo un singolo colore alla volta utilizzando gli indici
console.log(colori[0]);
console.log(colori[1]);
console.log(colori[2]);

//cambio il valore di un singolo elemento riassegnando 
colori[2] = "arancione";

console.log(colori);

//METODI PER ARRAY, sono azioni che ci permettono di manipolare l'array
//push per aggiungere un elemento
colori.push("blu");
colori.push("verde");

//pop() rimuove l'ultimo elemento
colori.pop();
//sort() ordinare gli elementi
colori.sort();
//reverse() inverte l'ordine
colori.reverse();
//slice() taglia l'array in una posizione
var nuovoArray = colori.slice(2);
console.log(nuovoArray);


console.log(colori);
//PROPRIETà length è una caratteristica dell'array, num di elementi nell'array. Non ha le parentesi tonde dopo, non è un'azione.
var lunghezzaArray = colori.length;

console.log("La lunghezza dell'array colori è: " + lunghezzaArray);

