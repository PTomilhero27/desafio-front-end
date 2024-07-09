// app/i18n/index.ts
import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend, { HttpBackendOptions } from "i18next-http-backend";
import nextI18nextConfig from "../../../next-i18next.config";
import { getCookie } from "cookies-next";

const initI18next = (lng: string, ns: string[]) => {
  const i18nInstance = i18n.createInstance();

  const options: InitOptions & { backend: HttpBackendOptions } = {
    lng,
    ns,
    fallbackLng: nextI18nextConfig.i18n.defaultLocale,
    supportedLngs: nextI18nextConfig.i18n.locales,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  };

  i18nInstance.use(initReactI18next).use(HttpBackend).init(options);

  return i18nInstance;
};

export function getTranslation(ns: string[]) {
  const lng = getCookie("NEXT_LOCALE") || nextI18nextConfig.i18n.defaultLocale;
  const i18nInstance = initI18next(lng as string, ns);
  return {
    t: i18nInstance.getFixedT(lng as string, ns),
    i18nInstance,
  };
}
