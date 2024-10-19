// let x = 3.76;
// let y = 2;
// let z;

 //z = Math.round(x);
 //z = Math.floor(x);
 //z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x,y);
// z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x)
//z = Math.max();
//z = Math.min();

// console.log(z)


//RANDOM NUMBER GENERATOR
// let randomNumber = Math.floor(Math.random() * 6) + 1; // + 1 is for between 1 and 6
// console.log(randomNumber);

// const min = 50;
// const max = 100;

// let randomNumber2 = Math.floor(Math.random() * (max - min)) + min; // random numbers between 50 and 100
// console.log(randomNumber2);

//OFFICIAL NUMBER GENERATOR
const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("label1");
const myLabel2 = document.getElementById("label2");
const myLabel3 = document.getElementById("label3");

const min = 1;
const max = 6;
let randNum1;
let randNum2;
let randNum3;


myButton.onclick = function()
{
    randNum1 = Math.floor(Math.random() * (max)) + min;
    randNum2 = Math.floor(Math.random() * (max)) + min;
    randNum3 = Math.floor(Math.random() * (max)) + min;

    myLabel1.textContent = randNum1;
    myLabel2.textContent = randNum2;
    myLabel3.textContent = randNum3;

}
