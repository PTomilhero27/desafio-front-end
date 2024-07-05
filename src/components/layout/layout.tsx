import React, { ReactNode } from "react";
import Sidebar from "../Sidebar/Sidebar";
import HeaderContainer from "../header/HeaderContainer";
import SidebarContent from "../Sidebar/components/SidebarContent";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex">
      <Sidebar>
        <SidebarContent />
      </Sidebar>
      <div className="w-full flex flex-col flex-grow slide-in">
        <HeaderContainer />
        <main className="flex-grow p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
