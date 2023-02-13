import React from "react";

function EndGame({ gameStatus, answer, previousGuesses }) {
  {if (gameStatus === 'win') {
    return (
      <div class="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          {' '}
          <strong>
            {previousGuesses.length === 1 
              ? '1 guess'
              : `${previousGuesses.length} guesses`
            }
          </strong>.
        </p>
      </div>
    )
  } else if (gameStatus === 'lose') {
    return(
      <div class="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )
    }
  }
}

export default EndGame;
