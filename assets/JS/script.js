// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCase = ['A','B','C','D','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let numbers = ['0','1','2','3','4','5','6','7','8','9'];
let specialCharacters = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','}','|','~'];

function generatePassword(){
  let randomPassword = "";
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

  let totalCharacterTypes = 0;
  if (containsLowercase){
    totalCharacterTypes++;
  }
  if (containsUppercase){
    totalCharacterTypes++;
  }
  if (containsNumbers){
    totalCharacterTypes++
  }
  if (containsSpecialCharacters){
    totalCharacterTypes++
  }

  let count = 0;
  let characterSelector = 0

  

  for(let i = 0; i < passwordLength; i++ ){
    
    characterSelector = Math.floor(Math.random()*totalCharacterTypes);
    count = 0

    if(containsLowercase && count === characterSelector){
      randomPassword = randomPassword + lowerCase[Math.floor(Math.random()*lowerCase.length)];
      count++;
    }else if(containsLowercase){
      count++
    }

    if(containsUppercase && count === characterSelector){
      randomPassword = randomPassword + upperCase[Math.floor(Math.random()*upperCase.length)];
      count++
    }else if(containsUppercase){
      count++
    }

    if(containsNumbers && count === characterSelector){
      randomPassword = randomPassword + numbers[Math.floor(Math.random()*numbers.length)];
      count++
    }else if (containsNumbers){
      count++
    }
    if(containsSpecialCharacters && count === characterSelector){
      randomPassword = randomPassword + specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
    }
  }

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
