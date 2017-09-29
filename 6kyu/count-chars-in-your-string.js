/*
The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal { }
*/

module.exports = function countChars(str) {
    let dictionary = {};

    str.split('')
        .map(c => {
            if (dictionary[c]) dictionary[c] += 1;
            else dictionary[c] = 1;
        });

    return str.length === 0 ? {} : dictionary;
};
