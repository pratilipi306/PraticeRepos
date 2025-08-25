// Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).
var myCountry = {
    country: "India",
    capital: "Delhi",
    language: "Hindi",
    population: 6,
    neighbours: ["pakistan", "china", "Srilanka"],
    isIsland: false,
    describe: function describe() {
        console.log("in describe method -- ".concat(this.country, " has ").concat(this.population, " million ").concat(this.language, "-speaking people,").concat(this.neighbours.length, " neighbouring countries and a capital called ").concat(this.capital));
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        (this.isIsland) ? console.log("".concat(this.country, " is an island")) : console.log("".concat(this.country, " is not an island"));
    }
};
// Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.
// Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.
console.log("".concat(myCountry.country, " has ").concat(myCountry.population, " million ").concat(myCountry.language, "-speaking people,").concat(myCountry.neighbours.length, " neighbouring countries and a capital called ").concat(myCountry.capital));
myCountry.population = myCountry.population + 2;
console.log("increased the population by 2M ".concat(myCountry.population));
myCountry.population = myCountry.population - 3;
console.log("decreased the population by 3M ".concat(myCountry.population));
//Add a method called describe to the myCountry object. 
// This method will log a string to the console, 
// similar to the string logged in the previous assignment, but this time using the 'this' keyword.
myCountry.describe();
//Add a method called checkIsland to the myCountry object.
// his method will set a new property on the object, called isIsland.
// isIsland will be true if there are no neighbouring countries,
// and false if there are. Use the ternary operator to set the property.
myCountry.checkIsland();
//Loop over objects values
for (var _i = 0, _a = Object.values(myCountry.neighbours); _i < _a.length; _i++) {
    var country = _a[_i];
    var indexCountry = myCountry.neighbours.indexOf(country);
    console.log(" The ".concat(indexCountry, " neighbouring country is  ").concat(country));
}
//loop over object keys
for (var _b = 0, _c = Object.keys(myCountry); _b < _c.length; _b++) {
    var key = _c[_b];
    console.log("the properities of the object is ".concat(key));
}
