var country = prompt("Enter your country name:");
var continent;
var language = "Odiya";
var avgPopulation = 33000000;
// const language = "English";
if (country !== null && country === "INDIA") {
    continent = "Asia";
    language = "Hindi";
}
else {
    continent = "Some continent";
    language = "Other language";
}
var popultaion = prompt("Enter your population:");
var isIsland = prompt("Is it an island? (yes/no)") === "yes" ? "is an island" : "is not an island";
console.log("you belong to ".concat(country, " which is in ").concat(continent, " and has a population of ").concat(popultaion, " and  ").concat(isIsland, " and speaks ").concat(language, "."));
console.log(" if the country is divided in half, the population will be ".concat(Number(popultaion) / 2, "."));
console.log(Number(popultaion) > avgPopulation ? "My country has more population then the average count" : "My country does not have more population then the average count");
