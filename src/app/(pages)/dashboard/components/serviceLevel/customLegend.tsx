import React from "react";

interface LegendProps {
  items: { key: string; color: string; name: string; value: number }[];
}

const CustomLegend: React.FC<LegendProps> = ({ items }) => {
  return (
    <div className="mt-4">
      <div className="border-t border-gray-200 mb-2"></div>
      <div className="flex justify-center items-center space-x-8">
        {items.map((item, index) => (
          <div key={item.key} className="flex  items-center space-x-2">
            <div className="flex items-baseline">
              <div
                style={{ backgroundColor: item.color }}
                className="w-3 h-3 rounded-full mr-1"
              />
              <div className="">
                <span className="text-xs text-secondary">{item.name}</span>
                <div className="text-xs font-semibold">
                  {item.value.toLocaleString()}
                </div>
              </div>
            </div>

            {index < items.length - 1 && (
              <div className="border-l border-gray-300 h-4"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomLegend;
