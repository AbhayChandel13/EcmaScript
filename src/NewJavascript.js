// Write a function to find the nth Fibonacci number.

//The Fibonacci series is a sequence of numbers in which each number (Fibonacci Nuumber) is the sum tof two preceding ones. It starts with 0 and 1, and the sunbsequent numbers are calculated by adding the last two numbers. So, the Fibonacci series looks like this: 0,1,1,2,3,5,8,13,21, .....

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
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(10));

