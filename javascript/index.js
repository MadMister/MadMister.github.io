let slices = document.getElementsByClassName("burger-silce");
let menu = document.getElementsByClassName("burger-menu");
menu[0].addEventListener("mouseover", function() {
    slices[0].style.animatonPlayState = "running";
    slices[1].style.animatonPlayState = "running";
    slices[2].style.animatonPlayState = "running";
})
