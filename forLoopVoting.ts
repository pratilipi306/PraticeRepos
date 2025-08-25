import * as readline from 'readline-sync';

// There are elections in your country! in a small town, 
// there are only 50 voters. Use a for loop to simulate the 50 people voting, 
// by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.


export function voting() {
    const polParty1 = "Party1";
    const polParty2 = "Party2";

    let party1PolCount = 0;
    let party2PolCount = 0;

    console.log(`voting is on going for two parties. those are ${polParty1} and ${polParty2}`);
    const population = Number(readline.question("enter the popultaion of the area: "));
    for (let i = 0; i < population; i++) {
        console.log(`Voter number ${i+1} is currently voting`);
        const vote = readline.question(`which party Voter number ${i+1} is voting , 1 or 2? `);
        (vote === "1") ? party1PolCount += 1 : party2PolCount += 1
    }
    (party1PolCount >= party2PolCount) ? console.log(" Party 1 wins") : console.log(" Party 2 wins");

}

//voting();