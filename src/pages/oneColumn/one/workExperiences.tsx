import { useTranslation } from "react-i18next";

const WorkExperiences = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">
                {t("workExperiences.title")}
            </h3>

            <div className="mb-4 flex flex-col gap-1">
                <h4 className="font-bold">{`${t("workExperiences.one.company", { ns: "constants" })} - ${t("workExperiences.one.jobTitle", { ns: "constants" })}`}</h4>

                <p className="text-xs font-medium">
                    {t("workExperiences.one.locationAndTime", {
                        ns: "constants"
                    })}
                </p>

                <ul className="flex list-inside list-disc flex-col gap-1 text-gray-800">
                    <li>
                        {t("workExperiences.one.description.one", {
                            ns: "constants"
                        })}
                    </li>

                    <li>
                        {t("workExperiences.one.description.two", {
                            ns: "constants"
                        })}
                    </li>

                    <li>
                        {t("workExperiences.one.description.three", {
                            ns: "constants"
                        })}
                    </li>

                    <li>
                        {t("workExperiences.one.description.four", {
                            ns: "constants"
                        })}
                    </li>

                    <li>
                        {t("workExperiences.one.description.five", {
                            ns: "constants"
                        })}
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-1">
                <h4 className="font-bold">{`${t("workExperiences.two.company", { ns: "constants" })} - ${t("workExperiences.two.jobTitle", { ns: "constants" })}`}</h4>

                <p className="text-xs font-medium">
                    {t("workExperiences.two.locationAndTime", {
                        ns: "constants"
                    })}
                </p>

                <ul className="flex list-inside list-disc flex-col gap-1 text-gray-800">
                    <li>
                        {t("workExperiences.two.description.one", {
                            ns: "constants"
                        })}
                    </li>

                    <li>
                        {t("workExperiences.two.description.two", {
                            ns: "constants"
                        })}
                    </li>

                    <li>
                        {t("workExperiences.two.description.three", {
                            ns: "constants"
                        })}
                    </li>

                    <li>
                        {t("workExperiences.two.description.four", {
                            ns: "constants"
                        })}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WorkExperiences;
