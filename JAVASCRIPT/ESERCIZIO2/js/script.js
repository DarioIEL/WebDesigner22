//Creo la lista di libri, il mio array di libri

var libri = ["La certosa di Parma", 'Solaris', "L\'eleganza del riccio", "Array Potter", "L'ombra del vento", "Kafka sulla spiaggia", "Ruba come un artista"];

libri.sort();

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
for(var i in libri){
    elListaLibri.innerHTML += "<li> Libro indice: " + i + " - " + libri[i] + "</li>";
}
