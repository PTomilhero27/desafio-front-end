"use client";
import React from "react";
import CardComponent from "@/components/card/card";
import StackedBarChartComponent from "./stackedBarChartComponent";

const data = [
  { name: "Jan", Expectativa: 2800, Realidade: 3500 },
  { name: "Fev", Expectativa: 3300, Realidade: 3800 },
  { name: "Mar", Expectativa: 3800, Realidade: 1800 },
  { name: "Abr", Expectativa: 3500, Realidade: 2200 },
  { name: "Mai", Expectativa: 2500, Realidade: 1900 },
  { name: "Jun", Expectativa: 2000, Realidade: 2800 },
];

const bars = [
  { key: "Realidade", color: "#00E096", name: "Realidade", value: 2400 },
  { key: "Expectativa", color: "#0095FF", name: "Expectativa", value: 4000 },
];

const ServiceLevel: React.FC = () => {
  return (
    <CardComponent title="Realidade" description="" export={true}>
      <div className="relative flex justify-center items-center w-full h-full">
        <div data-testid="chart-container" className="w-full h-full">
          <StackedBarChartComponent data={data} bars={bars} />
        </div>
      </div>
    </CardComponent>
  );
};

export default ServiceLevel;
