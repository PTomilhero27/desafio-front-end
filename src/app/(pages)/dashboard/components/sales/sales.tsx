import React from "react";
import CardComponent from "@/components/card/card";
import CardItem from "./card-item";

interface CardData {
  bgColor: string;
  bgIconColor: string;
  icon: "sales" | "contracts" | "tag" | "newContracts";
  title: string;
  description: string;
  percentage: string;
}

const Sales: React.FC = () => {
  const cardsData: CardData[] = [
    {
      bgColor: "#FFE2E5",
      bgIconColor: "#FA5A7D",
      icon: "sales",
      title: "R$ 1,000",
      description: "Total de vendas",
      percentage: "+8% a mais que ontem",
    },
    {
      bgColor: "#FFF4DE",
      bgIconColor: "#FF947A",
      icon: "contracts",
      title: "300",
      description: "Total de contratos",
      percentage: "+5% a mais que ontem",
    },
    {
      bgColor: "#DCFCE7",
      bgIconColor: "#3CD856",
      icon: "tag",
      title: "5",
      description: "Implantadas",
      percentage: "+1,2% a mais que ontem",
    },
    {
      bgColor: "#F3E8FF",
      bgIconColor: "#BF83FF",
      icon: "newContracts",
      title: "8",
      description: "Novos contratos",
      percentage: "0,5% a mais que ontem",
    },
  ];

  return (
    <div>
      <CardComponent
        export={true}
        title="Vendas hoje"
        description="Resumo de vendas"
      >
        <div className="flex gap-4">
          {cardsData.map((card, index) => (
            <CardItem
              key={index}
              bgColor={card.bgColor}
              bgIconColor={card.bgIconColor}
              icon={card.icon}
              title={card.title}
              description={card.description}
              percentage={card.percentage}
            />
          ))}
        </div>
      </CardComponent>
    </div>
  );
};

export default Sales;
