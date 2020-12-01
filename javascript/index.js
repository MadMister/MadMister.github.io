var x = document.getElementsByClass("animated");

function expand() {
    x.style.display = block;
    let h = 0;
    let i = setInterval(frame, 500);
    function frame() {
        if (h === 200) {
            clearInterval(i);
        }
        else {
            h++;
            x.style.height = h + 'px';
        }
    }
}

function contract() {
    let h = x.style.height;
    let i = setInterval(frame, 500);
    function frame() {
        if (h === 0) {
            x.style.display = none;
            clearInterval(i);
        }
        else {
            h--;
            x.style.height = h + 'px';
        }
    }
}

x.addEventListener("mouseover", expand);

x.addEventListener("mouseout", contract);

var y = document.getElementById("toggle");
