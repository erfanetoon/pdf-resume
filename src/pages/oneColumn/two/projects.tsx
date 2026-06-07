import { useTranslation } from "react-i18next";

const Projects = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-5">
            <h3 className="text-lg font-medium">{t("projects.title")}</h3>

            <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                    <h4 className="font-bold">
                        {t("projects.one.title", { ns: "constants" })}
                    </h4>
                    <p className="text-xs">
                        ({t("projects.one.company", { ns: "constants" })})
                    </p>
                    {"-"}
                    <p>{t("projects.one.role", { ns: "constants" })}</p>
                </div>

                <div className="flex items-center gap-2">
                    <span className="min-w-max text-gray-600">
                        {t("url") + ":"}
                    </span>

                    <a
                        href={t("projects.one.link", { ns: "constants" })}
                        className="font-medium underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {t("projects.one.link", { ns: "constants" })}
                    </a>
                </div>

                <div className="flex gap-2">
                    <span className="min-w-max text-gray-700">
                        {t("stack") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.one.technologies", {
                            ns: "constants"
                        })}
                    </span>
                </div>

                {!!t("projects.one.description", { ns: "constants" }) && (
                    <p className="text-gray-800">
                        {t("projects.one.description", {
                            ns: "constants"
                        })}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                    <h4 className="font-bold">
                        {t("projects.two.title", { ns: "constants" })}
                    </h4>
                    <p className="text-xs">
                        ({t("projects.two.company", { ns: "constants" })})
                    </p>
                    {"-"}
                    <p>{t("projects.two.role", { ns: "constants" })}</p>
                </div>

                <div className="flex items-center gap-2">
                    <span className="min-w-max text-gray-600">
                        {t("url") + ":"}
                    </span>

                    <a
                        href={t("projects.two.link", { ns: "constants" })}
                        className="font-medium underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {t("projects.two.link", { ns: "constants" })}
                    </a>
                </div>

                <div className="flex gap-2">
                    <span className="min-w-max text-gray-700">
                        {t("stack") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.two.technologies", {
                            ns: "constants"
                        })}
                    </span>
                </div>

                {!!t("projects.two.description", { ns: "constants" }) && (
                    <p className="text-gray-800">
                        {t("projects.two.description", {
                            ns: "constants"
                        })}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                    <h4 className="font-bold">
                        {t("projects.three.title", { ns: "constants" })}
                    </h4>
                    <p className="text-xs">
                        ({t("projects.three.company", { ns: "constants" })})
                    </p>
                    {"-"}
                    <p>{t("projects.three.role", { ns: "constants" })}</p>
                </div>

                <div className="flex items-center gap-2">
                    <span className="min-w-max text-gray-600">
                        {t("url") + ":"}
                    </span>

                    <a
                        href={t("projects.three.link", { ns: "constants" })}
                        className="font-medium underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {t("projects.three.link", { ns: "constants" })}
                    </a>
                </div>

                <div className="flex gap-2">
                    <span className="min-w-max text-gray-700">
                        {t("stack") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.three.technologies", {
                            ns: "constants"
                        })}
                    </span>
                </div>

                {!!t("projects.three.description", { ns: "constants" }) && (
                    <p className="text-gray-800">
                        {t("projects.three.description", {
                            ns: "constants"
                        })}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                    <h4 className="font-bold">
                        {t("projects.four.title", { ns: "constants" })}
                    </h4>
                    <p className="text-xs">
                        ({t("projects.four.company", { ns: "constants" })})
                    </p>
                    {"-"}
                    <p>{t("projects.four.role", { ns: "constants" })}</p>
                </div>

                <div className="flex items-center gap-2">
                    <span className="min-w-max text-gray-600">
                        {t("url") + ":"}
                    </span>

                    <a
                        href={t("projects.four.link", { ns: "constants" })}
                        className="font-medium underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {t("projects.four.link", { ns: "constants" })}
                    </a>
                </div>

                <div className="flex gap-2">
                    <span className="min-w-max text-gray-700">
                        {t("stack") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.four.technologies", {
                            ns: "constants"
                        })}
                    </span>
                </div>

                {!!t("projects.four.description", { ns: "constants" }) && (
                    <p className="text-gray-800">
                        {t("projects.four.description", {
                            ns: "constants"
                        })}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                    <h4 className="font-bold">
                        {t("projects.five.title", { ns: "constants" })}
                    </h4>
                    <p className="text-xs">
                        ({t("projects.five.company", { ns: "constants" })})
                    </p>
                    {"-"}
                    <p>{t("projects.five.role", { ns: "constants" })}</p>
                </div>

                <div className="flex items-center gap-2">
                    <span className="min-w-max text-gray-600">
                        {t("url") + ":"}
                    </span>

                    <a
                        href={t("projects.five.link", { ns: "constants" })}
                        className="font-medium underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {t("projects.five.link", { ns: "constants" })}
                    </a>
                </div>

                <div className="flex gap-2">
                    <span className="min-w-max text-gray-700">
                        {t("stack") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.five.technologies", {
                            ns: "constants"
                        })}
                    </span>
                </div>

                {!!t("projects.four.description", { ns: "constants" }) && (
                    <p className="text-gray-800">
                        {t("projects.five.description", {
                            ns: "constants"
                        })}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Projects;
