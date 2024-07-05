import { ComponentPropsWithoutRef } from "react";

export function DashboardIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg {...props} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#F5F8F9" />
      <path d="M50 10 A40 40 0 0 1 90 50 L50 50 Z" fill="#8888FF" />
    </svg>
  );
}
