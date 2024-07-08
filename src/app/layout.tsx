import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "@/context/provider";

const poppins = Poppins({
  weight: ["400", "700", "500", "600"],
  style: ["normal", "italic"],
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
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
