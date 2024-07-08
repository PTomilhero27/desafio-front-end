import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface RouteButtonProps {
  route: {
    text: string;
    icon: ReactNode;
    active: boolean;
  };
  onClick: (routeText: string) => void;
}

const RouteButton: React.FC<RouteButtonProps> = ({ route, onClick }) => {
  return (
    <Button
      variant={route.active ? "primary" : "ghost"}
      className={`${
        route.active ? "text-white" : "text-dark-secondary"
      } text-base w-full mt-4 h-[50px] rounded-2xl gap-4 justify-start`}
      onClick={() => onClick(route.text)}
    >
      {route.icon}
      {route.text}
    </Button>
  );
};

export default RouteButton;
