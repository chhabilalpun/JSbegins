// Use 'const' for arrays that won't be reassigned
const cars = ["bmw", "mercedes", "volvo"];

// Use 'textContent' for safety and Use '.join(", ")' to add spaces after the commas
//  document.querySelector("#array-demo").textContent = cars.join(", ");

// alternative way i.e. without spaces
document.querySelector("#array-demo").textContent = cars;

// Access an array item
document.querySelector("#array-demo").textContent = cars[2];

// Array length property
document.querySelector("#array-demo").textContent = cars.length;

// Access last array item
document.querySelector("#array-demo").textContent = cars[cars.length - 1];

// Loop over an array item
cars.forEach((item, index, array) => {
  console.log(item, index);
});

// To convert an array into string
document.querySelector("#array-demo").textContent = cars.toString();

// To remove the last element from an array
document.querySelector("#array-demo").textContent = cars.pop();

// Add the new element to the end of an array
cars.push("Audi");
document.querySelector("#array-demo").textContent = cars;

// Removes the first elements from an array
cars.shift();
document.querySelector("#array-demo").textContent = cars;

// Adds an element at the beginning of an array
cars.unshift("Hyundai");
document.querySelector("#array-demo").textContent = cars;

// Create a new array by merging existing arrays
const bikes = ["hero", "honda", "yamaha"];
const vehicles = cars.concat(bikes);
document.querySelector("#array-demo").textContent = vehicles;

// Sort an array in ascending order
vehicles.sort();
document.querySelector("#array-demo").textContent = vehicles;

// Reverse the elements of an array
vehicles.reverse();
document.querySelector("#array-demo").textContent = vehicles;

// Can add, remove, replace elements anywhere in the array
cars.splice(1, 1); // Removing Elements
document.querySelector("#array-demo").textContent = cars;

bikes.splice(1, 0, "bajaj"); //Adding Elements (Without Deleting)
document.querySelector("#array-demo").textContent = bikes;

const scooters = ["tata", "pulsar", "dio"];
scooters.splice(1, 1, "breeza"); // Replacing Elements
document.querySelector("#array-demo").textContent = scooters;

// Array.map() method
const num1 = [2, 3, 4, 5, 6, 7, 8];
const num2 = num1.map(multiply);
function multiply(value) {
  return value * 2;
}
document.querySelector("#array-demo").textContent = num2;

// Array.filter()
const num3 = num1.filter(comp);
function comp(value) {
  return value > 4;
}
document.querySelector("#array-demo").textContent = num3;

// Array.reduce()
const num4 = num1.reduce(sum);
function sum(total, value) {
  return total + value;
}
document.querySelector("#array-demo").textContent = num4;
