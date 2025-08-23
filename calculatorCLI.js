"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcCLI = calcCLI;
var readline = require("readline-sync");
function calcCLI() {
    // const number1: number = Number(readline.question("Enter first number : "));
    // const number2: number = Number(readline.question("Enter second number : "));
    var select = readline.question("Select your operation : add, sub, division, mulitplication: ");
    switch (select) {
        case "add":
            var countAdd = Number(readline.question("how many numbers u want to add : "));
            var numbersAdd = [];
            while (countAdd > 0) {
                numbersAdd.push(Number(readline.question("Enter your number : ")));
                countAdd--;
            }
            console.log("addition of the numebrs are", add.apply(void 0, numbersAdd));
            break;
        case "sub":
            var number1Sub = Number(readline.question("Enter first number : "));
            var number2Sub = Number(readline.question("Enter second number : "));
            console.log("".concat(number1Sub - number2Sub));
            break;
        case "division":
            var number1Div = Number(readline.question("Enter first number : "));
            var number2Div = Number(readline.question("Enter second number : "));
            console.log("".concat(number1Div / number2Div));
            break;
        case "mulitplication":
            var count = Number(readline.question("how many numbers u want to mulitply : "));
            var numbers = [];
            while (count > 0) {
                numbers.push(Number(readline.question("Enter your number : ")));
                count--;
            }
            console.log("addition of the numebrs are", mulitplication.apply(void 0, numbers));
            break;
        default:
            console.log("no opeartion is allowed to calculate");
            break;
    }
}
/// used REST operator (...number) to take mulitple data as an input parameter
function add() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var numebrsToAdd = numbers;
    var sum = 0;
    for (var _a = 0, numebrsToAdd_1 = numebrsToAdd; _a < numebrsToAdd_1.length; _a++) {
        var n = numebrsToAdd_1[_a];
        sum += n;
    }
    return sum;
}
function mulitplication() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    // const numebrsToMultiply: number[] = numbers;
    var multiResult = 1;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var n = numbers_1[_a];
        multiResult *= n;
    }
    return multiResult;
}
