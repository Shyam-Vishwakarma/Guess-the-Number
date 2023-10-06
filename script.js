'use strict';

// document.querySelector('.message').textContent = 'right number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.value').value = 2;
// const num = document.querySelector('.value').value;
// const x = function () {
//   const num = Number(document.querySelector('.value').value);
//   console.log(num, typeof num);
//   if (num > 100) {
//     console.log(`enter number less than 100`);
//   }
// };
// document.querySelector('.btn').addEventListener('click', x);
const high = () => {
  document.querySelector('.message').textContent = 'Guess a lower number!';
};
const low = () => {
  document.querySelector('.message').textContent = 'Guess a higher number!';
};
const lost = () => {
  document.querySelector('.message').textContent = 'Game Over!';
};
const guessed = () => {
  document.querySelector('.message').textContent =
    'Congratulations! You guessed it right.';
};
const updateScore = score => {
  document.querySelector('.score').textContent = score;
};
const updateHighScore = highScore => {
  document.querySelector('.highscore').textContent = highScore;
};
const invalidNumber = () => {
  score--;
  updateScore(score);
  instruction();
};
const instruction = () => {
  document.querySelector('.message').textContent =
    'Number must be between 1 to 100!';
  resetValue();
};
const resetValue = () => {
  document.querySelector('.value').value = '';
};
let flag = 1;
const tryAgain = () => {
  flag = 1;
  score = 20;
  updateScore(score);
  resetValue();
  document.querySelector('.message').textContent =
    'Guess the number between 1 to 100!';
};
let score = 20;
let highScore = 0;
const secretNumber = Math.trunc(Math.random() * 100 + 1);
const gameAlgorithm = () => {
  const guessedNumber = Number(document.querySelector('.value').value);
  //   console.log('Guessed Number:', guessedNumber);
  //   console.log('Secret Number:', secretNumber);
  if (flag == 0) {
    document.querySelector('.message').textContent =
      'Start a new game! Click on Try Again';
  } else {
    if (guessedNumber < 1 || guessedNumber > 100) {
      score--;
      updateScore(score);
      invalidNumber();
      instruction();
    } else if (guessedNumber == secretNumber) {
      flag = 0;
      guessed();
      score--;
      if (highScore < score) {
        highScore = score;
        updateHighScore(highScore);
      }
    } else if (guessedNumber > secretNumber) {
      score--;
      updateScore(score);
      high();
    } else {
      score--;
      updateScore(score);
      low();
    }
    resetValue();
  }
};
document.querySelector('.btn').addEventListener('click', gameAlgorithm);
document.querySelector('#tr-btn').addEventListener('click', tryAgain);
