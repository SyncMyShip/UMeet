Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default.
        Given a list of events is returned
        When a user view the list of events
        Then the event elements returned should all be collapsed

    Scenario: User can expand an event to see details.
        Given a list of events
        When the user clicks on the show details button
        Then the event element will expand to show event details

    Scenario: User can collapse an event to hide details.
        Given an event is showing the expanded details
        When the user clicks on the hide details button
        Then the event element will collapse to hide event details