function traverse(input, coord) {
    const inputArr = input.split('\n');

    const dataWidth = inputArr[0].length;
    let noOfTrees = 0;
    let right = coord[0];
    const down = coord[1];
    for (let i = down; i < inputArr.length; i = i + down) {
        const char = inputArr[i][right];
        if (char == '#') {
            noOfTrees++;
        }
        right = (right + coord[0]) % dataWidth;
    }
    console.log(`No. of trees ${noOfTrees}`);
    return noOfTrees;
}

var sampleInput = require('./input');
traverse(sampleInput, [3, 1]);

module.exports = traverse;
