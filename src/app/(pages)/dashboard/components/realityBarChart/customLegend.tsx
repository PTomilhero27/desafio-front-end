import React from "react";
import { BriefcaseBusiness, Briefcase } from "lucide-react";
interface LegendProps {
  items: { key: string; color: string; name: string; value: number }[];
}

const iconMap: { [key: string]: React.ElementType } = {
  "Contratos finalizados": BriefcaseBusiness,
  Aguardando: Briefcase,
};

const CustomLegend: React.FC<LegendProps> = ({ items }) => {
  return (
    <div className="mt-4">
      <div className="flex flex-col space-y-4">
        {items.map((item) => {
          const Icon = iconMap[item.name] || BriefcaseBusiness;
          return (
            <div key={item.key} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  style={{
                    backgroundColor:
                      item.key === "Finalizado" ? "#E2FFF3" : "#FFF4DE",
                  }}
                  className="p-2 flex justify-center items-center rounded-md"
                >
                  <Icon
                    width={15}
                    height={15}
                    color={item.key === "Finalizado" ? "#4AB58E" : "#FFAE13"}
                  />
                </div>
                <div className=" w-full max-w-[216px] ">
                  <div className="text-[10px] font-semibold text-gray-800">
                    {item.name}
                  </div>
                  <div className="text-[8px] text-secondary">Global</div>
                </div>
              </div>

              <span
                className={`text-sm text-[${
                  item.key === "Finalizado" ? "#4AB58E" : "#FFAE13"
                }]`}
              >
                {item.value.toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomLegend;
