import { useTranslation } from "react-i18next";

const WorkExperiences = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-3 py-4">
            <h3 className="text-lg font-medium">
                {t("workExperiences.title")}
            </h3>

            <div className="flex flex-col gap-1">
                <h4 className="font-bold">{`${t("workExperiences.one.company", { ns: "constants" })} - ${t("workExperiences.one.jobTitle", { ns: "constants" })}`}</h4>

                <p className="text-xs font-medium">
                    {t("workExperiences.one.locationAndTime", {
                        ns: "constants"
                    })}
                </p>

                <ul className="list-inside list-disc flex-col gap-0.5 text-gray-700">
                    <li className="text-xs">
                        {t("workExperiences.one.description.one", {
                            ns: "constants"
                        })}
                    </li>

                    <li className="text-xs">
                        {t("workExperiences.one.description.two", {
                            ns: "constants"
                        })}
                    </li>

                    <li className="text-xs">
                        {t("workExperiences.one.description.three", {
                            ns: "constants"
                        })}
                    </li>

                    <li className="text-xs">
                        {t("workExperiences.one.description.four", {
                            ns: "constants"
                        })}
                    </li>

                    <li className="text-xs">
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

                <ul className="flex list-inside list-disc flex-col gap-0.5 text-gray-700">
                    <li className="text-xs">
                        {t("workExperiences.two.description.one", {
                            ns: "constants"
                        })}
                    </li>

                    <li className="text-xs">
                        {t("workExperiences.two.description.two", {
                            ns: "constants"
                        })}
                    </li>

                    <li className="text-xs">
                        {t("workExperiences.two.description.three", {
                            ns: "constants"
                        })}
                    </li>

                    <li className="text-xs">
                        {t("workExperiences.two.description.four", {
                            ns: "constants"
                        })}
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-1">
                <h4 className="font-bold">{`${t("workExperiences.three.company", { ns: "constants" })} - ${t("workExperiences.three.jobTitle", { ns: "constants" })}`}</h4>

                <p className="text-xs font-medium">
                    {t("workExperiences.three.locationAndTime", {
                        ns: "constants"
                    })}
                </p>

                <ul className="list-inside list-disc flex-col gap-0.5 text-gray-700">
                    <li className="text-xs">
                        {t("workExperiences.three.description.one", {
                            ns: "constants"
                        })}
                    </li>

                    <li className="text-xs">
                        {t("workExperiences.three.description.two", {
                            ns: "constants"
                        })}
                    </li>

                    <li className="text-xs">
                        {t("workExperiences.three.description.three", {
                            ns: "constants"
                        })}
                    </li>

                    <li className="text-xs">
                        {t("workExperiences.three.description.four", {
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

                <ul className="list-inside list-disc gap-0.5 text-gray-700">
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
