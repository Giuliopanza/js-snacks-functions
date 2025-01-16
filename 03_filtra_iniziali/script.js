/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

const lettera = "A";


// Dichiara la funzione qui.

function Filtra(a,x){

    let b =[]

    for (let i = 0; i < a.length; i++) {

        if (a[i].charAt(0) == x) {

            b.push(a[i])
            
        }
        
    }

    console.log(b);

}


// Invoca la funzione qui e stampa il risultato in console

Filtra(names, lettera)



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]