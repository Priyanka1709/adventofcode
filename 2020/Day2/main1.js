function validPasswords(input) {
    const inputArr = input.split('\n');

    let validPwds = 0;
    for (let i = 0; i < inputArr.length; i++) {
        const [range, charToMatch, pwd] = inputArr[i].split(' ');
        const [minPolicy, maxPolicy] = range.split('-');

        const regEx = new RegExp(charToMatch[0], 'gi');
        const match = pwd.match(regEx);
        const noOfOcc = match && match.length;
        if (noOfOcc >= minPolicy && noOfOcc <= maxPolicy) {
            validPwds++;
        }
    }
    console.log(`Valid Passwords: ${validPwds}`);
}

var sampleInput = require('./input');
validPasswords(sampleInput);
