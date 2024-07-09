"use client";

import { ReactNode, useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18next, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import i18nConfig from "../../next-i18next.config";

const initI18next = async (lng: string, ns: string[]) => {
  const i18nInstance = i18next.createInstance();

  const options: InitOptions = {
    lng,
    ns,
    fallbackLng: i18nConfig.i18n.defaultLocale,
    supportedLngs: i18nConfig.i18n.locales,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  };

  await i18nInstance.use(initReactI18next).use(HttpBackend).init(options);

  return i18nInstance;
};

interface Props {
  children: ReactNode;
  locale: string;
  namespaces: string[];
}

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
}: Props) {
  const [i18n, setI18n] = useState<any>();

  useEffect(() => {
    (async () => {
      const instance = await initI18next(locale, namespaces);
      setI18n(instance);
    })();
  }, [locale, namespaces]);

  if (!i18n) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
