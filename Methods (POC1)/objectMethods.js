// Commonly used object methods

// 1) assign: copies enumerable object items from source object to target object
const target = { a: 1 };
const source = { b: 2, c: 3 };
const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 2, c: 3 }

// 2) create: creates new object using existing one as blueprint
const proto = { greet() { return "Hello"; } };
const obj = Object.create(proto); // blueprint
console.log(obj.greet()); // "Hello"

// 3) entries: returns 2D array of key value pairs of an object
const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);
console.log(entries); // [ ['a', 1], ['b', 2], ['c', 3] ]

// 4) fromEntries: vice-versa i.e. transforms 2D array of key-value pairs into object
const entries = [ ['a', 1], ['b', 2], ['c', 3] ];
const obj = Object.fromEntries(entries);
console.log(obj); // { a: 1, b: 2, c: 3 }

// 5) keys: returns array of only keys of object
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
console.log(keys); // [ 'a', 'b', 'c' ]

//6) value: returns array of only values of object
const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);
console.log(values); // [ 1, 2, 3 ]

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Example application: to count occurences in strings or array
function countOccur(arr) {
  const count = {};
  for (const item of arr) {
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  }
  return count;
}

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const result = countOccur(fruits);
console.log(result); // { apple: 3, banana: 2, orange: 1 }
