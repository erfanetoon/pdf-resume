import { useTranslation } from "react-i18next";

const WorkExperiences = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-2 border-b border-gray-300 pb-5">
            <h3 className="text-lg font-medium">
                {t("workExperiences.title")}
            </h3>

            <div className="flex flex-col gap-1">
                <h4 className="font-bold">{`${t("workExperiences.four.company", { ns: "constants" })} - ${t("workExperiences.four.jobTitle", { ns: "constants" })}`}</h4>

                <p className="text-xs font-medium">
                    {t("workExperiences.four.locationAndTime", {
                        ns: "constants"
                    })}
                </p>

                <ul className="flex list-inside list-disc flex-col gap-1 text-gray-700">
                    <li className="text-xs">
                        {t("workExperiences.four.description.one", {
                            ns: "constants"
                        })}
                    </li>

                    <li className="text-xs">
                        {t("workExperiences.four.description.two", {
                            ns: "constants"
                        })}
                    </li>

                    <li className="text-xs">
                        {t("workExperiences.four.description.three", {
                            ns: "constants"
                        })}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WorkExperiences;
