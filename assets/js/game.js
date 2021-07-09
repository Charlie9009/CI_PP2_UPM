// Add a card array and a loop to add eventListener to cards
let card = document.getElementsByClassName('card');
let cards = [...card];

window.onload = function addClickToCards() {
    for (var i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', flipCard);
    };
  };

// For locking the board function
let lockTheBoard = false;

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
        whenCardsMatch();
    } else {
        // When cards don't match flip them back after a timeout
        unflipCardsWhenWrong();
    }
    // Counts every move to see score
    moveCounter();
}

var wonCards = []

function whenCardsMatch() {
    // If cards match remove the eventlisteners
    firstCardChoice.removeEventListener('click', flipCard);
    secondCardChoice.removeEventListener('click', flipCard);

    firstCardChoice.classList.add('match');
    secondCardChoice.classList.add('match');
    var div = document.querySelector('.match')
    if (div.classList.contains('match')) {
        wonCards.push(div);
    }
    gameWon();
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

// For the move counter
let moves = 0;
let counter = document.querySelector('#moves-made');

function moveCounter() {
    moves++;
    counter.innerHTML = moves;
    //start timer on first click
    if (moves == 1) {
        second = 0;
        minute = 0;
        startTimer();
    }
}

// Timer variables
var second = 0, minute = 0;
var timer = document.querySelector('#time-expired');
var interval;

function startTimer() {
    interval = setInterval(function () {
        timer.innerHTML = minute + 'mins' + second + 'secs';
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
    }, 1000);
}

function resetGame() {
    location.reload();
};

function gameWon() {
    let modal = document.getElementById('myModal');
    
    if (wonCards.length === 10) {
        clearInterval(interval);
        finalTime = timer.innerHTML;

        modal.classList.add('show-modal')

        document.getElementById('yourTime').innerHTML = finalTime
        document.getElementById('yourMoves').innerHTML = moves
    }
}

function closeModal() {
    let modal = document.getElementById('myModal');
    modal.classList.remove('show-modal');
}