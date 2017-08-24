const { assert } = require('chai');

const dir = '../6kyu/';
const reversedWords = require(`${dir}reversed-words`);
const list = require(`${dir}format-a-string-of-names`);
const calculateHypotenuse = require(`${dir}calculate-hypotenuse-of-right-triangle`);
const reverseWords = require(`${dir}reverse-words`);
const { biggestNum, isNegOrPos, removeLeadZeros } = require(`${dir}biggest-number-with-strings`);

describe('6kyu katas', () => {
    let tests, answers;

    it('Passes "reverseWords"', () => {
        tests = ['hello world!', 'yoda doesn\'t speak like this', 'foobar', 'kata editor', 'row row row your boat'];
        answers = ['world! hello', 'this like speak doesn\'t yoda', 'foobar', 'editor kata', 'boat your row row row'];

        tests.map((test, i) => assert.equal(reversedWords(test), answers[i]));
    });

    it('Passes "list"', () => {
        tests = [[{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }],
            [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }], 
            [{ name: 'Bart' }, { name: 'Lisa' }], [{ name: 'Bart' }], []];
        answers = ['Bart, Lisa, Maggie, Homer & Marge', 'Bart, Lisa & Maggie', 'Bart & Lisa', 'Bart', ''];

        tests.map((test, i) => assert.equal(list(test), answers[i]));
    });

    it('Passes "calculateHypotenuse"', () => {
        // non-error cases
        tests = [[1, 1], [3, 4]]; 
        answers = [1.414, 5];
        tests.map((test, i) => assert.equal(calculateHypotenuse(test[0], test[1]), answers[i]));
        
        // error cases
        tests = [[-2,1], [2,-3], ['one',2], [3,'two'], [3], [], [true, 4], [2,false], [NaN, 5], [6, NaN]];
        answers = 'arguments must be numbers above zero';
        tests.map((test) => assert.throws(() => {calculateHypotenuse(test[0], test[1]);}, answers));
    });

    it('Passes "reverseWords"', () => {
        tests = ['The quick brown fox jumps over the lazy dog.', 'apple', 'a b c d', 'double  spaced  words'];
        answers = ['ehT kciuq nworb xof spmuj revo eht yzal .god', 'elppa', 'a b c d', 'elbuod  decaps  sdrow'];

        tests.map((test, i) => assert.equal(reverseWords(test), answers[i]));
    });

    describe.only('biggest-number-with-strings.js', () => {
        it('Passes "isNegOrPos"', () => {
            tests = ['-1', '--2', '---3', '----4', '-----567', '6', '789'];
            answers = ['-1', '2', '-3', '4', '-567', '6', '789'];

            tests.map((test, i) => assert.equal(isNegOrPos(test), answers[i]));
        });

        it('Passes "removeLeadZeros"', () => {
            tests = ['01', '002', '-03', '-0000004'];
            answers = ['1', '2', '-3', '-4'];

            tests.map((test, i) => assert.equal(removeLeadZeros(test), answers[i]));
        });

        it('Passes "biggestNum"', () => {
            tests = [['25','7'], ['214','507'], ['--35', '7'], ['---25', '7'], 
                ['0', '0006'], ['-05', '-5'], ['----05', '-5'], 
                ['90071992547409911', '9'], ['3', '90071992547409911'], 
                ['90071992547409911', '9007199254740991123'], ['90071992547409910', '90071992547409911']
            ];
            answers = ['25', '507', '35','7', '6', '-5', '5', '90071992547409911', 
                '90071992547409911', '9007199254740991123', '90071992547409911'];
        
            tests.map((test, i) => assert.equal(biggestNum(test[0], test[1]), answers[i]));        
        });
    });

});