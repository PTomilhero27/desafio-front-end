"use client";
import { useState } from "react";
import RouteButton from "./RouteButton";
import { BarChart2 } from "lucide-react";
import { DashboardIcon } from "@/assets/dashboardIcon";
interface Route {
  text: string;
  icon: React.ReactNode;
  active: boolean;
}

const RouteSideBar: React.FC = () => {
  const initialRoutes: Route[] = [
    {
      text: "Dashboard",
      icon: <DashboardIcon width={25} height={25} />,
      active: true,
    },
    {
      text: "Leaderboard",
      icon: <BarChart2 width={25} height={25} />,
      active: false,
    },
  ];

  const [routes, setRoutes] = useState<Route[]>(initialRoutes);

  const handleRouteClick = (routeText: string) => {
    setRoutes((prevRoutes) =>
      prevRoutes.map((route) =>
        route.text === routeText
          ? { ...route, active: true }
          : { ...route, active: false }
      )
    );
  };

  return (
    <div className="mt-10">
      {routes.map((route) => (
        <RouteButton
          key={route.text}
          route={route}
          onClick={handleRouteClick}
        />
      ))}
    </div>
  );
};

export default RouteSideBar;
