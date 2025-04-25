guessGame(1, 2);


function guessGame(min, max) {
  let userName = (prompt(`Hi! Please enter your username: `));
  console.log("\n\n");
  console.log(`Hello ${userName}! Welcome to GuessIt!\n\nInstructions: You are required to guess a randomly generated number. At a correct guess, you are awarded a point and moved to next level.\n\nYou have 5 attempts to guess the number. If you fail to guess the number within the 5 attempts, the game ends. The game ends when you have completed all levels.\n\n`);

  let randomValue;
  let userGuess;
  let point = 0;
  let level = 1;
  let attempts = 5;

  do {
    console.log(`Welcome to level ${level}.\n`);
    randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`hint: ${randomValue}`);
    userGuess = parseInt(prompt(`Correctly guess a number between ${min} and ${max}. You have ${attempts} attempts: `));
    console.log("");
    if (userGuess === randomValue && point === 0) {
      point++;
      console.log(`Your guess is correct! You have ${point} point!\n`);
      level++;
      max++;

      if (level > 10) {
        console.log(`🎉 Congratulations ${userName}! You have completed all levels with ${point} points.`);
        return;
      }
    } else if (userGuess === randomValue) {
      point++;
      console.log(`Your guess is correct! You have ${point} points!\n`);
      level++;
      max++;

      if (level > 10) {
        console.log(`🎉 Congratulations ${userName}! You have completed all levels with ${point} points.`);
        return;
      }
    } else {
      for (attempts = 4; attempts > 0; attempts--) {
        if (attempts > 1) {
          console.log(`Your guess was wrong! ${attempts} attempts left.`);
          randomValue = Math.floor(Math.random() * (max - min + 1)) + min
          userGuess = parseInt(prompt(`Guess a number between ${min} and ${max}.`));
        } else {
          console.log(`Your guess was wrong! ${attempts} attempt left.`);
          randomValue = Math.floor(Math.random() * (max - min + 1)) + min
          userGuess = parseInt(prompt(`Guess a number between ${min} and ${max}.`));
        }
      }
      if (point > 1 || point === 0) {
        console.log(`Game Over!! You have ${point} points.`);
      } else {
        console.log(`Game Over!! You have ${point} point.`);
      }
      console.log(`Try again.`);
      break;
    }
  } while (max < 12)
}
