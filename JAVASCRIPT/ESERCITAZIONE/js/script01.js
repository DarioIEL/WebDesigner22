// var perimetro1 = 5 + 6 + 7;
// console.log(perimetro1);


//calcola il perimetro di un triangolo con i seguenti lati 5,6,7

// var lato1 = 5;
// var lato2 = 6;
// var lato3 = 7

// var perimetro = lato1 + lato2 + lato3;

// console.log(perimetro);

//con le funzioni + stampa in html
var demo = document.getElementById('demo');

function calcolaPerimetro(lato1, lato2, lato3){
    var perimetro = lato1 + lato2 + lato3;
    return perimetro;
}

var mioPerimetro = calcolaPerimetro(5,6,7);
demo.innerHTML = "<h2> Il perimetro del triangolo vale: " + perimetro + " </h2>";
