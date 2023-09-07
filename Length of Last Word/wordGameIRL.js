const readline = require("readline");

var lengthOfLastWord = function (s) {
  s = s.trim();
  var words = s.split(" ");
  return words[words.length - 1].length;
};

var playWordGuessGame = function (sentence) {
  var lastWordLength = lengthOfLastWord(sentence);

  if (lastWordLength > 0) {
    console.log("Welcome to the Word Guess Game!");
    console.log("Here's your sentence: " + sentence);
    console.log("Try to guess the length of the last word...");

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Enter your guess (an integer): ", (playerGuess) => {
      rl.close();
      var playerGuessInt = parseInt(playerGuess);

      if (playerGuessInt === lastWordLength) {
        console.log("Congratulations! You guessed it!");
      } else {
        console.log(
          "Oops! The length of the last word is " + lastWordLength + "."
        );
      }
    });
  } else {
    console.log(
      "Invalid input. Please provide a sentence with at least one word."
    );
  }
};

// Example usage
playWordGuessGame("This is a simple game");
