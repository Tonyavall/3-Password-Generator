// Assignment Code
var generateBtn = document.querySelector("#generate");


let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let special_characters = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":","\"","\\"];

// Capitalizing every string in letters variable using map() method
let lettersCaps = letters.map(function(x) {
  return x.toUpperCase();
})

// Check to see if lettersCaps is all uppercase
// console.log(lettersCaps)

function userInput() {
  /* 1. Prompt will return user input as a string value.
  2. parseFloat will take that returned string value and convert it to a number
  3. Number is then assigned to userInput variable*/
  let userInput = parseFloat(prompt("Character number between 8-128"));

  // 8-128 Character Input Validation
  if (userInput >= 8 && userInput <= 128) {
    return userInput;
  } else {
    alert("You have to pick a number in between 8 and 128! (Inclusive)");
    return console.log("userInput was not a number between 8-128. Undefined is returned.")
  }
};

// check to see if userInput function returns expected value type
// console.log(userInput());

function generatePassword() {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

