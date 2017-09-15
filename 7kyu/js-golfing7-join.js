/*
JS Golfing Series

Task:

Return an array as string with no more than 13 characters.

Note that: undefined and null are shown as empty string.
*/

module.exports = {x: a=>a.join``};

/*
https://codegolf.stackexchange.com/questions/37624/tips-for-golfing-in-ecmascript-6-and-above

Using string templates with functions

When you have a function with one string as the arguments. You can omit the () if you don't have any expressions:

join`` // Works
join`foobar` // Works
join`${5}` // Doesn't work 

Be warned, this actually passes an array. fun`string` is the same as fun(["string"]), not fun("string"). This is fine for functions that cast to string, like alert, but for others this could cause issues.
*/