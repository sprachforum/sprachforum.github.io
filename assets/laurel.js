/*

  laurel.js
  
  Host for some simple date to be "served" by the accompanying hardy.js

  We use pure JS for data because e.g. JSON is more "strict" for inexperienced users. Other than in programs we don't use type prefixes here for even more "clarity" for the untrained.

*/

Daten = {
  Kurse: {
    TestDaF: {
      Termine: [
        '22.10. - 12.11.2018',	
        '18.03. - 05.04.2019',	
        '21.08. - 09.09.2019',
      ],
      Preis: '270',
      Gruppengroesse: '5-12',
      Unterrichtszeiten: {
        
      }
    },
    telc: {
      Termine: {
      },
      Preis: '200',
      Gruppengroesse: '5-12',
      Unterrichtszeiten: {
        
      }
    },
  },
  Pruefung: {
    TestDaF: ''
    ,
  },
  Service: {
  },
} ;
