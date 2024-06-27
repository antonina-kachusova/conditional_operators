// If-Else statement
// Write a script that checks whether the number written in the initial variable is even. 
// The program should output "Even number" or "Odd number" to the console, depending on the number 
// which is assigned to the initial variable.

let value = 7;

if (value % 2 === 0) {
    console.log('The number is even ' + value);
}
else {
    console.log('The number is odd ' + value);
}

// Switch operator
// Create a program that, for the numbers 0 to 6, outputs the name of the day of the week, 
// corresponding to this number (0 - Monday, 1 - Tuesday, etc.). 
// If the number is not in this range, the program should output "Invalid number".

let week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  
  let dayNumber = 7;
  
  if (
      !Number.isInteger(dayNumber) 
      || dayNumber < 0 
      || dayNumber > 6
  ) {
    console.log("Very Wrong number or Out of range");
  } else {
    switch (dayNumber) {
      case 0:
        console.log(`${dayNumber} - ${week[dayNumber]}`);
        break;
      case 1:
        console.log(`${dayNumber} - ${week[dayNumber]}`);
        break;
      case 2:
        console.log(`${dayNumber} - ${week[dayNumber]}`);
        break;
      case 3:
        console.log(`${dayNumber} - ${week[dayNumber]}`);
        break;
      case 4:
        console.log(`${dayNumber} - ${week[dayNumber]}`);
        break;
      case 5:
        console.log(`${dayNumber} - ${week[dayNumber]}`);
        break;
      case 6:
        console.log(`${dayNumber} - ${week[dayNumber]}`);
        break;
      default:
        console.log("Wrong number");
        break;
    }
  }

// Ternary operator
// Write code that uses the ternary operator to determine the larger of two numbers 
// (create two initial variables). 
// The program should output "The first number is larger", "The first number is larger" or "The numbers are equal", 
// depending on the numbers assigned to the initial variables. 
// a ternary operator can be added as one of the values ​​of another ternary operator

let smallNum = 8;
let bigNum = 8;

let message1 = 'The first number is larger';
let message2 = 'The second number is larger';
let message3 = 'The numbers are equal';

bigNum > smallNum ? console.log(message1) : (bigNum < smallNum? console.log(message2) : console.log(message3));











