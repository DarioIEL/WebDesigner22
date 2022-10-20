//Dichiaro la funzione
function saluta(){
    console.log("Ciao Utente");
}

function chiediQualcosa(){
    console.log("Quanti anni hai ?");
}

//Richiamo la funzione per poterla eseguire
saluta();
chiediQualcosa();

//////////////funzione con parametri/////////////////
var demo = document.getElementById('demo'); //variabile GLOBALE, visibile ovunque

function scriviInDemo(nomeUtente, cognomeUtente){
    demo.innerHTML = "<h2>Ciao " + nomeUtente + " " + cognomeUtente + "</h2>";

    var miaVariabile = 10; //variabile LOCALE, non visibile all'esterno della funzione
    console.log(miaVariabile);
}

//nel richiamare la funzione passo il valore del parametro
scriviInDemo("Mario", "Rossi");


//console.log(miaVariabile); //Questo non può funzionare perché mia variabile è dentro la funzione e quindi variabile locale


////////////////funzione con return////////////////

function calcolaArea(altezza, larghezza){
    var area = altezza * larghezza;
    // console.log(area);

    //con return "emetto" un ouput, cioè porto fuori dalla funzione, 
    //la funzione restituisce un'area
    return area;
}

//intercetto il valore di uscita salvandolo in una variabile 
var areaRettangolo1 = calcolaArea(10,6); //dentro questa variabile verrà salvato il risultato,cioè il valore di "area" istanziata nella funzione

//avendo a disposizione la variabile me ne servo come pare a me
demo.innerHTML += "<br> " + areaRettangolo1;
console.log(areaRettangolo1);

var areaRettangolo2 = calcolaArea(7,3);
var areaRettangolo3 = calcolaArea(4,8);

console.log("L'area del rettangolo2 vale: " + areaRettangolo2);
console.log("L'area del rettangolo3 vale: " + areaRettangolo3);


////////////////////////////////
function saluta2(nome, cognome){

    var saluto = "Ciao " +  nome + " " + cognome;

    return saluto;
}

var salutoUtente1 = saluta2("Dario", "Mennillo");

console.log(salutoUtente1);

console.log(saluta2("Mario", "Bianchi"));


