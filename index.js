function guessGame(min, max) {

    let about_game = `GuessIt is a multi-level number guessing game. You are required to guess a randomly generated number. At a correct guess, you are awarded a point and moved to next level.`
    
    let userName = (prompt(`Hi! Please enter your username. `));
    
    alert(`Hello ${userName}! Welcome to GuessIt Game!`);
    alert(about_game);

    let randomValue;
    let userGuess;
    let point = 0;
    let level = 1;
    let attempts = 5;

     do {
            randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
            userGuess = parseInt(prompt(`Try to guess a number between ${min} and ${max}. You have ${attempts} attempts. `)); point++;

            if (userGuess === randomValue && point > 1)
                {
                    level++
                    alert(`Your guess is correct! You have ${point} points!`);
                    alert(`Welcome to level ${level}.`)
                    max++;
                } 
            else if (userGuess === randomValue && point === 1) 
                { 
                    level++
                    alert(`Your guess is correct! You have ${point} point!`);
                    alert(`Welcome to level ${level}.`)
                    max++;
                } 
            else 
                {
                    for (attempts = 4; attempts > 0; attempts--)
                        {
                            alert(`Your guess was wrong! ${attempts} attempts left.`);
                            randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
                            userGuess = parseInt(prompt(`Guess a number between ${min} and ${max}.`));
                        }
                    alert (`Game Over!!`);
                    break;
                }
        } while (max < 11)
    }

guessGame(1, 2);
