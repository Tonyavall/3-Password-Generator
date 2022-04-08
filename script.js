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
  let ifLetters = window.confirm("Would you like lowercase letters?");
    let validationLetters = window.confirm("Are you sure?");
      if (validationLetters = false) {
        return;
      }
  let ifLettersCaps = window.confirm("Would you like uppercase letters?")
    let validationLettersCaps = window.confirm("Are you sure?");
      if (validationLettersCaps = false) {
        return;
      }
  let ifNumbers = window.confirm("Would you like numbers?");
    let validationNumbers = window.confirm("Are you sure?");
      if (validationNumbers = false) {
        return;
      }
  let ifSpecial = window.confirm("Would you like special characters?");
    let validationSpecial = window.confirm("Are you sure?");
      if (validationSpecial = false) {
        return;
      }

// Contains user chosen criteria for the obj's prop values to be manipulated later
  let criteriaContainer = {

  };

// Multiple independent if statements checking user choices
  if (ifLetters) {
    // if character type is chosen, it will be put into the criteria container object
    criteriaContainer.letters = letters;
  };

  if (ifLettersCaps) {
    criteriaContainer.lettersCaps = lettersCaps;
  };
  
  if (ifNumbers) {
    criteriaContainer.numbers = numbers;
  }

  if (ifSpecial) {
    criteriaContainer.special_characters = special_characters;
  }

// Grabbing all criteriaContainer's values and assigning it a variable
  let criteriaContainerValues = Object.values(criteriaContainer);
// Merging an array of arrays. https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays
  let chosenCriteria = [].concat.apply([], criteriaContainerValues);
// Check to see if arrays are merged
  // console.log(chosenCriteria);

  // User's input is returned as a number and assigned to userNumber
  let userNumber = userInput();
  let randomPassArray = [];

  // For loop that keeps pushing random array values to randomPass and stops at user's character limit input
  for (let i = 0; i < userNumber; i++)
   // Math method randomizes index number for chosenCriteria. Essentially is chosenCriteria[Random Number]
   // Whatever random chosenCriteria[Random Number] string value is returned is pushed into randomPass variable
    randomPassArray.push(chosenCriteria[Math.floor((Math.random() * chosenCriteria.length) + 0)]);
  
  // check to see if randomPass works
  // console.log(randomPass)

  // Now we join randomPassArray together into 1 string
  let finalPassword = randomPassArray.join('');

  // check to see if final password is generated
  // console.log(finalPassword)
  return finalPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

