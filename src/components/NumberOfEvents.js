// src/components/NumberOfEvents.js

import { useState } from "react"
// import PropTypes from 'prop-types'

const NumberOfEvents = ({ setCount }) => {
  const [number, setNumber] = useState(32)

  const handleInputChanged = (event) => {
    let value = (event.target.value, 15);
    event ? setNumber(value) : number
    // setNumber(isNaN(value) ? 32 : value)
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

// NumberOfEvents.propTypes = {
//   setCurrentNOE: PropTypes.func.isRequired,
//   setErrorAlert: PropTypes.func.isRequired
// }