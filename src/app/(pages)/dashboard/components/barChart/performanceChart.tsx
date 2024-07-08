import React from "react";
import CardComponent from "@/components/card/card";
import CustomBarChart from "./customBarChart";

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

const PerformanceChart: React.FC = () => {
  return (
    <CardComponent title="Rendimento total" description="" export={true}>
      <div className="relative flex justify-center items-center w-full h-full">
        <div className="w-full h-full absolute -left-[30px]">
          <CustomBarChart data={data} bars={bars} />
        </div>
      </div>
    </CardComponent>
  );
};

export default PerformanceChart;
