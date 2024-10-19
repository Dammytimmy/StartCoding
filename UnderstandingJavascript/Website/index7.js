const minimum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minimum + 1)) + minimum;

let attempts = 0;
let guess;
let running = true;

while(running)
{
    guess = window.prompt(`Guess a number betwenn ${minimum} - ${maxNum}`)
    guess = Number(guess);

    if(isNaN(guess))
        {
            window.alert("Please a enter a valid number")
        }
    else if(guess < minimum || guess > maxNum)
        {
            window.alert("Please enter a valid number")
        }
    else
    {
        attempts++;
        if(guess < answer)
            {
                alert("Too LOW! TRY AGAIN");
            }
        else if(guess > answer) 
            {
                alert("Too HIGH! TRY AGAIN");
            }
        else
        {
            alert(`CORRECT! The ${answer} took ${attempts} attempts to guess it`);
            running = false;

        }
    }

}