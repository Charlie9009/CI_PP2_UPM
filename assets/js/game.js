// Add a card array and a loop to add eventListener to cards
let card = document.getElementsByClassName('card');
let cards = [...card];

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', flipCard);
};
// For locking the board function
let lockTheBoard = false;
// For the move counter
let moves = 0;
let counter = document.querySelector('#moves-made');

let flippedCard = false;
let firstCardChoice, secondCardChoice;

// Function to flip the cards
function flipCard() {
    if (lockTheBoard) return;
    if (this === firstCardChoice) return;

    this.classList.toggle('open');
    this.classList.toggle('show');
    this.classList.toggle('disabled');

    if (!flippedCard) {
        flippedCard = true;
        firstCardChoice = this;
    } else {
        flippedCard = false;
        secondCardChoice = this;

        checkForMatch();
    }
}

function checkForMatch() {
    // Checking if the cards match
    if (firstCardChoice.dataset.name === secondCardChoice.dataset.name) {
        disableCardsWhenMatch();
    } else {
        // When cards don't match flip them back after a timeout
        unflipCardsWhenWrong();
    }
    // Counts every move to see score
    moveCounter();
}

function disableCardsWhenMatch() {
    // If cards match remove the eventlisteners
    firstCardChoice.removeEventListener('click', flipCard);
    secondCardChoice.removeEventListener('click', flipCard)
}

function unflipCardsWhenWrong() {
    lockTheBoard = true;

    setTimeout(() => {
        firstCardChoice.classList.remove('open')
        secondCardChoice.classList.remove('open')

        lockTheBoard = false;
    }, 1000);
}

(function shuffleCards() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    });
})();

function moveCounter() {
    moves++;
    counter.innerHTML = moves;
    //start timer on first click
    if(moves == 1){
        second = 0;
        minute = 0; 
        hour = 0;
        startTimer();
    }
}

// Timer variables
var second = 0, minute = 0;
var timer = document.querySelector('#time-expired');
var interval;

function startTimer() {
    interval = setInterval(function() {
        timer.innerHTML = minute + 'mins' + second + 'secs';
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
    }, 1000);
}

function resetGame() {
    let allCards = document.querySelector('.grid');
    for (var i = 0; i < card.length; i++) {
        allCards.innerHTML = "";
        [].forEach.call(cards, function(item) {
            allCards.appendChild(item);
        });
        cards[i].classList.remove("open", "show", "disabled");
     }
     moves = 0;
     counter.innerHTML = moves;
};