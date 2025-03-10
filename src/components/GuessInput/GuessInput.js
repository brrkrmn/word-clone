import React from "react";

function GuessInput({ addNewGuess, gameStatus }) {
  const [receivedAnswer, setReceivedAnswer] = React.useState('')

  return (
    <>
      <form 
        className="guess-input-wrapper"
        onSubmit={event => {
          event.preventDefault()
          console.log('received: ', receivedAnswer)
          addNewGuess(receivedAnswer)
          setReceivedAnswer('')
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
          required
          disabled={gameStatus !== 'running'}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          maxLength={5}
          id="guess-input" 
          type="text" 
          value={receivedAnswer}
          onChange={(event) => {
             setReceivedAnswer(event.target.value.toUpperCase())
          }}
        />
      </form>
    </>
  )
}

export default GuessInput;
