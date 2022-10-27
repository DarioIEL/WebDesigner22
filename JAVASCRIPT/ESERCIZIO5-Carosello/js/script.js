//suggerimento

var immagini = [
    './img/foto1.jpg',
    './img/foto2.jpg',
    './img/foto3.jpg',
    './img/foto4.jpg'
];

var elDivImg = document.getElementById('immagine');

// var contatore = Math.ceil(Math.random() * (immagini.length-1));
var contatore = 0 ;

//per far vedere la prima foto posso utilizzare l'evento onload sul body, passando mostraImg(0)
function mostraImg(contatore){
    elDivImg.innerHTML = "<img width='250px' height='auto' src='" + immagini[contatore] + "'>";
}

function ruota(){
    contatore++; 
    if(contatore == immagini.length){
        contatore = 0;
    }
    mostraImg(contatore);
}

