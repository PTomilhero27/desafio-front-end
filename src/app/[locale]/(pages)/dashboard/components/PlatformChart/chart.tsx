import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";
import CustomLegend from "../../utils/customLegend";

interface ChartProps {
  data: any[];
  lines: { key: string; color: string; name: string }[];
}

const Chart: React.FC<ChartProps> = ({ data = [], lines = [] }) => {
  const [hiddenLines, setHiddenLines] = useState<string[]>([]);
  const [maxValue, setMaxValue] = useState<{
    name: string;
    value: number;
    key: string;
  } | null>(null);

  const formatXAxis = (tickItem: string) => {
    const monthNames = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];
    return monthNames[new Date(`${tickItem} 1`).getMonth()];
  };

  const toggleLineVisibility = (key: string) => {
    if (hiddenLines.includes(key)) {
      setHiddenLines(hiddenLines.filter((item) => item !== key));
    } else {
      setHiddenLines([...hiddenLines, key]);
    }
  };

  useEffect(() => {
    const originalConsoleError = console.error;

    console.error = (...args: any[]) => {
      if (typeof args[0] === "string" && /defaultProps/.test(args[0])) {
        return;
      }
      originalConsoleError(...args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    const currentMonthName = formatXAxis(currentMonth.toString());
    let max = { name: "", value: 0, key: "" };

    data.forEach((d) => {
      if (d.name === currentMonthName) {
        lines.forEach((line) => {
          if (d[line.key] > max.value) {
            max = { name: d.name, value: d[line.key], key: line.key };
          }
        });
      }
    });

    setMaxValue(max.value > 0 ? max : null);
  }, [data, lines]);

  return (
    <ResponsiveContainer width="110%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        className="text-xs"
      >
        <CartesianGrid horizontal={true} vertical={false} strokeDasharray="0" />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ className: "text-xs text-gray-500" }}
        />
        <YAxis
          domain={[0, 400]}
          ticks={[0, 100, 200, 300, 400]}
          axisLine={false}
          tickLine={false}
          tick={{ className: "text-xs text-gray-500" }}
        />
        <Tooltip />
        <Legend
          content={
            <CustomLegend
              items={lines}
              hiddenItems={hiddenLines}
              onToggle={toggleLineVisibility}
            />
          }
        />
        {lines.map((line) => (
          <Line
            key={line.key}
            type="basis"
            dataKey={line.key}
            stroke={hiddenLines.includes(line.key) ? "#d3d3d3" : line.color}
            strokeWidth={4}
            dot={false}
            name={line.name}
            hide={hiddenLines.includes(line.key)}
          />
        ))}
        {maxValue && (
          <ReferenceDot
            x={maxValue.name}
            y={maxValue.value - 25}
            r={8}
            fill="red"
            stroke="none"
            isFront={true}
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
