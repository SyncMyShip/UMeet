import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { getEvents } from '../api';
import Event from '../components/Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
defineFeature(feature, test => {

    // Scenario 1
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        
        let AppDOM;
        given('a list of events is returned', () => {
            AppDOM = render(<App />) .container.firstChild;
        });

        when('a user view the list of events', async () => {
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        then('the event elements returned should all be collapsed', () => {
            const eventDetails = AppDOM.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
        });
    });


    // Scenario 2
    test('User can expand an event to see details.', ({ given, when, then }) => {
       
        let EventComponent;
        let allEvents;
        given('a list of events', async () => {
            const allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents} />)
            expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
        });

        when('the user clicks on the show details button', async () => {
            const user = userEvent.setup();
            const showDetails = EventComponent.queryByText('Show Details');
            
            await user.click(showDetails);
        });

        then('the event element will expand to show event details', () => {
            const eventDetails = EventComponent.container.querySelector('.details');

            expect(eventDetails).toBeInTheDocument();
        });
    });


    // Scenario 3
    test('User can collapse an event to hide details.', ({ given, when, then }) => {
        
        let EventComponent;
        let allEvents;
        given('an event is showing the expanded details', async () => {
            const allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents} />)
        });

        when('the user clicks on the hide details button', async () => {
            const user = userEvent.setup();
            const hideDetails = EventComponent.queryByText('Hide Details');

            await user.click(hideDetails);
        });

        then('the event element will collapse to hide event details', () => {
            const eventDetails = EventComponent.container.querySelector('.details');

            expect(eventDetails).not.toBeInTheDocument();
        });
    });
});