// src/components/NumberOfEvents.js

import { useState } from "react"

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState("32")

  const handleInputChanged = (event) => {
    let value = event.target.value;
      setNumber(value)
    
    let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "The number you entered is invalid"
    } else {
      errorText = ""
    }
    setErrorAlert(errorText)
    setCurrentNOE(value)
  }
 
  return (
    <div id="event-count">
        <input
            type="text"
            className="event-count"
            placeholder="Number of Events:"
            value={number}
            onChange={handleInputChanged}
        />
    </div> 
  )
}

export default NumberOfEvents