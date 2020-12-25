let slices = document.getElementsByClassName("burger-slice");
let menu = document.getElementsByClassName("burger-menu")[0];
let contracted = true;
menu.addEventListener("click", function() {
    if(contracted) {
        slices[0].style.animationName = "expand";
        slices[1].style.animationName = "expand";
        
        slices[0].style.animationPlayState = "running";
        slices[1].style.animationPlayState = "running";
        
        contracted = false;
    }
    
    else {
        slices[0].style.animationName = "contract";
        slices[1].style.animationName = "contract";
                      
        contracted = true;
    }
});

