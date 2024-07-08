import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  value?: number;
  color?: string;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  value = 0,
  color = "#3b82f6",
}) => {
  return (
    <div
      className={cn("h-full flex-1 transition-all")}
      style={{
        transform: `translateX(-${100 - value}%)`,
        backgroundColor: color,
      }}
    />
  );
};

export { ProgressIndicator };
