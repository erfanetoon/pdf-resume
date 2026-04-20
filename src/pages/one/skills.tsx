import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
    backendSkills,
    devOpsSkills,
    frontendSkills,
    languagesAndCoresSkills,
    toolsAndPlatformsSkills
} from "~constants/skills";

const Skills = () => {
    const { t } = useTranslation();

    const softSkills = useMemo(
        () => [
            t("softSkills.one", { ns: "constants" }),
            t("softSkills.two", { ns: "constants" }),
            t("softSkills.three", { ns: "constants" }),
            t("softSkills.four", { ns: "constants" }),
            t("softSkills.five", { ns: "constants" }),
            t("softSkills.six", { ns: "constants" })
        ],
        []
    );

    return (
        <div className="flex flex-col gap-3 border-b border-gray-300 pb-5">
            <h3 className="text-lg font-medium">{t("skills.title")}</h3>

            <div className="flex flex-col gap-0.5">
                <h4 className="font-medium">{t("skills.languagesAndCores")}</h4>

                <p className="text-gray-600">
                    {languagesAndCoresSkills.join(", ")}
                </p>
            </div>

            <div className="flex flex-col gap-0.5">
                <h4 className="font-medium">{t("skills.frontend")}</h4>

                <p className="text-gray-600">{frontendSkills.join(", ")}</p>
            </div>

            <div className="flex flex-col gap-0.5">
                <h4 className="font-medium">{t("skills.backend")}</h4>

                <p className="text-xs text-gray-600">
                    {backendSkills.join(", ")}
                </p>
            </div>

            <div className="flex flex-col gap-0.5">
                <h4 className="font-medium">{t("skills.devOps")}</h4>

                <p className="text-gray-600">{devOpsSkills.join(", ")}</p>
            </div>

            <div className="flex flex-col gap-0.5">
                <h4 className="font-medium">{t("skills.toolsAndPlatforms")}</h4>

                <p className="text-gray-600">
                    {toolsAndPlatformsSkills.join(", ")}
                </p>
            </div>

            <div className="flex flex-col gap-0.5">
                <h4 className="font-medium">{t("softSkills.title")}</h4>

                <p className="text-gray-600">{softSkills.join(", ")}</p>
            </div>
        </div>
    );
};

export default Skills;
