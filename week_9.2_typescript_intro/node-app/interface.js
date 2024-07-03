"use strict";
const user = {
    firstName: "Sachin",
    lastName: "Singh",
    email: "sachin243@gmail.com",
    age: 21,
};
function IsLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(IsLegal(user));
