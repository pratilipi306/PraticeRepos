"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcCLI = calcCLI;
var readline = require("readline-sync");
function calcCLI() {
    var number1 = Number(readline.question("Enter first number : "));
    var number2 = Number(readline.question("Enter second number : "));
    var select = readline.question("Select your operation : add, sub, division, mulitplication, all : ");
    switch (select) {
        case "add":
            console.log("".concat(number1 + number2));
            break;
        case "sub":
            console.log("".concat(number1 - number2));
            break;
        case "division":
            console.log("".concat(number1 / number2));
            break;
        case "mulitplication":
            console.log("".concat(number1 * number2));
            break;
        case "all":
            console.log("".concat(number1 + number2, "\n"));
            console.log("".concat(number1 - number2, "\n"));
            console.log("".concat(number1 / number2, "\n"));
            console.log("".concat(number1 * number2, "\n"));
            break;
        default:
            console.log("no opeartion is allowed to calculate");
            break;
    }
}
