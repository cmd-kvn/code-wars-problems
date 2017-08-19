/*
Given an array of numbers, determine whether the sum of all of the numbers is odd or even.

Give your answer in string format as 'odd' or 'even'.

If the input array is empty consider it as: [0] (array with a zero).

Example:

oddOrEven([0]) returns "even"
oddOrEven([2, 5, 34, 6]) returns "odd"
oddOrEven([0, -1, -5]) returns "even"
*/

module.exports = function oddOrEven(arr) {
    const sum = arr.reduce((sum, val) => sum + val, 0);

    return (sum % 2 === 0) ? 'even' : 'odd';
};