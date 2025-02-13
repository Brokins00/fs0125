/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

giveMeRandom(2) // funziona

function giveMeRandom(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        // faccio qualcosa
        let random = Math.random() * 10;
        let random_arrotondato = Math.floor(random);
        array.push(random_arrotondato);
    }
    console.log("test2", array)
    return array;
}

giveMeRandom(10) // funziona

// giveMeRandom2() // qua non funziona

// const giveMeRandom2 = function(n) {
//     console.log("test")
// }
// giveMeRandom2() // qua funziona

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

// let test_array = [
//     [0]: 2,
//     [1]: 4,
//     [2]: 5,
//     [3]: 3,
//     [4]: 4
// ]

function checkArray(array) {
    let somma = 0;
    for (let i = 0; i < array.length; i++) {
        let elemento = array[i];
        // let differenza = elemento > 5 ? "maggiore" : "minore";
        // let differenza2 = elemento > 5 && "maggiore" || "minore";
        // console.log(elemento+" è "+differenza2+" di 5");
        // console.log(elemento+" è "+differenza+" di 5");
        if (elemento > 5) {
            somma = somma + elemento;
            console.log(elemento+' è maggiore di 5')
        } else {
            console.log(elemento+" è minore di 5")
        }
    }
    return somma
}

let numeri_randomici = giveMeRandom(10)
let somma_randomici = checkArray(numeri_randomici)
console.log('La somma dei numeri randomici è: '+somma_randomici);