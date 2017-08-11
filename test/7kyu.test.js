const { assert } = require('chai');

const dir = '../7kyu/';
const mumbling = require(`${dir}mumbling`);
const range = require(`${dir}get-the-integers-between-two-numbers`);
const disemvowel = require(`${dir}disemvowel-trolls`);
const reverseNumber = require(`${dir}reverse-a-number`);

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

});
