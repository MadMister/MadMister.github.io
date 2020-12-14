var x = document.getElementsByClassName("patch1");
x[0].addEventListener("click",myFun);
function myFun() {
    let y =document.getElementsByClassName("patch2");
    y[0].style.backgroundColor = "red";
}

function animate(e) {
    c = 0;
    I = setInterval(adpapt(e),5);
    function adapt(el) {
        if (c == 255) {
            clearInterval(I);
        }
        else {
            e.style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + c + ")"
            c++;
        }
    }
}

el = document.querySelector("h1");
el.addEventListener("click",animate(this));
