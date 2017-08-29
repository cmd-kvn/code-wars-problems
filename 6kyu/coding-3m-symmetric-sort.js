/*
#Task:

Give you a number ```array```(element range:1-99, array length range: 6-40), please do a "Symmetric Sort" with it.

rule: sort the number, the first smallest number at the left side, the second smaller number at the right side, and so on...
#Example:

```
example1:                        example2:

array=[1,2,3,4,5,6,7,8,9]        array=[1,1,2,2,3,3,4,4,5]

after sort, should return:       after sort, should return:

      [1,3,5,7,9,8,6,4,2]              [1,2,3,4,5,4,3,2,1]
```
*/

module.exports = function symmetricSort(array) {
    const oddIndexes = [];
    const evenIndexes = [];

    array
        // order numbers smallest - largest
        .sort((a, b) => a - b)
        // categorize elements by odd/even index
        .map((num, i) => {
            if (i % 2 === 0) evenIndexes.push(num);
            else oddIndexes.push(num);
        });

    // the first smallest number at the left side, 
    // the second smaller number at the right side, and so on...
    return evenIndexes.concat(oddIndexes.reverse());
};