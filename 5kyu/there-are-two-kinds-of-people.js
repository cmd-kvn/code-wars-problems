/*
Write

function functionator(str) {}
that given a string str will enable us to create this desired style of code writing.

For example:

let obj = functionator('there are two kinds of people');
obj.there().are().two().kinds().of().people();
Please note that these chainable calls do not return the current object i.e.

let obj = functionator('there are two kinds of people');
obj.there().there().there() ... etc //or
obj.there().there().are().there().two().there() // is NOT valid

*/

module.exports = function functionator(str) {
    // **********TODO: NOT FINISHED*********
    return (str.match(/\s/gi) === null) ?
        `${str.split(' ').join('().')}()`
        :
        str;
};
