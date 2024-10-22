let number = Number(prompt("enter a number"));

function numberChecker() 
{
    if(number >= 10) 
        {
            return true;
        }
    else if(number < 10)
    {
        return false;
    }
}

//Maths.Js
const a = 1 + 8;
const b = 22 * 3;
const c = 5 % 4;
const d = a - 17;
const e = a + b + c + d;
alert(e);

//follow-up
let firstName;
let lastName;
let thisYear;
let birthYear;
let greetings;
let fullname;
let age;

firstName = "Damola";
lastName = "Olaosun";
thisYear = 2024;
birthYear = 2007;
fullname = firstName + " " + lastName;
age = thisYear - birthYear;

greetings = "Hello! My name is " + fullname + "and I am " + age + " years old";