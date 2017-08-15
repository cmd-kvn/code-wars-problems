/*
Create a function called repeatIt that takes in a string and a number (n).

The function should return a string that repeats the initial passed in string (n) number of times.

EXAMPLE:

If you pass in string "Hi" with a number (2)

--> "HiHi"

If anything other than a string is passed in you should return "Not a string"
*/

module.exports = function repeatIt(str, n) {
    let output = [];

    for (var i = 0; i < n; i++) {
        output.push(str);
    }

    return (typeof (str) === 'string') ? output.join('') : 'Not a string';
};
