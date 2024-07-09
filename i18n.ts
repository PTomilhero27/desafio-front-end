import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import i18nConfig from "./next-i18next.config";

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: i18nConfig.i18n.defaultLocale,
    supportedLngs: i18nConfig.i18n.locales,
    defaultNS: "common",
    react: {
      useSuspense: false,
    },
  });

export default i18next;
