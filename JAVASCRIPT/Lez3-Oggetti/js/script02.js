//Istanzio il mio Studente
var studente = {
    nome: "Mario",
    cognome: "Rossi",
    matricola: 456,
    email: "mario.rossi@gmail.com",
    facoltà: "Scienze delle patatine",

    esamiRestanti: ['croccantezza2', 'analisi dei pacchetti di Fonzies'],

    superaEsame: function(esame, voto){
        //istanzio una nuova propr in base al parametro del metodo
        this.esame = esame;
        this.voto = voto;

        var msg = '';

        if(this.voto >= 18){
            msg = this.esame + ". Votazione: " + this.voto;
        }else{
            msg = this.esame + ". Non superato";
        }
        return msg;
        
    },
    
    presentati: function(){
          var msg = '<p> Nome: ' + this.nome + '</p>' +
                    '<p>Cognome: ' + this.cognome +  '</p>'+
                    '<p>Email: ' + this.email + '</p>'+
                    '<p>Matricola: ' + this.matricola + '</p>'+
                    '<p>Facoltà: ' + this.facoltà + '</p>';
      
          return msg;
      }
}

console.log(studente.superaEsame("Dipendenza da Pringles", 30));

var descStudente = document.getElementById('descStudente');

descStudente.innerHTML = studente.presentati() + "<br> Ultimo Esame -  " 
                        + studente.superaEsame( studente.esamiRestanti[0] , 27); 

console.log(studente.voto);


