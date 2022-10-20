//con lo switch stabiliamo una casistica, il constrollo avviene su questa.

var msg = "";

var livello = 2;
var skill = 0;
var punti = 0;

switch(livello){

    //caso in cui il livello vale 1
    case 1:
        skill = 0;
        punti = 0;
        msg = "Benvenuto al primo livello. Skill: " + skill + " Punti: " + punti;
        
    break;

    case 2:
        skill = 30;
        punti = 25;
        msg = "Nel secondo livello acquisterai meno punti. Skill: " + skill + " Punti: " + punti;
    break;

    case 3:
        msg = "Acquisisci nuove skill per affrontare l'ultima sfida";
    break;
    
    case 4:
        msg = "Preparati ad affrontare il livello finale";
    break;

    //nel default c'è tutto ciò che non è stato considerato dai casi precedenti
    default:
        msg = "Bentornato Utente";
    break;
}

console.log(msg);