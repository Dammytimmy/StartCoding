// Conditions
//  let age = 25;

//  if(age >= 18)
//  {
//     console.log("You are old enough to enter this site");  
//  }
//  else
//  {
//     console.log('You must be 18 to enter');
//  }

//  let rate = 25;
//  let hasprofit = true;

//  if(rate >= 16){
//     console.log('Yo have profit');
//     if(hasprofit)
//         {
//             console.log('You have your profit');
            
//         }
//     else
//         {
//             console.log('You dont have profit');
            
//         }
//  }
//  else
//  {
//     console.log('You must increase your sales');
    
//  }
// // 

 const myText = document.getElementById("myText");
 const mySubmit = document.getElementById("mySubmit");
 let resultElement = document.getElementById("resultElement");
 let age;
 mySubmit.onclick = function()
 {
     age = myText.value;
     age = Number(age)
     if(age >= 18)
         {
           resultElement.textContent =  "You are an adult!";
            
         }
     else
         {
             resultElement.textContent = "You are still a child";
            
         }
 }

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const my2Submit = document.getElementById("my2Submit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

my2Submit.onclick = function()
{
    if(myCheckbox.checked)
        {
            subResult.textContent = 'You are subscribed!';
        }
    else
    {
        subResult.textContent = 'You are NOT! subscribed!';

    }

    if(visaBtn.checked)
        {
            paymentResult.textContent = 'You are paying with visa';
        }
    else if(mastercardBtn.checked)
        {
            paymentResult.textContent = 'You are paying with mastercard';
        }
    else if(paypalBtn.checked)
        {
            paymentResult.textContent = 'You are paying with PayPal';
        }
    else
        {
            paymentResult.textContent = 'You must select a payment type';
        }
}

//ternary operator condition ? codeIftrue : codeIfFalse

let rage = 21;
let message = rage >= 18 ? 'You are very angry' : "You are not so angry"
console.log(message);

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is ${purchaseAmount - purchaseAmount * (discount/100 )}`);

let day = 1;

switch(day)
    {
        case 1:
            console.log('It is monday');
            break;
        case 2:
            console.log('It is tuesday');
            break;
        case 3:
            console.log('It is wednesday');
            break;
        case 4:
            console.log('It is thursday');
            break;
        case 5:
            console.log('It is friday');
            break;
        case 6:
            console.log('It is saturday');
            break;
        case 7:
            console.log('It is sunday');
            break;
        default:
            console.log("Choose the right option");
               
    }

    let testScore = 95;
    let letterGrade;

    switch(true)
        {
            case testScore >= 90:
                letterGrade = 'A';
                break;
            case testScore >= 80:
                letterGrade = 'B';
                break;
            case testScore >= 70:
                letterGrade = 'C';
                break;
            case testScore >= 60:
                letterGrade = 'D';
                break;
            default:
                letterGrade = 'F';
        }
console.log(letterGrade);


