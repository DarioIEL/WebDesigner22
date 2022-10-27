///Funzione costruttore
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

//creo gli oggetti 
var studente1 = new Studente("Laura", "Verdi", 1001, 2020);

console.log(studente1.nome);
console.log(studente1.anno);
console.log(studente1.presentati());

var studente2 = new Studente("Pasquale", "Bianchi", 1002, 2021);
console.log(studente2.presentati());

//la classe sarà un array di studenti
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

for(var i = 0; i < classe.length; i++){
    console.log(classe[i].nome);
}

for(stud in classe){
    console.log(classe[stud].cognome);
}

classe.forEach(element => {
    console.log( element.matricola );
});

classe.forEach(studente => {
    console.log(studente.presentati());
});


var listaStudenti = document.getElementById('listaStudenti');

classe.forEach(studente => {
    listaStudenti.innerHTML += studente.presentati() + '<br>';
});