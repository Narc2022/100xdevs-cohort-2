// An interface in TypeScript defines the structure or skeleton of an object.
// It enforces a specific syntax on classes, specifying the types of data an
// object must have. Essentially, an interface acts as a contract that describes
// the shape of an object.

interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}
