let texts = ["<span>Inlog</span>: inloggen met de pincode of zo mogelijk een vingerafdruk of gezichtsherkenning.",
"<span>Rekeningen</span>: In het hoofdscherm zijn de portefeuilles zichtbaar met het actuele vermogen, het rendement en het totaal van het vermogen.",
"<span>Rendement</span>: geeft het rendement van de afgelopen 5 jaar en een verdere uitsplitsing van het rendement in het lopende jaar.",
"<span>Verdeling</span>: de risico- of middelenverdeling van de portefeuille.",
"<span>Portefeuille</span>: een overzicht van de portefeuille met de actuele posities, waardes, rendement per positie en totalen per categorie.",
"<span>Private Equity</span>: een overzicht van de Private Equity portefeuille met actuele waardering en waarderingsdatum per positie.",
"<span>Menu</span>: onder het kopje Documenten staat een pagina  waar o.a. de kwartaalrapportages zullen worden geplaatst.",
"<span>Documenten</span>: Een overzicht van beschikbare documenten, die na openen gekanteld, geprint en gemaild kunnen worden."];

let urls = ["url(../images/app_1.png)", "url(../images/app_2.png)", "url(../images/app_3.png)", "url(../images/app_4.png)", "url(../images/app_5.png)", "url(../images/app_6.png)", "url(../images/app_7.png)", "url(../images/app_8.png)"];

let left = document.querySelector(".appLeftButton");
let right = document.querySelector(".appRightButton");
let appScreen = document.querySelector(".appScreen");
let appText = document.querySelector(".appText").firstElementChild;
let intervalId = window.setInterval(autoNextImage, 3000);
let run = true;
let timerNotSet = true;

let currentIndex = 0;
let index = 0;

function update(i) {
    currentIndex = i;
    appScreen.style.backgroundImage = urls[currentIndex];
    appText.innerHTML = texts[currentIndex];
}

function previousImage() {
    index = (((currentIndex - 1) % 8) + 8) % 8;
    update(index);
}

function nextImage() {
    index = (((currentIndex + 1) % 8) + 8) % 8;
    update(index);
}

function autoNextImage() {
    if (run) {
        nextImage();
    }
}

left.addEventListener("click", function() {
    previousImage();
    run = false;
    if (timerNotSet) {
        timerNotSet = false;
        setTimeout(function() {
            run = true;
            timerNotSet = true;
        }, 3000);
    }
});

right.addEventListener("click", function() {
    nextImage();
    run = false;
    if (timerNotSet) {
        timerNotSet = false;
        setTimeout(function() {
            run = true;
            timerNotSet = true;
        }, 3000);
    }
});