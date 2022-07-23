import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as en_translation from  './locales/en.js';
import * as de_translation from  './locales/de.js';

const resources = {
  en: {
    translation: en_translation
  },
  de: {
    translation: de_translation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;