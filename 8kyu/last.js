/*
Find the last element of a list.

Example:

last( [1,2,3,4] ) // => 4
last( "xyz" )     // => z
last( 1,2,3,4 )   // => 4
*/

module.exports = function last(list) {
    let s;
    
    if (arguments.length === 1) {
        switch (typeof (list)) {
        case 'number':
        case 'boolean':
            return list;
        case 'string':
            s = Array.from(list);
            return s[s.length - 1];
        default:                          // list is an array
            return list[list.length - 1];
        }

    } else {                              // list is a set of arguments
        return arguments[arguments.length - 1];
    }

};
