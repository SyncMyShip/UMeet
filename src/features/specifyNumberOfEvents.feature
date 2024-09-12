Feature: Specify Number of Events
    Scenario: When user hasn’t specified a number, 32 events are shown by default.
        Given a user searches for events
        When a user doesn't define a specific number of events
        Then a list of 32 events will be returned

    Scenario: User can change the number of events displayed.
        Given a user searches for events
        When a user has defined a specific number of events
        Then a list of events, equal to the number specified by the user, will be returned