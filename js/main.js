// Chiediamo all'utente due parole in successione.
// Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.

// 1. chiedo la prima parola
const firstWord = prompt("Inserisci la prima parola");
// 2. chiedo la seconda parola
const secondWord = prompt("Inserisci la seconda parola");
// 3. SE la prima parola è più lunga della seconda parola
//    la prima parola è più lunga della seconda parola
//    ALTRIMENTI SE la seconda parola è più lunga della prima 
//    la seconda parola è più lunga della prima
//    ALTRIMENTI se le parole sono della stessa lunghezza
//    le parole hanno la stessa lunghezza
if( firstWord.length > secondWord.length ) {
    console.log("la prima parola è più lunga della seconda parola");
} else if ( secondWord.length > firstWord.length ) {
    console.log("la seconda parola è più lunga della prima");
} else {
    console.log("le parole hanno la stessa lunghezza");
}