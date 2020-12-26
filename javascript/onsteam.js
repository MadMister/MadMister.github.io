/*

const placeholder = {
    firstName: "Place",
    lastName: "Holder",
    phoneNumber: "+31 6 12345678",
    email: "place@holder.com",
    bio: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum."
}

let cover = document.getElementsByClassName("covering-sheet")[0];
let display = document.getElementsByClassName("cv-display")[0];

for (let i= 0; i<elarr.length; i++) {
    elarr[i].addEventListener("click", function() {
        let name = document.createElement("p");
        let nameText = document.createTextNode(placeholder.firstName + " " + placeholder.lastName);
        name.appendChild(nameText);
        
        let number = document.createElement("p");
        let numberText = document.createTextNode(placeholder.phoneNumber);
        number.appendChild(numberText);
        
        let email = document.createElement("p");
        let emailText = document.createTextNode(placeholder.email);
        email.appendChild(emailText);
        
        let bio = document.createElement("p");
        let bioText = document.createTextNode(placeholder.bio);
        bio.appendChild(bioText);
        
        display.appendChild(name);
        display.appendChild(number);
        display.appendChild(email);
        display.appendChild(bio);
        
        cover.style.display = "block";
    })
}

window.onclick = function(event) {
     if (event.target == cover) {
         cover.style.display = "none";
         display.innerHTML = '';
     }
}
*/

let infoar = document.getElementsByClassName("affiliate-info");
let affiliatesar = document.getElementsByClassName("affiliate");
let grid = document.getElementsByClassName("affiliates-grid")[0];
let j = -1;

affiliatesar[0].addEventListener("click", showInfo);
infoar[0].addEventListener("animationend", stopDisplay);
infoar[0].style.animationDirection = "normal";

function showInfo() {
    if (j >= 0) {
        infoar[j].style.animationDirection = "reverse";
    }
    
    j=0;
    infoar[0].style.display = "block";
}

function stopDisplay() {
    if (infoar[j].style.animationDirection == "reverse") {
        infoar[j].style.display = "none";
        infoar[j].style.animatioDirection = "normal"
    }
}



window.onclick = function(e) {
    if (e.target != affiliatesar[0] && j >= 0) {
        infoar[j].style.animationDirection = "reverse";
        j = -1;
    }
}

