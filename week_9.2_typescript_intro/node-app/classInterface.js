"use strict";
// An interface in TypeScript defines the structure or skeleton of an object.
// It enforces a specific syntax on classes, specifying the types of data an
// object must have. Essentially, an interface acts as a contract that describes
// the shape of an object.
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
