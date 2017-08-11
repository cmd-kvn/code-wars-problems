/*
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
*/

module.exports = function reverseNumber(n) {
    const finalN = Math.abs(n).toString().split('').reverse().join('');

    return (n < 0) ? parseInt([`-${finalN}`]) : parseInt(finalN);
};


