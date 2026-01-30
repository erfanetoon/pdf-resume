import Jalali from "react-date-object/calendars/jalali";
import Persian from "react-date-object/locales/persian_fa";
import Gregorian from "react-date-object/calendars/gregorian";
import English from "react-date-object/locales/gregorian_en";
import type { ILanguageObject, TLanguages } from "./types";

export const languages: Record<TLanguages, ILanguageObject> = {
    en: {
        language: "en",
        direction: "ltr",
        dateObject: { calendar: Gregorian, locale: English }
    },
    fa: {
        language: "fa",
        direction: "rtl",
        dateObject: {
            calendar: Jalali,
            locale: { ...Persian, digits: English.digits }
        }
    }
};

export const getLanguage = ({ language }: { language: TLanguages }) =>
    languages[language];
