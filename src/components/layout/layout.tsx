"use client";
import React, { ReactNode, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import HeaderContainer from "../header/HeaderContainer";
import SidebarContent from "../Sidebar/components/SidebarContent";
import { motion } from "framer-motion";
import useSidebarStore from "@/store/sidebarStore";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const openSidebar = useSidebarStore((state) => state.openSidebar);

  useEffect(() => {
    if (window.innerWidth > 767) {
      openSidebar();
    }
  }, [openSidebar]);

  return (
    <div className="h-screen flex">
      <Sidebar>
        <SidebarContent />
      </Sidebar>
      <motion.div
        className="w-full flex flex-col flex-grow"
        initial={{ marginLeft: window.innerWidth > 767 ? "-256px" : "0" }}
        animate={{ marginLeft: window.innerWidth > 767 ? "0" : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <HeaderContainer />
        <main className="flex-grow p-4 overflow-auto">{children}</main>
      </motion.div>
    </div>
  );
};

export default Layout;
