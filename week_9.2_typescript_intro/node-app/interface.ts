const user = {
  firstName: "Sachin",
  lastName: "Singh",
  email: "sachin243@gmail.com",
  age: 21,
};

interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

function IsLegal(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(IsLegal(user));
