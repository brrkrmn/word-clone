import React from "react";
import { range } from "../../utils"
import { checkGuess } from "../../game-helpers"

function Guess({ value, answer }) { 
  
  function checkLetters(number) {
    const result = checkGuess(value, answer)
    if(value) {
      return (
        (result[number].status)
      )
    }
  }

  return(
    <p className="guess">
      {range(5).map((num) => {
        return(
          <span key={num} className={`cell ${checkLetters(num)}`}>
            {value ? value[num] : undefined}
          </span>
        )
      })}
    </p>
  )   
}

export default Guess;
