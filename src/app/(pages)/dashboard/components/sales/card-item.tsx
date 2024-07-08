import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { BarChart, FileText, Tag, UserPlus } from "lucide-react";

const iconMap = {
  sales: BarChart,
  contracts: FileText,
  tag: Tag,
  newContracts: UserPlus,
};

interface CardItemProps {
  bgColor: string;
  bgIconColor: string;
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  percentage: string;
}

const CardItem: React.FC<CardItemProps> = ({
  bgColor,
  icon,
  title,
  description,
  percentage,
  bgIconColor,
}) => {
  const IconComponent = iconMap[icon];
  return (
    <Card className={`p-4  rounded-xl`} style={{ backgroundColor: bgColor }}>
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center`}
        style={{ backgroundColor: bgIconColor }}
      >
        <div className={icon === "sales" ? "bg-white rounded" : ""}>
          <IconComponent
            width={20}
            height={20}
            style={{ color: icon === "sales" ? bgIconColor : "white" }}
          />
        </div>
      </div>
      <CardTitle className="text-xl mt-4">{title}</CardTitle>
      <CardDescription className="mt-3 mb-2 text-xs">
        {description}
      </CardDescription>
      <p className="text-[10px] text-[#4079ED]">{percentage}</p>
    </Card>
  );
};

export default CardItem;
