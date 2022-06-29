console.log('JS OK')
/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */
/* Domande da farsi quando scriviamo una funzione
// ?1 - Come la chiamo?
// ?2 - Ho bisogno di parametri? (se si quali?)
// ?3 - Devo restituire qualcosa? (se si cosa? di che tipo?)
// ?4 OPZIONALE:  Qualcosa  potrebbe andare storto? (se si, cosa?) */


//numeri random usando una funzione
function randomNumber(number1, number2){
    return Math.floor(number1 + number2 * Math.random());
 }
 
 //scelgiamo tra pari o dispari
 const userChoice = prompt('scegli pari o dispari','pari');
 console.log('Hai scelto' + ' ' + userChoice);
 //scegliamo un numero tra l' uno ed il 5
 const userNumberChioce = parseInt(prompt('scegli un numero tra l\'uno ed il 5','5'));
 console.log('Hai scelto il numero' + ' ' + userNumberChioce);
 // il pc sceglie un numero
 const pcNumber = randomNumber(1, 5);
 console.log('il computer ha fatto' + ' ' + pcNumber);

 let sum = pcNumber + userNumberChioce;
 
 function isEven(totalNumber){
     let result = 'Pari';
     if (totalNumber % 2 !== 0){
         return result = 'Dispari';
        }
        return result
    }


const checkResult = isEven(sum);
console.log('il numero sommato e' + ' ' + sum + ' ' + checkResult);

 if (((userChoice === 'pari') && (sum % 2 == 0)) || ((userChoice === 'dispari') && (sum % 2 !== 0))) {
     console.log('Hai Vinto');

    
 } else {
     console.log('Hai Perso');
 }
 
 