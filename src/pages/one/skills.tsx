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
        <div className="flex flex-col gap-2 border-b border-gray-300 pb-5">
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

                <p className="text-gray-600">{backendSkills.join(", ")}</p>
            </div>

            <div className="flex flex-col gap-0.5">
                <h4 className="font-medium">{t("skills.database")}</h4>

                <p className="text-gray-600">{databaseSkills.join(", ")}</p>
            </div>

            <div className="flex flex-col gap-0.5">
                <h4 className="font-medium">{t("skills.devOpsAndCloud")}</h4>

                <p className="text-gray-600">
                    {devOpsAndCloudSkills.join(", ")}
                </p>
            </div>

            <div className="flex flex-col gap-0.5">
                <h4 className="font-medium">{t("skills.tools")}</h4>

                <p className="text-gray-600">{toolsSkills.join(", ")}</p>
            </div>
        </div>
    );
};

export default Skills;
