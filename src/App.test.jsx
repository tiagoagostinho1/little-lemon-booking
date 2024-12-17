import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText(
    "Please fill in the form below accurately to enable us serve you nicely."
  );
  expect(headingElement).toBeInTheDocument();
});

test("Check booking button title", () => {
  render(<BookingForm />);
  const title = screen.getByText("Reserve");
  expect(title).toBeInTheDocument();
});
