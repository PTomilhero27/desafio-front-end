import React from "react";
import LineChartComponent from "./LineChartComponent";
import CardComponent from "@/components/card/card";
import CustomLegend from "./customLegend";

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

const LifeChart: React.FC = () => {
  return (
    <CardComponent title="Vidas" description="" export={true}>
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-full h-full">
          <LineChartComponent data={data} lines={lines} />
        </div>
      </div>
    </CardComponent>
  );
};

export default LifeChart;
