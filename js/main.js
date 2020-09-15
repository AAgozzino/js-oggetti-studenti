$(document).ready(function(){
  // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
  var studente = {
    "nome" : "Anna",
    "cognome" : "Agozzino",
    "eta" : 29
  };

  for (var k in studente) {
    console.log(k + ": " + studente[k]);
  };

  // Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
  var classe = [
    {
      "nome" : "Samuele",
      "cognome" : "Madrigali"
    },
    {
      "nome" : "Elisabetta",
      "cognome" : "Dahò"
    },
    {
      "nome" : "Enrico",
      "cognome" : "Gennari"
    },
    {
      "nome" : "Laura",
      "cognome" : "Colotto"
    },
  ];

  for (var i = 0; i < classe.length; i++) {
    for (var k in classe[i]) {
      console.log(classe[i]["nome"] + " " + classe[i]["cognome"]);
    }
  };
});
