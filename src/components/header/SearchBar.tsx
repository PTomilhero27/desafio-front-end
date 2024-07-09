"use client";
import { FC } from "react";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import useSearchStore from "@/store/searchStore";

const SearchBar: FC = () => {
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Input
      icon={Search}
      classIcon="text-black"
      type="text"
      placeholder="Pesquisar informações"
      className="pl-10 pr-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
