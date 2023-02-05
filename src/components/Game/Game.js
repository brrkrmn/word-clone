import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [previousGuesses, setPreviousGuesses] = React.useState([])
  
  function addNewGuess(guess) {
    const newGuess = [...previousGuesses]
    newGuess.push(guess)
    setPreviousGuesses(newGuess)  
  }

  return <>
    <GuessResults previousGuesses={previousGuesses} setPreviousGuesses={setPreviousGuesses} />
    <GuessInput addNewGuess={addNewGuess} />
  </>
}

export default Game;