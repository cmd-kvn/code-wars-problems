/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples:

// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior") 

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")
*/

module.exports = function toCamelCase(str) {
    let cameled = '';

    if (str.length > 0) {
        cameled = str
            .replace(/[-_]/g, ' ')
            .split(' ')
            .map(w => {
                return w[0].toUpperCase() + w.slice(1);
            }).join('');
    }

    return str.length === 0 ? '' : str[0] + cameled.slice(1);
};
