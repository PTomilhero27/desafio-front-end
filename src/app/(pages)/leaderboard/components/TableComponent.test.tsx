import { cleanup, render, screen } from "@testing-library/react";
import TableComponent from "./TableComponent";

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("TableComponent", () => {
  it("renders the TableComponent with correct data", () => {
    render(<TableComponent />);

    expect(screen.getAllByText("Pedro Tomilhero").length).toBeGreaterThan(0);

    expect(screen.getByText("Nome do Vendedor")).toBeInTheDocument();

    expect(screen.getByText("Total de Vendas")).toBeInTheDocument();
  });
});
