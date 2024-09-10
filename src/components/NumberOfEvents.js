// src/components/NumberOfEvents.js

import { useState } from "react"
// import PropTypes from 'prop-types'

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [number, setNumber] = useState("32")

  const handleInputChanged = (event) => {
    let value = event.target.value;
    setNumber(value)
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