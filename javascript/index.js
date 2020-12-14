var x = document.getElementsByClassName("patch1");
x[0].addEventListener("click",myFun);
function myFun() {
    let y =document.getElementsByClassName("patch2");
    y[0].style.backgroundColor = "red";
}
