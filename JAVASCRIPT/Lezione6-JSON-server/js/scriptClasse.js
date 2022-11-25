var urlStudenti = "http://localhost:3000/studenti";

var studenti = [];

fetch(urlStudenti)
.then(data => {return data.json()})
.then(response =>{
    response.forEach(studente => {
        studenti.push(studente);
    });
   
    mostraStudenti(response);
});

var listaStudenti = document.querySelector('#listaStudenti');

function mostraStudenti(studenti){
    studenti.forEach(studente => {
        listaStudenti.innerHTML += "<li> Matr: " + studente.id + "<br> Nome: " + studente.nome + " <br>Corso: " + studente.corso + "<br>Presenza totale: " + studente.presenza; 
    });
}

