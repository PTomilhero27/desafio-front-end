import React from "react";
import { cn } from "@/lib/utils";

type FormFieldProps = React.HTMLAttributes<HTMLDivElement>;

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("space-y-2", className)} {...props} />;
  }
);
FormField.displayName = "FormField";
