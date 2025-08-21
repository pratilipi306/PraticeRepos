var intialString = prompt("Enter a string to reverse");
var revString = intialString === null || intialString === void 0 ? void 0 : intialString.split("").reverse().join("");
prompt("intial string is ".concat(intialString));
prompt("Reversal string is ".concat(revString));
