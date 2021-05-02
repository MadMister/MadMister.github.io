let cover = document.getElementsByClassName("screenOverlay")[0];
let affiliates = document.getElementsByClassName("affiliate");
let affiliateViewBox = document.getElementsByClassName("affiliateViewBox")[0];
let displayList = affiliateViewBox.children;
let imageContainer = displayList[0];
let details = displayList[1].children;

function showAffiliate(a) {
    let infoList = a.children;

    imageContainer.firstElementChild.src = infoList[0].firstElementChild.src;
    imageContainer.firstElementChild.alt = infoList[0].firstElementChild.alt;
    details[0].innerHTML = infoList[1].firstElementChild.innerHTML + " " + infoList[1].lastElementChild.innerHTML;
    details[1].innerHTML = infoList[2].firstElementChild.innerHTML;
    details[2].innerHTML = infoList[2].firstElementChild.nextElementSibling.innerHTML;
    details[3].innerHTML = infoList[2].lastElementChild.previousElementSibling.innerHTML;
    details[4].innerHTML = infoList[2].lastElementChild.innerHTML;
        
    cover.classList.toggle("visable");
}

for (let i= 0; i<affiliates.length; i++) {
    let affiliate = affiliates[i];
    affiliate.firstElementChild.firstElementChild.nextElementSibling.addEventListener("click", function() {
        showAffiliate(affiliate);
    });
    affiliate.firstElementChild.firstElementChild.nextElementSibling.addEventListener("keydown", function(e) {
        if (e.key == 'Enter' || e.key == ' ') {
            showAffiliate(affiliate);
        }
    });
}

cover.addEventListener("click", function(e) {
    if (e.target == cover) {
        cover.classList.toggle("visable");
    }
});