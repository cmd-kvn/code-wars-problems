/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:

toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

module.exports = function toWeirdCase(string) {

    return string.split(' ')                // turn the string into an array of words
        .map(word => weirdCaseIt(word))     // change each word into weird casing
        .join(' ');                         // turn the array of words back into a string

    function weirdCaseIt(word) {
        return word.split('')                               // turn the word into an array of characters
            .map((c, i) => {
                // uppercase the letter if its index is even, lowercase if its odd                              
                return (i % 2 === 0) ? c.toUpperCase() : c.toLowerCase();   
            })
            .join('');                                      // join the letters back into the word
    }
};

