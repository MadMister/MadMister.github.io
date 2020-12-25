let slices = document.getElementsByClassName("burger-slice");
let menu = document.getElementsByClassName("burger-menu")[0];
menu.addEventListener("mouseover", function() {
    slices[0].style.animatonPlayState = "running";
    slices[1].style.animatonPlayState = "running";
    slices[2].style.animatonPlayState = "running";
});
