let slices = document.getElementsByClassName("burger-slice");
let menu = document.getElementsByClassName("burger-menu")[0];
menu.addEventListener("mouseover", function() {
    slices[0].style.animationPlayState = "running";
    slices[1].style.animationPlayState = "running";
    slices[2].style.animationPlayState = "running";
});
