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
      "cognome" : "Madrigali",
      "eta" : 29
    },
    {
      "nome" : "Elisabetta",
      "cognome" : "Dahò",
      "eta" : 25
    },
    {
      "nome" : "Enrico",
      "cognome" : "Gennari",
      "eta" : 33
    },
    {
      "nome" : "Laura",
      "cognome" : "Colotto",
      "eta" : 30
    },
  ];

  // for (var i = 0; i < classe.length; i++) {
  //   for (var k in classe[i]) {
  //     console.log(classe[i]["nome"] + " " + classe[i]["cognome"]);
  //   }
  // };

  // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
  // var nuovoStudente = {
  //   "nome" : prompt("Inserisci il nome del nuovo studente"),
  //   "cognome" : prompt("Inserisci il cognome del nuovo stundente"),
  //   "eta" : parseInt(prompt("inserisci l'età del nuovo studente"))
  // };
  // classe.push(nuovoStudente);
  // console.log(classe);


  $("#aggiungi").click(function(){
    var nuovoStudente = {
      "nome" : $("#nome").val(),
      "cognome" : $("#cognome").val(),
      "eta" : $("#eta").val()
    }
    classe.push(nuovoStudente);

    var source = $("#studenti-template").html();
    var template = Handlebars.compile(source);
    for (var i = 0; i < classe.length; i++) {
      var context = {
        numero: i + 1,
        nome: classe[i]["nome"],
        cognome: classe[i]["cognome"],
        eta: classe[i]["eta"]
      };
      var html = template(context);
      $(".elenco-studenti").append(html);
    }
  });

});
