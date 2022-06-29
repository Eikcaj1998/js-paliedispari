console.log('JS OK')
/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 */
/* Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora
 andiamo avanti.
Domande da farsi quando scriviamo una funzione
// ?1 - Come la chiamo?
// ?2 - Ho bisogno di parametri? (se si quali?)
// ?3 - Devo restituire qualcosa? (se si cosa? di che tipo?)
// ?4 OPZIONALE:  Qualcosa  potrebbe andare storto? (se si, cosa?) */


//scegliamo una parola

const userWord = prompt('inserisci una parola');

console.log(userWord)
function isPalindrome(word) {
    let result = 'la parola è palindroma';
 //prendo la lunghezza della parola
    const userWordLength = word.length;
// uso il ciclo for che scorre per tutte le lettere della parola
    for (let i = 0 ; i < userWordLength; i++){
//controllo se le lettere iniziali corrispondo nelle esatte posizioni finali
        if (word[i] !== word[userWordLength - 1 - i]){
            result = 'la parola non è palindroma';
        }
    } 
    return result;
}
//invochiamo la funzione 
const userWordCheck = isPalindrome(userWord);
//informo che la parola è palindroma o meno 
alert(userWordCheck);
console.log(userWordCheck)