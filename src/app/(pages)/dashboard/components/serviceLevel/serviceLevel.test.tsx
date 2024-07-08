import { render, screen, cleanup } from "@testing-library/react";
import ServiceLevel from "./serviceLevel";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("ServiceLevel Component", () => {
  it("renders the ServiceLevel component with the title 'Realidade'", () => {
    render(<ServiceLevel />);

    expect(
      screen.getByRole("heading", { name: /Realidade/i })
    ).toBeInTheDocument();
  });

  it("renders the ServiceLevel component with the chart container", () => {
    render(<ServiceLevel />);

    const chartContainer = screen.getByTestId("chart-container");
    expect(chartContainer).toBeInTheDocument();
  });

  it("renders the ServiceLevel component with legend items", () => {
    render(<ServiceLevel />);

    expect(screen.getByText("Expectativa")).toBeInTheDocument();
  });
});
