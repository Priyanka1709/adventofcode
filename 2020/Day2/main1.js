function validPasswords(input) {
    const inputArr = input.split('\n');

    let valid = 0;
    for (var i = 0; i < inputArr.length; i++) {
        var row = inputArr[i].split(':');
        var policy = row[0].split('-');
        var min = policy[0];
        var max = policy[1].split(' ')[0];
        var char = policy[1].split(' ')[1];
        var pwd = row[1];

        var regEx = new RegExp(char, 'gi');
        var match = pwd.match(regEx);
        var noOfOcc = match && match.length;
        if (noOfOcc >= min && noOfOcc <= max) {
            valid++;
        }
    }
    console.log(`Valid Passwords: ${valid}`);
}

var sampleInput = require('./input');

validPasswords(sampleInput);
