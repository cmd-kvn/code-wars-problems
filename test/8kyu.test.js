const { assert } = require('chai');

const last = require('../8kyu/last');
const getDrinkByProfession = require('../8kyu/l1-bartender-drinks!');
const replaceDots = require('../8kyu/fixme-replace-all-dots');

describe.only('8kyu katas', () => {
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

});
