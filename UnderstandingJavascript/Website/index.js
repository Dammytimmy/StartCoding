// console.log(`Hello`);

// window.alert(`This is an alert`);
// window.alert(`I like pizza!`)

// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myP").textContent = `I like pizza`;

// let age;
// let gpa;

// age = 17;
// gpa = 2.1;
// let email = "123@email.com";
// let online = true;

// console.log(`I am ${age} years old`);
// console.log(typeof gpa);

// console.log(`Bro is online: ${online}`);

//This is a comment

// let firstName = "Damola";
// let age = 17;
// let isStudent = false;

// document.getElementById("p1").textContent = `Your name is ${firstName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Are you a student: ${isStudent}`;

// let result = 1 + 2 * 3 + 16;
// console.log(result);

//operator precedence
// parenthesis
// exponents
// multiplication, modulus, division
// Addition, subtraction

// let username;
// username = window.prompt("What's your username?");
// console.log(username);

// document.getElementById("myButton").onclick = function() {
//     username = document.getElementById("mytext").value;
//     document.getElementById("welcome").textContent = `Hello ${username}`;
// }

// let rate = window.prompt("What is the rate: ")
// rate = Number(rate);
// rate += 1;
// console.log(rate);


// let answer = " ";
// answer = Boolean(answer);
// console.log(answer);

// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);
// circumference = 2 * PI * radius;
// console.log(circumference);

// document.getElementById("mySubmit").onclick = function() {
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("myH3").textContent = circumference;
// }

//CONTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function()
{
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function()
{
    --count;
    countLabel.textContent = count;
}

resetBtn.onclick = function()
{
    count = 0;
    countLabel.textContent = count;
}

 
