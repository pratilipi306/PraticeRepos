"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculatorCLI_1 = require("./calculatorCLI");
var toDoList_1 = require("./toDoList");
var readline = require("readline-sync");
var calcSelection = readline.question("do u want to invoke the calculator function?Y/N: ");
(calcSelection === "Y") ? (0, calculatorCLI_1.calcCLI)() : console.log("calculator is not selected by user...");
var toDoSelection = readline.question("do u want to invoke the toDoList function?Y/N: ");
(toDoSelection === "Y") ? (0, toDoList_1.toDoList)() : console.log("toDoList is not selected by user...");
