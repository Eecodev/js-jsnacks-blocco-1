/*
* Descrizione:
* Abbiamo un frigorifero pieno di frutta:
*'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
* C'è anche una pesca sul tavolo, la mettiamo nel frigo.

* Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?

* Fasi
* 1. creare l'array con la frutta del frigorifero
* 2. aggiungere la pesca all'array della frutta
* 3. verificare se nell'array di frutta c'è il cocomero:
    * - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
    * - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
*/

// creo la mia lista di frutta 
const fridgeList = [
    'banana',
    'mela',
    'pera',
    'ciliegia',
    'arancia',
    'mandarino',
    'cocomero',
    'limone',
    'fragola'
]


const tableList = 'pesca';

// mettiamo la pesca nella lista frigo
fridgeList.push('pesca');
console.log(fridgeList);

let msg;
const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');

// controllo se ho il cocomero in frigo
btn.addEventListener('click', function(){
    let alertColor = 'alert-success';
    resultEl.classList.remove(alertColor);
    resultEl.classList.add('d-none');
    let flag = false;
    for (i = 0; i < fridgeList.length; i++){
        if (fridgeList[i] === 'cocomero'){
            flag = true;
        } 
    }

    if (flag === true){
        msg = 'trovato';
    } else{
        msg = 'non trovato';
    }
    resultEl.classList.add(alertColor);
    resultEl.classList.remove('d-none');
    resultEl.innerText = msg;
})

