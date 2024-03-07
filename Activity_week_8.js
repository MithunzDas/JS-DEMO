let numbers = [];

while (true) {
    let choice = prompt(`Menu:
    1. Add a number to the array
    2. Remove a number from the array
    3. Print the array
    4. Exit the program
    Enter your choice:`);

    switch (choice) {
        case '1':
            let numToAdd = parseInt(prompt("Enter the number to add:"));
            numbers.push(numToAdd);
            break;
        case '2':
            let numToRemove = parseInt(prompt("Enter the number to remove:"));
            let indexToRemove = numbers.indexOf(numToRemove);
            if (indexToRemove !== -1) {
                numbers.splice(indexToRemove, 1);
                console.log(`Number ${numToRemove} removed from the array.`);
            } else {
                console.log(`Number ${numToRemove} not found in the array.`);
            }
            break;
        case '3':
            console.log("Array:", numbers);
            break;
        case '4':
            console.log("Exiting program.");
            process.exit(0);
        default:
            console.log("Invalid choice. Please enter a valid option.");
    }
}
