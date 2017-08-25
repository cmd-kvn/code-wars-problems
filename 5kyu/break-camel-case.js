/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example

solution('camelCasing') // => should return 'camel Casing'
*/

module.exports = function breakCamelCase(string) {
    const isCapital = function (letter) {
        return letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91 ? ` ${letter}` : letter;
    };

    return string.split('').map(ltr => isCapital(ltr)).join('');
};
