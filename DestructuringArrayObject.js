const fruits = ["apple", "banana", "cherry"];
const [firstFruit, secondFruit] = fruits;
console.log(firstFruit); // apple

// Object destructuring
const user = {
  username: "johndoe",
  email: "john@example.com"
};

const { username, email } = user;
console.log(username); 