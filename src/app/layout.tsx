import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toast/toaster";
import { Providers } from "@/context/provider";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const poppins = Poppins({
  weight: ["400", "700", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  fallback: ["system-ui", "sans-serif"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const cookieStore = cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "pt";
  const namespaces = ["common"];

  if (!["en", "es", "pt"].includes(locale)) {
    redirect(`/${"pt"}`);
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers locale={locale} namespaces={namespaces}>
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
