import { useTranslation } from "react-i18next";

const Projects = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-2 border-b border-gray-300 pb-6">
            <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                    <h4 className="font-bold">
                        {t("projects.six.title", { ns: "constants" })}
                    </h4>
                    <p className="text-xs">
                        ({t("projects.six.company", { ns: "constants" })})
                    </p>
                    {"-"}
                    <p>{t("projects.six.role", { ns: "constants" })}</p>
                </div>

                <div className="flex items-center gap-2">
                    <span className="min-w-max text-gray-600">
                        {t("url") + ":"}
                    </span>

                    <a
                        href={t("projects.six.link", { ns: "constants" })}
                        className="font-medium underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {t("projects.six.link", { ns: "constants" })}
                    </a>
                </div>

                <div className="flex gap-2">
                    <span className="min-w-max text-gray-700">
                        {t("stack") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.six.technologies", {
                            ns: "constants"
                        })}
                    </span>
                </div>

                {!!t("projects.four.description", { ns: "constants" }) && (
                    <p className="text-gray-800">
                        {t("projects.six.description", {
                            ns: "constants"
                        })}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Projects;
