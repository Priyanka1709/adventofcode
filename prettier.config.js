module.exports = {
    arrowParens: 'always',
    endOfLine: 'crlf',
    printWidth: 90,
    singleQuote: true,
    bracketSpacing: true,
    semi: true,
    useTabs: false,
    tabWidth: 4,
    trailingComma: 'all',

    overrides: [
        {
            files: '*.js',
            options: {
                parser: 'babel-flow',
            },
        },
    ],
};
