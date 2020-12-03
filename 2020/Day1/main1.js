// with 2 numbers
function sum2020(input, targetSum) {
    const arr = input.split('\n').map((num) => parseInt(num, 10));
    let num1, num2;
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] !== undefined) {
            num1 = arr[map[arr[i]]];
            num2 = arr[i];
            break;
        }
        map[targetSum - arr[i]] = i;
    }
    console.log(`Numbers are: ${num1} and ${num2} and their product is ${num1 * num2}`);
}

var sampleInput = require('./input');
sum2020(sampleInput, 2020);
