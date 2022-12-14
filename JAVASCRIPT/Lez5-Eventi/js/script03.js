var mioForm = document.querySelector('#mioForm');
var feedback = document.querySelector('#feedback');

function validate(){
 feedback.textContent = '';
 //questa funzione validerà tutti i campi   
 checkNomeCognome();
 checkCodFis();
 checkSelect();
 checkMail();
 checkCAP()
}

function checkNomeCognome(){
    var nome = document.querySelector('#nome').value;
    var cognome =document.querySelector('#cognome').value;

    if(nome.trim() == "" || cognome.trim() == ""){
        event.preventDefault();
        
        feedback.setAttribute('class', 'txtOrange');
        feedback.innerHTML += "Hai dimenticato il nome o il cognome <br>";
    }
}

//formatoCodFis è una regex = regular expression
const FORMATOCODFIS = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z] *$/i;
const FORMATOMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const FORMATOCAP = /^[0-9]{5} *$/;

function checkCodFis(){
    var codFis = document.querySelector('#codFis').value;
    
    // if(codFis.match(formatoCodFis)){
    //     console.log("bravo");
    // }else{
    //     console.log("il codice che hai inserito non corrisponde");
    // }

    if(!codFis.match(FORMATOCODFIS)){
        feedback.innerHTML += "Hai dimenticato il codice fiscale <br>";
        event.preventDefault();
    }
}

function checkMail(){
    var mail = document.querySelector('#email').value;
    if(!mail.match(FORMATOMAIL)){
        feedback.innerHTML += "Hai dimenticato la mail <br>";
        event.preventDefault();
    }
}

function checkCAP(){
    var cap = document.querySelector('#cap').value;

    if(cap.length != 5){
        feedback.innerHTML += "Hai dimenticato il cap <br>";
        event.preventDefault();
    }
}


function checkSelect(){
    var tipoUser = document.querySelector('#tipoUser').value;
    if(tipoUser == -1){
        feedback.innerHTML += "Hai dimenticato di selezionare l'utenza <br>";
        event.preventDefault();
    }
}

var prezzoUtenza = document.querySelector('#prezzoUtenza');
var tipoUser = document.querySelector('#tipoUser'); //select

function stampaPrezzo(){
    var scelta = tipoUser.value;
    console.log(tipoUser.value);
    if(scelta == 'base'){
        prezzoUtenza.textContent = "Costo: 8€ / mese" ;
    }else if(scelta == 'premium'){
        prezzoUtenza.textContent = "Costo: 15€ / mese";
    }else if(scelta == 'platinum'){
        prezzoUtenza.textContent = "Costo: 50€ / mese";
    }else{
        prezzoUtenza.textContent = "";
    }
}

tipoUser.addEventListener('change', stampaPrezzo, false);
mioForm.addEventListener('submit',validate, false);

//controllare la mail, il cap e stampare un avviso, per ogni campo, se vengono dimenticati
