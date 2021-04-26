let texts = ["<span>Inlog</span>: inloggen met de pincode of zo mogelijk een vingerafdruk of gezichtsherkenning.",
"<span>Rekeningen</span>: In het hoofdscherm zijn de portefeuilles zichtbaar met het actuele vermogen, het rendement en het totaal van het vermogen.",
"<span>Rendement</span>: geeft het rendement van de afgelopen 5 jaar en een verdere uitsplitsing van het rendement in het lopende jaar.",
"<span>Verdeling</span>: de risico- of middelenverdeling van de portefeuille.",
"<span>Portefeuille</span>: een overzicht van de portefeuille met de actuele posities, waardes, rendement per positie en totalen per categorie.",
"<span>Private Equity</span>: een overzicht van de Private Equity portefeuille met actuele waardering en waarderingsdatum per positie.",
"<span>Menu</span>: onder het kopje Documenten staat een pagina  waar o.a. de kwartaalrapportages zullen worden geplaatst.",
"<span>Documenten</span>: Een overzicht van beschikbare documenten, die na openen gekanteld, geprint en gemaild kunnen worden."];

let urls = ["url(../images/app_1.png)", "url(../images/app_2.png)", "url(../images/app_3.png)", "url(../images/app_4.png)", "url(../images/app_5.png)", "url(../images/app_6.png)", "url(../images/app_7.png)", "url(../images/app_8.png)"];

let appImages = document.getElementsByClassName("tinyApp");
let left = document.querySelector(".appLeftButton");
let right = document.querySelector(".appRightButton");
let appScreen = document.querySelector(".appScreen");
let appText = document.querySelector(".appText").firstElementChild;

let currentIndex = 0;
let index = 0;

function update(i) {
    appImages[currentIndex].firstElementChild.style.width = "100%";
    appImages[currentIndex].firstElementChild.style.transform = "translate(0,0)";
    currentIndex = i;
    appScreen.style.backgroundImage = urls[currentIndex];
    appImages[currentIndex].firstElementChild.style.width = "110%";
    appImages[currentIndex].firstElementChild.style.transform = "translate(-5%,-5%)";
    appText.innerHTML = texts[currentIndex];
}

left.addEventListener("click", function() {
    if (currentIndex == 0) {
        return;
    }
    index = currentIndex - 1;
    update(index);
});

right.addEventListener("click", function() {
    if (currentIndex == 7) {
        return;
    }
    index = currentIndex + 1;
    update(index);
});

appImages[0].addEventListener("click", function() {
    index = 0;
    update(index);
});

appImages[1].addEventListener("click", function() {
    index = 1;
    update(index);
});

appImages[2].addEventListener("click", function() {
    index = 2;
    update(index);
});

appImages[3].addEventListener("click", function() {
    index = 3;
    update(index);
});

appImages[4].addEventListener("click", function() {
    index = 4;
    update(index);
});

appImages[5].addEventListener("click", function() {
    index = 5;
    update(index);
});

appImages[6].addEventListener("click", function() {
    index = 6;
    update(index);
});

appImages[7].addEventListener("click", function() {
    index = 7;
    update(index);
});