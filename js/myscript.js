// 1 - Chiedo all'utente il nome

let nome = prompt('Qual è il tuo nome?');


// 2 - Chiedo all'utente il cognome

let cognome= prompt('Qual è il tuo cognome?');


// 3 - Chiedo all'utente il suo colore preferito

let colore= prompt('Qual è il tuo colore preferito?');


// 4 - Sulla pagina deve comparire la dicitura: nomecognomecolorepreferito21

let password= `${nome}${cognome}${colore}21`;

document.getElementById('password').innerHTML= password; 
