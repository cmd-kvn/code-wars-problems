const { assert } = require('chai');

const dir = '../8kyu/';
const last = require(`${dir}last`);
const getDrinkByProfession = require(`${dir}l1-bartender-drinks!`);
const replaceDots = require(`${dir}fixme-replace-all-dots`);
const apple = require(`${dir}alan-partridge-ii`);
const alan = require(`${dir}alan-partridge-iii`);
const first = require(`${dir}pick-a-set-of-first-elements`);
const remove = require(`${dir}exclamation-mark-series-ii`);

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

    it('Passes ""', () => {
        tests = [['Hi!',1], ['Hi!',100], ['Hi!!!',1], ['Hi!!!',100], ['!Hi',1], ['!Hi!',1], ['!Hi!',100], 
            ['!!!Hi !!hi!!! !hi',1], ['!!!Hi !!hi!!! !hi',3], ['!!!Hi !!hi!!! !hi',5], ['!!!Hi !!hi!!! !hi',100]];
        answers = ['Hi', 'Hi', 'Hi!!', 'Hi', 'Hi', 'Hi!', 'Hi', 
            '!!Hi !!hi!!! !hi', 'Hi !!hi!!! !hi', 'Hi hi!!! !hi', 'Hi hi hi'];
        
        tests.map((test, i) => assert.equal(remove(test[0], test[1]), answers[i]));
    });

});
