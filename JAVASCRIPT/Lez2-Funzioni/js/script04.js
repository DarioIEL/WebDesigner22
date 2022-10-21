//funzione per recuperare numeri
var primoNum = 0;
var secondoNum = 0;

function recuperaNumeri(){
    primoNum = Number( document.getElementById('primoNum').value );
    secondoNum = Number( document.getElementById('secondoNum').value );
}

//questo è il div nel quale stampo il risultato
var risultato = document.getElementById('risultato');
//funzione stampa
function stampa(numero){
    risultato.innerHTML = numero; 
}

//funzioni per le operazioni
function somma(){
    recuperaNumeri();
    var numero = primoNum + secondoNum;
    stampa(numero);
}

function moltiplica(){
    recuperaNumeri();
    var numero = primoNum * secondoNum;
    stampa(numero);
}




// Con il return array

// var risultato = document.getElementById('risultato');
// //funzione che prende i numeri

// function recuperaNumeri(){
//    var primoNum = Number(document.getElementById('primoNum').value );
//    var secondoNum = Number(document.getElementById('secondoNum').value);
//    return [primoNum, secondoNum];
// }

// //funzioni per le operazioni
// function somma(){
//     var numero = recuperaNumeri()[0] + recuperaNumeri()[1];
//     stampa(numero);
// }

// //funzione per stampare
// function stampa(numero){
//     risultato.innerHTML = numero;
// }