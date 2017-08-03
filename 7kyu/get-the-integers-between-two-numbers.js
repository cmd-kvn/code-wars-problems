/*
Build a function that can get all the integers between two given numbers.

Example:

(2,9)

Should give you this output back:

[ 3, 4, 5, 6, 7, 8 ]
*/

module.exports = function range(startNum, endNum) {
    let result = [];

    for (var i = startNum + 1; i < endNum; i++) {
        result.push(i);
    }

    return result;
};
