let elarr = document.getElementsByClassName("affiliate");
let cover = document.getElementsByClassName("covering-sheet")[0];

for (let i= 0; i<elarr.length; i++) {
    elarr[i].addEventListener("click", function() {
        cover.style.display = "block";
    })
}

window.onclick = function(event) {
  if (event.target == cover) {
    cover.style.display = "none";
  }
}
