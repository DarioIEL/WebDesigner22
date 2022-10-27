
var persona = {
    nome: "",
    cognome: "",
    matricola: 0,
    esame: "",

    //costruisco dei metodi per inizializzare i campi
    setNome(nome){
        //la prop nome esiste già in persona, con il metodo set vado solo ad assegnargli un valore
        this.nome = nome;
    },

    setCognome(cognome){
        this.cognome = cognome;
    },

    setMatricola(matricola){
        this.matricola = matricola;
    },

    setEsame(esame){
        this.esame = esame;
    },

    presentaPersona(){
        var msg = this.nome + " " + this.cognome +  " Matricola: " + this.matricola;
        return msg;
    }
}

persona.setNome("Maria");
persona.setCognome("Bianchi");
persona.setMatricola(6478);
persona.setEsame("Analisi 2");

console.log( persona.presentaPersona() );