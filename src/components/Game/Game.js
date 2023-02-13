import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import EndGame from '../EndGame/EndGame';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [previousGuesses, setPreviousGuesses] = React.useState([])
  
  const [gameStatus, setGameStatus] = React.useState('running')

  function addNewGuess(guess) {
    const newGuesses = [...previousGuesses, guess]
    setPreviousGuesses(newGuesses)  

    if (guess === answer) {
      setGameStatus("win")
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED)
      setGameStatus("lose")
  }

  return <>
    <GuessResults previousGuesses={previousGuesses} setPreviousGuesses={setPreviousGuesses} answer={answer} />
    <GuessInput addNewGuess={addNewGuess} gameStatus={gameStatus} />
    {gameStatus !== 'running' &&
      <EndGame gameStatus={gameStatus} answer={answer} previousGuesses={previousGuesses} />
    }
  </>
}

export default Game;