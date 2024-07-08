import { cleanup, render, screen } from "@testing-library/react";
import Products from "./products";

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("Products Component", () => {
  it("renders the Products component with correct data", () => {
    render(
      <div style={{ width: "100%", height: "100%" }}>
        <Products />
      </div>
    );

    expect(screen.getByText("Top produtos")).toBeInTheDocument();

    expect(screen.getByText("#")).toBeInTheDocument();
    expect(screen.getByText("Produto")).toBeInTheDocument();
    expect(screen.getByText("Alavancagem")).toBeInTheDocument();
    expect(screen.getByText("%")).toBeInTheDocument();
  });
});
