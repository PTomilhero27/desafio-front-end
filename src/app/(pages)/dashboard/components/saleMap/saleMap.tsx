import React from "react";
import CardComponent from "@/components/card/card";
import MapChart from "./MapChart";

const SaleMap: React.FC = () => {
  return (
    <CardComponent title="Mapeamento de vendas por UF" description="">
      <div className="flex justify-center items-center w-full h-full">
        <MapChart />
      </div>
    </CardComponent>
  );
};

export default SaleMap;
