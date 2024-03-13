console.log('JS funziona');

//richiamo l'elemento in cui andrá il div .cell
const gridElement = document.querySelector('.grid-cells');
// console.log(gridElement);


//stabilisco quante celle sono presenti in una riga
let size = 10;

const difficultLevel1 = document.getElementById('level 1')
// console.log(difficultLevel1);
const difficultLevel2 = document.getElementById('level 2')
// console.log(difficultLevel2);
const difficultLevel3 = document.getElementById('level 3')
// console.log(difficultLevel3);

difficultLevel1.addEventListener('click', function(){
    
    size = 10
    console.log(size)
})


difficultLevel2.addEventListener('click', function(){
    
    size = 9
    console.log(size)
})

difficultLevel3.addEventListener('click', function(){
    
    size = 7
})

// stabilisco il numero di celle presenti nella griglia
const numberOfCells = size * size;

//uso un ciclo for per richiamare i singolei elementi
for (let index = 0; index < numberOfCells; index++) {
    const number = index + 1;
    // console.log(number);

    // creo l'elemento che andró a mettere dentro gridElement
    const cellElement = document.createElement('div');
    // aggiungo la classe al div
    cellElement.className = 'cell';
    //aggiungo il numero a ogni cell
    cellElement.innerHTML = number;
    
    //aggiungo l'elemento creato al gridElement
    gridElement.append(cellElement);
    
    
    
    //assegno una classe cambia colore all'elemento al momento del click
    cellElement.addEventListener('click', function() {
        // console.log('click', number)
        
        //aggiungo/tolgo la classe all'elemento cliccato
        cellElement.classList.toggle('bg-dark');
        // console.log(cellElement)
    }   
    )
}






















