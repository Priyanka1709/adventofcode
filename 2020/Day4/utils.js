function sanitizedPassports(input) {
    return input.split('\n\n').map((passport) =>
        passport.split(/[\n,\s]+/).reduce((sanitizedPassport, field) => {
            const keyValue = field.split(':');
            sanitizedPassport[keyValue[0]] = keyValue[1];
            return sanitizedPassport;
        }, {}),
    );
}

module.exports = sanitizedPassports;
