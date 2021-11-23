let strip = document.getElementsByClassName("slideshow")[0];
let workers = document.getElementsByClassName("workers")[0];
let legs = document.querySelectorAll(".legs > .one, .legs > .two");
let divs = document.querySelectorAll(".legs .one > div, .legs .two > div");
let images = document.getElementsByClassName("heroimg");
let j = 0;



strip.addEventListener("click", imageshift);
function imageshift(e) {
    let target = e.currentTarget;
    target.removeEventListener("click", imageshift);
    console.log(target);
    let widthStrip = target.clientWidth;
    let widthWorker = 3 * divs[0].clientWidth;
    let time = widthWorker * 10000 / widthStrip;
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.animationDuration = time + "ms";
    }
    time = time * 2;
    for (let k = 0; k < legs.length; k++) {
        legs[k].style.animationDuration = time + "ms";
    }
    strip.classList.toggle("shifted");
}


strip.addEventListener("transitionend", function() {
    images[j % 2].src = images[1].src;       
    images[(j+1) % 2].src = "placeholder2.jpg";
    j++;
    workers.classList.toggle("reverse");
    strip.addEventListener("click", imageshift);
});