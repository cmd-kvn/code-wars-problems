/*
Write a function that accepts two parameters (sum and multiply) and find two numbers [x, y], where x + y = sum and x * y = multiply.

Example:

sum = 12 and multiply = 32

In this case, x equals 4 and y equals 8.

x = 4

y = 8

Because

x + y = 4 + 8 = 12 = sum

x * y = 4 * 8 = 32 = multiply

The result should be [4, 8].

Note:

0 <= x <= 1000

0 <= y <= 1000

If there is no solution, your function should return null (or None in python).

You should return an array (list in python) containing the two values [x, y] and it should be sorted in ascending order.

One last thing: x and y are integers (no decimals).
*/

const sumAndMultiply = function (sum, multiply) {
    // unknown: [x,y] in ascending order
    // data: sum, multiply, as integers between 0 - 1000
    // condition: x + y = sum, x * y = multiply
    // more accessible problem? find the factors of multiply -> how
    
    const multiplicands = findMultiplicands(multiply);
    const answer = findAddends(sum, multiplicands);
    
    if (multiply === 0) return [0, sum];
    return answer === undefined ? null : answer;
};

// find the multiplicands of a product and return the pairs in an array
const findMultiplicands = function (product) {
    const multiplicands = [];

    // any number, i, above Math.sqrt(product) will already be used beforehand
    for (let i = 1; i <= Math.sqrt(product); i++) {
        if (product % i == 0) multiplicands.push([i, product / i]);
    }

    return multiplicands;
};

// find which pair of multiplicands totals the sum amount
const findAddends = function (sum, multiplicandPairs) {
    return multiplicandPairs.find((pair) => {
        if (pair[0] + pair[1] === sum) return pair;
    });
};

module.exports = { sumAndMultiply, findMultiplicands, findAddends };