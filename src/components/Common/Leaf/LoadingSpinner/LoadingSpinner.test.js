import { render, screen } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";

describe("LoadingIndicator Component", () => {
  it("should render the loading spinner", () => {
    render(<LoadingSpinner />);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });
});
