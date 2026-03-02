//* Logical AND (&&) Operator

// The logical AND operator returns true only when both conditions are true.
// If the first condition is false, JavaScript does not evaluate the second condition.
// This behavior is called short-circuit evaluation.

// Example 1: Basic boolean conditions
let isUserLoggedIn = true;
let hasDashboardAccess = true;

console.log(isUserLoggedIn && hasDashboardAccess);
// Output: true (both conditions are true)

// Example 2: Demonstrating short-circuit evaluation

// Function that returns the user's full name
function getUserFullName(fullName) {
  return fullName;
}

const isRahulLoggedIn = true;
const isPriyaLoggedIn = false;

// Since the first condition is true, the second expression will be evaluated
console.log(isRahulLoggedIn && getUserFullName('Rahul Sharma'));
// Output: Rahul Sharma

// Since the first condition is false, the second expression will NOT be evaluated
console.log(isPriyaLoggedIn && getUserFullName('Priya Sen'));
// Output: false

//* Logical OR (||) Operator

// The logical OR operator returns true if at least one condition is true.
// If the first condition is true, JavaScript does not evaluate the second condition.

let isPrimaryServerRunning = true;
let isBackupServerRunning = false;
let isMaintenanceModeEnabled = false;

console.log(isPrimaryServerRunning || isBackupServerRunning);
// Output: true (because the primary server is running)

console.log(isBackupServerRunning || isMaintenanceModeEnabled);
// Output: false (both conditions are false)

//* Template Literals in JavaScript

// Template literals allow variables to be embedded inside a string using backticks (`)

let firstName = 'Mohan';
let lastName = 'Pandit';

// Traditional string concatenation
console.log(firstName + ' ' + lastName);

// Using template literals (recommended for better readability)
console.log(`${firstName} ${lastName}`);

//* Ternary Operator

// The ternary operator is a shorter way to write a simple if-else condition.

let isUserSubscribed = false;

let subscriptionMessage = isUserSubscribed
  ? 'Access granted to premium content'
  : 'Please subscribe to access premium content';

console.log(subscriptionMessage);

//* Object Property Shorthand and Destructuring

const productId = 1;
const productName = 'Apple Watch';
const productRating = 5;

// Creating an object using shorthand property names
const product = {
  productId,
  productName,
  productRating,
};

console.log(product);

// Another product object with additional details
const productDetails = {
  description: 'Smartwatch with health tracking features',
  productId,
  productName,
  productRating,
};

// Object destructuring to extract the description property
const { description } = productDetails;

console.log(description);

//* Array Destructuring

// Array destructuring allows values to be extracted from an array into variables.

const numbers = [1, 2, 3];

const [firstNumber, secondNumber, thirdNumber] = numbers;

console.log(firstNumber);

//* Default Parameter, Spread, and Rest Operator

// Default parameters allow functions to use predefined values
// when arguments are not provided.

function multiplyNumbers(numberOne = 1, numberTwo = 2) {
  console.log(numberOne * numberTwo);
}

multiplyNumbers(); // Uses default values (1 * 2)
multiplyNumbers(4, 5); // Uses provided values (4 * 5)

// Spread operator example
// The spread operator expands array elements.

const firstArray = [2, 3, 4];
console.log(...firstArray);

const secondArray = [4, 5, 6];
console.log([...firstArray, ...secondArray]);

// Rest operator example
// The rest operator collects remaining arguments into an array.

function getUserInformation(firstValue, secondValue, thirdValue, ...remainingValues) {
  console.log(firstValue, secondValue, thirdValue);
  console.log(remainingValues);

  return 'User information processed successfully';
}

getUserInformation(1, 2, 3, 4, 5, 6, 7, 8, 9);

//* map, filter, find, some, every, includes, indexOf, findIndex

const people = [
  { name: 'Tshering Dorji', age: 30, country: 'Bhutan' },
  { name: 'Seewoosagur Ramgoolam', age: 40, country: 'Mauritius' },
  { name: 'Gautami Bissessur', age: 43, country: 'Mauritius' },
  { name: 'Ramesh Kumar', age: 10, country: 'India' },
  { name: 'Ram Bahadur Thapa', age: 10, country: 'Nepal' },
];

// map: used to transform each element and return a new array

const personNames = people.map(function (person) {
  return person.name;
});

console.log(personNames);

// find: returns the first element that satisfies the condition

const firstPersonFromMauritius = people.find(function (person) {
  return person.country === 'Mauritius';
});

console.log(firstPersonFromMauritius);

// filter: returns all elements that satisfy the condition

const allPersonsFromMauritius = people.filter(function (person) {
  return person.country === 'Mauritius';
});

console.log(allPersonsFromMauritius);

// some: checks if at least one element satisfies the condition

let isAnyPersonOlderThanForty = people.some(function (person) {
  return person.age > 40;
});

console.log(isAnyPersonOlderThanForty);

// every: checks if all elements satisfy the condition

let areAllPersonsAdults = people.every(function (person) {
  return person.age >= 18;
});

console.log(areAllPersonsAdults);

// findIndex: returns the index of the first matching element

const indexOfPersonFromIndia = people.findIndex(function (person) {
  return person.country === 'India';
});

console.log(indexOfPersonFromIndia);

// includes: checks whether a value exists in the array

const fruitArray = ['apple', 'banana', 'mango', 'orange'];

console.log(fruitArray.includes('banana'));

// indexOf: returns the index of a specific value

console.log(fruitArray.indexOf('banana'));
