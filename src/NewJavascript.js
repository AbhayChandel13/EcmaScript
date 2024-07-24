// Write a function to find the nth Fibonacci number.

//The Fibonacci series is a sequence of numbers in which each number (Fibonacci Nuumber) is the sum tof two preceding ones. It starts with 0 and 1, and the sunbsequent numbers are calculated by adding the last two numbers. So, the Fibonacci series looks like this: 0,1,1,2,3,5,8,13,21, .......

//todo syntax: F(n)= F(n-1)+ F(n-2), Where, F(1) = F(2) = 1.

const fibonacci = (num) => {
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));

console.log("====================================================");

// star pattern Upper pyramid:
let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "* ";
  let space = "  ";
  console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
}

console.log("====================================================");
// Inverted star pattern pyramid:
let m = 5;
for (let i = 5; i >= 1; i--) {
  let str = "* ";
  let space = "  ";
  console.log(space.repeat(m - i) + str.repeat(i * 2 - 1));
}

console.log("====================================================");
//funtction to convert array into a string :

// Original Array
let courses = ["HTML", "CSS", "JavaScript", "React"];

// Converting array to String
let str = courses.toString();
console.log("Coverting array to string:");
console.log(str);

// Original Array
let learn = ["HTML", "CSS", "JavaScript", "React", "Next.Js"];

// Joining the array elements
console.log("Joining the array elements by an element:");
console.log(learn.join("||"));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
// array length syntax: fruits.length (where fruits is array);
console.log(size);

let simple = fruits.toString();
// array to string syntax: fruits.toString() (where fruits is array);
console.log(simple);

//Multiply an array by 2
let arr = [1, 2, 3];
let newArr = arr.map((x) => x * 2); // newArr is [2, 4, 6]
console.log("newArr :", newArr);

//Index of array from last.
let arr1 = [1, 2, 3, 2, 3, 7];
arr1.lastIndexOf(2); // returns 3
console.log("arr1 :", arr1);

//Index of array
let arr2 = [1, 2, 3, 4, 5];
arr2.indexOf(2); // returns 1

console.log("arr2 :", arr2);

//Flatten an array:
const flattenArray = (arr) => arr.flat(Infinity);

console.log("FlatenArray e.g.=", flattenArray([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]

//Select unique elements from an array:
const uniqueElements = (arr) => [...new Set(arr)];

console.log(
  "Unique Array Elements e.g.=",
  uniqueElements([1, 2, 2, 3, 4, 4, 5, 6, 6, 6])
); // [1, 2, 3, 4, 5]

const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

// Example usage:
const logMessage = (message) => console.log(message);
const debouncedLogMessage = debounce(logMessage, 2000);

debouncedLogMessage("Hello, world!");
// This will log "Hello, world!" after 2 seconds if not called again within that time.
