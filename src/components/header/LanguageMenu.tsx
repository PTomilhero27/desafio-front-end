"use client";

import { FC, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image, { StaticImageData } from "next/image";
import brazil from "@/assets/icon/brazil.svg";
import unitedStates from "@/assets/icon/united-states.svg";
import spain from "@/assets/icon/spain.svg";
import { getCookie, setCookie } from "cookies-next";

// Definindo tipos para as linguagens
type Language = "pt" | "en" | "es";

interface LanguageData {
  label: string;
  icon: StaticImageData;
}

const LanguageMenu: FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("pt");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const locale = getCookie("NEXT_LOCALE") as Language | undefined;
    if (locale) {
      setSelectedLanguage(locale);
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleChangeLanguage = (locale: Language) => {
    setCookie("NEXT_LOCALE", locale, { maxAge: 60 * 60 * 24 * 30 });
    setSelectedLanguage(locale);
    window.location.reload();
  };

  const languages: Record<Language, LanguageData> = {
    pt: { label: "PT (BR)", icon: brazil },
    en: { label: "EN (US)", icon: unitedStates },
    es: { label: "ES (ES)", icon: spain },
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 focus:outline-none w-1/2 justify-center">
          <Image
            src={languages[selectedLanguage].icon}
            width={30}
            height={30}
            alt={languages[selectedLanguage].label}
          />
          <span className="font-semibold text-xs text-title">
            {languages[selectedLanguage].label}
          </span>
          <ChevronDown className="h-4 w-4 text-title" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-32 bg-white shadow-lg rounded-md p-2">
        {Object.keys(languages).map(
          (key) =>
            key !== selectedLanguage && (
              <DropdownMenuItem
                key={key}
                className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
                onClick={() => handleChangeLanguage(key as Language)}
              >
                <Image
                  src={languages[key as Language].icon}
                  width={20}
                  height={20}
                  alt={languages[key as Language].label}
                  className="mr-2"
                />
                {languages[key as Language].label}
              </DropdownMenuItem>
            )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageMenu;
