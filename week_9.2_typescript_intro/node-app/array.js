"use strict";
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
