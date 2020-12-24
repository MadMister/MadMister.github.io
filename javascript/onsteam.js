const placeholder = {
    first-name: "Place",
    last-name: "Holder;",
    phone-number: "+31 6 12345678",
    email: "place@holder.com",
    bio: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum."
}



let elarr = document.getElementsByClassName("affiliate");
let cover = document.getElementsByClassName("covering-sheet")[0];
let display = document.getElementsByClassName("cv-display")[0];

for (let i= 0; i<elarr.length; i++) {
    elarr[i].addEventListener("click", function() {
        let name = document.createElement("p");
        let name-text = document.createTextNode(placeholder.first-name + " " + placeholder.lastname);
        name.appendChild(name-text);
        
        let number = document.createElement("p");
        let number-text = document.createTextNode(placeholder.phone-number);
        number.appendChild(number-text);
        
        let email = document.createElement("p");
        let email-text = document.createTextNode(placeholder.email);
        email.appendChild(email-text);
        
        let bio = document.createElement("p");
        let bio-text = document.createTextNode(placeholder.bio);
        bio.appendChild(bio-text);
        
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
  }
}
