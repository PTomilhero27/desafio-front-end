"use client";

import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import TranslationsProvider from "./translationsProvider";

interface ProvidersProps extends PropsWithChildren {
  locale: string;
  namespaces: string[];
}

export function Providers({ children, locale, namespaces }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TranslationsProvider locale={locale} namespaces={namespaces}>
          {children}
        </TranslationsProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
