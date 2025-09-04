// Each book object has the author property, which stores an array of strings (author names) 
// if there are multiple authors, or a single string (author name) if there is just one author.

// Declare an array called bookAuthors, 
// and fill it with authors of the first two books from the books array. 
// The bookAuthors array should have just one level (no nested arrays).

// let bookAuthors:string []= [];

// bookAuthors = [...books[0].author];

// Write a function called spellWord that accepts a single string as an argument. 
// This function should log to the console each letter of the argument separated by a space.
function spellWord (S:string)
{
console.log(...S.split(""));
}
spellWord('JavaScript');