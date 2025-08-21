const country: string | null = prompt("Enter your country name:");
let continent: string;
let language= "Odiya"
const avgPopulation = 33000000;
// const language = "English";
if (country !== null && country === "INDIA") {
    continent = "Asia";
     language = "Hindi";
} else {
    continent = "Some continent";
     language = "Other language";
}

const popultaion = prompt("Enter your population:");
const isIsland = prompt("Is it an island? (yes/no)") === "yes" ? "is an island" : "is not an island";

console.log(`you belong to ${country} which is in ${continent} and has a population of ${popultaion} and  ${isIsland} and speaks ${language}.`);

console.log(` if the country is divided in half, the population will be ${Number(popultaion) / 2}.`);

console.log(Number(popultaion)>avgPopulation? "My country has more population then the average count": "My country does not have more population then the average count")