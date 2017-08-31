/*
Create a function that takes a string and separates it into an array of letters.

The array will be formatted as so:

[['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']]
The function should separate each word into individual letters, with the first word in the sentence having its letters in the 0th index of each 2nd dimension array, and so on.

Shorter words will have an empty string in the place once the word has already been mapped out. (See the last element in the last part of the array.)

Examples:

sepStr("Just Live Life Man")
// => [['J','L','L','M'],
// => ['u','i','i','a'],
// => ['s','v','f','n'],
// => ['t','e','e','']]);

sepStr("The Mitochondria is the powerhouse of the cell")
// => [ [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
// => [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
// => [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
// => [ '', 'o', '', '', 'e', '', '', 'l' ],
// => [ '', 'c', '', '', 'r', '', '', '' ],
// => [ '', 'h', '', '', 'h', '', '', '' ],
// => [ '', 'o', '', '', 'o', '', '', '' ],
// => [ '', 'n', '', '', 'u', '', '', '' ],
// => [ '', 'd', '', '', 's', '', '', '' ],
// => [ '', 'r', '', '', 'e', '', '', '' ],
// => [ '', 'i', '', '', '', '', '', '' ],
// => [ '', 'a', '', '', '', '', '', '' ]]

*/

module.exports = { separateStrings, findLongestWordLength };

function separateStrings(inputString) {
    const words = inputString.split(' ');
    const ROWS = findLongestWordLength(inputString);
    const COLUMNS = words.length;
    let result = [];

    /* build the result matrix */
    for (let i = 0; i < ROWS; i++) {        // build rows
        result[i] = [];
        for (let j = 0; j < COLUMNS; j++) { // build columns  
            result[i][j] = '';              // fill matrix with empty strings
        }
    }

    /* fill the result matrix with the string (words) */
    words.map(word => word.split(''))           // returns array of character arrays
        .map((charSet, i) =>                    
            charSet.reduce((acc, cur, x) => {   // reduce each character set
                acc[x][i] = cur;                // into the appropriate column
                return acc;                     // empty strings remain if not filled by a char
            }, result)
        );

    return result;
}

function findLongestWordLength(inputStr) {
    let longestLength = 0;

    inputStr.split(' ').map(word => {
        if (word.length > longestLength) longestLength = word.length;
        else longestLength;
    });

    return longestLength;
}