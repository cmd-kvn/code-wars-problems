const { assert } = require('chai');

const dir = '../7kyu/';
const mumbling = require(`${dir}mumbling`);
const range = require(`${dir}get-the-integers-between-two-numbers`);
const disemvowel = require(`${dir}disemvowel-trolls`);
const reverseNumber = require(`${dir}reverse-a-number`);
const stringTask = require(`${dir}string-task`);
const vowelCount = require(`${dir}vowel-count`);
const sprayingTrees = require(`${dir}spraying-trees`);
const oddOrEven = require(`${dir}odd-or-even`);
const pattern1 = require(`${dir}complete-the-pattern-i`);
const sumOfIntegersInString = require(`${dir}sum-of-integers-in-string`);
const vowelIndices = require(`${dir}find-the-vowels`);
const sumAndMultiply = require(`${dir}sum-and-multiply`);
const { average } = require(`${dir}basic-js-calculating-averages`);
const { pattern2 } = require(`${dir}complete-the-pattern-ii`);
const nameThem = require(`${dir}fixme-get-full-name`);
const pattern4 = require(`${dir}complete-the-pattern-iv`);
const pattern3 = require(`${dir}complete-the-pattern-iii`);
const pattern5 = require(`${dir}complete-the-pattern-v`);

describe('7kyu katas', () => {
    let tests, answers;

    it('Passes "mumbling"', () => {
        tests = ['ZpglnRxqenU', 'NyffsGeyylB', 'MjtkuBovqrU', 'abcd', 'cwAt'];
        answers = ['Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu',
            'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb',
            'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu',
            'A-Bb-Ccc-Dddd',
            'C-Ww-Aaa-Tttt'
        ];

        tests.map((test, i) => assert.equal(mumbling(test), answers[i]));
    });

    it('Passes "range"', () => {
        tests = [[2, 9], [6, 8], [102, 111]];
        answers = [[3, 4, 5, 6, 7, 8], [7], [103, 104, 105, 106, 107, 108, 109, 110]];

        tests.map((test, i) => assert.sameMembers(range(test[0], test[1]), answers[i]));
    });

    it('Passes "disemvowel"', () => {
        tests = ['This website is for losers LOL!', 'No offense but,\nYour writing is among the worst I\'ve ever read',
            'What are you, a communist?'];
        answers = ['Ths wbst s fr lsrs LL!', 'N ffns bt,\nYr wrtng s mng th wrst \'v vr rd',
            'Wht r y,  cmmnst?'];

        tests.map((test, i) => assert.equal(disemvowel(test), answers[i]));
    });

    it('Passes "reverseNumber"', () => {
        tests = [123, -123, 1000, 4321234, 5, 98989898];
        answers = [321, -321, 1, 4321234, 5, 89898989];

        tests.map((test, i) => assert.equal(reverseNumber(test), answers[i]));
    });

    it('Passes "stringTask"', () => {
        tests = ['tour', 'Codewars', 'aBAcAba', 'g', 'a'];
        answers = ['.t.r', '.c.d.w.r.s', '.b.c.b', '.g', ''];

        tests.map((test, i) => assert.equal(stringTask(test), answers[i]));
    });

    it('Passes "vowelCount"', () => {
        tests = ['abracadabra', 'pear tree', 'o a kak ushakov lil vo kashu kakao', 'my pyx'];
        answers = [5, 4, 13, 0];

        tests.map((test, i) => assert.equal(vowelCount(test), answers[i]));
    });

    it('Passes "sprayingTrees"', () => {
        tests = [['Monday', 4, 3], ['Tuesday', 6, 1], ['Wednesday', 10, 2], ['Thursday', 5, 3], ['Friday', 5, 4]];
        answers = [
            'It is Monday today, James, you have to work, you must spray 4 trees and you need 12 dollars to buy liquid',
            'It is Tuesday today, John, you have to work, you must spray 6 trees and you need 6 dollars to buy liquid',
            'It is Wednesday today, Robert, you have to work, you must spray 10 trees and you need 20 dollars to buy liquid',
            'It is Thursday today, Michael, you have to work, you must spray 5 trees and you need 15 dollars to buy liquid',
            'It is Friday today, William, you have to work, you must spray 5 trees and you need 20 dollars to buy liquid',
        ];

        tests.map((test, i) => assert.equal(sprayingTrees(test[0], test[1], test[2]), answers[i]));
    });

    it('Passes "oddOrEven"', () => {
        // edge tests
        tests = [[[0], 'even'], [[1], 'odd'], [[], 'even']];
        tests.map(test => assert.equal(oddOrEven(test[0]), test[1]));

        // even tests
        tests = [[[0, 1, 5], 'even'], [[0, 1, 3], 'even'], [[1023, 1, 2], 'even']];
        tests.map(test => assert.equal(oddOrEven(test[0]), test[1]));

        // negative even tests
        tests = [[[0, -1, -5], 'even'], [[0, -1, -3], 'even'], [[-1023, 1, -2], 'even']];
        tests.map(test => assert.equal(oddOrEven(test[0]), test[1]));

        // odd tests
        tests = [[[0, 1, 2], 'odd'], [[0, 1, 4], 'odd'], [[1023, 1, 3], 'odd']];
        tests.map(test => assert.equal(oddOrEven(test[0]), test[1]));

        // negative odd tests
        tests = [[[0, -1, 2], 'odd'], [[0, 1, -4], 'odd'], [[-1023, -1, 3], 'odd']];
        tests.map(test => assert.equal(oddOrEven(test[0]), test[1]));
    });

    it('Passes "pattern1"', () => {
        tests = [1, 2, 5, 0, 0.5];
        answers = ['1', '1\n22', '1\n22\n333\n4444\n55555', '', ''];

        tests.map((test, i) => assert.equal(pattern1(test), answers[i]));
    });

    it('Passes "sumOfIntegersInString"', () => {
        tests = [['12.4', 16], ['h3ll0w0rld', 3], ['2 + 3 = ', 5],
            ['Our company made approximately 1 million in gross revenue last quarter.', 1],
            ['The Great Depression lasted from 1929 to 1939.', 3868], ['Dogs are our best friends.', 0],
            ['C4t5 are 4m4z1ng.', 18], ['The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog', 3635]];

        tests.map(test => assert.equal(sumOfIntegersInString(test[0]), test[1]));
    });

    it('Passes "vowelIndices"', () => {
        tests = ['mmm', 'apple', 'super', 'orange', 'supercalifragilisticexpialidocious', 'vaNnEh'];
        answers = [[], [1, 5], [2, 4], [1, 3, 6], [2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 25, 27, 29, 31, 32, 33], [2, 5]];

        tests.map((test, i) => assert.deepEqual(vowelIndices(test), answers[i]));
    });

    describe('sum-and-multiply.js', () => {
        it('Passes findMultiplicands', () => {
            tests = [12, 9, 8452, 56];
            answers = [[[1, 12], [2, 6], [3, 4]], 
                [[1, 9], [3, 3]],
                [[1, 8452], [2, 4226], [4, 2113]],
                [[1, 56], [2, 28], [4, 14], [7, 8]]];
            
            tests.map((test, i) => assert.deepEqual(sumAndMultiply.findMultiplicands(test), answers[i]));
        });

        it('Passes findAddends', () => {
            tests = [[13, [[1, 12], [2, 6], [3, 4]]],
                [6, [[1, 9], [3, 3]]],
                [200, [[1, 8452], [2, 4226], [4, 2113]]],
                [15, [[1, 56], [2, 28], [4, 14], [7, 8]]]];
            answers = [[1, 12], [3, 3], undefined, [7, 8]];

            tests.map((test, i) => assert.deepEqual(sumAndMultiply.findAddends(test[0], test[1]), answers[i]));
        });

        it('Passes "sumAndMultiply"', () => {
            tests = [[13, 12], [6, 9], [200, 8452], [15, 56], [300, 0]];
            answers = [[1, 12], [3, 3], null, [7, 8], [0, 300]];

            tests.map((test, i) => assert.deepEqual(sumAndMultiply.sumAndMultiply(test[0], test[1]), answers[i]));
        });
    });

    it('Passes "average"', () => {
        assert.equal(average(3, 4, 5), 4);
        assert.equal(average(3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3), 5.769230769230769);
        assert.equal(average(), 0);
    });

    it('Passes "pattern2"', () => {
        tests = [1, 2, 5, 0];
        answers = ['1', '21\n2', '54321\n5432\n543\n54\n5', ''];

        tests.map((test, i) => assert.equal(pattern2(test), answers[i]));
    });

    it('Passes "getFullName" from the "nameThem" class', () => {
        tests = [['Clint', 'Eastwood'], ['Clint', ''], ['', 'Eastwood'], ['', '']];
        answers = ['Clint Eastwood', 'Clint', 'Eastwood', ''];

        tests.map((test, i) => assert.equal(new nameThem(test[0], test[1]).getFullName(), answers[i]));       
    });

    it('Passes "pattern4"', () => {
        tests = [1, 2, 5, 0, -2];
        answers = ['1', '12\n2', '12345\n2345\n345\n45\n5', '', ''];

        tests.map((test, i) => assert.equal(pattern4(test), answers[i]));
    });

    it('Passes "pattern3"', () => {
        tests = [1, 2, 5, 0, -3];
        answers = ['1','2\n21','5\n54\n543\n5432\n54321', '', '']; 

        tests.map((test, i) => assert.equal(pattern3(test), answers[i]));
    });

    it('Passes "pattern5"', () => {
        tests = [2, 1, 5, 0, -25];
        answers =['22', '', '22\n4444', '', ''];

        tests.map((test, i) => assert.equal(pattern5(test), answers[i]));
    });
});
