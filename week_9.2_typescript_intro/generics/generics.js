"use strict";
// Generics are language independent concepts
// Generics enable you to create components that work with any data type while still providing compile-time type safety.
function identity(args) {
    return args;
}
const output1 = identity("myString");
const output2 = identity(100);
console.log("output1", output1);
console.log("output2", output2);
function getFirstElement(args) {
    return args[0];
}
const firstElement1 = getFirstElement(["sachin", "love"]);
const firstElement2 = getFirstElement([2, 3]);
console.log(firstElement1.toLowerCase());
console.log(firstElement2);
