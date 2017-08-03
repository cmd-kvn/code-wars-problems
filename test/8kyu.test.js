const { assert } = require('chai');

const dir = '../8kyu/';
const last = require(`${dir}last`);
const getDrinkByProfession = require(`${dir}l1-bartender-drinks!`);
const replaceDots = require(`${dir}fixme-replace-all-dots`);
const apple = require(`${dir}alan-partridge-ii`);

describe('8kyu katas', () => {
    let tests, answers;

    it('Passes "last"', () => {
        tests = [[1,2,3,4,5], 'abcde'];
        answers = [5, 'e'];

        assert.equal(last(tests[0]), answers[0]);
        assert.equal(last(tests[1]), answers[1]);
        assert.equal(last(1,'b',3,'d',5,'a'), 'a');
        assert.equal(last(1,'b',3,'d',5), 5);
    });

    it('Passes "getDrinkByProfession"', () => {
        tests = ['jabrOni', 'scHOOl counselor', 'prOgramMer', 'bike ganG member', 'poLiTiCian', 'rapper', 'pundit'];
        answers = ['Patron Tequila', 'Anything with Alcohol', 'Hipster Craft Beer', 'Moonshine', 'Your tax dollars', 'Cristal', 'Beer'];

        return tests.map((test, i) => assert.equal(getDrinkByProfession(tests[i]), answers[i]));
    });

    it('Passes "replaceDots"', () => {
        tests = ['one.two.three', '', 'no dots', '...', 'x....x.x..x...x.'];
        answers = ['one-two-three', '', 'no dots', '---', 'x----x-x--x---x-'];
    
        return tests.map((test, i) => assert.equal(replaceDots(tests[i]), answers[i]));
    });

    it('Passes "apple"', () => {
        tests = ['0', 0, 10, '32', 50];
        answers = ['It\'s hotter than the sun!!', 'Help yourself to a honeycomb Yorkie for the glovebox.'];

        assert.equal(apple(tests[0]), answers[1]);
        assert.equal(apple(tests[1]), answers[1]);
        assert.equal(apple(tests[2]), answers[1]);
        assert.equal(apple(tests[3]), answers[0]);
        assert.equal(apple(tests[4]), answers[0]);

    });

});
