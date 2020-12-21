let tiles = document.querySelectorAll(".initial > div");

function toggle(a,b) {
    
    let coor = [[a,b]];
    
    if (b !== 1) {
        coor.push([a,b-1]);
    }
    
    if (b !== 10) {
        coor.push([a,b+1]);
    }
    
    if (a !== 1) {
        coor.push([a-1,b]);
    }
    
    if (a !== 10) {
        coor.push([a+1,b]);
    }
    
    for (let j = 0; j<coor.length; j++) {
        let r = "row" + coor[j][0];
        let c = "column" + coor[j][1];
        let el = document.getElementsByClassName(r + " " + c)[0];
        if (getComputedStyle(el).backgroundColor == "rgb(255, 255, 255)") {
            el.style.backgroundColor = "rgb(0, 0, 0)";
        }
        else {
            el.style.backgroundColor = "rgb(255, 255, 255)";
        }
    }
}

for (let i = 0; i < tiles.length; i++) {
    let m = Math.floor(i / 10);
    let n = i % 10;
    tiles[i].addEventListener("click", function() {
        toggle(m+1 ,n+1);
    });
}
