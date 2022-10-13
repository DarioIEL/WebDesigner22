// i++ prima viene letto il valore della variabile poi incrementato

var eta = 33;

console.log(eta++);
console.log(eta);

var ore = 11;
console.log(++ore); //prima vinee incrementata poi letta


//I cicli ripetono ciò che è scritto nelle parentesi graffe fintanto che la condizione è VERA

for(var i = 0; i < 10; i++){
    console.log(i);
}

//1°giro i = 0; 0 < 10 --> TRUE; i = 1(dopo){
// esegue quello che è nelle parentesi --->0    
//}

//2°giro i = 1; 1 < 10 --> TRUE; i = 2{
// ---> 1
//}

//10°giro i = 9; 9 < 10 ---> TRUE; i = 10{
// -----> 9    
//}

//11°giro i = 10; 10 < 10 ---> FALSE  -----> STOP

console.log("Ciclo inverso");

for(var i = 10; i > 0; i--){
    console.log(i);
}


var mioArr = ["Cinzia", "Jona", "Roberto", "Roberta", "Marco", "Pietro", "Riccardo", "Olga"];

// console.log(mioArr[0]);
// console.log(mioArr[1]);
// console.log(mioArr[2]);

for(var i = 0; i < mioArr.length; i++){
    console.log(mioArr[i]);
}

console.log("Leggo l'array al contrario");

for(var i = mioArr.length - 1 ; i >= 0; i--){
    console.log(mioArr[i]);
}


var demo = document.getElementById('demo');

for(var i = 0; i < mioArr.length; i++){
    demo.innerHTML += "<li>" + mioArr[i] + "</li>";
}
