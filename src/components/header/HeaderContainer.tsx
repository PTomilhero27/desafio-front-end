"use client";
import { FC } from "react";
import SearchBar from "./SearchBar";
import AvatarMenu from "./AvatarMenu";
import NotificationIcon from "./NotificationIcon";
import LanguageMenu from "./LanguageMenu";
import { Menu } from "lucide-react";
import useSidebarStore from "@/store/sidebarStore";

const HeaderContainer: FC = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

  return (
    <header className="flex items-center w-full justify-between p-4 bg-white shadow flex-row ">
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1 className="text-2xl font-bold md:flex hidden text-gray-800">
          Dashboard
        </h1>
        <button
          className="md:hidden block text-gray-800 focus:outline-none"
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      <div className="items-center justify-end space-x-4 flex flex-row gap-4 w-full">
        <div className={`gap-4 hidden  lg:flex`}>
          <SearchBar />
          <LanguageMenu />
          <NotificationIcon />
        </div>
        <AvatarMenu />
      </div>
    </header>
  );
};

export default HeaderContainer;
