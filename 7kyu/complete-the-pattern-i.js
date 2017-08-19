/*
###Task: You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
####Rules/Note:

If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
###Pattern:

1
22
333
....
.....
nnnnnn
###Examples:

pattern(5):

1
22
333
4444
55555
pattern(11):

1
22
333
4444
55555
666666
7777777
88888888
999999999
10101010101010101010
1111111111111111111111
* Hint: Use \n in string to jump to next line
*/

module.exports = function pattern1(n) {
    let output = '';

    for (let i = 1; i <= n; i++) {
        output += `${i.toString().repeat(i)}\n`;
    }

    return (n < 1) ? '' : output.trim();
};