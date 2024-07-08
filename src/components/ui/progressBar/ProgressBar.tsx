import * as React from "react";
import { ProgressPrimitive } from "./lib/ProgressPrimitive";
import { cn } from "@/lib/utils";
import { ProgressIndicator } from "./ProgressIndicator";

type ProgressProps = React.ComponentPropsWithoutRef<
  typeof ProgressPrimitive.Root
> & {
  value?: number;
  color?: string;
};

const ProgressBar = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value = 0, color = "#3b82f6", ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-gray-200",
      className
    )}
    {...props}
  >
    <ProgressIndicator value={value} color={color} />
  </ProgressPrimitive.Root>
));
ProgressBar.displayName = "Progress";

export { ProgressBar };
