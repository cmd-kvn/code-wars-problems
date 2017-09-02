/*
##Task:

You have to write a function pattern which creates the following pattern upto n number of rows. If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

##Examples:

pattern(4):

1234
234
34
4
pattern(6):

123456
23456
3456
456
56
6
Note: There are no blank spaces

Hint: Use \n in string to jump to next line
*/

module.exports = function pattern4(n) {
    var output = [];
    const countTo = function (from, to) {
        let numLine = '';

        for (let i = from; i <= to; i++) {
            numLine += i;
        }

        return numLine;
    };

    for (let j = 1; j <= n; j++) {
        output.push(countTo(j, n));
    }

    return n > 0 ? output.join('\n') : '';
};
