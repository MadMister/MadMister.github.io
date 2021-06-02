let cards = document.getElementsByClassName("card");
let j = -1;
for (let i = 0; i < cards.length; i++) {
    
    cards[i].addEventListener("click", function() {
        
        if (j == -1) {
            j = i;
        }
        else if (i == j) {
            j = -1;
        }
        else {
            cards[j].classList.toggle("flipped");
            j = i;
        }
        cards[i].classList.toggle("flipped");
    });
}