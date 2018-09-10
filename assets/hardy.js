/*

  hardy.js
  
  "Serving" simple data provided by the accompanying laurel.js
  
  Note: Localisation (languages) is provided by static templates.

  !!! FOR INITIAL TESTS "document.write" IS USED, IN FINAL VERSION A NEW DOM OBJECT SHOULD BE CREATED TO REPLACE THE CONTENT OF PLACEHOLDER "hardyContent"
    - Placeholder "hardyContent" also for no-JS / JS-problems
  
*/

Art = 'Kurse' ;
Thema = 'TestDaF' ;

document.write('<h1>Im Angebot: ' + Thema + '-' + Art + ' für ' + Daten[ Art ][ Thema ][ 'Preis' ] + ' € !</h1>');

document.write( ''
  + '<h2>' + Daten[ Art ][ Thema ][ 'Termine' ].length + ' Termine:</h2>'
  + '<ul>'
);
for ( i=0; i < Daten[ Art ][ Thema ][ 'Termine' ].length; i++ ) {
document.write( ''
  + '<li>'
  + Daten[ Art ][ Thema ][ 'Termine' ][ i ]
  + ' <a href="">Jetzt anmelden</a>'
  + '</li>'
);
}
document.write( ''
  + '</ul>'
);

document.write('<p>(alle ' + Art + ': ' + Object.keys( Daten[ Art ] ) + ' )</p>');
