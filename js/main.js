$(document).ready(function(){
  // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
  var studente = {
    "nome" : "Anna",
    "cognome" : "Agozzino",
    "eta" : 29
  }

  for (var k in studente) {
    console.log(k + ": " + studente[k]);
  }
});
