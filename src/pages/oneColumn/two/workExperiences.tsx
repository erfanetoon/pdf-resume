import { useTranslation } from "react-i18next";

const WorkExperiences = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-2 border-b border-gray-300 pb-4">
            <div className="mb-4 flex flex-col gap-1">
                <h4 className="font-bold">{`${t("workExperiences.three.company", { ns: "constants" })} - ${t("workExperiences.three.jobTitle", { ns: "constants" })}`}</h4>

                <p className="text-xs font-medium">
                    {t("workExperiences.three.locationAndTime", {
                        ns: "constants"
                    })}
                </p>

                <ul className="flex list-inside list-disc flex-col gap-2 text-gray-700">
                    <li>
                        {t("workExperiences.three.description.one", {
                            ns: "constants"
                        })}
                    </li>

                    <li>
                        {t("workExperiences.three.description.two", {
                            ns: "constants"
                        })}
                    </li>

                    <li>
                        {t("workExperiences.three.description.three", {
                            ns: "constants"
                        })}
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-1">
                <h4 className="font-bold">{`${t("workExperiences.four.company", { ns: "constants" })} - ${t("workExperiences.four.jobTitle", { ns: "constants" })}`}</h4>

                <p className="text-xs font-medium">
                    {t("workExperiences.four.locationAndTime", {
                        ns: "constants"
                    })}
                </p>

                <ul className="flex list-inside list-disc flex-col gap-1 text-gray-700">
                    <li>
                        {t("workExperiences.four.description.one", {
                            ns: "constants"
                        })}
                    </li>

                    <li>
                        {t("workExperiences.four.description.two", {
                            ns: "constants"
                        })}
                    </li>

                    <li>
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
