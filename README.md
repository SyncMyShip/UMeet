# UMeet

UMeet is a PWA (progressive web application) built with React and utilizing a TDD (test-driven development) approach. This application uses the Google Calendar API to fetch upcoming events.


## Technologies

### Frontend
- React

### Backend
- Google Calendar API
- AWS Lambda
- Serverless

### Testing
- Jest
- Puppeteer

### Visualization 
- Recharts



## User Stories

```
Feature 1: Filter Events by City
As a user,
I should be able to filter events by city
So that I can only view events in my area of interest.

Feature 2: Show/Hide Event Details
As a user,
I should be able to show/hide event details
So that I can view/hide the details about a specific event.

Feature 3: Specify Number of Events
As a user,
I should be able to filter the number of events returned
So that I can specify how many events are shown to me at a time.

Feature 4: Use the App When Offline
As a user,
I should be able to use UMeet offline
So that I can continue to use UMeet without internet connection.

Feature 5: Add an App Shortcut to the Home Screen
As a user,
I should be able to add an app shortcut to my Home Screen
So that I can easily access UMeet.

Feature 6: Display Charts Visualizing Event Details
As a user,
I should be able to see a visual representation of events
So that I can see the events in my area represented in a different format.
```



## Gherkin's (Given - When - Then)

```
Feature 1: Filter Events by City

    Scenario 1: When user hasn't searched for a city, show upcoming events from all cities.
    - Given a user hasn't searched for a specific city
    - When a user opens the app
    - Then the user should see a list of all upcoming events in all cities

    Scenario 2: User should see a list of suggestions when they search for a city.
    - Given a user has searched for a specific city
    - When a user view events
    - Then the user should see a list of all upcoming events in that specific city

    Scenario 3: User can select a city from the suggested list.
    - Given a user has selected a city from the suggested list
    - When the user views the list of events in the app
    - Then the app should show the suggested city and the user should see a list of events specific to that suggested city


Feature 2: Show/Hide Event Details

    Scenario 1: An event element is collapsed by default.
    - Given a list of events is returned
    - When a user views a list of events
    - Then the event elements returned should all be collapsed

    Scenario 2: User can expand an event to see details.
    - Given a list of events
    - When user clicks on "show details" button on an event
    - Then the event element will expand to show event details

    Scenario 3: User can collapse an event to hide details.
    - Given an event showing the expanded details
    - When user clicks on "hide details" button
    - Then the event element will collapse to hide event details


Feature 3: Specify Number of Events

    Scenario 1: When user hasn't specified a number, 32 events are shown by default.
    - Given a user searches for events
    - When a user doesn't define a specific number
    - Then a list of 32 events will be returned

    Scenario 2: User can change the number of events displayed.
    - Given a user searches for events
    - When a user has defined a specific number of events
    - Then a list of events, equal to the specified number, will be returned


Feature 4: Use the App When Offline

    Scenario 1: Show cached data when there's no internet connection.
    - Given a user has no internet access
    - When a user tries to view information already cached in the app
    - Then the app will return cached data

    Scenario 2: Show error when user changes search settings (city, number of events).
    - Given a user has no internet access
    - When a user tries to make changes within the app
    - Then the app will return an error to the user


Feature 5: Add an App Shortcut to the Home Screen

    Scenario 5: User can install the meet app as a shortcut on their device home screen.
    - Given the application is loaded on a user's device
    - When a user selects "add to home screen" 
    - Then a shortcut to UMeet will be accessible from the device's Home Screen


Feature 6: Display Charts Visualizing Event Details

    Scenario 6: Show a chart with the number of upcoming events in each city.
    - Given a user has searched for events in a specific city
    - When a user chooses to view data in the form of a chart
    - Then data visualization is displayed in reference to the relevant events
```


## Local Testing

1. Clone repo:
```
git clone https://github.com/SyncMyShip/UMeet.git
```
2. Switch to project directory:
```
cd UMeet
```
3. Start app:
```
npm run start
```
4. Run tests:
```
npm run test
```