// with 3 numbers
function sum2020(input, targetSum) {
    const arr = input.split('\n').map((num) => parseInt(num, 10));
    let num1, num2, num3;
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (map[arr[j]] !== undefined) {
                num1 = arr[map[arr[j]]];
                num2 = arr[i];
                num3 = arr[j];
                i = arr.length;
                break;
            }
            map[targetSum - arr[i] - arr[j]] = j;
        }
    }
    console.log(
        `Numbers are: ${num1},${num2} and ${num3} and their product is ${
            num1 * num2 * num3
        }`,
    );
}

var sampleInput = require('./input');
sum2020(sampleInput, 2020);
