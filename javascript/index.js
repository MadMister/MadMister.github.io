let slices = document.getElementsByClassName("burger-slice");
let menu = document.getElementsByClassName("burger-menu")[0];
let pane = document.getElementsByClassName("navigation-strip")[0];
let contracted = true;



menu.addEventListener("click", function() {
    if(contracted) {
        slices[0].style.animationName = "expand";
        slices[1].style.animationName = "expand";
        
        slices[0].style.animationPlayState = "running";
        slices[1].style.animationPlayState = "running";
                      
        pane.style.animationName = "dropdown";
        
        pane.style.animationPlayState = "running";
        
        contracted = false;
    }
    
    else {
        slices[0].style.animationName = "contract";
        slices[1].style.animationName = "contract";
                      
        pane.style.animationName = "rollup";
                      
        contracted = true;
    }
});

let widthMatch = window.matchMedia("(max-width: 700px)");
widthMatch.addEventListener('change', function(mm) {
    if (mm.matches) {
        contracted = true;
        slices[0].style.animationPlayState = "paused";
        slices[1].style.animationPlayState = "paused";
        pane.style.animationPlayState = "paused";
    }
});
