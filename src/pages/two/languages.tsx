import { useTranslation } from "react-i18next";
import { languages } from "~constants/languages";

const Languages = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-3 border-b border-gray-300 pb-5">
            <h3 className="text-lg font-medium">{t("languages.title")}</h3>

            <div className="flex gap-0.5">
                <h4 className="font-medium">{t("languages.persian")}</h4>

                <div className="ms-auto flex min-w-max items-center gap-1.5">
                    {Array(5)
                        .fill(0)
                        .map((_, i) => (
                            <div
                                key={i}
                                className={
                                    "h-3 w-3 rounded-full " +
                                    (i + 1 > languages.persian
                                        ? "bg-gray-200"
                                        : "bg-gray-600")
                                }
                            />
                        ))}
                </div>
            </div>

            <div className="flex gap-0.5">
                <h4 className="font-medium">{t("languages.english")}</h4>

                <div className="ms-auto flex min-w-max items-center gap-1.5">
                    {Array(5)
                        .fill(0)
                        .map((_, i) => (
                            <div
                                key={i}
                                className={
                                    "h-3 w-3 rounded-full " +
                                    (i + 1 > languages.english
                                        ? "bg-gray-200"
                                        : "bg-gray-600")
                                }
                            />
                        ))}
                </div>
            </div>

            <div className="flex gap-0.5">
                <h4 className="font-medium">{t("languages.azerbaijani")}</h4>

                <div className="ms-auto flex min-w-max items-center gap-1.5">
                    {Array(5)
                        .fill(0)
                        .map((_, i) => (
                            <div
                                key={i}
                                className={
                                    "h-3 w-3 rounded-full " +
                                    (i + 1 > languages.azerbaijani
                                        ? "bg-gray-200"
                                        : "bg-gray-600")
                                }
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Languages;
