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


