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
    }    
});
for (let i = 0; i < links.length; i++) {
    let link = links[i];
    if (i == 1) {    
        link.firstElementChild.addEventListener("transitionend", function(e) {
            if (getComputedStyle(link).width == "8px") {
                rotor.classList.add("collapsed");
                rotor.classList.remove("rotated"); 
            }
            if (getComputedStyle(link.firstElementChild).height == "25px") {
                rotor.classList.add("opened");
            }
            e.stopPropagation();
        });
        link.firstElementChild.addEventListener("transitionstart", function(e) {
            if (getComputedStyle(link).width == "8px") {
                rotor.classList.remove("collapsed");
            }
            if (getComputedStyle(link.firstElementChild).height == "25px") {
                rotor.classList.remove("opened");
            }
            e.stopPropagation();
        });
    }
    else {
        link.addEventListener("transitionend", function(e) {
            e.stopImmediatePropagation();
        });
    }
}
button.addEventListener("click", function() {
    rotor.classList.toggle("clicked");
});
rotor.addEventListener("click", function() {
    button.click();
});
document.addEventListener("click", function(e) {
    if (!rotor.contains(e.target)) {
        rotor.classList.remove("clicked");
    }
} );

// rotor.firstElementChild.firstElementChild.addEventListener("transitionend", function(e) {
//     if (!rotor.classList.contains("reverse")) {
//         rotor.classList.add("reverse");
//         console.log("lit");  
//     }
//     e.stopPropagation();
//     console.log("li" + e.target);
// });