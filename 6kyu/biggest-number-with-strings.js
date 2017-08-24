/*
You are to write a function biggestNum() that takes as argument two numbers (passed as strings) and returns the biggest (written as a string).

Note the numbers can be negative and/or very large. They can also have leading zeros and multiple negative signs, but your answers should be written without those.

Good luck!
*/

const biggestNum = function(inputA, inputB) {
    let a = isNegOrPos(inputA);
    let b = isNegOrPos(inputB);
    a = removeLeadZeros(a);
    b = removeLeadZeros(b);

    // if both numbers are negative, localeCompare() returns positive when the compare string is greater
    if (a.startsWith('-') === true && b.startsWith('-') === true) {
        return a.localeCompare(b, undefined, { numeric: true }) > 0 ?
            b : a;
    } else {
        return a.localeCompare(b, undefined, { numeric: true }) > 0 ?
            a : b;
    }
};

const isNegOrPos = function (strNum) {
    let negCount = 0;
    if (strNum.startsWith('-')) {
        strNum.split('').map(c => { if (c === '-') negCount++; });

        if (negCount % 2 === 0) {
            return strNum.replace(/-/g, '');
        } else {
            return `-${strNum.replace(/-/g, '')}`;
        }
    } else return strNum;
};

const removeLeadZeros = function (strNum) {
    let result = '';
    if (strNum.startsWith('-')) {
        let modify = strNum.slice(1);
        while (modify.startsWith('0')) {
            modify = modify.slice(1);
        }
        result = `-${modify}`;
    } else {
        while (strNum.startsWith('0')) {
            strNum = strNum.slice(1);
        }
        result = strNum;
    }

    return result;
};

module.exports = { biggestNum, isNegOrPos, removeLeadZeros };
