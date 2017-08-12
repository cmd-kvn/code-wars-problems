/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.
*/

module.exports = function vowelCount(str) {
    const match = str.toLowerCase().match(/[aeiou]/gi);
    // match is null if the string has 0 vowels

    return (match !== null) ? match.length : 0;
};
