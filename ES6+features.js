// Arrow functions
const add = (a,b) => a+b;
console.log(add(2,3)); // 5

// Template literals
let name = "Surya"
let person = "Jack"
let greet = `Welcome ${name}, my name is ${person}`
console.log(greet); // Welcome Surya, my name is Jack

// Destructuring: to unpack values from arrays/objects

// Array destructuring
const [a, b, c] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Object dstructuring
const {a, b} = {a: 1, b: 2};
console.log(a); // 1
console.log(b); // 2

// Skipping values while dstructuring
const [a, , c] = [1, 2, 3];
console.log(a); // 1
console.log(c); // 3 i.e. here, no variable is assigned to 2 so it is ignored

// Destructuring using spread operator (rest syntax)
const [a, ...rest] = [1, 2, 3, 4];
console.log(a); // 1
console.log(rest); // [2, 3, 4]

const {a, ...rest} = {a: 1, b: 2, c: 3};
console.log(a); // 1
console.log(rest); // {b: 2, c: 3}
