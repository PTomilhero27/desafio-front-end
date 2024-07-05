"use client";
import { FC, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import useSidebarStore from "@/store/sidebarStore";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const closeSidebar = useSidebarStore((state) => state.closeSidebar);
  const openSidebar = useSidebarStore((state) => state.openSidebar);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(true);

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 767) {
      closeSidebar();
      setIsSmallScreen(true);
    } else {
      openSidebar();
      setIsSmallScreen(false);
    }
  }, [closeSidebar, openSidebar]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <>
      {isOpen && isSmallScreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`${
          isSmallScreen ? "fixed inset-y-0 left-0 w-64 z-50" : "relative"
        } bg-white shadow-lg p-4`}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Sidebar;
