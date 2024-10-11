// const sum = (a,b,...theArgs)=>{
//     let total = 0 ;
//     for (const arg of theArgs){
//         total += arg;
//     }
//    return total;

// }
// console.log(sum(5,10,100,200));

//2. ARRAY MAP METHOD :
// Array squared
// Square the value of every element in the array. Presume that you will only get numbers in the input array.

const input = [1, 2, 3, 4, 5];

input.map(function (num) {
  return Math.pow(num, 2);
});



// or written with Arrow function
console.log(input.map((num) => Math.pow(num, 2)));

//3.Sum of every positive element
// If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

const input2 = [1, -4, 12, 0, -3, 29, -150];

input2
  .filter(function (num) {
    return num > 0;
  })
  .reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

// or with Arrow function:
console.log(
  input2
    .filter((num) => num > 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
);

//Age difference from the youngest and oldest
// Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

const input3 = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jeniffer",
    age: 65,
  },
];

const ages = input3.map((person) => person.age);

console.log([
  Math.min(...ages),
  Math.max(...ages),
  Math.max(...ages) - Math.min(...ages),
]);

//  n! with Map and Reduce
//  If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.

const input4 = 6;

const array = new Array(input).fill(null);
// array is [null, null, null, null, null, null]

array
  .map(function (currentValue, index) {
    return index + 1;
  })
  .reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
  });

// or written with Arrow function
console.log(
  new Array(input4)
    .fill(null)
    .map((currentValue, index) => index + 1)
    .reduce((accumulator, currentValue) => accumulator * currentValue)
);

//Count elements in array of arrays:
// Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is  an object whose property names are the values from the arrays and their value is the number of their occurrences.

const input5 = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];

console.log(
  input5.flat().reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
      accumulator[currentValue] += 1;
    } else {
      accumulator[currentValue] = 1;
    }
    return accumulator;
  }, {})
);

// JavaScript Arrays
// The flat() Method:->

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const newArr = myArr.flat();
console.log("Flatted Array", newArr);


//Date-27Sept.2024



