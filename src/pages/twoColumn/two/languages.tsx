import { useTranslation } from "react-i18next";

const Languages = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-2 border-b border-gray-300 pb-5">
            <h3 className="text-lg font-medium">{t("languages.title")}</h3>

            <div className="flex gap-0.5">
                <h4 className="font-medium">{t("languages.persian")}</h4>

                <div className="flex min-w-max items-center gap-1.5 text-xs text-gray-600">
                    ({t("languages.native")})
                </div>
            </div>

            <div className="flex gap-0.5">
                <h4 className="font-medium">{t("languages.english")}</h4>

                <div className="flex min-w-max items-center gap-1.5 text-xs text-gray-600">
                    ({t("languages.professional")})
                </div>
            </div>

            <div className="flex gap-0.5">
                <h4 className="font-medium">{t("languages.azerbaijani")}</h4>

                <div className="flex min-w-max items-center gap-1.5 text-xs text-gray-600">
                    ({t("languages.conversational")})
                </div>
            </div>
        </div>
    );
};

export default Languages;
