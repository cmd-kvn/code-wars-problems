/*
Let's build a calculator that can calculate the average for an arbitrary number of arguments.

The test expects you to provide a Calculator object with an average method:

Calculator.average()
The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.

It expects Calculator.average(3,4,5) to return 4.
*/

const Calculator = {
    average: function() {
        if(Array.from(arguments).length < 1) return 0;
        
        let args = Array.from(arguments);
        let sum = args.reduce((a, b) => a + b);
        let average = sum / (args.length);
        
        return average;
    }
    
};

module.exports = Calculator;
