let numbers = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10
]


let mainDiv = document.getElementById('app');


// creating title
let title = document.createElement('h1');
title.innerText = 'You got the number!';
mainDiv.appendChild(title);



let number = Math.floor(Math.random() * 10 + 1);
let guessed = false; 



do {
  let guess = parseInt(prompt("Input a number between 1 and 10"), 10);
  if (guess < number) {
    alert("the number is bigger")
  } else if (guess > number) {
    alert("the number is smaller")
  } else {
    alert("you guessed the right number")
    guessed = true;
  }
}
while (!guessed)

