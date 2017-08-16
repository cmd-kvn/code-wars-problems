const { assert } = require('chai');

const orderWeights = require('../5kyu/weightForWeight');

describe('5kyu katas', () => {
    let tests, answers; 

    it.only('Passes "weight for weight"', () => {
        tests = ['103 123 4444 99 2000', '2000 10003 1234000 44444444 9999 11 11 22 123'];
        answers = ['2000 103 123 4444 99', '11 11 2000 10003 22 123 1234000 44444444 9999'];

        tests.map((test, i) => assert.equal(orderWeights(test), answers[i]));
    });

});
