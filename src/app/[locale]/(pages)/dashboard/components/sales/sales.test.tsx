import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import Sales from "./sales";

describe("Sales Component", () => {
  it("renders the Sales component with correct data", () => {
    render(
      <ThemeProvider>
        <Sales />
      </ThemeProvider>
    );

    expect(screen.getByText("R$ 1,000")).toBeInTheDocument();
    expect(screen.getByText("300")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();

    expect(screen.getByText("Total de vendas")).toBeInTheDocument();
    expect(screen.getByText("Total de contratos")).toBeInTheDocument();
    expect(screen.getByText("Implantadas")).toBeInTheDocument();
    expect(screen.getByText("Novos contratos")).toBeInTheDocument();

    expect(screen.getByText("+8% a mais que ontem")).toBeInTheDocument();
    expect(screen.getByText("+5% a mais que ontem")).toBeInTheDocument();
    expect(screen.getByText("+1,2% a mais que ontem")).toBeInTheDocument();
    expect(screen.getByText("0,5% a mais que ontem")).toBeInTheDocument();
  });
});
