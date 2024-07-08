"use client";
import React from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";
import CustomLegend from "./customLegend";

interface BarChartProps {
  data: any[];
  bars: { key: string; color: string; name: string; value: number }[];
}

const StackedBarChartComponent: React.FC<BarChartProps> = ({ data, bars }) => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="70%">
        <BarChart
          barCategoryGap="35%"
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <Tooltip />
          {bars.map((bar) => (
            <Bar
              radius={[2, 2, 0, 0]}
              key={bar.key}
              dataKey={bar.key}
              stackId="a"
              fill={bar.color}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
      <CustomLegend items={bars} />
    </div>
  );
};

export default StackedBarChartComponent;
