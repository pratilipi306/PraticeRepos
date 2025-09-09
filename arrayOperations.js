// Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.
// At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.
// Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.
// If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.
// Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
console.log("originalneighbours array");
var neighbours = ["pakistan", "china", "Srilanka"];
for (var _i = 0, neighbours_1 = neighbours; _i < neighbours_1.length; _i++) {
    var item = neighbours_1[_i];
    console.log(item);
}
console.log("neighbours array after adding Utopia");
neighbours.push("Utopia");
for (var _a = 0, neighbours_2 = neighbours; _a < neighbours_2.length; _a++) {
    var item = neighbours_2[_a];
    console.log(item);
}
console.log("neighbours array removing adding Utopia");
neighbours.pop();
for (var _b = 0, neighbours_3 = neighbours; _b < neighbours_3.length; _b++) {
    var item = neighbours_3[_b];
    console.log(item);
}
(neighbours.includes("Germany")) ?
    console.log('Probably a central european country :D') : console.log('Probably not a central european country :D');
for (var _c = 0, neighbours_4 = neighbours; _c < neighbours_4.length; _c++) {
    var item = neighbours_4[_c];
    var index = void 0;
    (item === "china") ? index = neighbours.indexOf(item) : index = -1;
    neighbours[index] = "ChinaNameUpdated";
}
console.log("neighbours array after changing the name");
for (var _d = 0, neighbours_5 = neighbours; _d < neighbours_5.length; _d++) {
    var item = neighbours_5[_d];
    console.log(item);
}
//------------forEach operations--------------
//Print each element along with its index.
var arr = [2, 3, 4, 5];
var elmentWithIndex = function (arr) {
    arr.forEach(print);
    function print(value, index, arr) {
        console.log("".concat(value, " is at index ").concat(index, " in ").concat(arr));
    }
};
elmentWithIndex(arr);
//Convert all strings in an array to uppercase and print them.
var str2 = ["Pratilipi", "behera", "gourav", "ditya"];
function convertToCaps(item, index, arr) {
    arr[index] = item.toUpperCase();
}
var strtoConv = function (Str) {
    Str.forEach(convertToCaps);
    console.log("".concat(Str));
};
strtoConv(str2);
//Calculate the sum of all numbers in an array using forEach.
var numbers = [10, 20, 30, 40];
var sum = 0;
numbers.forEach(function (num) {
    sum += num;
});
console.log("Sum =", sum);
//Count how many even and odd numbers are in an array.
var arrevenodd = [12, 23, 45, 66, 32];
var even = 0, odd = 0;
var evenOdd = function (value, index, array) {
    (value % 2 == 0) ? even++ : odd++;
};
var check = function (arr) {
    arr.forEach(evenOdd);
    console.log("total number of evens are ".concat(even, " and total number of odds are ").concat(odd));
};
check(arrevenodd);
//Find and print the length of each word in an array of strings.
var stringArr = ["pratilipi", "behera", "gourav", "Pattanaik"];
var lenghthWord = function (value, index, array) {
    var lengthOfWord = value.length;
    console.log("length of word - ".concat(value, " is ").concat(lengthOfWord));
};
stringArr.forEach(lenghthWord);
//Create a new array containing the squares of all numbers using forEach.
var arrNumbers = [2, 3, 4, 5];
var newArrSqr = [];
var squares = function (value, index, array) {
    newArrSqr.push(value * value);
};
arrNumbers.forEach(squares);
console.log.apply(console, newArrSqr);
//Print only the unique elements from an array.
var arrNumbers2 = [2, 3, 4, 5, 3, 4, 5, 6, 7, 9];
arrNumbers2.forEach(function (value, index, array) {
    (array.indexOf(value) === array.lastIndexOf(value)) ?
        console.log("".concat(value, " is unique")) :
        console.log("".concat(value, " is not unique"));
});
//Create an object that counts the frequency of each element in an array.
var freqObj = {
    arr: [2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 6, 9, 9, 9, 9, 9],
    freqCount: function () {
        var frequency = {};
        this.arr.forEach(function (value) {
            (frequency[value]) ? frequency[value] += 1 : frequency[value] = 1;
        });
        console.log(frequency);
    }
};
freqObj.freqCount();
//Flatten a 2D array into a 1D array using forEach.
var matrix1 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
var array1D = [];
matrix1.forEach(function (value, index, array) {
    array1D.push.apply(array1D, value);
});
console.log.apply(console, array1D);
//Find the maximum and minimum numbers in an array using forEach.
var maxMin = [12, 2, 10, 100, 99];
var max = maxMin[0], min = maxMin[0];
maxMin.forEach(function (value) {
    (value > max) ? max = value : max = max;
    (value < min) ? min = value : min = min;
});
console.log("max is ".concat(max, " and min is ").concat(min));
//Concatenate all strings in an array into a single string using forEach
var stringArrConcat = ["pratilipi", "behera", "gourav", "Pattanaik"];
var stringConcat2 = "";
stringArrConcat.forEach(function (value) {
    stringConcat2 = stringConcat2.concat(value);
});
console.log("".concat(stringConcat2));
