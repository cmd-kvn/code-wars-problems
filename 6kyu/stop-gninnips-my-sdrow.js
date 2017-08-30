/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

module.exports = function spinWords(wordString) {
    return wordString.split(' ')    // break wordString into an array of words
        // go through each word and reverse those that have lengths longer than 4
        .map(word => {
            if (word.length > 4) return word.split('').reverse().join('');
            else return word;
        })
        .join(' ');     // turn the array of words back into a string
};
