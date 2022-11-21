function Utente(nome, cognome, email, cap, tipoUser, codFis){
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.cap = cap;
    this.tipoUser = tipoUser;
    this.codFis = codFis;
}

var mioUtente = new Utente("Pippo", "Rossi", "pippo.rossi@mail.it", "12345", "base","rsspip987d12g539x");

console.log(mioUtente);
console.log(mioUtente.nome);

//salvo l'oggetto in localStore ma in formato JSON, unico formato accettato dalla local storage

//trasformo l'utente in una stringa
var mioUtenteJSON = JSON.stringify(mioUtente);

console.log(mioUtenteJSON);
console.log(mioUtenteJSON.nome); //undefined

//salvo l'utente nella localStorage
localStorage.setItem('utente', mioUtenteJSON);

//prendo l'utente dalla local storage sotto formato String
var utenteDallaLocal = localStorage.getItem("utente");
console.log(utenteDallaLocal);

//trasforma una stringa in un oggetto
var mioUtenteOBJ = JSON.parse(utenteDallaLocal);

console.log(mioUtenteOBJ);
console.log(mioUtenteOBJ.nome);


var mioJSON = '{"nome":"Dario","cognome":"Mennillo","email":"dario.mennillo@mail.it","cap":"12345","tipoUser":"base","codFis":"nnndfg89f12f736c"}';

var mioOBJ = JSON.parse(mioJSON);

var mioObJVERO = new Utente(mioOBJ.nome, mioOBJ.cognome, mioOBJ.email, mioOBJ.cap, mioOBJ.tipoUser, mioOBJ.codFis);

Utente.prototype.stampa = function(){
    console.log("Ciao" + this.nome);
}

// mioOBJ.stampa();

mioObJVERO.stampa();

console.log(mioOBJ.cognome);