# UMeet

UMeet is a PWA (progressie web application) built with React and utilizing a TDD (test-driven development) approach. This application uses the Google Calendar API to fetch upcoming events.



## User Stories

#### 1. Show/Hide Event Details
As a user,\
I should be able to show/hide event details\
So that I can view/hide the details about a specific event.

#### 2. Specify Number of Events
As a user,\ 
I should be able to filter the number of events returned\
So that I can specify how many events are shown to me at a time.

#### 3. Use the App When Offline
As a user,\
I should be able to use UMeet offline\
So that I can continue to use UMeet without internet connection.

#### 4. Add an App Shortcut to the Home Screen
As a user,\ 
I should be able to add an app shortcut to my Home Screen\
So that I can easily access UMeet.

#### 5. Display Charts Visualizing Event Details
As a user,\
I should be able to see a visual representation of events\
So that I can see the events in my area represented in a different format.



## Gherkin's (Given - When - Then)

#### 1. Filter Events by City
- Given a list of events has populated
- When user filters results by city
- Then the events returned will only be relevant to the searched city

#### 2. Show Event Details
- Given a list of events has been populated
- When user clicks on "show details" button on an event
- Then the event element will expend to show event details\

#### 3. Hide Event Details
- Given an event showing the expanded details
- When user clicks on "hide details" button
- Then the event element will collapse to hide event details

#### 4. Specify Number of Events
- Given a user searches for events
- When a user defines the number of events
- Then only a list with that number of events will be returned

#### 5. Use the App When Offline
- Given internet connection is lost
- When a user tries to interact with the app
- Then the app still works as intended

#### 6. Add an App Shortcut to the Home Screen
- Given the application is loaded 
- When a user selects "add to home screen" 
- Then a shortcut to UMeet will be accessible from the device's Home Screen

#### 7. Display Charts Visualizing Event Details
- Given a list of events is populated
- When a user chooses to view data with visualization
- Then data visualization is displayed in reference to the events listed