var nomiStud = ["Ali", "Cinzia", "Elena", "Isa", "Jona", "Lorenzo", "Lucia", "Luigi", "Marco", "Olga", "Pietro", "Riccardo", "Roberto", "Roberta"];

// document.write(nomiStud);

//voglio scrivere il nome degli studenti nel tag p creato nello HTML

//Recupero l'elemento html attraverso il suo id utilizzando un metodo per la manipolazione del DOM (Document Object Model)
var elListaStudenti = document.getElementById("listaStudenti");

//Modifico la sua proprietà "innerHTML" (quello che c'è scritto dentro)

// elListaStudenti.innerHTML = "Ciao utente caro";

elListaStudenti.innerHTML = nomiStud[0] + "<br>" +
                            nomiStud[1] + "<br>" +
                            nomiStud[2] + "<br>" +
                            nomiStud[3] + "<br>" +
                            nomiStud[4] + "<br>" +
                            nomiStud[5] + "<br>" +
                            nomiStud[6] + "<br>" +
                            nomiStud[7] + "<br>" +
                            nomiStud[8] + "<br>" +
                            nomiStud[9] + "<br>" +
                            nomiStud[10] + "<br>" +
                            nomiStud[11] + "<br>" +
                            nomiStud[12] + "<br>" +
                            nomiStud[13] + "<br>" ;

var elTotaleStudenti = document.getElementById("totaleStud");
elTotaleStudenti.innerHTML = "Numero di studenti: " + nomiStud.length;



//controllo cos'è elListaStudenti
// console.log(elListaStudenti);
// console.log(typeof elListaStudenti);


