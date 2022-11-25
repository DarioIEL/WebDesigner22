//fetch per poter prendere i dati 

const url = "http://localhost:3000/comments";

//la struttura dati corrisponde alla struttura dell' end point
var dati = [];

fetch(url)
.then(data => {return data.json()})
.then(response => {
    // this.dati.push(response);
    // console.log(response);
    mostraDatiPost(response)
});

/**
 * 
 * @param {Array} dati 
 * che riceviamo dalla fetch
 */
var commentiPost = document.querySelector('#commentiPost');

function mostraDatiPost(dati){
    console.log(dati);
    //il parametro dati è un array, applico il foreach
    dati.forEach(singoloPost => {
        var id = singoloPost.id;
        var testo = singoloPost.body;

        commentiPost.innerHTML += "<li>Id: " + id + " - contenuto: " + testo + "</li>";
    });
}