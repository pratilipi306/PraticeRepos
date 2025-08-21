"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalCity = exports.popultaion = exports.country = void 0;
var country = prompt("Enter your country name:");
exports.country = country;
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
exports.popultaion = popultaion;
var isIsland = prompt("Is it an island? (yes/no)") === "yes" ? "is an island" : "is not an island";
var capitalCity = prompt("enter the capital of your contry");
exports.capitalCity = capitalCity;
console.log("you belong to ".concat(country, " which is in ").concat(continent, " and has a population of ").concat(popultaion, " and  ").concat(isIsland, " and speaks ").concat(language, "."));
console.log(" if the country is divided in half, the population will be ".concat(Number(popultaion) / 2, "."));
console.log(Number(popultaion) > avgPopulation ? "My country has more population then the average count" : "My country does not have more population then the average count");
