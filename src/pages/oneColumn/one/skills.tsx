import { useTranslation } from "react-i18next";
import {
    backendSkills,
    frontendSkills,
    languagesAndCoresSkills,
    databaseSkills,
    devOpsAndCloudSkills,
    toolsSkills
} from "~constants/skills";

const Skills = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-2 border-b border-gray-300 pb-4">
            <h3 className="text-lg font-medium">{t("skills.title")}</h3>

            <div className="text-gray-900">
                <span className="text-gray-600">
                    {t("skills.languagesAndCores") + ": "}
                </span>

                {languagesAndCoresSkills.join(", ")}
            </div>

            <div className="text-gray-900">
                <span className="text-gray-600">
                    {t("skills.frontend") + ": "}
                </span>

                {frontendSkills.join(", ")}
            </div>

            <div className="text-gray-900">
                <span className="text-gray-600">
                    {t("skills.backend") + ": "}
                </span>

                {backendSkills.join(", ")}
            </div>

            <div className="text-gray-900">
                <span className="text-gray-600">
                    {t("skills.database") + ": "}
                </span>

                {databaseSkills.join(", ")}
            </div>

            <div className="text-gray-900">
                <span className="text-gray-600">
                    {t("skills.devOpsAndCloud") + ": "}
                </span>

                {devOpsAndCloudSkills.join(", ")}
            </div>

            <div className="text-gray-900">
                <span className="text-gray-600">
                    {t("skills.tools") + ": "}
                </span>

                {toolsSkills.join(", ")}
            </div>
        </div>
    );
};

export default Skills;
