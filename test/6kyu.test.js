const { assert } = require('chai');

const dir = '../6kyu/';
const reverseWords = require(`${dir}reversed-words`);

describe('6kyu katas', () => {
    let tests, answers;

    it('Passes "reverseWords"', () => {
        tests = ['hello world!', 'yoda doesn\'t speak like this', 'foobar', 'kata editor', 'row row row your boat'];
        answers = ['world! hello', 'this like speak doesn\'t yoda', 'foobar', 'editor kata', 'boat your row row row'];

        tests.map((test, i) => assert.equal(reverseWords(test), answers[i]));
    });

});