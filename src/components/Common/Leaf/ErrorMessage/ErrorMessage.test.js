import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage Component", () => {
  it("should display the error message with the correct text", () => {
    const message = "Something went wrong!";
    render(<ErrorMessage message={message} />);
    expect(screen.getByTestId("error-message").textContent).toBe(
      `Error: ${message}`
    );
  });
});
