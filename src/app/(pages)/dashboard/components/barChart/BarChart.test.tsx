import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import PerformanceChart from "./performanceChart";
import CustomBarChart from "./customBarChart";

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("CustomBarChart Component", () => {
  it("renders the CustomBarChart component with correct data", () => {
    const data = [
      { name: "Segunda", Aguardando: 12000, Implantadas: 8000 },
      { name: "Terça", Aguardando: 15000, Implantadas: 10000 },
      { name: "Quarta", Aguardando: 8000, Implantadas: 22000 },
      { name: "Quinta", Aguardando: 17000, Implantadas: 14000 },
      { name: "Sexta", Aguardando: 10000, Implantadas: 8000 },
      { name: "Sábado", Aguardando: 14000, Implantadas: 11000 },
      { name: "Domingo", Aguardando: 20000, Implantadas: 13000 },
    ];

    const bars = [
      { key: "Aguardando", color: "#0095FF", name: "Aguardando" },
      { key: "Implantadas", color: "#00E096", name: "Implantadas" },
    ];
    render(<CustomBarChart data={data} bars={bars} />);

    expect(screen.getByText("Aguardando")).toBeInTheDocument();
    expect(screen.getByText("Implantadas")).toBeInTheDocument();
  });
});

describe("PerformanceChart Component", () => {
  it("renders the PerformanceChart component with correct title", () => {
    render(<PerformanceChart />);

    expect(screen.getByText("Rendimento total")).toBeInTheDocument();
  });
});
