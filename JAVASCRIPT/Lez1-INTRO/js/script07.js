var punti = [25, 30, 22, 21, 53, 16, 15, 32, 18];

//recupero il mio tag ul
var listaPunti = document.getElementById('listaPunti');

// for(var i = 0; i < punti.length; i++){
//     // listaPunti.innerHTML += "<li>" + punti[i] + "</li>";
//     if(punti[i] < 25){
//         listaPunti.innerHTML += "<li>" + punti[i] + " questo round è andato male </li>";
//     }else{
//         listaPunti.innerHTML += "<li>" + punti[i] + "</li>";
//     }
// }

//Quando l'utente supera i 30 punti verrà scritto "Questo round è andato benissimo"

// for(var i = 0; i < punti.length; i++){

//     if(punti[i] >= 30){
//         listaPunti.innerHTML += "<li>" + punti[i] + " questo round è andato benissimo </li>";
//     }else{
//         listaPunti.innerHTML += "<li>" + punti[i] + "</li>"
//     }
// }

//variabile di supporto inizializzata a 0 
var contatore = 0;

//metto insieme le due condizioni <25 e >=30
for(var i = 0; i < punti.length; i++){
    
    if(punti[i] >= 30){
        listaPunti.innerHTML += "<li>" + punti[i] + " questo round è andato benissimo </li>";
    }else if(punti[i] < 25 && punti[i] >= 18){
        listaPunti.innerHTML += "<li>" + punti[i] + " questo round è andato male </li>";
    }else if(punti[i] < 18){
        listaPunti.innerHTML += "<li>" + punti[i] + " questo round è andato malissimo </li>";
        contatore++; //aggiornamento var di supporto
    }else{
        listaPunti.innerHTML += "<li>" + punti[i] + "</li>";
    }
}

console.log(contatore);

var responso = document.getElementById("responso");

if(contatore >= 2){
    responso.innerHTML = "Mi dispiace, hai perso al gioco."
}

//OK ?

//impostare un'altra condizione: se il punteggio è inferiore a 18 scrivi "il round è andato Malissimo".

//Sotto la lista dei punteggi fai sapere all'utente se ha vinto al gioco oppure no.
//Come si perde: se l'utente ha più di 2 punteggi sotto il 18


