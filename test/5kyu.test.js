const { assert } = require('chai');

const dir = '../5kyu/';
const orderWeights = require(`${dir}weightForWeight`);
const domainName = require(`${dir}extract-domain-name`);
const breakCamelCase = require(`${dir}break-camel-case`);
const moveZeros = require(`${dir}moving-zeros-to-the-end`);
const simplePigLatin = require(`${dir}simple-pig-latin`);
const advancedPigLatin = require(`${dir}advanced-pig-latin`);
const humanReadableTime = require(`${dir}human-readable-time`);

describe('5kyu katas', () => {
    let tests, answers; 

    it('Passes "weight for weight"', () => {
        tests = ['103 123 4444 99 2000', '2000 10003 1234000 44444444 9999 11 11 22 123'];
        answers = ['2000 103 123 4444 99', '11 11 2000 10003 22 123 1234000 44444444 9999'];

        tests.map((test, i) => assert.equal(orderWeights(test), answers[i]));
    });

    it('Passes "domainName"', () => {
        tests = ['http://google.com', 'http://google.co.jp', 'http://www.youtube.com', 'www.xakep.ru', 
            'https://youtube.com', 'https://www.youtube.com', 'youtube.com'];
        answers = ['google', 'google', 'youtube', 'xakep', 'youtube', 'youtube', 'youtube'];
        
        tests.map((test, i) => assert.equal(domainName(test), answers[i]));
    });

    it('Passes "breakCamelCase"', () => {
        tests = ['camelCase', 'camelCaseThis', '', 'camel', 'camel1Case2This3', 'c@melCa$eTh!s'];
        answers = ['camel Case', 'camel Case This', '', 'camel', 'camel1 Case2 This3', 'c@mel Ca$e Th!s'];

        tests.map((test, i) => assert.equal(breakCamelCase(test), answers[i]));
    });

    it('Passes "moveZeros"', () => {
        tests = [[0, 0, 0, 0, 1, 2, 1, 1, 3, 1],
            [9, 0, 9, 0, 1, 0, 2, 0, 1, 0, 1, 0, 3, 0, 1, 0, 9, 0, 9, 0],
            [0, 0, 'a', 'b', 0, 0, 'c', 0, 0, 'd', 1, 0, 0, 1, 3, 0, 0, 1, 9, 9],
            [0, 'a', 'b', 0, null, 0, 'c', 'd', 1, 0, false, 0, 1, 3, 0, [], 0, 1, 9, 0, {}, 0, 9, 0],
            [1, 0, null, 2, false, 0, 1]];
        answers = [[1, 2, 1, 1, 3, 1, 0, 0, 0, 0],
            [9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ['a', 'b', null, 'c', 'd', 1, false, 1, 3, [], 1, 9, {}, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, null, 2, false, 1, 0, 0]];

        tests.map((test, i) => assert.deepEqual(moveZeros(test), answers[i]));
    });

    it('Passes "simplePigLatin"', () => {
        tests = [['Pig latin is cool', 'igPay atinlay siay oolcay'],
            ['This is my string', 'hisTay siay ymay tringsay']];

        tests.map(test => assert.equal(simplePigLatin(test[0]), test[1]));
    });
    
    it('Passes "advancedPigLatin"', () => {
        tests = [['hello', 'ellohay'], ['hello world', 'ellohay orldway'],
            ['Hello World', 'Ellohay Orldway'],
            ['Pizza? Yes Please!!', 'Izzapay? Esyay Easeplay!!'],
            ['How are you?', 'Owhay areway ouyay?']];   
        
        tests.map(test => assert.equal(advancedPigLatin(test[0]), test[1]));
    });

    it.only('Passes "humanReadableTime"', () => {
        tests = [[0, '00:00:00'], [5, '00:00:05'], [60, '00:01:00'], 
            [86399, '23:59:59'], [359999, '99:59:59']];

        tests.map(test => assert.equal(humanReadableTime(test[0]), test[1]));
    });
});
