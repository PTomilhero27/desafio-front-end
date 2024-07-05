import { CardSideBarIcon } from "@/assets/cardSideBarIcon";
import { Button } from "@/components/ui/button";
import { FC } from "react";

interface InfoCardProps {
  title: string;
  description: string;
  buttonText: string;
}

const InfoCard: FC<InfoCardProps> = ({ title, description, buttonText }) => {
  return (
    <div className="relative bg-primary text-white rounded-lg p-4 flex flex-col items-center space-y-4 ">
      <CardSideBarIcon className="z-10" width={50} height={50} />
      <h2 className="text-xl text-center font-medium">{title}</h2>
      <p className="text-center text-xs text-dark-secondary">{description}</p>
      <Button className="z-10 bg-white font-bold text-dark-primary w-32 text-base px-4 py-2">
        {buttonText}
      </Button>
      <div className="absolute -top-[16px] w-full h-full overflow-hidden rounded-2xl">
        <div className="absolute w-40 h-40 bg-[#7f29ff] opacity-30 rounded-full -top-10 -left-20"></div>
        <div className="absolute w-28 h-28 bg-[#7f29ff] opacity-30 rounded-full -bottom-10 -right-11"></div>
      </div>
    </div>
  );
};

export default InfoCard;
