import { FC } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { BrasilIcon } from "@/assets/brasilIcon";
import Image from "next/image";
import brazil from "@/assets/icon/brazil.svg";
const LanguageMenu: FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-4 focus:outline-none">
          <Image src={brazil} width={30} height={30} alt="brazil" />

          <span className="font-semibold text-xs text-gray-700">PT (BR)</span>
          <ChevronDown className="h-4 w-4 text-gray-700" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-32 bg-white shadow-lg rounded-md p-2">
        <DropdownMenuItem className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
          PT (BR)
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
          EN (US)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageMenu;
