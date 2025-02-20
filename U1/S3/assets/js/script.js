let arrayUsciti = [];

function createCella(numero) {
    let div = document.createElement('div'); //creiamo il div per il testo
    div.classList.add('cella'); // assegnamo la classe cella per il design
    div.setAttribute('numero', numero+1); // assegnamo un attributo custom per riprendere la cella successivamente
    div.innerText = numero + 1; // diamo il testo del div con il numero corretto
    return div
}

window.addEventListener('load', function(e) {
    let container = document.getElementById("container");
    if (!container) return; // se non c'è estrazione, non andare avanti

    for (let i=0; i < 76; i++) { // cicliamo 76 volte per generare le celle della tombola
        let div = createCella(i) // semplifichiamo attraverso una funzione per riutilizzo codice
        container.appendChild(div); // mettiamo il div dentro il container nell'ultima posizione
    }

    let estrazione = document.getElementById('estrazione')
    if (!estrazione) return; // se non c'è estrazione, non andare avanti

    estrazione.addEventListener('click', function(e) {
        e.preventDefault(); // previene un uso default del browser
        let random;
        if (arrayUsciti.length == 76) { // controlliamo che i numeri siano usciti tutti, se si mostriamo un'alert e ci fermiamo
            alert('I numeri sono tutti estratti');
            return;
        }
        do { // Esegue prima il codice e poi controlla se la condizione è true o false
            random = Math.ceil(Math.random() * 76);
        } while (arrayUsciti.includes(random)); // continua il ciclo finche il numero random non è contenuto nell'arrayUsciti
        arrayUsciti.push(random); // Aggiungiamo il numero all'arrayUsciti
        let cella = document.querySelectorAll('.cella[numero="'+random+'"]') // prendiamo la cella dall'html attraverso l'attributo numero
        if (cella[0]) { // Se la cella esiste
            cella[0].classList.add('green'); // aggiungiamo la classe green
        }
    })

    let resetta = document.getElementById('reset');
    console.log(resetta)
    if (!resetta) return;

    resetta.addEventListener('click', function(e) {
        e.preventDefault();
        arrayUsciti = [];
        let celle = document.querySelectorAll('.green');
        celle.forEach((cella) => {
            cella.classList.remove('green');
        })
    })
})