
// Remove Duplicates
function duplicateRemove(){
const arr12347 = [1,2,2,3,4,4,4,7,7];
const newSet = new Set(arr12347);
const newarr = Array.from(newSet);
console.log(`arr12347 -  ${newarr}`);
}

// 2. Second largest element
function secondLarge()
{
    const arr12347 = [1,2,2,3,4,4,4,7,7];
    const newSet = new Set (arr12347); // Removes Duplicates and returns a set
    const newArr = Array.from(newSet);  // assigns back to an array
    const sorted= newArr.sort((a,b)=>b-a); // Sorts the new array, if b is greater than put b before a
    const secLarge = (sorted.length)>2?sorted[1]: null;// checks if the array is having at least two elements then returns the 2nd or retrusn null.
    console.log(`second large number is  ${secLarge}`);

}


//duplicateRemove();
secondLarge()