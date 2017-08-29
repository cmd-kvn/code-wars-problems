/*
Classy Classes

Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes
Task

Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return
johns age is 34
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/

module.exports = class Person {
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }

    get info() {
        return this.getInfo();
    }

    getInfo() {
        return `${this.firstName}s age is ${this.age}`;
    }
};
