// import React from 'react';
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';

const App = () => {
 const [events, setEvents] = useState([]);
 const [currentNOE, setCurrentNOE] = useState(32);
 const [allLocations, setAllLocations] = useState([]);
 const [currentCity, setCurrentCity] = useState("See all cities");
 const [infoAlert, setInfoAlert] = useState("");
 const [errorAlert, setErrorAlert] = useState("");
 const [warningAlert, setWarningAlert] = useState("");

 const fetchData = async () => {
   const allEvents = await getEvents();
   const filteredEvents = currentCity === "See all cities" ?
     allEvents :
     allEvents.filter(event => event.location === currentCity)
   setEvents(filteredEvents.slice(0, currentNOE));
   setAllLocations(extractLocations(allEvents));
 }

 useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      setWarningAlert("It seems like you are offline, the content may not be up to date.")
    }
   fetchData();
 }, [currentCity, currentNOE]);

 return (
   <div className="App">
     <div className="alert-container">
       {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
       {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
       {WarningAlert.length ? <WarningAlert text={warningAlert} /> : null}
     </div>
     <CitySearch
       allLocations={allLocations}
       setCurrentCity={setCurrentCity}
       setInfoAlert={setInfoAlert}
     />
     <NumberOfEvents
       setCurrentNOE={setCurrentNOE} 
       setErrorAlert={setErrorAlert}
     />
     <EventList events={events} />
   </div>
 );
}

export default App;
