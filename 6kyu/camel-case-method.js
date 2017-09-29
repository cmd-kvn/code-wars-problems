/*
Write simple .camelCase method (camel_case function in PHP or CamelCase in C#) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/

module.exports = function camelCaseMethod(str){
    const cameled = str.trim().replace(/\W\w/g, match => match[1].toUpperCase());
    
    return str.length === 0 ? '' : cameled[0].toUpperCase() + cameled.slice(1);
};
