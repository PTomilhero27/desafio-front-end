import { cleanup, render, screen } from "@testing-library/react";
import RealityChart from "./realityChart";
import RealityBarChartComponent from "./realityBarChart";
import CustomLegend from "./customLegend";

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("RealityBarChartComponent", () => {
  it("renders the RealityBarChartComponent with correct data", () => {
    const data = [
      { name: "Jan", Finalizado: 8823, Aguardando: 12122 },
      { name: "Fev", Finalizado: 9423, Aguardando: 14122 },
      { name: "Mar", Finalizado: 7923, Aguardando: 10122 },
      { name: "Abr", Finalizado: 8323, Aguardando: 11122 },
      { name: "Mai", Finalizado: 9623, Aguardando: 15122 },
      { name: "Jun", Finalizado: 10223, Aguardando: 13122 },
      { name: "Jul", Finalizado: 8923, Aguardando: 12122 },
    ];

    const bars = [
      {
        key: "Finalizado",
        color: "#FFC300",
        name: "Contratos finalizados",
        value: 8823,
      },
      { key: "Aguardando", color: "#28A745", name: "Aguardando", value: 12122 },
    ];

    render(<RealityBarChartComponent data={data} bars={bars} />);

    expect(screen.getByText("Contratos finalizados")).toBeInTheDocument();
    expect(screen.getByText("Aguardando")).toBeInTheDocument();
  });
});

describe("RealityChart Component", () => {
  it("renders the RealityChart component with correct title", () => {
    render(<RealityChart />);

    expect(screen.getByText("Realidade")).toBeInTheDocument();
  });
});

describe("CustomLegend Component", () => {
  it("renders the CustomLegend component with correct items", () => {
    const bars = [
      {
        key: "Finalizado",
        color: "#FFC300",
        name: "Contratos finalizados",
        value: 8823,
      },
      { key: "Aguardando", color: "#28A745", name: "Aguardando", value: 12122 },
    ];
    render(<CustomLegend items={bars} />);

    expect(screen.getByText("Contratos finalizados")).toBeInTheDocument();
    expect(screen.getByText("Aguardando")).toBeInTheDocument();
  });
});
