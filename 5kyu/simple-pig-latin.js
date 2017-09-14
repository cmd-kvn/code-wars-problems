/*
Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
*/

module.exports = function simplePigLatin(str) {
    return str.split(' ').map(w => w.slice(1) + w[0] + 'ay').join(' ');
};
