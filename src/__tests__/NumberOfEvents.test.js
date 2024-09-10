// src/__tests__NumberOfEvents.test.js

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import { getEvents } from "../api";


describe('<NumberOfEvents /> component', () => { 
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
  });

  test('render element with role of textbox', () => { 
    const input = NumberOfEventsComponent.queryByRole('textbox');
    expect(input).toBeInTheDocument(); 
  });
 
  test("renders input textbox with default value of 32", () => {
    expect(NumberOfEventsComponent.getByRole("textbox")).toHaveValue("32");
  });

  test("user can change the number of events displayed", async () => {
    const eventCount = NumberOfEventsComponent.getByRole("textbox");
    const user = userEvent.setup(); 
    await user.clear(eventCount)
    await user.type(eventCount, "15");
    const allEvents = await getEvents(); 
    NumberOfEventsComponent.rerender(<NumberOfEvents setCurrentNOE={allEvents} />);   
    expect(eventCount).toHaveValue("15");
  }); 
});