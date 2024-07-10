"use strict";
// If you want to access arrays in typescript, it’s as simple as adding a [] annotation next to the type
// Given an array of positive integers as input, return the maximum value in the array
const arr = [19, 180, 12, 48, 90];
function max(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element > max) {
            max = element;
        }
    }
    console.log("max", max);
}
max(arr);
const ageArray = [
    { firstName: "sachin", lastName: "singh", age: 16 },
    { firstName: "vibha", lastName: "singh", age: 28 },
];
function eligibleVotersList(users) {
    const voters = users.filter((user) => user.age >= 18);
    console.log("voters", voters);
}
eligibleVotersList(ageArray);
