const { assert } = require('chai');

const mumbling = require('../7kyu/mumbling');

describe('7kyu katas', () => {

    it('Passes "mumbling"', () => {
        const test1 = 'ZpglnRxqenU';
        const answer1 = 'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu';

        const test2 = 'NyffsGeyylB';
        const answer2 = 'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb';

        const test3 = 'MjtkuBovqrU';
        const answer3 = 'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu';

        const test4 = 'abcd';
        const answer4 = 'A-Bb-Ccc-Dddd';

        const test5 = 'cwAt';
        const answer5 = 'C-Ww-Aaa-Tttt';

        assert.equal(mumbling(test1), answer1);
        assert.equal(mumbling(test2), answer2);
        assert.equal(mumbling(test3), answer3);
        assert.equal(mumbling(test4), answer4);
        assert.equal(mumbling(test5), answer5);
    });

});
