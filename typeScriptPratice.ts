
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const arr3 = [2, 4, 6]
const str = "Pratilipi"; // 4, 8

// Remove Duplicates
function duplicateRemove() {
    const arr12347 = [1, 2, 2, 3, 4, 4, 4, 7, 7];
    const newSet = new Set(arr12347);
    const newarr = Array.from(newSet);
    console.log(`arr12347 -  ${newarr}`);
}

// 2. Second largest element
function secondLarge() {
    const arr12347 = [1, 2, 2, 3, 4, 4, 4, 7, 7];
    const newSet = new Set(arr12347); // Removes Duplicates and returns a set
    const newArr = Array.from(newSet);  // assigns back to an array
    const sorted = newArr.sort((a, b) => b - a); // Sorts the new array, if b is greater than put b before a
    const secLarge = (sorted.length) > 2 ? sorted[1] : null;// checks if the array is having at least two elements then returns the 2nd or retrusn null.
    console.log(`second large number is  ${secLarge}`);

}

//3. Rotate array k times to right

function rotateArray(n: number) {
    const arr = [1, 2, 3, 4, 5];
    const rotateN = n % arr.length; // If k is larger than the array length, rotating more than arr.length times just loops back.% (modulo) keeps k within range.Example: rotating [1,2,3] by 3 or 6 gives the same array.
    const leftarr = arr.slice(-rotateN); // Takes the n last elements fromt the array
    const rightarr = arr.slice(0, rotateN + 1);// Takes the n fast elements fromt the array
    const arrRotated = leftarr.concat(rightarr); // Concates left with right
    console.log(`Array rotated ${n} times is ${arrRotated}`);

}
// 4. Merge two sorted arrays and sort them again
function mergeSortedArrays(arr1: number[], arr2: number[]) {
    const mergedArrays = [...arr1, ...arr2]; // merge the two arrays first
    const sortedmergedArrays = mergedArrays.sort((x, y) => x - y); // Sort them using numerical sort operator. 
    //(x, y) => x - y is the numeric sort comparator:
    // If result < 0 → x comes before y
    // If result > 0 → y comes before x

    console.log(`${sortedmergedArrays}`);
}

// 5. Check if arrays are equal

function duplCheck(arr1: number[], arr2: number[]) {
    const check: boolean = (arr1.length === arr2.length) && arr1.every((val, i) => val === arr2[i]);
    //.every() checks that every element in a satisfies the condition.
    // (val, i) => val === b[i] compares each element of a with the element at the same index in b.

    console.log(` the array are equal - ${check}`);
}
// 6. Reverse a string
function revString(str: String) {
    const rev = str.split("").reverse().join("");
    console.log(`reverse of the string is ${rev}`);
}
// Count vowels and consonants

function countCheck(str: String) {
    const arrStr = Array.from(str); // Used this frunction to convert from string to array because spread operator shows issue with compiler options -downlevelIteration and target in tsconfig
    let vowels: number = 0;
    let consonants: number = 0;
    for (const s of arrStr) {
        ("aeiou".includes(s) ? vowels++ : consonants++);

    }
    console.log(`number of vowels ${vowels} and number of consonenets is ${consonants}`);

}

// First non-repeating char
function firstNonRepeatChar(str: String) {

}

// Occurrences of characters in a string

function charCount(str: string) {
    const arrStr = Array.from(str);
    const arrSet = new Set(arrStr);
    const newArrStr = Array.from(arrSet);
    for (const c of newArrStr) {
        const first = arrStr.indexOf(c);
        let last = arrStr.lastIndexOf(c);
        last = (last === arrStr.length - 1) ? last - 1 : last;
        const total = (last - first) < 0 ? 0 : last - first;
        console.log(`${c} is repeated by ${total} times`);
    }

}

//Fibonacci series program
function fibonacci() {
    const arr = [0, 1];
    const length = arr.length;
    const lenghtFibo =10;
    for (let i = 0; i < (lenghtFibo - length); i++) {
        const length = arr.length;
        arr.push(arr[length - 1] + arr[length - 2]);
    }

    console.log(`fibonacci series for length of ${lenghtFibo} is ${arr}`);

}

//  Remove duplicate letters from a string

function removeDupl(str:string)
{
    const newSet = new Set (str);
    console.log (`string after removal of duplicates ${Array.from(newSet)}`);
}







// duplicateRemove();
// secondLarge();
// rotateArray(2);
// mergeSortedArrays(arr1, arr2)
// duplCheck(arr2, arr3);
// revString(str)
// countCheck(str);
// charCount(str);
// fibonacci();
removeDupl(str);
