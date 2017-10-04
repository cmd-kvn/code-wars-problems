/*
A consonant is any letter of the alphabet except a, e, i ,o, u. The consonant substrings in the word "zodiacs" are z, d, cs. Assuming a = 1, b = 2 ... z = 26, the values of these substrings are 26 ,4, 22 because z = 26,d = 4,cs=3+19=22. The maximum value of these substrings is 26. Therefore, solve("zodiacs") = 26.

Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.
*/

module.exports = function solve(s) {
    const ASCII_OFFSET = 96;

    return s.match(/[^aeiou]+/g)                            // return array of consonant-only substrings
        .map(substr => {
            return substr.split('')                         // split each substring into individual chars
                .map(c => c.charCodeAt(0) - ASCII_OFFSET)   // return alphabet value of each char
                .reduce((sum, val) => sum + val);           // return sum of the substring
        })
        .reduce((a, b) => a > b ? a : b);                   // return the highest value from the substrings
};
