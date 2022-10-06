var listaCose = ["Zaino", "Pc", "Telefono", "Occhiali", "Tablet"];

var elMiaLista = document.getElementById('miaLista');

//for in, For semplificato. 
//Il for esegue per un numero definito di volte la stessa operazione.
//Nel nostro caso eseguirà l'operazione tante volte quanti sono gli elementi dell'array

for(var indice in listaCose){
    elMiaLista.innerHTML += listaCose[indice] + "<br>";
}

// for(var indice = 0; indice < listaCose.length; indice++){
//     elMiaLista.innerHTML += listaCose[indice] + '<br>'
// }

// [...listaCose].forEach(el => console.log(el))

