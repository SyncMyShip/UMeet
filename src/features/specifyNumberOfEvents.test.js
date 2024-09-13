import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { getEvents } from '../api';
import Event from '../components/Event';
import NumberOfEvents from '../components/NumberOfEvents';
import EventList from '../components/EventList';



const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppComponent;
    let NumberOfEventsComponent;
    let AppDOM;
    
    test('When user hasn’t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        given('a user searches for events', () => {
            AppDOM = render(<App setCurrentNOE={() => { }} />).container.firstChild;
        });

        when('a user doesn\'t define a specific number of events', () => {
        });

        then('a list of 32 events will be returned', async () => {
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            }); 
        });
    });

    test('User can change the number of events displayed.', ({ given, when, then }) => {
        given('a user searches for events', () => {
            AppComponent = render(<App />).container.firstChild;
        });

        when('a user has defined a specific number of events', async () => {           
            const EventListDOM = AppComponent.querySelector('#event-list');
            NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={() => { }}/>, { container: EventListDOM }); 
            
            const eventCount = NumberOfEventsComponent.getByRole("textbox");
            const user = userEvent.setup(); 

            await user.type(eventCount, "{backspace}{backspace}15");
        });

        then('a list of events, equal to the number specified by the user, will be returned', async () => {
            expect(NumberOfEventsComponent.getByRole("textbox")).toHaveValue("15");
        });
    });

})