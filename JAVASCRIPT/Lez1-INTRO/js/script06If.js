//Le condizioni di script06OpConfronto le faccio valutare da un if direttamente

var punteggio = 25;   
var skill = 15;

var condizione = (punteggio >= 30) && (skill >= 20);
//                      True       &&       True -------> True

if(condizione){
    //se la condizione è TRUE eseguirà ciò che si trova tra queste parentesi
    console.log("Bravo, hai vinto !");
}else{
    //altrimenti, se la condizione è FALSE, eseguirà ciò che si trova in queste parentesi
    console.log("Mi dispiace, hai perso, ritenta !");
}

/////////////////////////////////////////////

if((punteggio >= 50) || (skill >= 25)){
    console.log("Bravo, hai vinto !");
}else{
    console.log("Mi dispiace, hai perso!");
}

//
if((punteggio < 30) && (skill < 20)){
    console.log("Caro utente, cambia gioco !");
}else if((punteggio < 30) && (skill >=20)){
    console.log("Caro utente, devi migliorare i tuoi punteggi");
}else if((punteggio >= 30) && (skill < 20)){
    console.log("Caro utente, devi migliore le tue skill");
}else{
    console.log("Bravo, hai vinto !");
}

//if semplice
// var nomeUtente = prompt("Come ti chiami ? ") ;

// if(nomeUtente == "Dario" || nomeUtente == "Anna" || nomeUtente == "Pasquale"){
//     console.log("Ciao " + nomeUtente + " benvenuto !");
// }else{
//     console.log("Mi dispiace, non ti conosco " + nomeUtente);
// }

///Operatore % (resto della divisione)

var operazione = 20 % 3; // 2
console.log(operazione);

var mioNumero = 46;

if((mioNumero % 2) == 0){
    console.log(mioNumero +  " è pari");
}else{
    console.log(mioNumero + " è dispari");
}

var mioNumero2 = 63;
if((mioNumero2 % 5) == 0){
    console.log(mioNumero2 + " è un multiplo di 5");
}else{
    console.log(mioNumero2 + " non è un multiplo di 5");
}
