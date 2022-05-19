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

  let chosenCharacterArray = [];
  if (containsLowercase){
    chosenCharacterArray.push("Lowercase");
  }
  if (containsUppercase){
    chosenCharacterArray.push("Uppercase");
  }
  if (containsNumbers){
    chosenCharacterArray.push("Numbers");
  }
  if (containsSpecialCharacters){
    chosenCharacterArray.push("Special Characters");
  }

  let characterSelector = 0

  let pwContainsLowercase = false;
  let pwContainsUppercase = false;
  let pwContainsNumber = false;
  let pwContainsSpecialCharacter = false;
  let retry = true;

  
  while(retry){
    randomPassword = ""
    for(let i = 0; i < passwordLength; i++){
    
      characterSelector = chosenCharacterArray[Math.floor(Math.random()*chosenCharacterArray.length)];

      if(characterSelector === "Lowercase"){
        randomPassword = randomPassword + lowerCase[Math.floor(Math.random()*lowerCase.length)];
        pwContainsLowercase = true;
      }else if(characterSelector === "Uppercase"){
        randomPassword = randomPassword + upperCase[Math.floor(Math.random()*upperCase.length)];
        pwContainsUppercase = true;
      }else if(characterSelector === "Numbers"){
        randomPassword = randomPassword + numbers[Math.floor(Math.random()*numbers.length)];
        pwContainsNumber = true;
      }else if (characterSelector === "Special Characters"){
        randomPassword = randomPassword + specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
        pwContainsSpecialCharacter = true;
      }
    }

    retry = (!((containsLowercase === pwContainsLowercase)&&(containsUppercase===pwContainsUppercase)&&(containsNumbers===pwContainsNumber)&&(containsSpecialCharacters===pwContainsSpecialCharacter)));
    
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
