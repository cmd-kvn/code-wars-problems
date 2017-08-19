const { assert } = require('chai');

const dir = '../5kyu/';
const orderWeights = require(`${dir}weightForWeight`);
const domainName = require(`${dir}extract-domain-name`);

describe('5kyu katas', () => {
    let tests, answers; 

    it('Passes "weight for weight"', () => {
        tests = ['103 123 4444 99 2000', '2000 10003 1234000 44444444 9999 11 11 22 123'];
        answers = ['2000 103 123 4444 99', '11 11 2000 10003 22 123 1234000 44444444 9999'];

        tests.map((test, i) => assert.equal(orderWeights(test), answers[i]));
    });

    it.only('Passes "domainName"', () => {
        tests = ['http://google.com', 'http://google.co.jp', 'http://www.youtube.com', 'www.xakep.ru', 
            'https://youtube.com', 'https://www.youtube.com', 'youtube.com'];
        answers = ['google', 'google', 'youtube', 'xakep', 'youtube', 'youtube', 'youtube'];
        
        tests.map((test, i) => assert.equal(domainName(test), answers[i]));
    });

});
