/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function iniziale(a) {

    let b =[]

    for (let i = 0; i < a.length; i++) {
        b.push( a[i].charAt(0))
    }

    console.log(b);
    
}


// Invoca la funzione qui e stampa il risultato in console

iniziale(names)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]