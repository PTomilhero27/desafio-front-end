import { BlueLogo } from "@/assets/blueLogo";
import RouteSideBar from "./RouteSideBar";
import InfoCard from "./InfoCard";
import ThemeToggle from "./ThemeToggle";
import { getTranslationsForLocale } from "@/lib/translationUtils";

const SidebarContent = () => {
  const t = getTranslationsForLocale();

  return (
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
        title={t.sidebar.cardInfo.title}
        description={t.sidebar.cardInfo.description}
        buttonText={t.sidebar.cardInfo.buttonText}
      />
    </div>
  );
};

export default SidebarContent;
