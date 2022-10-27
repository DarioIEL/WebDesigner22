// Fare i controlli sull'inserimento
//Segnare al fondo della pagina quante cosa abbiamo da fare

var btn = document.getElementById('btn'); //recupero il pulsante
var item = ''; //singola cosa da fare
var lista = []; //lista completa
var divLista = document.getElementById('lista');
var feedback = document.getElementById('feedback');


//prendo quello che scrive l'utente e lo inserisco nella lista

function prendiItem(){
    item = document.getElementById('item').value;
    if(controlla(item)){
        lista.push(item);
        stampa(lista);
    }
}

function stampa(lista){
    divLista.innerHTML = '';
   
    for(var i = 0; i < lista.length; i++){
        divLista.innerHTML += "<li>" +  lista[i] + " - <button onclick='elimina(item)'>Elimina</button></li>";
    }
    
}

function controlla(item){

    feedback.innerHTML = '';
    if(item == '' || lista.indexOf(item) != -1){
        feedback.innerHTML = "Non hai inserito niente oppure hai inserito qualcosa che già è presente nella lista";
        return false;
    }else{
        return true;
    }
}
//trasferisco l'evento onclick nel mio script. Attenzione: quando richiamo la funzione NON devo, in questo caso, utilizzare le parentesi tonde
btn.onclick = prendiItem;

// btn.addEventListener('click', prendiItem, false);






