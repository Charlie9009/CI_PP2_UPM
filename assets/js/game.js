// Add a card array and a loop to add eventListener to cards
let card = document.getElementsByClassName('card');
let cards = [...card];

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', flipCard);
};

let flippedCard = false;
let firstCardChoice, secondCardChoice;

// Function to flip the cards
function flipCard() {
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
}

function disableCardsWhenMatch() {
    // If cards match remove the eventlisteners
    firstCardChoice.removeEventListener('click', flipCard);
    secondCardChoice.removeEventListener('click', flipCard)
}

function unflipCardsWhenWrong() {
    setTimeout(() => {
        firstCardChoice.classList.remove('open')
        secondCardChoice.classList.remove('open')
    }, 1000);
}