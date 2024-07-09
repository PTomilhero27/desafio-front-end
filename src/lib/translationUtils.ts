import { getCookie } from "cookies-next";
import { translations } from "../../public/locales";

/**
 * Função para obter as traduções com base no cookie de localização.
 * @returns As traduções correspondentes à localização.
 */
export const getTranslationsForLocale = (): typeof translations.pt => {
  const locale = (getCookie("NEXT_LOCALE") as string) || "pt";
  return translations[locale];
};
