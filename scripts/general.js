let burgerMenu = document.getElementsByClassName("burgerMenu")[0];
let growers = document.getElementsByClassName("marginGrowth");
let expandableMenu = document.getElementsByClassName("expandableMenu")[0];

burgerMenu.addEventListener("click", function() {
    expandableMenu.classList.toggle("expanded");
    burgerMenu.classList.toggle("expanded");
});

let widthMatch = window.matchMedia("(min-width: 700px)");
widthMatch.addEventListener('change', function(mm) {
    if (mm.matches) {
        expandableMenu.className = "expandableMenu";
        burgerMenu.className = "burgerMenu";
    }
});