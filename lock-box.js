const prompt = require('prompt-sync')();
const passCode = prompt('Enter the 4 digit pinCode ');
// const passCode = Number(passCode);

if (passCode == 1234) {
    console.log("Success!")
} 

else {
    console.log("Failure")
}

if (passCode.length > 4) {
    console.log("Passcode cannot exceed 4 digits")
}

if (isNaN(passCode)) {
    console.log("Passcode must be a 4 digit number")
}