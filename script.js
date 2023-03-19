// Assignment code here
// Get references to the #generate element
//help setup user for the password criteria
    //password length
    //lowercase, uppercase, and include special characters
//approve input (make sure password length is between 8-128 characters
//generate the password
//present password on page (strong password and provides greater security)
var generateBtn = document.querySelector("#generate");

function generatePassword(){
const characters =
"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()_+?<>:{}[]"

var passwordLength = 16;
var password = '';

for (var i = 0; i <passwordLength; i++) {
var randomNumber = Math.floor(Math.random ()
* characters.length);  

password += characters.substring(randomNumber, randomNumber + 1);
console.log(password);

}
document.getElementById("password").value = password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
