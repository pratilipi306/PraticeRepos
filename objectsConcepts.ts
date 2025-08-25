// Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).

const myCountry =
{
    country: "India",
    capital: "Delhi",
    language: "Hindi",
    population: 6,
    neighbours: ["pakistan", "china", "Srilanka"],
    isIsland: false,
    describe: function describe() {

        console.log(`in describe method -- ${this.country} has ${this.population} million ${this.language}-speaking people,${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)

    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        (this.isIsland) ? console.log(`${this.country} is an island`) : console.log(`${this.country} is not an island`)
    }
}

// Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

// Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)

myCountry.population = myCountry.population + 2;

console.log(`increased the population by 2M ${myCountry.population}`);
myCountry.population = myCountry.population - 3;
console.log(`decreased the population by 3M ${myCountry.population}`);


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
for (let country of Object.values(myCountry.neighbours)) {
    const indexCountry = myCountry.neighbours.indexOf(country);
    console.log(` The ${indexCountry} neighbouring country is  ${country}`);
}

//loop over object keys
for (const key of Object.keys(myCountry))
{

console.log (`the properities of the object is ${key}`);
}