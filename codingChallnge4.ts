type Dog = {
  weight: number;
  curFood: number;
  owners: string[];
  recommendedFood?: number;
};

const dogs: Dog[] = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
//    the recommended food portion and add it to the object as a new property. Do
//    not create a new array, simply loop over the array. Forumla:
//    recommendedFood = weight * 0.75. (The result is in grams of
//    food, and the weight needs to be in kg)

dogs.forEach((value, index) => {
  const recFood = value.weight * 0.75 * 28;
  value.recommendedFood = recFood;
});

dogs.forEach((value) => {
  console.log(value);
});

//2. Find Sarah's dog and log to the console whether it's eating too much or too
//    little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
//    the owners array, and so this one is a bit tricky (on purpose) 🤓
let foodcheck;

dogs.forEach((value) => {
  if (value.owners.includes("Sarah")) {
    value.curFood > (value.recommendedFood || 0)
      ? (foodcheck = "eating good")
      : (foodcheck = "not eating good");
  }
});

console.log(foodcheck);

// 3. Create an array containing all owners of dogs who eat too much
//    ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
//    ('ownersEatTooLittle').

let ownersEatTooMuch: string[] = [];
let ownersEatTooLittle: string[] = [];

dogs.forEach((value) => {
  value.curFood < (value.recommendedFood || 0)
    ? ownersEatTooLittle.push(...value.owners)
    : ownersEatTooMuch.push(...value.owners);
});
console.log(`ownersEatTooLittle ${ownersEatTooLittle}`);
console.log(`ownersEatTooMuch ${ownersEatTooMuch}`);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and
//    Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
//    too little!"

console.log(` ${ownersEatTooLittle}'s dogs eat too much!`);
console.log(` ${ownersEatTooMuch}'s dogs eat too little!`);

// 5. Log to the console whether there is any dog eating exactly the amount of food
//    that is recommended (just true or false)

dogs.forEach((value) => {
  value.curFood === value.recommendedFood
    ? console.log("true")
    : console.log("false");
});

// 6. Log to the console whether there is any dog eating an okay amount of food
//    (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try
//    to reuse the condition used in 6.)
//current > (recommended _ 0.90) && current < (recommended _
//  1.10)
const dogEatOk: string[] = [];
dogs.forEach((value) => {
  const recFood = value.recommendedFood || 0;
  recFood * 0.9 < value.curFood && value.curFood < recFood * 1.1
    ? console.log(`${value.owners}'s dog is eating OK amount of food`)
    : console.log(`${value.owners}'s dog is not eating OK amount of food`);
});

dogs.forEach((value) => {
  const recFood = value.recommendedFood || 0;
  recFood * 0.9 < value.curFood && value.curFood < recFood * 1.1
    ? dogEatOk.push(...value.owners)
    : {};
});

console.log(...dogEatOk);

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
//    portion in an ascending order (keep in mind that the portions are inside the
//    array's objects 😉)
