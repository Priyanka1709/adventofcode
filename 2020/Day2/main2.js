function validPasswords(input) {
    const inputArr = input.split('\n');

    let validPwds = 0;
    for (let i = 0; i < inputArr.length; i++) {
        const [range, charToMatch, pwd] = inputArr[i].split(' ');
        const [minPolicy, maxPolicy] = range.split('-').map((n) => +n - 1);

        if (
            (pwd[minPolicy] !== charToMatch[0] && pwd[maxPolicy] === charToMatch[0]) ||
            (pwd[minPolicy] === charToMatch[0] && pwd[maxPolicy] !== charToMatch[0])
        ) {
            validPwds++;
        }
    }
    console.log(`Valid Passwords: ${validPwds}`);
}

var sampleInput = require('./input');
validPasswords(sampleInput);
