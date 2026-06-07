import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import storage from "~utilities/storage";
import { defaultLanguage } from "~services/language";
import { getLanguage } from "~services/language/helpers";
import type { TLanguages } from "~services/language/types";
import OneColumnMode from "./modes/oneColumn";
import TwoColumnMode from "./modes/twoColumn";

const App = () => {
    const [mode] = useState<"oneColumn" | "twoColumn">("twoColumn");

    const [isSetShortcut, setIsSetShortcut] = useState(false);

    const {
        i18n: { language, changeLanguage }
    } = useTranslation();

    const handleKeyboardShortcut = useCallback(
        (e: KeyboardEvent) => {
            if (!e.ctrlKey || !e.shiftKey) {
                return undefined;
            }

            const language =
                storage.localStorage.get("language") || defaultLanguage;

            if (e.key.toLowerCase() === "l") {
                const nextLanguage = language === "fa" ? "en" : "fa";

                changeLanguage(nextLanguage, () => {
                    storage.localStorage.set("language", nextLanguage);
                });

                return undefined;
            }
        },
        [changeLanguage]
    );

    useEffect(() => {
        if (!isSetShortcut) {
            document.addEventListener("keydown", handleKeyboardShortcut);

            setIsSetShortcut(true);
        }
        return () => {
            document.removeEventListener("keydown", () => {});
        };
    }, [isSetShortcut, handleKeyboardShortcut]);

    const { direction } = useMemo(
        () =>
            getLanguage({
                language: language as TLanguages
            }),
        [language]
    );

    useEffect(() => {
        const html = document.getElementsByTagName("html");

        if (!html[0]) return undefined;

        html[0].setAttribute("dir", direction || "ltr");
    }, [direction]);

    return (
        <>
            {mode === "oneColumn" && <OneColumnMode />}
            {mode === "twoColumn" && <TwoColumnMode />}
        </>
    );
};

export default App;
