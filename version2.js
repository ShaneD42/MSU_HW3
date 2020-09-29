// Set Variables and Constants 

let passwordTextArea = document.querySelector("#password");
let generateButton = document.querySelector("#generate");


const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
const numericalCharacters = "0123456789";
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]";

// add event listeners. this is what helps our button be interactive. when the button is pushed, the event will triggeer the function and generate the password 
generateButton.addEventListener("click", generatePassword);

// function to generate password 
function generatePassword() {
    
    let newpassword = "";
    let passwordCharset = "";

    let passwordLengthInput =  prompt('How many characters would you like your password to be?');

    if (Number(passwordLengthInput < 8) | Number(passwordLengthInput > 128) | isNaN(passwordLengthInput)) {
        alert("Please enter a number between 8 and 128");
        return;

    } 

    let lowerCaseCharactersInput = confirm('Would you like to use lower case letter in your password? Press "OK" for YES and "Cancel" for NO');
        if(lowerCaseCharactersInput) { // is true 
            passwordCharset += lowerCaseCharacters // concatenate the lower case letters to our character set 
        }

    let upperCaseCharactersInput = confirm('Would you like to use upper case letters in your password? Press "OK" for YES and "Cancel" for NO');
        if(upperCaseCharactersInput) {
          passwordCharset += upperCaseCharacters // concatenates the upper case letter to our character set 
         }

    let numericalCharactersInput= confirm('Would you like to use numbers in your password? Press "OK" for YES and "Cancel" for NO');
         if(numericalCharactersInput) {
             passwordCharset += numericalCharacters
         }

    let specialCharactersInput = confirm('Would you like to use special characters in your password?! Press "OK" for YES and "Cancel" for NO');
         if(specialCharactersInput) {
             passwordCharset += specialCharacters
         }

    if (passwordCharset === "") {
        alert("Please select at least one character input type");
    }

    if (Number(passwordLengthInput >= 8) && Number(passwordLengthInput <= 128)) {
        for (var i = 0; i < passwordLengthInput; i++) {
            newpassword += passwordCharset.charAt(Math.floor(Math.random() * passwordCharset.length)); 
        }
     }
    localStorage.setItem("password", newpassword);
    let newPasswordGenerated = localStorage.getItem("password");
    passwordTextArea.textContent = newPasswordGenerated;


    }


