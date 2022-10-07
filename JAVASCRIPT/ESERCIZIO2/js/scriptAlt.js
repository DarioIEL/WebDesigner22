var libri = ["La certosa di Parma", 'Solaris', "L\'eleganza del riccio", "Array Potter", "L'ombra del vento", "Kafka sulla spiaggia", "Ruba come un artista"];

var prezzi = [3.50, 2.20, 4, 10, 6.5, 2.70, 3.40];

/**
 * recupero l'elemento UL#listaLibri
 * @input #listaLibri
 * */

var elListaLibri = document.getElementById("listaLibri"); //<ul></ul>

// elListaLibri.innerHTML = "<li>" + libri[0] + "</li>" + 
//                         "<li>" + libri[1] + "</li>" +
//                         "<li>" + libri[2] + "</li>" +
//                         "<li>" + libri[3] +"</li>";

//Stampo la mia lista utilizzando un for-in
//i sta per indice
for(var i in libri, prezzi){
    elListaLibri.innerHTML += "<li>" + libri[i] + " - € " + prezzi[i].toPrecision(3) + "</li>";
}

//Al termine dell lista aggiungi un h3 con il totale dei libri 
var elTotalePrezzi = document.getElementById('totalePrezzi');

// var totale = prezzi[0] + prezzi[1] + prezzi[2] + prezzi[3] + prezzi[4] + prezzi[5] + prezzi[6];

//inizializzo una variabile
let totale = 0;

for(var i in prezzi){
    totale += prezzi[i];
}

elTotalePrezzi.innerHTML = "Totale: € " + totale;

