console.log('JS funziona');

//richiamo button play
const playButton = document.getElementById('play-btn');

// faccio click sul bottone play
playButton.addEventListener('click', function() {
    //richiamo l'elemento in cui andrá il div .cell
const gridElement = document.querySelector('.grid-cells');
// console.log(gridElement);
const difficultyChoice = document.getElementById('difficult-select');
    console.log(difficultyChoice.value)

//stabilisco quante celle sono presenti in una riga
let size = parseInt(difficultyChoice.value);

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
    // aggiungo la classe per modificare la riga della griglia
    cellElement.className += ` cell-${size}`;
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
})























