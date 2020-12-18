var x = document.getElementsByClassName("patch1");
x[0].addEventListener("click",myFun);
function myFun() {
    let y =document.getElementsByClassName("patch2");
    y[0].style.backgroundColor = "red";
}

var elem = document.getElementsByClassName("patch1")[0];
var el = document.getElementsByClassName("header")[0];
function animate() {
    let c = 0;
    let d = Date.now();
    let I = setInterval(adapt,100);
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

function timer() {
    let c = 0;
    let d = Date.now();
    let Int = setInterval(function() {
        if (c == 255) {
            let time = Date.now() - d;
            p = document.createElement("p");
            p.innerHTML = "cycle elapsed in " + time + " miliseconds";
            elem.appendChild(p);
            clearInterval(Int);
        }
        else {
            el.style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + c + ")";
            c++;
        }
        },100);
    
}

el.addEventListener("click",animate);
