// function saluta(){
//     console.log("Ciao Dario");
// }


// //recupero il nome utente da un campo input

// var demo = document.getElementById('demo');

// function saluta(){
//     //dentro la funzione si recuperano i valori dei campi input, cioè i value;
//     //con il .value al termine del metodo recupero quello che scrive l'utente nel campo input
    
//     var nomeUtente = document.getElementById('nomeUtente').value;

//     console.log("Ciao " + nomeUtente);

//     demo.innerHTML = "Ciao " + nomeUtente;
// }

var demo = document.getElementById('demo');

function saluta(){
    var nomeUtente = document.getElementById('nomeUtente').value;
    var cognomeUtente = document.getElementById('cognomeUtente').value;

    if(nomeUtente.trim() == "" || cognomeUtente.trim() == ""){
        // demo.innerHTML = "Non hai inserito il tuo nome";
        demo.innerHTML = "Hai dimenticato un campo."
    }else{
        demo.innerHTML = "Ciao " + nomeUtente + " " + cognomeUtente;
    }
}