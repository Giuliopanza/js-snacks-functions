/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function vocali (a){

    let s = a.split(``);

    let voc = [`a`, `e`, `i`, `o`, `u`] ;

    let b = [] ;

    for (let i = 0; i < s.length; i++) {
        for (let x = 0; x < voc.length; x++) {
            if (s[i] == voc[x]) {

                b.push(s[i])
                
            }
        }
        
    }

    console.log(b.length  + b)

}


// Invoca la funzione qui e stampa il risultato in console

vocali(word)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)