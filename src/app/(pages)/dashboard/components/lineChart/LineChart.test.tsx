import { cleanup, render, screen } from "@testing-library/react";
import LifeChart from "./lifeChart";
import LineChartComponent from "./LineChartComponent";
import CustomLegend from "./customLegend";

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("LineChartComponent", () => {
  it("renders the LineChartComponent with correct data", () => {
    const data = [
      { name: "Jan", UltimoMes: 2432, EsteMes: 3700 },
      { name: "Fev", UltimoMes: 2800, EsteMes: 3300 },
      { name: "Mar", UltimoMes: 2000, EsteMes: 3500 },
      { name: "Abr", UltimoMes: 2100, EsteMes: 3000 },
      { name: "Mai", UltimoMes: 2300, EsteMes: 3600 },
      { name: "Jun", UltimoMes: 3600, EsteMes: 4000 },
    ];

    const lines = [
      { key: "UltimoMes", color: "#007DD6", name: "Último mês", value: 3432 },
      { key: "EsteMes", color: "#0AC587", name: "Este mês", value: 4504 },
    ];
    render(<LineChartComponent data={data} lines={lines} />);

    expect(screen.getByText("Último mês")).toBeInTheDocument();
    expect(screen.getByText("Este mês")).toBeInTheDocument();
  });
});

describe("LifeChart Component", () => {
  it("renders the LifeChart component with correct title", () => {
    render(<LifeChart />);

    expect(screen.getByText("Vidas")).toBeInTheDocument();
  });
});

describe("CustomLegend Component", () => {
  it("renders the CustomLegend component with correct items", () => {
    const lines = [
      { key: "UltimoMes", color: "#007DD6", name: "Último mês", value: 3432 },
      { key: "EsteMes", color: "#0AC587", name: "Este mês", value: 4504 },
    ];
    render(<CustomLegend items={lines} />);

    expect(screen.getByText("Último mês")).toBeInTheDocument();
    expect(screen.getByText("Este mês")).toBeInTheDocument();
  });
});
