const { assert } = require('chai');

const dir = '../6kyu/';
const reversedWords = require(`${dir}reversed-words`);
const list = require(`${dir}format-a-string-of-names`);
const calculateHypotenuse = require(`${dir}calculate-hypotenuse-of-right-triangle`);
const reverseWords = require(`${dir}reverse-words`);
const { biggestNum, isNegOrPos, removeLeadZeros } = require(`${dir}biggest-number-with-strings`);
const alphabetPosition = require(`${dir}replace-with-alphabet-position`);
const stringAverage = require(`${dir}string-average`);
const symmetricSort = require(`${dir}coding-3m-symmetric-sort`);
const spinWords = require(`${dir}stop-gninnips-my-sdrow`);
const toWeirdCase = require(`${dir}weird-string-case`);
const { separateStrings } = require(`${dir}separate-strings`);
const fridayTheThirteenths = require(`${dir}friday-the-13ths`);

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
        tests = [[-2, 1], [2, -3], ['one', 2], [3, 'two'], [3], [], [true, 4], [2, false], [NaN, 5], [6, NaN]];
        answers = 'arguments must be numbers above zero';
        tests.map((test) => assert.throws(() => { calculateHypotenuse(test[0], test[1]); }, answers));
    });

    it('Passes "reverseWords"', () => {
        tests = ['The quick brown fox jumps over the lazy dog.', 'apple', 'a b c d', 'double  spaced  words'];
        answers = ['ehT kciuq nworb xof spmuj revo eht yzal .god', 'elppa', 'a b c d', 'elbuod  decaps  sdrow'];

        tests.map((test, i) => assert.equal(reverseWords(test), answers[i]));
    });

    describe('biggest-number-with-strings.js', () => {
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
            tests = [['25', '7'], ['214', '507'], ['--35', '7'], ['---25', '7'],
                ['0', '0006'], ['-05', '-5'], ['----05', '-5'],
                ['90071992547409911', '9'], ['3', '90071992547409911'],
                ['90071992547409911', '9007199254740991123'], ['90071992547409910', '90071992547409911']
            ];
            answers = ['25', '507', '35', '7', '6', '-5', '5', '90071992547409911',
                '90071992547409911', '9007199254740991123', '90071992547409911'];

            tests.map((test, i) => assert.equal(biggestNum(test[0], test[1]), answers[i]));
        });
    });

    it('Passes "alphabetPostion"', () => {
        tests = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'The sunset sets at twelve o\' clock.', 'The narwhal bacons at midnight.',
            '43@@)2<$', ' ^(w=v70*'];
        answers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
            '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26',
            '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11',
            '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20',
            '', '23 22'];

        tests.map((test, i) => assert.equal(alphabetPosition(test), answers[i]));
    });

    it('Passes "stringAverage"', () => {
        tests = ['zero nine five two', 'four six two three', 'one two three four five', 'five four',
            'zero zero zero zero zero', 'one one eight one', '', 'one one 5asdasdasdf',
            'two six eight zero qgz6i3hwils7fwasjor seven five seven four two'];
        answers = ['four', 'three', 'three', 'four', 'zero', 'two', 'n/a', 'n/a', 'n/a'];

        tests.map((test, i) => assert.equal(stringAverage(test), answers[i]));
    });

    it('Passes "symmetricSort"', () => {
        tests = [[1,2,3,4,5,6,7,8,9], [1,1,2,2,3,3,4,4,5], [9,8,7,6,5,4,3,2,1], 
            [5,4,4,3,3,2,2,1,1], [11,2,33,4,55,6], [5,12,5,8,33,13]];
        answers = [[1,3,5,7,9,8,6,4,2], [1,2,3,4,5,4,3,2,1], [1,3,5,7,9,8,6,4,2], 
            [1,2,3,4,5,4,3,2,1], [2,6,33,55,11,4], [5,8,13,33,12,5]];

        tests.map((test, i) => assert.deepEqual(symmetricSort(test), answers[i]));
    });

    it('Passes "spinWords"', () => {
        tests = [['Welcome', 'emocleW'], 
            ['Hey fellow warriors', 'Hey wollef sroirraw'], 
            ['This is a test', 'This is a test'], 
            ['This is another test', 'This is rehtona test'], 
            ['You are almost to the last test', 'You are tsomla to the last test'], 
            ['Just kidding there is still one more', 'Just gniddik ereht is llits one more'], 
            ['Seriously this is the last one', 'ylsuoireS this is the last one']];
        
        tests.map(test => assert.equal(spinWords(test[0]), test[1]));
    });

    it('Passes "toWeirdCase"', () => {
        tests = ['One', 'Two words', 'Multiple words test', 'ALL CAPS', 'rANdoM ChAOS oRder'];
        answers = ['OnE', 'TwO WoRdS', 'MuLtIpLe WoRdS TeSt', 'AlL CaPs', 'RaNdOm ChAoS OrDeR'];

        tests.map((test, i) => assert.equal(toWeirdCase(test), answers[i]));
    });

    it('Passes "separateStrings"', () => {
        tests = ['test', 'Just Live Life Man', 'The Mitochondria is the powerhouse of the cell'];
        answers = [[['t'], ['e'], ['s'], ['t']], 
            [['J','L','L','M']
                ,['u','i','i','a']
                ,['s','v','f','n']
                ,['t','e','e','']], 
            [ [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
                [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
                [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
                [ '', 'o', '', '', 'e', '', '', 'l' ],
                [ '', 'c', '', '', 'r', '', '', '' ],
                [ '', 'h', '', '', 'h', '', '', '' ],
                [ '', 'o', '', '', 'o', '', '', '' ],
                [ '', 'n', '', '', 'u', '', '', '' ],
                [ '', 'd', '', '', 's', '', '', '' ],
                [ '', 'r', '', '', 'e', '', '', '' ],
                [ '', 'i', '', '', '', '', '', '' ],
                [ '', 'a', '', '', '', '', '', '' ]]
        ];

        tests.map((test, i) => assert.deepEqual(separateStrings(test), answers[i]));
    });

    it('Passes "fridayTheThirteenths"', () => {
        tests = [[1999, 2000], [2000]];
        answers = ['8/13/1999 10/13/2000', '10/13/2000'];

        tests.map((test, i) => assert.equal(fridayTheThirteenths(test[0], test[1]), answers[i]));
    });
});