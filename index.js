guessGame(1, 2);


function guessGame(min, max) {
  let about_game = `GuessIt is a Multi-level number guessing game. You are required to guess a randomly generated number. At a correct guess, you are awarded a point and moved to next level by increasing the maximum range value by 1.`

  let line_break = `-------------------------------------------------------`
    
    let userName = (prompt(`Hi! Please enter your username. `));

    console.log(line_break);
    
    console.log(`Hello ${userName}! Welcome to GuessIt Game!`);
  
    console.log(line_break);
    console.log(about_game);
    console.log(line_break);

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
        console.log(`Your guess is correct! You have ${point} points!`);
        console.log(`Welcome to level ${level}.`);
        max++;
    } 
else if (userGuess === randomValue && point === 1) 
    { 
        level++;
        console.log(`Your guess is correct! You have ${point} point!`);
        console.log(`Welcome to level ${level}.`);
        max++;
    } 
else { 
  for (attempts = 4; attempts > 0; attempts--)
    {
        console.log(`Your guess was wrong! ${attempts} attempts left.`);
        randomValue = Math.floor(Math.random() * (max - min + 1)) + min
        userGuess = parseInt(prompt(`Guess a number between ${min} and ${max}.`));
    }
      console.log (`Game Over!! Try again.`);
      break;
    }
  } while (max < 11)
}