let burgerMenu = document.getElementsByClassName("burgerMenu")[0];
let growers = document.getElementsByClassName("marginGrowth");
let expandableMenu = document.getElementsByClassName("expandableMenu")[0];

burgerMenu.addEventListener("click", function() {
    expandableMenu.classList.toggle("expanded");
    burgerMenu.classList.toggle("expanded");
});