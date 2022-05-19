// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  let passwordLength = 0;
  
  while (passwordLength <= 7 || passwordLength >= 129){
    passwordLength = prompt("How many characters would you like the password to be?\n(PLease input a number between 8 - 128 characters. Decimals will be rounded down.)");
    if ((passwordLength === null) || (passwordLength === "")){
      return "";
    }

    passwordLength = Math.floor(passwordLength);
    
    if (isNaN(passwordLength)) {
      passwordLength = 0;
    }
  }

  let containsLowercase = confirm("Click 'OK' if you would like your password to contain lowercase letters?");
  let containsUppercase = confirm("Click 'OK' if you would like your password to contain uppercase letters?");
  let containsNumbers = confirm("Click 'OK' if you would like your password to contain numbers?");
  let containsSpecialCharacters = confirm("Click 'OK' if you would like your passoword to contain special characters?");

  let continueProgram = true;

  while (!(containsLowercase) && !(containsUppercase) && !(containsNumbers) && !(containsSpecialCharacters)){
    continueProgram = confirm("Your password must contain at least one of the following catagories: lowercase letters, uppercase letters, numbers or special characters.\nClick 'OK' to continue trying to generate a password or cancel to stop.")
    if(continueProgram){
      containsLowercase = confirm("Click 'OK' if you would like your password to contain lowercase letters?");
      containsUppercase = confirm("Click 'OK' if you would like your password to contain uppercase letters?");
      containsNumbers = confirm("Click 'OK' if you would like your password to contain numbers?");
      containsSpecialCharacters = confirm("Click 'OK' if you would like your passoword to contain special characters?");
    }else{
      return "";
    }
  }

  

  let randomPassword = passwordLength;
  return randomPassword
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
