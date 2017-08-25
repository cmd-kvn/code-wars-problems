/*
The code provided is supposed return a person's Full Name given their first and last names.

But it's not working properly.

Notes

The first and/or last names are never null, but may be empty.

Task

Fix the bug so we can all go home early.
*/

module.exports = class nameThem {

    // before:
    // constructor(firstName, lastName) {
    // }
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // before:
    // getFullName() {
    //     return 'firstName' + ' ' + 'lastName';
    // }
    getFullName() {
        return `${this.firstName} ${this.lastName}`.trim();
    }

}