// Generics are language independent concepts
// Generics enable you to create components that work with any data type while still providing compile-time type safety.

function identity<T>(args: T) {
  return args;
}

const output1 = identity<string>("myString");
const output2 = identity<number>(100);

console.log("output1", output1);
console.log("output2", output2);

function getFirstElement<T>(args: T[]) {
  return args[0];
}

const firstElement1 = getFirstElement<string>(["sachin", "love"]);
const firstElement2 = getFirstElement<number>([2, 3]);

console.log(firstElement1.toLowerCase());
console.log(firstElement2);
