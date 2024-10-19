// // while loops wohoo
// let username = "";

// while(username === " ")
//     {
//         username = window.prompt("Enter your name");
//     }
// console.log(`Hello ${username}`);


// //do while loop
// // No need to initalise the variable just declare only
// do
// {
//     username = window.prompt("Enter your name");
// }
// while(username === " " || username === null)

//     //Example 
// let loggedIn = false;
// let firstname;
// let password;

// while(!loggedIn)
//     {
//         firstname = window.prompt('Enter your firstname: ');
//         password = window.prompt('Enter your password: ');

//         if(firstname === "damola" && password === "oyinda1234")
//             {
//                 loggedIn = true;
//                 console.log("You are logged in!");
//             }
//         else
//             {
//                 console.log("Invalid command!");
                
//             }
//     }


    //For loop repeat some code a limited amount of times

    for(let count = 0; count <= 10; count+=2)
        {
            console.log(count);
            
            console.log("Hello");
            
        }
    for(let year = 10;year > 0; year--)
        {
            console.log(year);             
        }
        console.log("HAPPY NEW YEAR"); 

    for(let start = 1; start <= 20; start++)
        {
            if(start == 13)
                {
                    continue // skips 13
                }
            else
                {
                    console.log(start);
                    
                }
        }
        for(let start = 1; start <= 20; start++)
            {
                if(start == 13)
                    {
                        break // stops at the number before 13
                    }
                else
                    {
                        console.log(start);
                        
                    }
            }

