"use client";
import React from "react";
import { AreaChart, Area, Line, Tooltip, ResponsiveContainer } from "recharts";
import CustomLegend from "./customLegend";

interface LineChartProps {
  data: any[];
  lines: { key: string; color: string; name: string; value: number }[];
}

const LineChartComponent: React.FC<LineChartProps> = ({ data, lines }) => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="60%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorlastMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#007DD6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#007DD6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorthisMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0AC587" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0AC587" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip />
          {lines.map((line) => (
            <React.Fragment key={line.key}>
              <Area
                type="monotone"
                dataKey={line.key}
                stroke={line.color}
                fillOpacity={1}
                fill={`url(#color${line.key})`}
              />
              <Line
                type="monotone"
                dataKey={line.key}
                stroke={line.color}
                strokeWidth={2}
                dot={{ r: 3, fill: line.color }}
                activeDot={{ r: 5, fill: line.color }}
              />
            </React.Fragment>
          ))}
        </AreaChart>
      </ResponsiveContainer>
      <CustomLegend items={lines} />
    </div>
  );
};

export default LineChartComponent;
