const { assert } = require('chai');

const dir = '../8kyu/';
const last = require(`${dir}last`);
const getDrinkByProfession = require(`${dir}l1-bartender-drinks!`);
const replaceDots = require(`${dir}fixme-replace-all-dots`);
const apple = require(`${dir}alan-partridge-ii`);
const alan = require(`${dir}alan-partridge-iii`);
const first = require(`${dir}pick-a-set-of-first-elements`);
const removeII = require(`${dir}exclamation-mark-series-ii`);
const removeVI = require(`${dir}exclamation-mark-series-vi`);
const booleanToString = require(`${dir}convert-boolean-to-string`);
const removeIV = require(`${dir}exclamation-mark-series-iv`);
const bonusTime = require(`${dir}do-i-get-a-bonus`);
const repeatIt = require(`${dir}repeat-it`);
const sleighAuthentication = require(`${dir}sleigh-authentication`);
const tripleTrouble = require(`${dir}triple-trouble`);
const Person = require(`${dir}classy-classes`);
const datingRange = require(`${dir}age-range-compatibility-equation`);
const pointsPer48 = require(`${dir}nba-full-48-minutes-average`);
const fakeBinary = require(`${dir}fake-binary`);

describe('8kyu katas', () => {
    let tests, answers;

    it('Passes "last"', () => {
        tests = [[1, 2, 3, 4, 5], 'abcde', 5, true];
        answers = [5, 'e', 5, true];

        tests.map((test, i) => assert.equal(last(test), answers[i]));
        assert.equal(last(1, 'b', 3, 'd', 5, 'a'), 'a');
        assert.equal(last(1, 'b', 3, 'd', 5), 5);
    });

    it('Passes "getDrinkByProfession"', () => {
        tests = ['jabrOni', 'scHOOl counselor', 'prOgramMer', 'bike ganG member', 'poLiTiCian', 'rapper', 'pundit'];
        answers = ['Patron Tequila', 'Anything with Alcohol', 'Hipster Craft Beer', 'Moonshine', 'Your tax dollars', 'Cristal', 'Beer'];

        tests.map((test, i) => assert.equal(getDrinkByProfession(test), answers[i]));
    });

    it('Passes "replaceDots"', () => {
        tests = ['one.two.three', '', 'no dots', '...', 'x....x.x..x...x.'];
        answers = ['one-two-three', '', 'no dots', '---', 'x----x-x--x---x-'];

        tests.map((test, i) => assert.equal(replaceDots(test), answers[i]));
    });

    it('Passes "apple"', () => {
        answers = ['It\'s hotter than the sun!!', 'Help yourself to a honeycomb Yorkie for the glovebox.'];

        assert.equal(apple('0'), answers[1]);
        assert.equal(apple(0), answers[1]);
        assert.equal(apple(10), answers[1]);
        assert.equal(apple('32'), answers[0]);
        assert.equal(apple(50), answers[0]);
    });

    it('Passes "alan"', () => {
        answers = ['Smell my cheese you mother!', 'No, seriously, run. You will miss it.'];

        assert.equal(alan(['Norwich', 'Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway', 'London']), answers[0]);
        assert.equal(alan(['London', 'Norwich']), answers[1]);
        assert.equal(alan(['Norwich', 'Tooting', 'Bank', 'Rejection', 'Disappointment', 'Backstabbing Central', 'Exeter', 'Shattered Dreams Parkway', 'Belgium', 'London']), answers[0]);
        assert.equal(alan(['Disappointment', 'Rejection', 'Disappointment', 'Disappointment', 'London', 'Tiverton', 'Disappointment']), answers[1]);
    });

    it('Passes "first"', () => {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        tests = [null, 2, 0];
        answers = [['a'], ['a', 'b'], []];

        tests.map((test, i) => assert.sameDeepOrderedMembers(first(arr, test), answers[i]));
    });

    it('Passes "removeII"', () => {
        tests = ['Hi!', 'Hi!!!', '!Hi', '!Hi!', 'Hi! Hi!', 'Hi'];
        answers = ['Hi', 'Hi', '!Hi', '!Hi', 'Hi! Hi', 'Hi'];

        tests.map((test, i) => assert.equal(removeII(test), answers[i]));

    });

    it('Passes "removeVI"', () => {
        tests = [['Hi!', 1], ['Hi!', 100], ['Hi!!!', 1], ['Hi!!!', 100], ['!Hi', 1], ['!Hi!', 1], ['!Hi!', 100],
            ['!!!Hi !!hi!!! !hi', 1], ['!!!Hi !!hi!!! !hi', 3], ['!!!Hi !!hi!!! !hi', 5], ['!!!Hi !!hi!!! !hi', 100]];
        answers = ['Hi', 'Hi', 'Hi!!', 'Hi', 'Hi', 'Hi!', 'Hi',
            '!!Hi !!hi!!! !hi', 'Hi !!hi!!! !hi', 'Hi hi!!! !hi', 'Hi hi hi'];

        tests.map((test, i) => assert.equal(removeVI(test[0], test[1]), answers[i]));
    });

    it('Passes "booleanToString"', () => {
        tests = [true, false];
        answers = ['true', 'false'];

        tests.map((test, i) => assert.equal(booleanToString(test), answers[i]));
    });

    it('Passes "removeIV"', () => {
        tests = ['Hi!', 'Hi!!!', '!Hi', '!Hi!', 'Hi! Hi!', 'Hi'];
        answers = ['Hi!', 'Hi!', 'Hi!', 'Hi!', 'Hi Hi!', 'Hi!'];

        tests.map((test, i) => assert.equal(removeIV(test), answers[i]));
    });

    it('Passes "bonusTime"', () => {
        tests = [[10000, true], [25000, true], [10000, false], [60000, false], [2, true], [78, false], [67890, true]];
        answers = ['£100000', '£250000', '£10000', '£60000', '£20', '£78', '£678900'];

        tests.map((test, i) => assert.equal(bonusTime(test[0], test[1]), answers[i]));
    });

    it('Passes "repeatIt"', () => {
        tests = [['*', 3], ['Hello', 11], [123, 1], [true, 2], [['array'], 3], [{ key: 'object' }, 4]];
        answers = ['***', 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello', 'Not a string', 'Not a string', 'Not a string', 'Not a string'];

        tests.map((test, i) => assert.equal(repeatIt(test[0], test[1]), answers[i]));
    });

    it('Passes "sleighAuthentication"', () => {
        tests = [['Santa Claus', 'Ho Ho Ho!'], ['Santa', 'Ho Ho Ho!'], ['Santa Claus', 'Ho Ho!'], ['jhoffner', 'CodeWars']];
        answers = [true, false, false, false];
        
        tests.map((test, i) => assert.equal(sleighAuthentication(test[0], test[1]), answers[i]));
    });

    it('Passes "tripleTrouble"', () => {
        tests = [['this','test','lock'], ['aa','bb','cc'], ['Bm', 'aa', 'tn'], ['LLh','euo','xtr'], ['aaaaaa', 'bbbbbb', 'cccccc']];
        answers = ['ttlheoiscstk', 'abcabc', 'Batman', 'LexLuthor', 'abcabcabcabcabcabc'];

        tests.map((test, i) => assert.equal(tripleTrouble(test[0], test[1], test[2]), answers[i]));
    });

    it('Passes class "Person"', () => {
        tests = [['john', 34], ['jane', 28], ['joe', 22]];
        answers = ['johns age is 34', 'janes age is 28', 'joes age is 22'];

        tests.map((test, i) => assert.equal(new Person(test[0], test[1]).info, answers[i]));
    });

    it('Passes "datingRange"', () => {
        tests = [17, 40, 15, 35, 10, 5];
        answers = ['15-20', '27-66', '14-16', '24-56', '9-11', '4-5'];

        tests.map((test, i) => assert.equal(datingRange(test), answers[i]));  
    });

    it('Passes "pointsPer48"', () => {
        tests = [[[12, 20], 28.8], [[10, 10], 48.0], [[5, 17], 14.1], 
            [[30.8, 34.7], 42.6], [[22.9, 33.8], 32.5], [[0, 0], 0]];
        
        tests.map(test => assert.equal(pointsPer48(test[0][0], test[0][1]), test[1]));    
    });

    it('Passes "fakeBinary"', () => {
        tests = ['45385593107843568', '509321967506747', '366058562030849490134388085'];
        answers = ['01011110001100111', '101000111101101', '011011110000101010000011011'];
   
        tests.map((test, i) => assert.equal(fakeBinary(test), answers[i]));
    })
});
