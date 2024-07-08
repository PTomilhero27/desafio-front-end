"use client";
import React from "react";
import CardComponent from "@/components/card/card";
import Chart from "./chart";

const data = [
  { name: "Jan", TD: 340, RIKO: 280, Blue: 290 },
  { name: "Fev", TD: 300, RIKO: 230, Blue: 350 },
  { name: "Mar", TD: 260, RIKO: 150, Blue: 360 },
  { name: "Abr", TD: 210, RIKO: 120, Blue: 280 },
  { name: "Mai", TD: 220, RIKO: 160, Blue: 210 },
  { name: "Jun", TD: 240, RIKO: 350, Blue: 210 },
  { name: "Jul", TD: 310, RIKO: 340, Blue: 250 },
  { name: "Set", TD: 300, RIKO: 300, Blue: 230 },
  { name: "Ago", TD: 280, RIKO: 290, Blue: 290 },
  { name: "Nov", TD: 180, RIKO: 230, Blue: 230 },
  { name: "Dez", TD: 150, RIKO: 150, Blue: 200 },
];

const lines = [
  { name: "TD Consultoria", key: "TD", color: "#800080" },
  { name: "RIKO Plataforma", key: "RIKO", color: "#FF0000" },
  { name: "Blue Serviços", key: "Blue", color: "#00FF00" },
];

const PlatformChart: React.FC = () => {
  return (
    <CardComponent title="Plataformas" description="" export={true}>
      <div className="relative flex justify-center items-center w-full h-full">
        <div className="w-full h-full absolute -left-[35px]">
          <Chart data={data} lines={lines} />
        </div>
      </div>
    </CardComponent>
  );
};

export default PlatformChart;
