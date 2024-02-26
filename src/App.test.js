import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { bookingSlots } from "./constants/constants";
import { initializeTimes, updateTimes } from "./App";

const mockContextValue = {
  availableTimes: [],
  dispatch: () => { },
  onFormSubmit: () => { },
};

test('Renders the BookingForm heading', () => {
  render(
    <BookingForm availableTimes={mockContextValue.availableTimes} dispatch={mockContextValue.dispatch} onFormSubmit={mockContextValue.onFormSubmit}></BookingForm>
  );
  const headingElement = screen.getByText(/book now/i);
  expect(headingElement).toBeInTheDocument();
})


test('initializeTimes returns the correct expected value', () => {
  const result = initializeTimes();
  expect(result).toEqual(bookingSlots);
})

test('check if updateTimes returns the same value as the input', () => {
  const state = bookingSlots;
  const action = { type: 'SET_TIMES', payload: '2022-12-12' };
  const result = updateTimes(state, action);
  expect(result).toEqual(state);
})