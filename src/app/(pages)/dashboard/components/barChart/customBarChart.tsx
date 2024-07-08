"use client";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomLegend from "../../utils/customLegend";

interface ChartProps {
  data: any[];
  bars: { key: string; color: string; name: string }[];
}

const CustomBarChart: React.FC<ChartProps> = ({ data, bars }) => {
  const [hiddenBars, setHiddenBars] = useState<string[]>([]);

  const toggleBar = (key: string) => {
    setHiddenBars((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  const formatYAxis = (tick: number) => {
    if (tick === 0) return "0";
    return `${tick / 1000}k`;
  };

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="106%" height="90%">
        <BarChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          barCategoryGap="35%"
          className="text-xs"
        >
          <CartesianGrid
            strokeDasharray="0"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ className: "text-xs text-gray-500" }}
          />
          <YAxis
            tick={{ className: "text-xs text-gray-500" }}
            axisLine={false}
            tickLine={false}
            domain={[0, 25000]}
            ticks={[0, 5000, 10000, 15000, 20000, 25000]}
            tickFormatter={formatYAxis}
          />
          <Tooltip />
          {bars
            .filter((bar) => !hiddenBars.includes(bar.key))
            .map((bar) => (
              <Bar
                key={bar.key}
                dataKey={bar.key}
                fill={bar.color}
                name={bar.name}
                radius={[2, 2, 0, 0]}
              />
            ))}
        </BarChart>
      </ResponsiveContainer>
      <CustomLegend
        items={bars}
        hiddenItems={hiddenBars}
        onToggle={toggleBar}
        border={6}
      />
    </div>
  );
};

export default CustomBarChart;
