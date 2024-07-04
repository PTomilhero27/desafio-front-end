import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import Layout from "@/components/layout/layout";

export const metadata: Metadata = {
  title: {
    default: "Blue",
    template: "%s",
  },
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return <Layout>{children}</Layout>;
}
