let slices = document.getElementsByClassName("burger-slice");
let menu = document.getElementsByClassName("burger-menu")[0];
let pane = document.getElementsByClassName("navigation-strip")[0];
let contracted = true;



menu.addEventListener("click", function() {
    if(contracted) {
        slices[0].style.animationName = "expand";
        slices[1].style.animationName = "expand";
        
        pane.style.animationName = "dropdown";
        
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
    if (mm.matches && !contracted) {
        
        slices[0].style.animationName = "";
        slices[1].style.animationName = "";
        
        slices[0].style.marginBottom = "10px";
        slices[1].style.marginBottom = "10px";
        
        pane.style.animationName = "";
        
        pane.style.height = "0";
                      
        contracted = true;
    }
});
