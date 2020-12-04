const sanitizedPassports = require('./utils');

function validPassports(input) {
    const passportArr = sanitizedPassports(input);

    let validPassports = 0;
    const standardPassportFields = {
        byr: new RegExp(/^(19[2-8][0-9]|199[0-9]|200[0-2])$/),
        iyr: new RegExp(/^(201[0-9]|2020)$/),
        eyr: new RegExp(/^(202[0-9]|2030)$/),
        hgt: new RegExp(/^(1[5-8][0-9]|19[0-3])cm|(59|6[0-9]|7[0-6])in$/),
        hcl: new RegExp(/^#[0-9 | a-f]{6}$/),
        ecl: new RegExp(/^(amb|blu|brn|gry|grn|hzl|oth)$/),
        pid: new RegExp(/^[0*\d]{9}$/),
    };
    const optionalPassportFields = ['cid'];

    for (let i = 0; i < passportArr.length; i++) {
        const passport = passportArr[i];
        let validKeys = [];

        for (var field in passport) {
            if (
                passport[field].match(standardPassportFields[field]) &&
                optionalPassportFields.indexOf(field) === -1
            ) {
                validKeys.push(field);
            }
        }
        if (validKeys.length === Object.keys(standardPassportFields).length) {
            validPassports++;
        }
    }
    return validPassports;
}

var sampleInput = require('./input');
console.log(`Valid passports: ${validPassports(sampleInput)}`);
