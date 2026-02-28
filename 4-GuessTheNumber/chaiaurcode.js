const { startTransition } = require("react");

let randomNumber = (parseInt(Math.random()*100+1)) ;
const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const Startover = document.querySelector('.resultParas');


const p = document.createElement('p');

let prevGuess = [] ;
let numguess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
    e.preventDefault()
   const guess = parseInt(userinput.value)
   console.log(guess)
   validateGuess(guess)
    })
}

function validateGuess(guess){
 if(isNaN(guess)){
    alert('please enter a valid number')
 } else if(guess < 1){
    alert('please enter a number more than 1')
 } else if(guess > 100){
    alert('please enter a number less than 100')
 } else{
    prevGuess.push(guess);
    if(numguess === 11){
        displayGuess(guess);
        displayMessage(`game Over.random number was ${randomNumber}`);
        endGame()
    } else {
        displayGuess(guess);
        checkGuess(guess);
    }
 }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(` you guessed it right `)
        endGame()
    } else if ( guess < randomNumber){
         displayMessage(`Number is tooo low `)
    } else if ( guess > randomNumber){
         displayMessage(`Number is tooo high `)
    }
};

function displayGuess(guess){
    userinput.value = ''
    guessSlot.innerHTML += `${guess}`
    numguess++;
    remaining.innerHTML =`${11-numguess}`

};

function displayMessage(Message){
 lowOrHi.innerHTML = `<h2>${Message}</h2>`
};

function endGame(){
 userinput.value = ''
 userinput.setAttribute('disabled','')
 p.classList.add('button')
 p.innerHTML = `<h2 id = 'newGame'> start a new game</h2>`
 Startover.appendChild(p)
 playGame = false
 newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = (parseInt(Math.random()*100+1)) ;
        prevGuess = []
        numguess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numguess}`;
        userinput.removeAttribute('disabled')
        Startover.removeChild(p)

        playGame = true
    })
}

