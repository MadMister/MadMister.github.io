let slices = document.getElementsByClassName("burger-slice");
let menu = document.getElementsByClassName("burger-menu")[0];
menu.addEventListener("mouseover", function() {
    slices[0].style.animationDirection = "normal";
    slices[1].style.animationPlayState = "normal";
                      
    slices[0].style.animationPlayState = "running";
    slices[1].style.animationPlayState = "running";
});
menu.addEventListener("mouseout", function() {
    slices[0].style.animationDirection = "reverse";
    slices[1].style.animationPlayState = "reverse";
});
