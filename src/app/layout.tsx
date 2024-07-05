import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "@/context/provider";

const inter = Inter({
  subsets: ["latin"],
  fallback: ["system-ui", "sans-serif"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body style={inter.style}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
