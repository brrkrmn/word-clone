import React from "react";

function GuessResults({ previousGuesses }) {
  
  return (
    <div className="guess-results">
      {previousGuesses.map((previousGuess, index) => {
        return(
          <p 
            className="guess"
            key={index}
          >
            {previousGuess}
          </p>
        )
      })}
    </div>
  );
}

export default GuessResults;
