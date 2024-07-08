import { FC } from "react";
import { BlueLogo } from "@/assets/blueLogo";
import RouteSideBar from "./RouteSideBar";
import InfoCard from "./InfoCard";
import ThemeToggle from "./ThemeToggle";

const SidebarContent: FC = () => (
  <div className="relative bg-white h-full w-full justify-between max-w-[300px] flex flex-col py-16 p-5">
    <div>
      <div className="absolute top-0 left-0">
        <ThemeToggle />
      </div>
      <div className="flex items-center gap-4">
        <BlueLogo
          className="rounded-lg shadow-md shadow-primary"
          width={45}
          height={45}
        />
        <h1 className="text-dark-primary text-3xl font-semibold">Blue</h1>
      </div>
      <nav>
        <RouteSideBar />
      </nav>
    </div>
    <InfoCard
      title="Conheça a Blue"
      description="Saiba mais informações sobre a Blue, uma operadora de saúde Health Tech."
      buttonText="Conheçer"
    />
  </div>
);

export default SidebarContent;
