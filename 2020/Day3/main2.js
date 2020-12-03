const traverse = require('./main1');
var sampleInput = require('./input');

const coords = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
];

const prodOfTrees = coords
    .map((coord) => traverse(sampleInput, coord))
    .reduce((result, noOfTrees) => result * noOfTrees, 1);

console.log(`Product of trees ${prodOfTrees}`);
