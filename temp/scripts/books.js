let shadows = document.getElementsByClassName("shadowback");

window.addEventListener("scroll", function() {
    let addition = document.documentElement.scrollTop / 20;
    for (let i = 0; i < shadows.length; i++) {
        shadows[i].style.height = "calc(70% + " + addition + "%)";
        console.log("calc(50% + " + addition + "%)");
    }
});

let sinces = {
    "danish": "siden",
    "dutch": "sinds",
    "english": "since",
    "finnish": "läthien",
    "french": "depuis",
    "frisian": "sûnt",
    "german": "seit",
    "italian": "da",
    "norwegian": "siden",
    "spanish": "since",
}