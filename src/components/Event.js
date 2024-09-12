// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <li className="event" id="event">
            <div className="event-summary">
                <h2>{event.summary}</h2>
                <p>{event.location}</p>
                <p>{event.created}</p>
            </div>
            {showDetails ? (
                <div className="details" id="details">
                    <p>{event.description}</p>
                </div>
            ) : null}
            <button className="show-details-btn"
                onClick={() => setShowDetails(!showDetails)}
                >
                    {showDetails ? "Hide Details" : "Show Details"}
            </button>
        </li>
    )
}

export default Event;