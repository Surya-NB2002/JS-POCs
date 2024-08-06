// Callbacks: they are functions that are passed as params to another function. The function that accepts this function as param is called Higher Order Function (HOF)
function addNumbers(a, b, callback) { // HOF as it accepts function as param
  let result = a + b;
  callback(result); 
}

function printResult(result) { // callback function
  console.log("The result is:", result);
}

addNumbers(5, 3, printResult); // callback function passd as param to HOF Output: The result is: 8
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Promises: they are placeholders for future values that are unknown when promise is created. it takes 2 functions as params i.e. resolve & reject
It has 3 states: 
1) pending: initial state of promise when its currently running (unfulfilled)
2) resolve: when promise is fulfilled it is said to be resolved
3) reject: when promise is not kept it is said to be rejected or failed and has error/reason */
let myPromise = new Promise((resolve, reject) => {  // promise creation using new keyword
  let success = true; // initialize a boolan value to test promise's state
  if (success) {
    resolve("Operation was successful!"); // to print if boolean value is true
  } else {
    reject("Operation failed."); // to print if boolean value is false
  }
});

myPromise // 2 inbuilt browser functions that js supports to handle promises
  .then((message) => {
    console.log(message); // then() block will run if the promise is resolved i.e. here success=true hence then() is executed with "Operation is successful!" message
  })
  .catch((error) => {
    console.log(error); // catch() block will run if the promise is rejected
  });
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Async: it is a function defined with async keyword and returns a promise value
   Await: a keyword used only inside an async function and is used to halt function execution till a promise is resolved*/
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000); // 2 sec delay
  });
}

async function getData() {  // async function
  console.log("Fetching data...");
  let data = await fetchData(); // waits for the fetchData function's promise to resolve before going to next instruction
  console.log(data); // logs "Data fetched!" after 2 seconds
}

getData();
