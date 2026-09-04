console.log("Hellow World.");
console.log("From script.js file.");

const myName = "Mario";
let age = 20;
const myNumber = "09944150401";
const myAddress = "hda. 1";

console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Address: ${myAddress}`);
console.log(67);

function greet(greetings, names = []) {
    if (Array.isArray(names)); {
        names = names.join(", ");
    }
    return `${greetings} sa enyu, ${names}`;

}
console.log(greet("Mayung aga", ["Mario", "Carl", "Bobet", "Kas", "Mico"]));

//querySelector
const heading = document.querySelector("h1");
heading.textContent = "Mario L. Baloyo Sr.";
heading.style.color = "purple";
heading.style.backgroundColor = "Yellow";
heading.style.fontSize = "100px";
console.log(heading);

heading.addEventListener("click", function () {
    heading.style.color = "red";
    console.log("Heading was clicked.")
});

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const projectHeading = document.querySelector("#services h2");
console.log(projectHeading);

const toggleButton = document.querySelector('#switch')
const body = document.querySelector('body');
let isOff = false;

toggleButton.addEventListener("click", function () {
    isOff = !isOff;

    if (isOff) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white"
        body.style.color = "black";
    }
})

