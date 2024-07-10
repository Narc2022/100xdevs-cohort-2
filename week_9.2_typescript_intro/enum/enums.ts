// Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
// The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.

enum Direction {
  Up = "UP", //change the value
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

function doSomething(keyPressed: Direction) {
  // Perform actions based on the direction
  switch (keyPressed) {
    case Direction.Up:
      console.log("Moving Up");
      break;
    case Direction.Down:
      console.log("Moving Down");
      break;
    case Direction.Left:
      console.log("Moving Left");
      break;
    case Direction.Right:
      console.log("Moving Right");
      break;
    default:
      console.log("Invalid direction");
  }
}

doSomething(Direction.Down);
console.log(Direction.Down);
