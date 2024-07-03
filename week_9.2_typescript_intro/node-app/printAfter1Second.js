"use strict";
function printAfter1sec(sentence) {
    setTimeout(() => {
        console.log(sentence);
    }, 1000);
}
printAfter1sec("print after sec");
