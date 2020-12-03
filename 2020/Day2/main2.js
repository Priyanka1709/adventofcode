function validPasswords(input) {
    const inputArr = input.split('\n');
    let valid = 0;
    for (var i = 0; i < inputArr.length; i++) {
        var row = inputArr[i].split(':');
        var policy = row[0].split('-');
        var loc1 = Number(policy[0]);
        var loc2 = Number(policy[1].split(' ')[0]);
        var char = policy[1].split(' ')[1];
        var pwd = row[1];

        var pos = pwd
            .split('')
            .map((e, i) => (e === char ? i : ''))
            .filter(String);
        if (
            (pos.indexOf(loc1) !== -1 && pos.indexOf(loc2) === -1) ||
            (pos.indexOf(loc1) === -1 && pos.indexOf(loc2) !== -1)
        ) {
            valid++;
        }
    }
    console.log(`Valid Passwords: ${valid}`);
}

var sampleInput = require('./input');

validPasswords(sampleInput);
