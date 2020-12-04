const sanitizedPassports = require('./utils');

function validPassports(input) {
    const passportArr = sanitizedPassports(input);

    let validPassports = 0;
    const standardPassportFields = [
        'byr',
        'iyr',
        'eyr',
        'hgt',
        'hcl',
        'ecl',
        'pid',
    ].sort();
    const optionalPassportFields = ['cid'];

    for (let i = 0; i < passportArr.length; i++) {
        const passport = passportArr[i];
        const fieldsInPassport = Object.keys(passport).sort();

        if (
            fieldsInPassport.length ===
            standardPassportFields.length + optionalPassportFields.length
        ) {
            validPassports++;
        } else if (
            JSON.stringify(fieldsInPassport) === JSON.stringify(standardPassportFields)
        ) {
            validPassports++;
        }
    }
    return validPassports;
}

var sampleInput = require('./input');
console.log(`Valid passports: ${validPassports(sampleInput)}`);
