const { assert } = require('chai');

const last = require('../8kyu/last');
const getDrinkByProfession = require('../8kyu/l1-bartender-drinks!');

describe('8kyu katas', () => {

    it('Passes "last"', () => {
        const tests = [[1,2,3,4,5], 'abcde'];
        const answers = [5, 'e'];

        assert.equal(last(tests[0]), answers[0]);
        assert.equal(last(tests[1]), answers[1]);
        assert.equal(last(1,'b',3,'d',5,'a'), 'a');
        assert.equal(last(1,'b',3,'d',5), 5);
    });

    it('Passes "getDrinkByProfession"', () => {
        const tests = ['jabrOni', 'scHOOl counselor', 'prOgramMer', 'bike ganG member', 'poLiTiCian', 'rapper', 'pundit'];
        const answers = ['Patron Tequila', 'Anything with Alcohol', 'Hipster Craft Beer', 'Moonshine', 'Your tax dollars', 'Cristal', 'Beer'];

        return tests.map((test, i) => assert.equal(getDrinkByProfession(tests[i]), answers[i]));
    });

});
