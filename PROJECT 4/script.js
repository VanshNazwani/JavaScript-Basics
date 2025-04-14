let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remaining  = document.querySelector('.lastResult');
const loworHI = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess= []
let numGuess = 1

let playGame = true

if(playGame) {
  submit.addEventListener('click', function(e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number')
  }
  else if(guess < 1){
    alert('please enter a valid number')
  }
  else if (guess > 100){
    alert('please enter a valid number')
  }
  else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayguess(guess)
      displaymessage(`Game Over, the number was ${randomNumber}`);
      EndGame()
    }
    else{
      displayguess(guess)
      checkguess(guess)
    }
  }
}

function checkguess(guess){
  if(guess === randomNumber){
    displaymessage('You guessed it right')
    EndGame()
  }
  else if(guess < randomNumber){
    displaymessage('Number is Too LOW')
  }
  else if(guess > randomNumber){
    displaymessage('Number is Too HIGH')
  }
}

function displayguess(guess){
  userinput.value = '';
  guessslot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displaymessage(message){
  loworHI.innerHTML = `<h2>${message}</h2>`;
}

function newGame (){
  const newGamebutton = document.querySelector('#newGame')
  newGamebutton.addEventListener('click', function(e){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuess = [];
    numGuess = 1
    guessslot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`;
    userinput.removeAttribute('disabled')
    startOver.removeChild(p);
    playGame = true;
  });
}

function EndGame(){
  userinput.value = ''
  userinput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id ="newGame"> Start New Game </h2>`
  startOver.appendChild(p);
  playGame = false;
  newGame();
}