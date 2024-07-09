import pt from "./pt/common.json";
import en from "./en/common.json";
import es from "./es/common.json";

type Translations = {
  [key: string]: typeof pt;
};

export const translations: Translations = { pt, en, es };
