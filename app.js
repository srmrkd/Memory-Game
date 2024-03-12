const cardArray =[
    {
        name: 'puppy',
        img: './images/1.jpeg'
    },
    {
        name: 'black-white',
        img:'./images/5.jpeg'
    },
    {
        name: 'retriever',
        img: './images/6.jpeg'
    },
    {
        name: 'brown-puppy',
        img: './images/7.jpeg'
    },
    {
        name: 'bulldog',
        img:'./images/8.jpeg'
    },
    {
        name:'german-scheferd',
        img: './images/9.jpeg'
    },
    {
        name: 'puppy',
        img: './images/1.jpeg'
    },
    {
        name: 'black-white',
        img:'./images/5.jpeg'
    },
    {
        name: 'retriever',
        img: './images/6.jpeg'
    },
    {
        name: 'brown-puppy',
        img: './images/7.jpeg'
    },
    {
        name: 'bulldog',
        img:'./images/8.jpeg'
    },
    {
        name:'german-scheferd',
        img: './images/9.jpeg'
    }
]
/* The Compare Function: the function we pass inside the sort()

The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:
function(a, b){return a - b}

When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative, a is sorted before b.

If the result is positive, b is sorted before a.

If the result is 0, no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

You can use this code snippet to experiment with numerically and alphabetically sorting: */

// this is a shortcut to shuffle an array randomly
cardArray.sort( () => 0.5 - Math.random());

//console.log(cardArray);


const gridDisplay = document.querySelector('#grid');
let cardChosen = [];
let cardChosenIds = [];
const cardsWon = [];
let matchCount = 0;
const resultDisplay = document.querySelector('#grid');
const result = document.querySelector("#result");

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
       const card = document.createElement('img');
       card.setAttribute('src', 'images/back.jpeg');
       // The goal is that each card has an unique id
       card.setAttribute('data-id', i);
       card.addEventListener('click', flipCard);
       gridDisplay.append(card);
    }
}

createBoard();

// If we click on 2 cards, fire this function
function checkMatch(){
    const optionOneId = cardChosenIds[0];
    const optionTwoId = cardChosenIds[1];
    const cards = document.querySelectorAll('#grid img');
    if(optionOneId == optionTwoId){
        alert('You have clicked the same image!');
    }

    if(cardChosen[0] == cardChosen[1] ){
        matchCount = matchCount + 1;
        const srii = `You have wonned ${matchCount} points!`;
        console.log(srii);
        cards[optionOneId].setAttribute('src','images/white.png');
        cards[optionTwoId].setAttribute('src','images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardChosen);
        result.innerHTML = cardsWon.length;
    } else{
        cards[optionOneId].setAttribute('src','images/back.jpeg');
        cards[optionTwoId].setAttribute('src','images/back.jpeg');
    }
    cardChosen = [];
    cardChosenIds = [];

    if(cardsWon.length == cardArray.length/2){

        resultDisplay.innerHTML = 'Congradulations! You won!';
        result.innerHTML = cardsWon.length;
    }
}


function flipCard(){
    //console.log(cardArray);
    // The goal is to pick the handle of flipped card to work on it
    let cardId = this.getAttribute('data-id');

    // The goal is to identify the flipped card with two new arrays
    cardChosenIds.push(cardId);
    cardChosen.push(cardArray[cardId].name);
    console.log(cardChosen);
    console.log(cardChosenIds);
    // The goes is to use cardId handle to change the image of the card
    this.setAttribute('src', cardArray[cardId].img)

    if(cardChosen.length == 2){
        //Check for a match
        setTimeout(checkMatch, 500);
    }
}











