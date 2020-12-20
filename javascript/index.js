let tiles = document.querySelectorAll("i.initial > div");

function toggle(a,b) {
    let r = a - 1;
    let c = b - 1;
    let s = a + 1;
    let d = b + 1;
    
    let r1 = "row"+r;
    let c1 = "column"+c;
    
    let r2 = "row"+r;
    let c2 = "column"+s;
    
    let tile1 = document.getElementsByClassName("r1 c1");
    if (tile1.backgroundColor == "black") {
        tile.backgroundColor = "white";
    }
    else {
        tile1.backgroundColor = "black";
    }
    
    let tile2 = document.getElementsByClassName("r1 c2");
    if (tile2.backgroundColor == "black") {
        tile2.backgroundColor = "white";
    }
    else {
        tile2.backgroundColor = "black";
    }
    
    let tile3 = document.getElementsByClassName("r2 c1");
    if (tile3.backgroundColor == "black") {
        tile3.backgroundColor = "white";
    }
    else {
        tile3.backgroundColor = "black";
    }
    
    let tile4 = document.getElementsByClassName("r2 c2");
    if (tile4.backgroundColor == "black") {
        tile4.backgroundColor = "white";
    }
    else {
        tile4.backgroundColor = "black";
    }
    
}

for (let i = 0; i < tiles.length; i++) {
    let m = Math.floor(i / 10);
    let n = i % 10;
    tiles[i].addEventListener("click", toggle, m,n);
}
