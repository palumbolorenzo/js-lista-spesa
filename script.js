const arrGroceryList = [
    'pomodori',
    'latte',
    'patate',
    'pesce',
    'cereali',
    'carne',
    'dentifricio'
];

const eleGroceryList = document.querySelector('.grocery-list');
const inputGroceryItem = document.querySelector('#input-grocery');
const eleGroceryForm = document.querySelector('form');

/*
for (let i = 0; i < arrGroceryList.length; i++) {
    eleGroceryList.innerHTML += `<li>${arrGroceryList[i]}</li>`;
}
*/

let i = 0;
while (i < arrGroceryList.length) {
    eleGroceryList.innerHTML += `<li>${arrGroceryList[i]}</li>`;
    i++
}

eleGroceryForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    //per non far funzionare il button senza un valore
   
        //aggiornare i dati
        arrGroceryList.push(inputGroceryItem.value);

        //aggiornare interfaccia
        eleGroceryList.innerHTML += `<li>${arrGroceryList[i]}</li>`;

        //svuotare l'input
        inputGroceryItem.value = '';
    
});

//for

/*
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//while
let i = 1
while (i <= 10) {
    console.log(i);
    i++
}
*/