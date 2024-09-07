// src/__tests__/EventList.test.js

import { render } from '@testing-library/react';
import EventList from '../components/EventList';
import { getEvents } from '../api';

describe('<EventList /> component', () => {
    
    test('"list" role exists', () => {
        const EventListComponent = render(<EventList />);
        expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
    })

    test('renders correct number of events', () => {
        const EventListComponent = render(<EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />);
        expect(EventListComponent.getAllByRole("listitem")).toHaveLength(4);
    });

    test('lists correct number of events', async () => {
        const EventListComponent = render(<EventList />)
        const allEvents = await getEvents(); 
        EventListComponent.rerender(<EventList events={allEvents} />);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
      });
});