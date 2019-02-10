// Your code goes here
var game = confirm('Do you want to play a game?');
var lowPrize = 5;
var startPrize;
var firstNum;
var gameNum;
var hightPrize = 10;
var prize = 0;
var guess = 3;

if (game === false) {
  alert('You did not become a millionaire, but can');
}
while (guess) {
  if (guess === 3) {
    startPrize = hightPrize;
  }
  gameNum = Math.floor(Math.random() * (lowPrize + 1));
  firstNum = prompt('Please enter a number from 0 to ' + (lowPrize) + '\n' +
    'Attempts left: ' + (guess--) + '\n' +
    'Total prize: ' + (prize) + '\n' +
    'Pasible prize on current attempt: ' + hightPrize);

  if (gameNum === firstNum) {
    prize += hightPrize;
    guess = 3;
    lowPrize *= 2;
    hightPrize = startPrize * 3;
    alert('Congratulation! Your prize is: ' + prize + ' Do you want to continue?');
  } else {
    hightPrize = Math.floor(hightPrize / 2);
  }
  if (guess === 0) {
    alert('Thank you for a game. Your prize is: ' + prize);
    game = confirm('Do you want to play again?');
  }

}