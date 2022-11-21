//recupero l'utente dall local storage

var mioUserJSON = localStorage.getItem('user');
var saluto = document.querySelector('#saluto');

if(mioUserJSON == null){
    saluto.textContent = "Mi dispiace non c'è nessun utente registrato";
}else{     
    var mioUser = JSON.parse(mioUserJSON);
    saluto.textContent = "Ciao " + mioUser.nome + " " + mioUser.cognome + " grazie per esserti registrato alla nostra piattaforma."
}
    
    
function logout(){
    localStorage.clear();
}

// var btn = document.querySelector('#btn');
// btn.addEventListener('click', logout, false);

var form = document.querySelector('#formLogout');

form.addEventListener('submit', logout, false);


//Se l'utente è registrato come utente platinum allora vedrà una textarea nella quale potrà scrivere un messaggio, altrimenti non vede niente. Il messaggio deve essere lungo al massimo 50 caratteri: impedisci all'utente di scrivere oltre (NO maxlength). Sotto la textarea inserisci un contatore inverso che scala il numero di caratteri. Sotto la textarea inserisci un pulsante che stampa il messaggio (in un'altra pagina) e lo salva in localStorage compresa la data e l'ora in cui è stato scritto.
//Dopo aver cliccato su stampa, porta l'utente su una pagina di riepilogo in cui vedrà il suo messaggio stampato e l'ora.