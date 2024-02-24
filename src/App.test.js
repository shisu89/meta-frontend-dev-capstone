import { render, screen } from "@testing-library/react";
import { BookingForm } from './components/Reservations';
import MyContext from "./components/MyContext";
import { bookingSlots } from "./components/constants";
import { initializeTimes } from "./App";

const mockContextValue = {
  availableTimes: [],
  dispatch: () => {}
};

test('Renders the BookingForm heading', () => {
  render(
    <MyContext.Provider value={mockContextValue}>
      <BookingForm />
    </MyContext.Provider>
  );
  const headingElement = screen.getByText(/book now/i);
  expect(headingElement).toBeInTheDocument();
})


test('initializeTimes returns the correct expected value', () => {
  const result = initializeTimes();
  expect(result).toEqual(bookingSlots);
})
