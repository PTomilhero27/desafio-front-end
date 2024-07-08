import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";

const AvatarMenu = () => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-2 focus:outline-none">
          <div className="flex w-44 gap-4">
            <Avatar className="rounded-lg">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>PT</AvatarFallback>
            </Avatar>

            <div className="flex items-start flex-col justify-center">
              <p className="m-0 text-black font-semibold text-xs">
                Pedro Tomilhero
              </p>
              <span className="text-secondarys text-black text-[10px] text-left">
                Desenvolvedor
              </span>
            </div>
          </div>

          <ChevronDown className="h-5 w-5 text-gray-600" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-48 bg-white shadow-lg rounded-md p-2">
        <DropdownMenuItem
          onClick={() => router.push("/profile")}
          className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
        >
          Perfil
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-2 border-t border-gray-200" />
        <DropdownMenuItem
          onClick={() => router.push("/login")}
          className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
        >
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarMenu;
