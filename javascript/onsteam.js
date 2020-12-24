let elarr = document.getElemensByClassName("affiliate");
let cover = documnet.getElementsByClassName("covering-screen")[0];

fro(let i= 0; i<elarr.length; i++) {
    elarr[i].addEventlistener("click", function() {
        cover.style.display = "block";
    })
}

window.onclick = function(event) {
  if (event.target == cover) {
    cover.style.display = "none";
  }
}
