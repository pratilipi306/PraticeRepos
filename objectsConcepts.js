// Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).
var myCountry = {
    country: "India",
    capital: "Delhi",
    language: "Hindi",
    population: 6,
    neighbours: ["pakistan", "china", "Srilanka"]
};
// Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.
// Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.
console.log("".concat(myCountry.country, " has ").concat(myCountry.population, " million ").concat(myCountry.language, "-speaking people,").concat(myCountry.neighbours.length, " neighbouring countries and a capital called ").concat(myCountry.capital));
myCountry.population = myCountry.population + 2;
console.log("increased the population by 2M ".concat(myCountry.population));
myCountry.population = myCountry.population - 3;
console.log("decreased the population by 3M ".concat(myCountry.population));
