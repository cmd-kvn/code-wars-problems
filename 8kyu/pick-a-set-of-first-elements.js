/*
Write a JavaScript function to get the first element of an array. Passing a parameter n (default=1) will return the first n elements of the array. If n == 0 return an empty array ([]);

Examples

var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) => ['a'];
first(arr, 2) => ['a', 'b']
first(arr, 3) => ['a', 'b', 'c'];
first(arr, 0) => [];
*/

module.exports = function first(arr, n) {
    let display;

    if (n === 0) display = [];
    else if ((n) && n !== 0) display = arr.slice(0, n);
    else display = [arr[0]];

    return display;
};
