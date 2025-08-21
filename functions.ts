import {country, popultaion, capitalCity} from "./coding1";

const popultaion1 = Number(popultaion);
function describeCountry (country:string|null, population:number, capitalCity:string|null)
{
console.log(`${country} has ${population} people and  its capital city is ${capitalCity}`);
}

describeCountry(country, popultaion1, capitalCity)