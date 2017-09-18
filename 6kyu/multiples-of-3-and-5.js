/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.
Courtesy of ProjectEuler.net
*/

module.exports = function multiplesOf3And5(number) {
    let sum = 0;

    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }

    return sum;
};

/* alternative solution but more cumbersome */
// function solution(number) {
//     const numbers = [];

//     for (let i = number - 1; i > 0; i--) numbers.push(i);

//     return numbers.map(n => {
//         if (n % 3 === 0 && n % 5 === 0) return n;
//         else if (n % 3 === 0) return n;
//         else if (n % 5 === 0) return n;
//         else return 0;
//     })
//         .reduce((acc, cur) => { return acc + cur; }, 0);
// };