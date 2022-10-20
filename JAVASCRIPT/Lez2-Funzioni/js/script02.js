// //richiamare una funzione da un'altra funzione
// function salutaUtente(){
//     var demo = document.getElementById('demo');

//     var nomeUtente = recuperaNomeUtente(); //richiamo dentro una funzione 
    
//     demo.innerHTML = "Ciao " + nomeUtente;
// }

// function recuperaNomeUtente(){
//     var nomeUtente = prompt('Come ti chiami ?');
//     return nomeUtente; //output
// }


// salutaUtente();

//Funzione per calcolare il volume

function calcolaArea(altezza, larghezza){
    var area = altezza * larghezza;
    return area;
}

function calcolaVolume(altezza, larghezza, profondita){
    
    var area = calcolaArea(altezza, larghezza); ///area

    var volume = area * profondita;

    // console.log(volume);
    return volume;
}

var volumeParall = calcolaVolume(3,4,5);

console.log("Il volume del solido vale: " + volumeParall);
