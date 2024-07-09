import { FC } from "react";
import SearchBar from "./SearchBar";
import AvatarMenu from "./AvatarMenu";
import NotificationIcon from "./NotificationIcon";
import LanguageMenu from "./LanguageMenu";
import HeaderTitle from "./headerTitle";

const HeaderContainer: FC = () => {
  return (
    <header className="flex items-center w-full justify-between p-4 bg-white shadow flex-row ">
      <HeaderTitle />
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
