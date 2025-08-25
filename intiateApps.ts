import {calcCLI} from "./calculatorCLI";
import {toDoList} from "./toDoList"
import { voting } from "./forLoopVoting";
import * as readline from 'readline-sync';

// Chcek if u can use optional chaining here?
const calcSelection = readline.question("do u want to invoke the calculator function?Y/N: ");

(calcSelection==="Y")? calcCLI():console.log("calculator is not selected by user...");
const toDoSelection = readline.question("do u want to invoke the toDoList function?Y/N: ");
(toDoSelection==="Y")? toDoList():console.log("toDoList is not selected by user...");
const votingSelection = readline.question("do u want to invoke the voting function?Y/N: ");
(votingSelection==="Y")? toDoList():console.log("voting is not selected by user...");
