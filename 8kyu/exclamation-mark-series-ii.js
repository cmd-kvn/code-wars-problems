/**
Remove all exclamation marks from the end of sentence.

Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

module.exports = function removeII(s) {
    let endIndex;

    for (var i = s.length - 1; i > 0; i--) {
        if (s[i] === '!') {
            endIndex = false;
        } else {
            // i+1 because the current index needs to be included (it's not a '!')
            endIndex = i + 1;
            break;
        }
    }

    return s.slice(0, endIndex); 
    // alternative solution:
    // return s.replace(/!+$/, '')
};