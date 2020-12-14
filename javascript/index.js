var x = document.getElementsByClassName("patch1");
x[0].addEventListener("click",myFun);
function myFun() {
    let y =document.getElementsByClassName("patch2");
    y[0].style.backgroundColor = "red";
}


var elar = document.getElementsByClassName("header");
var el = elar[0];
function animate() {
    c = 0;
    I = setInterval(adap,5);
    function adapt() {
        if (c == 255) {
            clearInterval(I);
        }
        else {
            el.style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + c + ")"
            c++;
        }
    }
}

el.addEventListener("click",animate);
