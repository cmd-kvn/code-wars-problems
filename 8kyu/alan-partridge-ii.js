/*
Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

X will be either a number or a string. Both are valid.
 */

module.exports = function apple(x) {
    let base;
    let message;

    (typeof (x) === 'string') ? base = parseInt(x) : base = x;

    (Math.pow(base, 2) > 1000) ?
        message = 'It\'s hotter than the sun!!' :
        message = 'Help yourself to a honeycomb Yorkie for the glovebox.';

    return message;
};