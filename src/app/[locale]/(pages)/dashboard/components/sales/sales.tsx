"use client";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
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
  const { theme } = useTheme();
  const { t } = useTranslation("common");

  const cardsData: CardData[] = [
    {
      bgColor: theme === "dark" ? "#4B5563" : "#FFE2E5",
      bgIconColor: theme === "dark" ? "#9CA3AF" : "#FA5A7D",
      icon: "sales",
      title: "R$ 1,000",
      description: t("dashboard.sales.total_sales"),
      percentage: t("dashboard.sales.more_than_yesterday", { value: "+8%" }),
    },
    {
      bgColor: theme === "dark" ? "#1F2937" : "#FFF4DE",
      bgIconColor: theme === "dark" ? "#6B7280" : "#FF947A",
      icon: "contracts",
      title: "300",
      description: t("dashboard.sales.total_contracts"),
      percentage: t("dashboard.sales.more_than_yesterday", { value: "+5%" }),
    },
    {
      bgColor: theme === "dark" ? "#064E3B" : "#DCFCE7",
      bgIconColor: theme === "dark" ? "#10B981" : "#3CD856",
      icon: "tag",
      title: "5",
      description: t("dashboard.sales.implemented"),
      percentage: t("dashboard.sales.more_than_yesterday", { value: "+1.2%" }),
    },
    {
      bgColor: theme === "dark" ? "#312E81" : "#F3E8FF",
      bgIconColor: theme === "dark" ? "#8B5CF6" : "#BF83FF",
      icon: "newContracts",
      title: "8",
      description: t("dashboard.sales.new_contracts"),
      percentage: t("dashboard.sales.more_than_yesterday", { value: "+0.5%" }),
    },
  ];

  return (
    <div>
      <CardComponent
        export={true}
        title={t("dashboard.sales.sales_today")}
        description={t("dashboard.sales.sales_summary")}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
