"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import RouteButton from "./RouteButton";
import { BarChart2 } from "lucide-react";
import { DashboardIcon } from "@/assets/dashboardIcon";

interface Route {
  text: string;
  icon: React.ReactNode;
  active: boolean;
}

const RouteSideBar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname(); // Hook para pegar o pathname atual

  const initialRoutes: Route[] = [
    {
      text: "Dashboard",
      icon: <DashboardIcon width={25} height={25} />,
      active: false,
    },
    {
      text: "Leaderboard",
      icon: <BarChart2 width={25} height={25} />,
      active: false,
    },
  ];

  const [routes, setRoutes] = useState<Route[]>(initialRoutes);

  // Atualiza os botões ativos conforme a rota atual
  useEffect(() => {
    const path = pathname.slice(1); // Remove a barra inicial
    setRoutes((prevRoutes) =>
      prevRoutes.map((route) =>
        route.text.toLowerCase() === path.toLowerCase()
          ? { ...route, active: true }
          : { ...route, active: false }
      )
    );
  }, [pathname]);

  const handleRouteClick = (routeText: string) => {
    const lowerCaseText = routeText.toLowerCase();
    const targetPath = `/${lowerCaseText}`;

    router.push(targetPath);
  };

  return (
    <div className="mt-10">
      {routes.map((route) => (
        <RouteButton
          key={route.text}
          route={route}
          onClick={() => handleRouteClick(route.text)}
        />
      ))}
    </div>
  );
};

export default RouteSideBar;
