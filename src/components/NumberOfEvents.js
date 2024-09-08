// src/components/NumberOfEvents.js

import { useState } from "react"
// import PropTypes from 'prop-types'

const NumberOfEvents = ({ setCount }) => {
  const [number, setNumber] = useState("32")

  const handleInputChanged = (event) => {
    let value = event.target.value;
    setNumber(value)
    // value ? setNumber(value) : number // eslint-disable-line no-unused-expressions
  }
 
  return (
    <div id="event-count">
        <input
            type="text"
            className="event-count"
            placeholder="Enter event count"
            value={number}
            onChange={handleInputChanged}
        />
    </div> 
  )
}

export default NumberOfEvents