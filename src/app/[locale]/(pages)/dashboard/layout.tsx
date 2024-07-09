import { PropsWithChildren } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s | Blue",
  },
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return <> {children} </>;
}
