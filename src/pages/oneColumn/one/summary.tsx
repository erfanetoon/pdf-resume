import { useTranslation } from "react-i18next";

const Summary = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-1 border-b border-gray-300 pb-4">
            <h3 className="text-lg font-medium">{t("summary")}</h3>

            <p className="text-gray-700">{t("summary", { ns: "constants" })}</p>
        </div>
    );
};

export default Summary;
