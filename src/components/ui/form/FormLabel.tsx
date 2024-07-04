import * as React from "react";
import { Label } from "@/components/ui/label";
import useFormField from "./useFormField";
import { cn } from "@/lib/utils";
import * as LabelPrimitive from "@radix-ui/react-label";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

export default FormLabel;
