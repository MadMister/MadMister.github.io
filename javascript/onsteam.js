const placeholder = {
    firstName: "Place",
    lastName: "Holder",
    phoneNumber: "+31 6 12345678",
    email: "place@holder.com",
    bio: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum."
}



let elarr = document.getElementsByClassName("affiliate-info");
let cover = document.getElementsByClassName("covering-sheet")[0];
let display = document.getElementsByClassName("cv-display")[0];
let j = -1;

/*
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

for (let i= 0; i<elarr.length; i++) {
    elarr[i].addEventListener("click", function() {
        if (j != -1) {
            elarr[j].style.animationDirection = "normal";
        }
        elarr[i].style.animationDirection = "reverse";
        elarr[i].style.display = "block";
        
        
        j = i;
    })
}
 
 window.onclick = function(event) {
     if (event.target == cover) {
         cover.style.display = "none";
         display.innerHTML = '';
     }
 }
 */
elarr[0].addEventListener("click", function() {
    if (j != -1) {
        elarr[0].style.animationDirection = "normal";
    }
    elarr[0].style.animationDirection = "reverse";
    elarr[0].style.display = "block";
    
    
    j = i;
})

window.onclick = function(event) {
    if (event.target != document.getElementsByClassName("afiliat")[0]) {
        elarr[0].style.animationDirection = "normal";
    }
}


