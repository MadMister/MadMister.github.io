let rotor = document.getElementById("mainNavList");
let button = rotor.firstElementChild;
let links = rotor.children;
let timer = null;

window.addEventListener("resize", function() {
    rotor.classList.add("resizing");
    if (timer == null) {
        timer = setTimeout(function() {
            rotor.classList.remove("resizing");
            timer = null;
        }, 500);
    }
});





rotor.addEventListener("transitionend", function(e) {
    if ( getComputedStyle(rotor).transform == "matrix(1, 0, 0, 1, 0, 0)" ) {
        rotor.classList.add("rotated");
        console.log("rotated");
    }    
});
for (let i = 0; i < links.length; i++) {
    if (i == 1) {
        links[i].firstElementChild.addEventListener("transitionend", function(e) {
            getComputedStyle(links[i]).width;
            if (getComputedStyle(links[i]).width == "8px") {
                rotor.classList.add("collapsed");
                rotor.classList.remove("rotated");
                console.log("collapsed"); 
            }
            e.stopPropagation();
        });
        links[i].firstElementChild.addEventListener("transitionstart", function(e) {
            if (getComputedStyle(links[i]).width == "8px") {
                rotor.classList.remove("collapsed");
                console.log("extend");
            }
            e.stopPropagation();
        });
    }
    else {
        links[i].addEventListener("transitionend", function(e) {
            e.stopImmediatePropagation();
        });
    }
}
button.addEventListener("click", function() {
    rotor.classList.toggle("clicked");
    console.log("clicked");
});
rotor.addEventListener("click", function() {
    button.click();
});

// rotor.firstElementChild.firstElementChild.addEventListener("transitionend", function(e) {
//     if (!rotor.classList.contains("reverse")) {
//         rotor.classList.add("reverse");
//         console.log("lit");  
//     }
//     e.stopPropagation();
//     console.log("li" + e.target);
// });