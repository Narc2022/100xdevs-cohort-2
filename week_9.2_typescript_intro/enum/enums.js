"use strict";
//
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
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
