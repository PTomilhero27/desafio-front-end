"use client";
import { FC, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import useSidebarStore from "@/store/sidebarStore";

const HeaderTitle: FC = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const pathname = usePathname();
  const [title, setTitle] = useState("Dashboard");

  useEffect(() => {
    if (pathname) {
      if (pathname.includes("/dashboard")) {
        setTitle("Dashboard");
      } else if (pathname.includes("/leaderboard")) {
        setTitle("Leaderboard");
      } else if (pathname.includes("/profile")) {
        setTitle("Perfil");
      } else {
        setTitle("Other Page");
      }
    }
  }, [pathname]);

  return (
    <div className="flex items-center justify-between w-full md:w-auto">
      <h1 className="text-2xl font-bold md:flex hidden text-title">{title}</h1>
      <button
        className="md:hidden block text-gray-800 focus:outline-none"
        onClick={toggleSidebar}
      >
        <Menu className="h-6 w-6" />
      </button>
    </div>
  );
};

export default HeaderTitle;
