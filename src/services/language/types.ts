import "i18next";
import type Jalali from "react-date-object/calendars/jalali";
import type Persian from "react-date-object/locales/persian_fa";
import type { defaultNS } from "~services/language";
import type Resources from "./locales/fa";

declare module "i18next" {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS;
        resources: typeof Resources;
    }
}

export type TDirections = "rtl" | "ltr";

export type TLanguages = "en" | "fa";

export type TTranslateWords = typeof Resources;

export interface ILanguageObject {
    language: TLanguages;
    direction: TDirections;
    dateObject: { locale: typeof Persian; calendar: typeof Jalali };
}
