// function to calculate sum of array elements along with error handling mechanism.
function calcSum(data) {
    try {  // try block to operate on code block that might produce an error
        if (!data) {
            throw new Error("No data provided!"); // display custom errors using throw keyword if no data is provided/ data passed isn't an array
        }

        if (!Array.isArray(data)) {
            throw new Error("Array expected!");
        }

        let result = data.reduce((acc, num) => acc + num, 0); // if data passed is valid and an array then calculate sum and store in result variable

        console.log(`Sum Result: ${result}`);
    } catch (error) { // catch block to handle error if occured in try block 
        console.error("An error occurred:", error.message); // to display corresponding error message passed along with throw
    } finally {
        console.log("Summation finished.");  // finally block to continue control flow and execute irrespective whether error occurs or not
    }
}

// Valid data
calcSum([1, 2, 3, 4]);

// Invalid data
calcSum("abcdef");

// No data provided
calcSum();

/* Output:
Sum Result: 10
Summation finished.
An error occurred: Array expected!
Summation finished.
An error occurred: No data provided!
Summation finished.
*/
