import React from "react";

interface CustomLegendProps {
  items: { key: string; color: string; name: string }[];
  hiddenItems: string[];
  onToggle: (key: string) => void;
  border?: number;
}

const CustomLegend: React.FC<CustomLegendProps> = ({
  items,
  hiddenItems,
  onToggle,
  border = 2,
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
      {items.map((item) => (
        <div
          key={item.key}
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: 20,
            cursor: "pointer",
          }}
          onClick={() => onToggle(item.key)}
        >
          <div
            style={{
              width: 12,
              height: 12,
              backgroundColor: hiddenItems.includes(item.key)
                ? "#d3d3d3"
                : item.color,
              borderRadius: border,
              marginRight: 5,
            }}
          ></div>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CustomLegend;
