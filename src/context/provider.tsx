"use client";

import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
