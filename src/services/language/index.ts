import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import storage from "~utilities/storage";
import FaResources from "./locales/fa";
import EnResources from "./locales/en";
import { languages } from "./helpers";
import type { TLanguages } from "./types";

export const defaultNS = "global";

export const resources = {
    en: EnResources,
    fa: FaResources,
} as Record<TLanguages, typeof FaResources>;

export const defaultLanguage: TLanguages = Object.entries(
    languages
)[0][0] as TLanguages;

i18n.use(initReactI18next).init({
    lng: storage.localStorage.get("language") || defaultLanguage,
    ns: Object.entries(resources[defaultLanguage]).map(([key]) => key),
    defaultNS,
    resources,
});

export default i18n;
