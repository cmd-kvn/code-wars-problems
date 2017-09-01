/*
Create the function fridayTheThirteenths that accepts a start year and an end year (inclusive), and, using the Date object returns all of the dates where the 13th of a month lands on a Friday between the given year(s).

The return value should be a string where each date is seperated by a space. The date should be formatted like 9/13/2014 where months do not have leading zeroes and are separated with forward slashes.

If no end year is given, only return friday the thirteenths during the start year.

Examples:

fridayTheThirteenths(1999, 2000) 
  //returns "8/13/1999 10/13/2000"

fridayTheThirteenths(2014, 2015) 
  //returns "6/13/2014 2/13/2015 3/13/2015 11/13/2015"

fridayTheThirteenths(2000)
  //returns "10/13/2000"
This kata was designed to use the built-in Date object. Dates can often be finicky, so while there are other methods to get the correct dates, I can't gurantee they will work.

*/

module.exports = function fridayTheThirteenths(start, end = start) {
    const FRIDAY = 5;
    let fridayThirteenths = [];

    // loop years
    for (let year = start; year <= end; year++) {

        // loop months
        for (let month = 0; month <= 11; month++) {
            if (new Date(year, month, 13).getDay() === FRIDAY) {
                fridayThirteenths.push(`${month + 1}/13/${year}`);
            }
        }
    }

    return fridayThirteenths.join(' ');
}