import { calcCLI } from "./calculatorCLI";


//Store two different functions (add, subtract) in variables and call them
let arrInt = [2, 3, 4, 5];
let arrInt2 = [10, 30, 40, 50];

const add = function (a: number, b: number) {
    console.log(`additions is ${a + b}`);
};

const substract = function (a: number, b: number) {
    console.log(`substarction is ${a - b}`);
};

add(5, 3);
substract(5, 3);

//Pass a function into another function that simply calls it.
const callingFunction = function (fn1: any, fn2: any) {
    fn1(7, 2);
    fn2(7, 2);
};

callingFunction(add, substract);
//Write a function transformArray(arr, fn) that applies a given function fn to each element of arr.

const arrFunction = function (item: number, index: number, arr: number[]) {
    arr[index] = item * 5;

}

const mainFunction = function (arr: number[], fn: any) {
    arr.forEach(fn);
    console.log(arr);
}

mainFunction(arrInt, arrFunction);

//Write a function transformArray(arr, fn) that applies a given function fn to each element of arr

const trasnformFunc = (n: number) => {
    n = n * 2;
    return n;
}
const transformArray = (arr: number[], fn: any) => {
    arr.forEach((value, index) => {

        arr[index] = fn(value);
    });
}

transformArray(arrInt2, trasnformFunc);

console.log(...arrInt2);

//Write a function calculate(a, b, operation) that takes two numbers 
// and a function (add, multiply, etc.) and applies it.

const calculate = (a: number, b: number, operation: any) => {
    operation(a, b);
}
calculate(3, 4, calcCLI);
//Create your own version of filter that accepts an array and a test function.


