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

//scelgiamo tra pari o dispari
const userChoice = prompt('scegli "pari" o "dispari"','pari');
console.log('Hai scelto' + ' ' + userChoice);

//scegliamo un numero tra l' uno ed il 5
const userNumber = parseInt(prompt('scegli un numero tra l\'uno ed il 5','5'));
console.log('Hai scelto il numero' + ' ' + userNumber);

//validazione
let isValid = true;
let message = '';
if( userChoice !== 'pari' && userChoice !== 'dispari'){
    isValid = false;
    message = "devi scegliere pari o dispari";
}
if (isNaN(userNumber)|| userNumber < 1 || userNumber > 5){
    isValid = false;
    message += " il numero scelto non e valido";
}
if (isValid){
    
    //numeri random usando una funzione
    function randomNumber(number1, number2){
        return Math.floor(number1 + number2 * Math.random());
     }
     
     // il pc sceglie un numero
     const pcNumber = randomNumber(1, 5);
     console.log('il computer ha fatto' + ' ' + pcNumber);
     let sum = pcNumber + userNumber;
     
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
        alert('Hai Vinto');

        
        
    } else {
        alert('Hai Perso');
    }
    
}else{
    alert(message)
}
 