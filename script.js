let cards = document.getElementsByClassName("card");
let buttons = document.getElementsByClassName("gridButton");
let j = -1;

function turn(card) {
    if (j == -1) {
        j = card;
    }
    else if (card == j) {
        j = -1;
    }
    else {
        cards[j].classList.toggle("flipped");
        j = card;
    }
    cards[card].classList.toggle("flipped");
}
for (let i = 0; i < cards.length; i++) {
    
    cards[i].addEventListener("click", function() {
        turn(i);
    });
    buttons[i].addEventListener("click", function() {
        turn(i);
    });
}