//string methods

let username = "Damola";
let dame = "Sebatian craig   "
console.log(username.charAt(0)); //Returns the first letter of the string
console.log(username.indexOf("m")); //Returns the index of the letter in a string
console.log(username.lastIndexOf("a"));// Returns the last index of the letter in a atring
dame.length // the length of the string
dame = dame.trim(); // removes extra white spaces after and before the string
dame.toUpperCase();  //converts string to uppercase
// dame = dame.repeat(3); // repeats a string on how many times you want
console.log(dame);
console.log(dame.length);


let result = username.startsWith("D"); //returns true if it starts with the letter stated
let mayResult = username.endsWith("a"); //returns true if it ends with the letter stated
let middleResult = dame.includes(" "); // returns true if this is part of the string

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", " ");// replaces all the dashhes(1st) with space(2nd)
phoneNumber = phoneNumber.padStart(20, "0"); //string meets the 20 charcter limit if not add zeros in front of the string
phoneNumber = phoneNumber.padEnd(20, "0"); //string meets the 20 charcter limit if not add zeros at the end of the string


//String slicing = creating a substring
//   string.slice(start, end)
const fullname = "Damola timmy";

// let firstname = fullname.slice(0,6)
// console.log(firstname);
// let lastname = fullname.slice(6,12)
// console.log(lastname);
// let firstChar = fullname.slice(0, 1);
// console.log(firstChar);
// let lastChar = fullname.slice(-1);
// console.log(lastChar);

let firstname = fullname.slice(0, fullname.indexOf(" "));

const email = "bro1@gmail.com";

let studentcode = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(studentcode);
console.log(extension);





