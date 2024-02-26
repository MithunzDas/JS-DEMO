// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Define a callback function
function logArrayElements(element, index, array) {
    console.log(`Element at index ${index}: ${element}`);
}

// Use forEach to log each element of the array
numbers.forEach(logArrayElements);
