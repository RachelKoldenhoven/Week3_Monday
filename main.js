// JavaScript Function Exercises

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.

console.log("Question 1");
function divideByTwo(number) {
    return number/2;
}
console.log(divideByTwo(10));

// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.

console.log("Question 2");
function greeting(name1, name2) {
    console.log("Hello " + name1 + " and " + name2);
}
greeting("Rachel","Brent");


// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.

console.log("Question 3");

function cashewPrice(price) {
    return price*6;
}
console.log (cashewPrice(6));
console.log("Total price is " + cashewPrice(6));

// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to each other in the array should be on the same team.

console.log("Question 4");

teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]

function twoTeams(teammates) {
    var TeamA = [];
    var TeamB = [];
    for (i = 0; i <teammates.length; i++) {
        var person = teammates[i];
        if (i %2 === 0){
            TeamA.push(person);
        } else {
            TeamB.push(person);
        }
    }
    console.log(TeamA);
    console.log(TeamB);
}

twoTeams(teammates);

// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
//    Call the function inside of a conditional statement that prints one statement if the value is even or another statement if the value is odd.
//    In pseudocode:
//                  defining my function here(parameter)
//                      returns a value that divides that parameter by 4
//
//                  if (calling the function with parameter divided by 2 is even)
//                      print out a statement saying the number is even
//                  else
//                      print out a statement saying the number is odd

console.log("Question 5");

function quarter(number) {
    var result = number/4;
    if (result% 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
    return result;
}

quarter(16);

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

console.log("Question 6");

function area(x, y) {
    return x*y;
}
console.log (area(10,5));

function perimeter(x, y) {
    return 2*x + 2*y;
}
console.log (perimeter(5, 7));


// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

console.log("Question 7");

function sleepings(hours) {
    if (hours > 8) {
        console.log("You are getting enough sleep!");
    } else {
        console.log("You need more rest!");
    }
}

sleepings(6);


// 8. Prompt a user to enter a six digit number. Write a function that reverses the number.
//    (Hint, you will have to turn the integer into a string before you can reverse it.)

console.log("Question 8");
var longNum = prompt("Enter a six digit number.");
if (longNum.length<6 ) {
    console.log("Loser!");
}

function reverse(longNum) {
    var revStr = "";
    for(i = longNum.length-1; i >= 0; i--) {
        revStr = revStr.concat(longNum.charAt(i));
    }
    return revStr;
}
var x = reverse(longNum);
console.log(x);


// 9. Within the fuction you wrote in #7, write a conditional statement that checks to ensure the user entered a six digit integer.
//    If they have not entered a six digit integer, give them a message about being a failure.

// 10. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"

console.log("Question 10");

function changeCounter(quarters, dimes, nickels, pennies) {
    var a = quarters*0.25;
    var b = dimes*0.10;
    var c = nickels*0.05;
    var d = pennies*0.01;
    var total =  a + b + c + d;
    console.log("$" + total);
}

changeCounter(10,5,3,14);



// 11. Develop a function that determines a person's age by prompting them for their birth year.

console.log("Question 11");

function ageFinder(year) {
    var age = new Date().getFullYear() - year;
    console.log("You are " + age + " years old!");
}
var year =  prompt("What year were you born?");
ageFinder(year);


// 12. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4 = t
//          Except every year that is evenly divisible by 100 = f
//              Unless the year is also evenly divisible by 400 = t
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is

console.log("Question 12");

function leapYear(year) {
   if (year%400 === 0) {
       return true;
   }
    if (year%100 === 0) {
        return false;
    }
    if (year%4 === 0) {
        return true;
    }
    return false;
}
leapYear(400);
leapYear(100);
leapYear(4);
leapYear(5);


// 13. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//       X If the phone number is less than 10 digits assume that it is bad number
//      X  If the phone number is 10 digits assume that it is good
//       X If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number
//       X If the phone number is more than 11 digits assume that it is a bad number

console.log("Question 13");

var phoneNum = prompt("Enter ur digits!");


function cleanNum(phoneNum) {
    if(phoneNum.length<10 || phoneNum.length>11) {
        return undefined;
    }
    if (phoneNum.length === 10) {
        return phoneNum;
    }
if(phoneNum.charAt(0) === "1") {
    return phoneNum.substring(1);
}
    return undefined;
}

console.log(cleanNum(phoneNum));


// 14. Create a function that determines whether a parameter is a number or not (Hint: google "isNan")
//     Iterate over the elements in the following array to determine if each is a number.

console.log("Question 14");

arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]

function isItANum(things) {
    for(i=0; i<things.length; i++) {
        var num = things[i];
        if(isNaN(num) ) {
            console.log("NaN");
        } else console.log("Num");
    }
}
isItANum(arrayOfAllTheThings);



// 15. Create a die rolling function that accepts two parameters (the two six-sided dice) and outputs an array of the two values rolled.

console.log("Question 15");


// 16. Create another fuction called "whichSide". It will accept the array from above as it's only parameter.
//     This function will mimic a Monopoly board. Start playerOne at the Go space (0) and add the two values from your die array to determine
//     how many spaces the player will move. Log to the console which side of the board the player is on.
//     Hint: each side has 11 spaces. You can call the sides of the board: north, east, south, west or top, right, bottom, left.

console.log("Question 16");


// 17. Using the game above, use the same function(s) and add additional code to determine if the player is on a corner spot.
//     Log to the console which corner the player is located.

console.log("Question 17");
