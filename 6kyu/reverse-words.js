/*
Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Every space should stay, so you cannot use words from Prelude.

Example:

reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
reverseWords "An example!"    -- "nA !elpmaxe"
reverseWords "double  spaces" -- "elbuod  secaps"
*/

module.exports = function reverseWords(str) {
    return str.split(' ')           // break the string into an array of words
        .map(word => word.split('') // break each word into an array of letters
            .reverse()              // reverse the array of letters
            .join(''))              // join the array of letters into a string
        .join(' ');                 // join the array of reversed words into a string
};
