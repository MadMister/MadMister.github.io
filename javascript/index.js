let slices = document.getElementsByClassName("burger-slice");
let menu = document.getElementsByClassName("burger-menu")[0];
menu.addEventListener("mouseover", function() {
    slices[0].style.animationName = "expand";
    slices[1].style.animationName = "expand";
    
    slices[0].style.animationPlayState = "running";
    slices[1].style.animationPlayState = "running";
});
menu.addEventListener("mouseout", function() {
    slices[0].style.animationName = "contract";
    slices[1].style.animationName = "contract";
});
