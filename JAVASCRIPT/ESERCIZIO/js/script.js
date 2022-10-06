// Creo le varibili con info personali

// var nome = "Dario";
var nome = prompt("Come ti chiami ?"); //la risposta dell'utente verrà salvata nella variabile nome
// var cognome = "Mennillo";
var cognome = prompt("Inserisci il tuo cognome");

// var eta = 33;
var eta = prompt("Inserisci la tua età"); //il prompt produce sempre e solo una string

var citta = "Torino";
var materiaPref = "Javascript";
var presenza = true;

var miaEta5Anni = Number(eta) + 5; //Number(eta) sto facendo il cast della variabile eta. Forzare una variabile ad essere di un altro tipo

console.log("Tra 5 anni avrò: " + miaEta5Anni + " anni");

// document.write()

document.write("<p> Nome: " + nome + "</p>");
document.write("<p> Cognome: " + cognome + "</p>");
document.write("<p> Età: " + eta + "</p>");
document.write("<p> Città: " + citta + "</p>");
document.write("<p> Materia preferita: " + materiaPref+ "</p>");
document.write("<p> Presenza: " + presenza + "</p>");

// alert();
// alert("Ciao con un popup!");

//prompt(); L'input utente può essere salvato in una variabile
// prompt("come ti chiami ?");


