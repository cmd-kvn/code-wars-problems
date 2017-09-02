/*
##Task:

You have to write a function pattern which creates the following pattern upto n number of rows. If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

##Pattern:

(n)
(n)(n-1)
(n)(n-1)(n-2)
................
.................
(n)(n-1)(n-2)....4
(n)(n-1)(n-2)....43
(n)(n-1)(n-2)....432
(n)(n-1)(n-2)....4321
##Examples:

pattern(4):

4
43
432
4321
pattern(6):

6
65
654
6543
65432
654321
Note: There are no blank spaces

Hint: Use \n in string to jump to next line
*/

module.exports = function pattern3(n) {
    const output = [];
    const countdown = function (start, finish) {
        let numLine = '';
        for (let i = start; i > finish; i--) {
            numLine += i;
        }

        return numLine;
    };

    for (let j = 0; j < n; j++) {
        output.push(countdown(n, j));
    }

    output.reverse();

    return n < 1 ? '' : output.join('\n');
};
