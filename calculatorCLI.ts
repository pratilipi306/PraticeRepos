import * as readline from 'readline-sync';


export function calcCLI() {

    const number1:number = Number(readline.question("Enter first number : "));
    const number2:number = Number(readline.question("Enter second number : "));

    const select: string = readline.question("Select your operation : add, sub, division, mulitplication, all : ");

    switch (select) {
        case "add":
            console.log(`${number1 + number2}`);
            break;
        case "sub":
            console.log(`${number1 - number2}`);
            break;
        case "division":
            console.log(`${number1 / number2}`);
            break;
        case "mulitplication":
            console.log(`${number1 * number2}`);
            break;
        case "all":
            console.log(`${number1 + number2}\n`);
            console.log(`${number1 - number2}\n`);
            console.log(`${number1 / number2}\n`);
            console.log(`${number1 * number2}\n`);
            break;
        default:
            console.log("no opeartion is allowed to calculate");
            break;
    }


}

