// src/__tests__Event.test.js

import { render } from '@testing-library/react';
import Event from "../components/Event"
import mockData from "../mock-data";
import userEvent from '@testing-library/user-event';

const event = mockData[0];

describe('<Event /> component', () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event event={event}/>);
    });
    
    test('renders event details', () => {
        const eventTitle = EventComponent.queryByText(event.summary);
        const eventTime = EventComponent.queryByText(event.created);
        const eventLocation = EventComponent.queryByText(event.location);
        const detailsButton = EventComponent.queryByText('Show Details');

        expect(eventTitle).toBeInTheDocument();
        expect(eventTime).toBeInTheDocument();
        expect(eventLocation).toBeInTheDocument();
        expect(detailsButton).toBeInTheDocument();
    });
    
    // Scenario 1 - An event element is collapsed by default.
    test('event details are hidden by default', () => {
        const eventDetails = EventComponent.container.querySelector('.details');
        expect(eventDetails).not.toBeInTheDocument();
    });

    // Scenario 2 - User can expand an event to see details.
    test('details are shown after user clicks on "Show Details" button', async () => {
        const user = userEvent.setup();
        const showDetailsButton = EventComponent.queryByText('Show Details');
        await user.click(showDetailsButton);

        const eventDetailsDOM = EventComponent.container.firstChild;
        const eventDetails = eventDetailsDOM.querySelector('.details');
        expect(eventDetails).toBeInTheDocument();
    });

    // Scenario 3 - User can collapse an event to hide details.
    test('details are hidden after use clicks on "Hide details" button', async () => {
        const user = userEvent.setup();

        // user clicks "Show Details"
        const showDetailsButton = EventComponent.queryByText('Show Details');
        await user.click(showDetailsButton);
        
        // hide details button should be present for user to click
        const hideDetailsButton = EventComponent.queryByText('Hide Details');
        await user.click(hideDetailsButton);

        // event details should not be visible
        const eventDetailsDOM = EventComponent.container.firstChild;
        const eventDetails = eventDetailsDOM.querySelector('.event-details');
        expect(eventDetails).not.toBeInTheDocument();
    });
});