//Exercise #1: Favorite Number Guessing Game
let favNumber = 21;
let userInput = prompt("Enter your favorite number:");

if (userInput !== null) {
  // Convert the string input into a real number
  let userAnswer = parseInt(userInput);

  // Check if the conversion resulted in a valid number (not NaN)
  if (isNaN(userAnswer)) {
    console.log("That's not a valid number!");
  } else if (userAnswer < favNumber) {
    console.log("Too low");
  } else if (userAnswer > favNumber) {
    console.log("Too high");
  } else {
    console.log("Congratulations! You guessed it right.");
  }
}

// Excercise #2: Birth Season Finder
// 1. Declare the variable and get input from the user
let birthMonth = prompt("What is your birth month?");

// Standardize the input to lowercase to handle different capitalizations
let month = birthMonth ? birthMonth.toLowerCase().trim() : "";

// 2. Create a switch-case statement
switch (month) {
  // Winter
  case "december":
  case "january":
  case "february":
    console.log("You were born in Winter!");
    break;

  // Spring
  case "march":
  case "april":
  case "may":
    console.log("You were born in Spring!");
    break;

  // Summer
  case "june":
  case "july":
  case "august":
    console.log("You were born in Summer!");
    break;

  // Autumn / Fall
  case "september":
  case "october":
  case "november":
    console.log("You were born in Autumn!");
    break;

  // 3. Default case for invalid input
  default:
    console.log("Not a valide month. Please try again!");
}

// Exercise #3: Refactoring business logic

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

// Refactoring Type Selection
switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

// Refactoring Color Selection
switch (colorId) {
  case "BK": // Assuming BK for Black
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

// Refactoring Size Selection
switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);