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

});
