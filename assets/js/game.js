const allCards = document.querySelectorAll('.card');

function flipCard() {
    this.classList.toggle('flip');
}

allCards.forEach(cards => cards.addEventListener('click', flipCard));