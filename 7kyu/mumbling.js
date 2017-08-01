/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

module.exports = function accum(s) {
    return s.split('')
        // split the string into separate strings stored in an array                          
        .map((x, i) => x.toUpperCase() + x.repeat(i).toLowerCase())
        // for each string, capitalize the string and add string*index in lowercase 
        .join('-'); // convert the array elements into a string joined by '-'
};
