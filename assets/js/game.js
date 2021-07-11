// Get card classes from html and declare card and cards variables to create an array of cards by using the spread operator.
let card = document.getElementsByClassName('card');
let cards = [...card];
/**
 * A window onload was used to loop thru the cards and give them each an eventListener.
 * I want the eventListener to listen out for clicks so the flipCard can fire if cards are clicked.
 * A shuffleCards function is used to shuffle the cards so they will always be random.
 */
window.onload = function shuffleAndFlipCards() {
    for (var i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', flipCard);
        // Randomize the position of the cards
        cards.forEach(card => {
            let randomPosition = Math.floor(Math.random() * 20);
            card.style.order = randomPosition;
        });
    }
};

// For locking the board function
let lockTheBoard = false;
let flippedCard = false;
let firstCardChoice, secondCardChoice;

/**
 * The flipCard function checks if the user has clicked the first card or second card.
 * Depending on which click it is the board will lock or not.
 */
function flipCard() {
    if (lockTheBoard) return;
    if (this === firstCardChoice) return;
    // Add this class
    this.classList.add('open');
    // First click on cards
    if (!flippedCard) {
        flippedCard = true;
        firstCardChoice = this;
    } else {
        // Second click on cards
        flippedCard = false;
        secondCardChoice = this;
        // When two cards have been flipped call the function checkForMatch.
        checkForMatch();
    }
}

/**
 * The checkForMatch function checks if the dataset name of the first and the second card match, these names have been added to the cards in the html.
 * If the cards match the whenCardsMatch function is called, if they dont the unflipCardsWhenWrong function is called.
 * The moveCounter function is called at the bottom to count every move wether it is right or wrong.
 */
function checkForMatch() {
    // Checking if the cards match
    if (firstCardChoice.dataset.name === secondCardChoice.dataset.name) {
        whenCardsMatch();
    } else {
        // When cards don't match flip them back after a timeout
        unflipCardsWhenWrong();
    }
    // Counts every move to see score
    moveCounter();
}

// An empy array to put matched cards into
var wonCards = [];
/**
 * If cards match remove the click eventlisteners to keep the cards from flipping back.
 * If cards match also add a new class of 'match' to identify which cards have been won.
 * If divs have the class 'match' push them to the empty wonCards array.
 */
function whenCardsMatch() {
    firstCardChoice.removeEventListener('click', flipCard);
    secondCardChoice.removeEventListener('click', flipCard);
    // Add match class to match card choice
    firstCardChoice.classList.add('match');
    secondCardChoice.classList.add('match');
    var div = document.querySelector('.match');
    if (div.classList.contains('match')) {
        wonCards.push(div);
    }
    gameWon();
}

/**
 * When two cards dont match the cards need to flip back so the user can continue the game.
 * To keep the user from being able to keep opening cards I lock the so no more than two cards can be open.
 * To flip the cards back I remove the class 'open'. 
 * A timeout is also set for 1000ms so the user can see the cards.
 */
function unflipCardsWhenWrong() {
    lockTheBoard = true;
    // Timeout before removing open class
    setTimeout(() => {
        firstCardChoice.classList.remove('open');
        secondCardChoice.classList.remove('open');
        lockTheBoard = false;
    }, 1000);
}

// Variables for the move counter
let moves = 0;
let counter = document.querySelector('#moves-made');
/**
 * The moveCounter function counts one move to the html everytime when two cards have been flipped.
 * It also includes if 1 move has been made the timer will start.
 */
function moveCounter() {
    moves++;
    counter.innerHTML = moves;
    //start timer on first click
    if (moves == 1) {
        startTimer();
    }
}

// Timer variables
var second = 0, minute = 0;
var timer = document.querySelector('#time-expired');
var interval;
/**
 * The startTimer function sets the interval and how the timer function. It gives an output of minutes and seconds.
 * It counts in 1000ms.
 */
function startTimer() {
    interval = setInterval(function () {
        timer.innerHTML = minute + ' ' + 'mins' + ' ' + second + ' ' + 'secs';
        second++;
        // If seconds are equal to 60 add 1 to minute and start from 0 on seconds.
        if (second === 60) {
            minute++;
            second = 0;
        }
    }, 1000);
}

/**
 * The gameWon function gets the div with a modal id.
 * If the wonCards are equal to all cards which is(10 pairs, 20 cards) a class of 'show-modal' is added to the modal div.
 * This fires the div making it show up on the screen with the final time now stoped and total moves made.
 */
function gameWon() {
    let modal = document.getElementById('myModal');
    // Is the wonCards equal to 10 show modal
    if (wonCards.length === 10) {
        clearInterval(interval);
        modal.classList.add('show-modal');
        document.getElementById('yourTime').innerHTML = timer.innerHTML;
        document.getElementById('yourMoves').innerHTML = moves;
    }
}

// This function gets the modal and removes the class of 'show-modal' removing the modal.
function closeModal() {
    let modal = document.getElementById('myModal');
    modal.classList.remove('show-modal');
}

// This function is tied to the resetbutton and it reloads the page.
function resetGame() {
    location.reload();
}