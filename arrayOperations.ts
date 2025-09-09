// Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.

// At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.

// Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

// If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.

// Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
console.log("originalneighbours array");

const neighbours: string[] = ["pakistan", "china", "Srilanka"];
for (const item of neighbours) {
    console.log(item);

}
console.log("neighbours array after adding Utopia");

neighbours.push("Utopia");
for (const item of neighbours) {
    console.log(item);

}
console.log("neighbours array removing adding Utopia");

neighbours.pop();
for (const item of neighbours) {
    console.log(item);

}

(neighbours.includes("Germany")) ?
    console.log('Probably a central european country :D') : console.log('Probably not a central european country :D');

for (const item of neighbours) {
    let index;
    (item === "china") ? index = neighbours.indexOf(item) : index = -1;
    neighbours[index] = "ChinaNameUpdated";

}
console.log("neighbours array after changing the name");

for (const item of neighbours) {
    console.log(item);

}

//------------forEach operations--------------

//Print each element along with its index.
const arr = [2, 3, 4, 5];
const elmentWithIndex = function (arr: number[]) {
    arr.forEach(print);
    function print(value: number, index: number, arr: number[]) {
        console.log(`${value} is at index ${index} in ${arr}`);
    }
}

elmentWithIndex(arr);

//Convert all strings in an array to uppercase and print them.
const str2 = ["Pratilipi", "behera", "gourav", "ditya"];

function convertToCaps(item: any, index: number, arr: String[]) {
    arr[index] = item.toUpperCase();
}

const strtoConv = function (Str: string[]) {
    Str.forEach(convertToCaps);
    console.log(`${Str}`);
}

strtoConv(str2);

//Calculate the sum of all numbers in an array using forEach.
const numbers = [10, 20, 30, 40];
let sum = 0;

numbers.forEach(num => {
    sum += num;
});

console.log("Sum =", sum);

//Count how many even and odd numbers are in an array.
const arrevenodd = [12, 23, 45, 66, 32];
let even = 0, odd = 0;
const evenOdd = function (value: number, index: number, array: number[]) {


    (value % 2 == 0) ? even++ : odd++;

}

const check = function (arr: number[]) {
    arr.forEach(evenOdd);
    console.log(`total number of evens are ${even} and total number of odds are ${odd}`);

}
check(arrevenodd);
//Find and print the length of each word in an array of strings.
const stringArr = [`pratilipi`, `behera`, `gourav`, `Pattanaik`];
const lenghthWord = function (value: string, index: number, array: string[]) {
    const lengthOfWord = value.length;
    console.log(`length of word - ${value} is ${lengthOfWord}`);
}
stringArr.forEach(lenghthWord);
//Create a new array containing the squares of all numbers using forEach.
const arrNumbers = [2, 3, 4, 5];
const newArrSqr: number[] = [];
const squares = function (value: number, index: number, array: number[]) {
    newArrSqr.push(value * value);
}

arrNumbers.forEach(squares);
console.log(...newArrSqr);

//Print only the unique elements from an array.
const arrNumbers2 = [2, 3, 4, 5, 3, 4, 5, 6, 7, 9];

arrNumbers2.forEach((value: number, index: number, array: number[]) => {
    (array.indexOf(value) === array.lastIndexOf(value)) ?
        console.log(`${value} is unique`) :
        console.log(`${value} is not unique`)
}
);
//Create an object that counts the frequency of each element in an array.

const freqObj = {
    arr: [2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 6, 9, 9, 9, 9, 9],
    freqCount() {
        const frequency: { [key: number]: number } = {};
        this.arr.forEach((value: number) => {
            (frequency[value]) ? frequency[value] += 1 : frequency[value] = 1;

        }

        );
        console.log(frequency);

    }

}
freqObj.freqCount();
//Flatten a 2D array into a 1D array using forEach.

const matrix1 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
let array1D: number[] = [];

matrix1.forEach((value: number[], index: number, array: number[][]) => {

    array1D.push(...value);
});
console.log(...array1D);
//Find the maximum and minimum numbers in an array using forEach.
const maxMin = [12, 2, 10, 100, 99];
let max: number = maxMin[0], min: number = maxMin[0];
maxMin.forEach((value) => {
    (value > max) ? max = value : max = max;
    (value < min) ? min = value : min = min;
});
console.log(`max is ${max} and min is ${min}`);

//Concatenate all strings in an array into a single string using forEach
const stringArrConcat = [`pratilipi`, `behera`, `gourav`, `Pattanaik`];

let  stringConcat2: string = "";
stringArrConcat.forEach((value) => {
    stringConcat2=stringConcat2.concat(value);
});
console.log(`${stringConcat2}`);
