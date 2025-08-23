import * as readline from 'readline-sync';
//  **Calculator CLI**

//    * Input: two numbers + operator (+, -, \*, /).
//    * Output: result.
//    * Practice: Type annotations, conditionals, functions.

export function calcCLI() {

    const select: string = readline.question("Select your operation : add, sub, division, mulitplication: ");

    switch (select) {
        case "add":
            let countAdd: number = Number(readline.question("how many numbers u want to add : "));
            let numbersAdd: number[] = [];
            while (countAdd > 0) {
                numbersAdd.push(Number(readline.question("Enter your number : ")));
                countAdd--;
            }
            console.log("addition of the numebrs are", add(...numbersAdd));
            break;
        case "sub":
            const number1Sub: number = Number(readline.question("Enter first number : "));
            const number2Sub: number = Number(readline.question("Enter second number : "));

            console.log(`${number1Sub - number2Sub}`);
            break;
        case "division":
            const number1Div: number = Number(readline.question("Enter first number : "));
            const number2Div: number = Number(readline.question("Enter second number : "));

            console.log(`${number1Div / number2Div}`);
            break;
        case "mulitplication":
            let count: number = Number(readline.question("how many numbers u want to mulitply : "));
            let numbers: number[] = [];
            while (count > 0) {
                numbers.push(Number(readline.question("Enter your number : ")));
                count--;
            }
            console.log("mulitplication of the numebrs are", mulitplication(...numbers));
            break;
    
        default:
            console.log("no opeartion is allowed to calculate");
            break;
    }


}
/// used REST operator (...number) to take mulitple data as an input parameter
function add(...numbers: number[]) {
    const numebrsToAdd: number[] = numbers;
    let sum = 0
    for (let n of numebrsToAdd) {
        sum += n;
    }
    return sum;

}

function mulitplication(...numbers:number[])
{
   // used the numbers recieved in the rest paramtere without assigning them in an aray first;
    let multiResult = 1;
    for (let n of numbers) {
        multiResult *= n;
    }
    return multiResult;
}

