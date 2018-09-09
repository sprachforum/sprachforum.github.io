/*

  hardy.js
  
  "Serving" simple data provided by the accompanying laurel.js
  
  Note: Localisation (languages) is provided by static templates.

  !!! FOR INITIAL TESTS "document.write" IS USED, IN FINAL VERSION A NEW DOM OBJECT SHOULD BE CREATED TO REPLACE THE CONTENT OF PLACEHOLDER "hardyContent"
    - Placeholder "hardyContent" also for no-JS / JS-problems
  
*/

Art = 'Kurse' ;
Thema = 'TestDaF' ;

alert('<h1>Im Angebot: ' + Thema + '-' + Art + ' für ' + Daten[ Art ][ Thema ][ 'Preis' ] + ' € !</h1>');

