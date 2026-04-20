import { useTranslation } from "react-i18next";

const Educations = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-3 py-5">
            <h3 className="text-lg font-medium">{t("educations.title")}</h3>

            <div className="flex flex-col gap-0.5">
                <h4 className="font-medium">{`${t("educations.bachelor.field", { ns: "constants" })} - ${t("educations.bachelor")}`}</h4>

                <p className="text-xs">
                    {t("educations.bachelor.uni", { ns: "constants" })}
                </p>

                <p className="text-xs">
                    {t("educations.bachelor.dates", { ns: "constants" })}
                </p>
            </div>
        </div>
    );
};

export default Educations;
