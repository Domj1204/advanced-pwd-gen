// Assignment code here
var characterLength = 8 < 128;
var choiceArr = [];

var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '[', ']', '{', '}', '/', '?', '|'];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

    var password = "";
    for(var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length)
      password += choiceArr[randomIndex];
    // - password length 8 < 128
    // - lowercase, uppercase, numbers, special characters
  }
    // Validate the input
    // Generate password based on criteria
    // Display password on the page
    return password;
}
    // Prompt the user for the password criteria
function getPrompts() {
  console.log("Let the password creation begin!");
  
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters)"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert("Character length has to be in integer form and between the numbers of 8 - 128. Please try again.");
      return false;
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr); 
  }
  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("Would you like to use numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;      
}

// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();  //returns true or false
    var passwordText = document.querySelector("#password");
    if (correctPrompts) {
        var newPassword = generatePassword();
        passwordText.value = newPassword;
      console.log("Password has been created!")
    } else {
      passwordText.value = "";

    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

document.getElementById("generate").addEventListener("click", generatePassword);
