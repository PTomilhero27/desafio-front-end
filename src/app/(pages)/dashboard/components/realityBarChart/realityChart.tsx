import React from "react";
import CardComponent from "@/components/card/card";
import RealityBarChartComponent from "./realityBarChart";

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

const RealityChart: React.FC = () => {
  return (
    <CardComponent title="Realidade" description="" export={true}>
      <div className="relative flex justify-center items-center w-full h-full">
        <div className="w-full h-full ">
          <RealityBarChartComponent data={data} bars={bars} />
        </div>
      </div>
    </CardComponent>
  );
};

export default RealityChart;
