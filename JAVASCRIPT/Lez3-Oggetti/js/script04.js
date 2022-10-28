function Studente(nome, cognome, matricola, anno){
    //creo la prop nome valorizzandola col parametro
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.anno = anno;

    this.presentati = function(){
        var msg = "Nome: " + this.nome + " - Cognome: " + this.cognome + " - Matricola: " + this.matricola + " - Anno Iscrizione: " + this.anno;
        return msg;
    }

}


var classe = [
    new Studente('Olga', 'Koval', 1, 2022),
    new Studente('Cinzia', 'Traverso', 2, 2022),
    new Studente('Roberta', 'Petruzzelli', 3, 2022),
    new Studente('Luigi', 'Esposito', 4, 2022),
    new Studente('Pietro', 'Delfino', 5, 2022),
    new Studente('Isabely', 'De Barros Lima', 6, 2022),
    new Studente('Lorenzo', 'Screnci', 7, 2022),
    new Studente('Marco', 'Tani', 8, 2022),
    new Studente('Jona', 'Bejtja', 9, 2022),
    new Studente('Riccardo', 'Ruffa', 10, 2022),
    new Studente('Roberto', 'De Filippi', 11, 2022),
    new Studente('Elena', 'Vannini', 12, 2022),
    new Studente('Ali', 'Shanshob', 13, 2022),
    new Studente('Lucia', 'Sanna', 14, 2022),
];


//prendo il pulsante
var btn = document.getElementById('btn');

function suggerisciMatricola(){
document.getElementById('matricola').value = classe[classe.length-1].matricola + 1;
}

suggerisciMatricola();

function registraStudente(){
  
    if(controllaCampi()){
        var nome = document.getElementById('nome').value;
        var cognome = document.getElementById('cognome').value;
        var matricola = Number(document.getElementById('matricola').value);
        var anno = Number(document.getElementById('anno').value);

        var studente = new Studente(nome, cognome, matricola, anno);
        classe.push(studente);

        stampaLista();
        pulisciCampiInput();
        suggerisciMatricola();

    }else{
        alert('Hai dimenticato di compilare qualche campo')
    }

    //stampa lista studenti nello HTML
    console.log(classe);    
}


btn.onclick = registraStudente;

//Stampa della lista studenti: al caricamento pagina e quando aggiungo un nuovo studente
//Matricola autoincrementale
//MOLTO OPZIONALE: inserisci un pulsante per l'eliminazione dello studente
var listaStudenti = document.getElementById('listaStudenti');

function stampaLista(){
    listaStudenti.innerHTML = '';

    classe.forEach(studente => {
        listaStudenti.innerHTML += studente.presentati() + "<button onclick=eliminaStud('studente')>Elimina</button> <br>"
    });
}

stampaLista();

function pulisciCampiInput(){
    document.getElementById('nome').value = '';
    document.getElementById('cognome').value = '';
    document.getElementById('matricola').value = '';
    document.getElementById('anno').value = '';
}

function controllaCampi(){
  
    if(document.getElementById('nome').value == '' || document.getElementById('cognome').value == ''|| document.getElementById('matricola').value == '' || document.getElementById('anno').value == ''){

        return false;
    }else{
        return true;
    }
    
}















// ///DA spiegare più avanti
// Studente.prototype.faiQualcosa = function(){
//     console.log("Ciao sto facendo qualcosa");
// }

// var mioStudente = new Studente("Gennaro", "Esposito", 42, 2022 );

// mioStudente.faiQualcosa();

