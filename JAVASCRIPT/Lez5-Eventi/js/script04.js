var mioForm = document.querySelector('#mioForm');
var feedback = document.querySelector('#feedback');

function validate(){
 feedback.textContent = '';
 //questa funzione validerà tutti i campi   
 checkNomeCognome();
 checkCodFis();
 checkSelect();
 checkMail();
 checkCAP();

if(checkNomeCognome() && checkCodFis() && checkSelect() && checkMail() && checkCAP()){
    componiUser();
}
}



function checkNomeCognome(){
    var nome = document.querySelector('#nome').value;
    var cognome =document.querySelector('#cognome').value;

    if(nome.trim() == "" || cognome.trim() == ""){
        event.preventDefault();
        feedback.setAttribute('class', 'txtOrange');
        feedback.innerHTML += "Hai dimenticato il nome o il cognome <br>";
        return false;
    }else{
        return true;
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
        return false;
    }else {
        return true;
    }
}

function checkMail(){
    var mail = document.querySelector('#email').value;
    if(!mail.match(FORMATOMAIL)){
        feedback.innerHTML += "Hai dimenticato la mail <br>";
        event.preventDefault();
        return false;
    }else{
        return true;
    }
}

function checkCAP(){
    var cap = document.querySelector('#cap').value;

    if(cap.length != 5){
        feedback.innerHTML += "Hai dimenticato il cap <br>";
        event.preventDefault();
        return false;
    }else{
        return true;
    }
}


function checkSelect(){
    var tipoUser = document.querySelector('#tipoUser').value;
    if(tipoUser == -1){
        feedback.innerHTML += "Hai dimenticato di selezionare l'utenza <br>";
        event.preventDefault();
        return false;
    }else{
        return true;
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



//voglio comporre un oggetto con le info dell'utnete appena registrato.
//Trasformo queste informazioni in formato JSON e le salvo all'interno della local storage
//costruttore Utente
function Utente(nome, cognome, email, cap, tipoUser, codFis){
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.cap = cap;
    this.tipoUser = tipoUser;
    this.codFis = codFis;
}

function componiUser(){
    var nome = document.querySelector('#nome').value;
    var cognome = document.querySelector('#cognome').value;
    var email = document.querySelector('#email').value;
    var cap = document.querySelector('#cap').value;
    var tipoUser = document.querySelector('#tipoUser').value;
    var codFis = document.querySelector('#codFis').value;

    var user = new Utente(nome, cognome, email, cap, tipoUser, codFis);

    var userDaSalvare = JSON.stringify(user);

    localStorage.setItem('user', userDaSalvare);
}

//dopo, vado a prendere il nome e il cognome dell'utente appena registrato e lo saluto in un'altra pagina.