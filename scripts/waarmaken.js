let i = 0;
let a = 0;
let R = 0;
let L = 0;
let prevR = 0;
let prevL = 0;
let carousel = document.getElementsByClassName("carousel")[0];
let items =document.getElementsByClassName("carouselItem");

function rotate() {
    a = i / 8 * -360;
    carousel.style.transform = "translateZ(-157px) rotateY(" + a + "deg)";
}

function carouselRight() {
    i++;
    prevL = (((i - 2) % 8) + 8) % 8;
    prevR = ((i % 8) + 8) % 8;
    L = (((i - 1) % 8) + 8) % 8;
    R = (((i + 1) % 8) + 8) % 8;
    items[prevR].removeEventListener("click",carouselRight);
    items[prevL].removeEventListener("click",carouselLeft);
    items[R].addEventListener("click",carouselRight);
    items[L].addEventListener("click",carouselLeft);
    rotate();
}

function carouselLeft() {
    i--;
    prevL = ((i % 8) + 8) % 8;
    prevR = (((i + 2) % 8) + 8) % 8;
    L = (((i - 1) % 8) + 8) % 8;
    R = (((i + 1) % 8) + 8) % 8;
    items[prevR].removeEventListener("click",carouselRight);
    items[prevL].removeEventListener("click",carouselLeft);
    items[R].addEventListener("click",carouselRight);
    items[L].addEventListener("click",carouselLeft);
    rotate();
}

items[1].addEventListener("click",carouselRight);
items[7].addEventListener("click",carouselLeft);