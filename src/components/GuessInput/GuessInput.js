import React from "react";

function GuessInput() {
  const [receivedAnswer, setReceivedAnswer] = React.useState('')

  return (
    <>
      <form 
        className="guess-input-wrapper"
        onSubmit={event => {
          event.preventDefault()
          console.log('received: ', receivedAnswer)
          setReceivedAnswer('')
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
          required
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
