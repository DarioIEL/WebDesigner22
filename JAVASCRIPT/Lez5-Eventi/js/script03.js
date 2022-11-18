var mioForm = document.querySelector('#mioForm');

function validate(){
 //questa funzione validerà tutti i campi   
 checkNomeCognome();
 checkCodFis();
 checkSelect();
}

function checkNomeCognome(){
    var nome = document.querySelector('#nome').value;
    var cognome =document.querySelector('#cognome').value;

    if(nome.trim() == "" || cognome.trim() == ""){
        event.preventDefault();
    }
}

//formatoCodFis è una regex = regular expression
const FORMATOCODFIS = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z] *$/i
const FORMATOMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

function checkCodFis(){
    var codFis = document.querySelector('#codFis').value;
    
    // if(codFis.match(formatoCodFis)){
    //     console.log("bravo");
    // }else{
    //     console.log("il codice che hai inserito non corrisponde");
    // }

    if(!codFis.match(FORMATOCODFIS)){
        event.preventDefault();
    }
}


function checkSelect(){
    var tipoUser = document.querySelector('#tipoUser').value;
    if(tipoUser == -1){
        event.preventDefault();
    }
}

mioForm.addEventListener('submit', validate, false);


