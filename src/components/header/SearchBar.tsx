import { Search } from "lucide-react";
import { Input } from "../ui/input";

const SearchBar = () => (
  <Input
    icon={Search}
    classIcon="text-black"
    type="text"
    placeholder="Pesquisar informações"
    className="pl-10 pr-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

export default SearchBar;
