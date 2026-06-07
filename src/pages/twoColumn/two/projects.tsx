import { useTranslation } from "react-i18next";

const Projects = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-2 pt-5">
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

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-600">
                        {t("url") + ":"}
                    </span>

                    <a
                        href={t("projects.one.link", { ns: "constants" })}
                        className="font-medium underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="text-xs">
                            {t("projects.one.link", { ns: "constants" })}
                        </span>
                    </a>
                </div>

                <div className="flex gap-2 text-xs">
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
                    <div className="flex gap-2 text-xs">
                        <span className="font-medium">
                            {t("projects.one.description", {
                                ns: "constants"
                            })}
                        </span>
                    </div>
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

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-600">
                        {t("url") + ":"}
                    </span>

                    <a
                        href={t("projects.two.link", { ns: "constants" })}
                        className="font-medium underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="text-xs">
                            {t("projects.two.link", { ns: "constants" })}
                        </span>
                    </a>
                </div>

                <div className="flex gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("stack") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.two.technologies", {
                            ns: "constants"
                        })}
                    </span>
                </div>

                {!!t("projects.one.description", { ns: "constants" }) && (
                    <div className="flex gap-2 text-xs">
                        <span className="font-medium">
                            {t("projects.two.description", {
                                ns: "constants"
                            })}
                        </span>
                    </div>
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

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-600">
                        {t("url") + ":"}
                    </span>

                    <a
                        href={t("projects.three.link", { ns: "constants" })}
                        className="font-medium underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="text-xs">
                            {t("projects.three.link", { ns: "constants" })}
                        </span>
                    </a>
                </div>

                <div className="flex gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("stack") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.three.technologies", {
                            ns: "constants"
                        })}
                    </span>
                </div>

                {!!t("projects.one.description", { ns: "constants" }) && (
                    <div className="flex gap-2 text-xs">
                        <span className="font-medium">
                            {t("projects.three.description", {
                                ns: "constants"
                            })}
                        </span>
                    </div>
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

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-600">
                        {t("url") + ":"}
                    </span>

                    <a
                        href={t("projects.four.link", { ns: "constants" })}
                        className="font-medium underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="text-xs">
                            {t("projects.four.link", { ns: "constants" })}
                        </span>
                    </a>
                </div>

                <div className="flex gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("stack") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.four.technologies", {
                            ns: "constants"
                        })}
                    </span>
                </div>

                {!!t("projects.one.description", { ns: "constants" }) && (
                    <div className="flex gap-2 text-xs">
                        <span className="font-medium">
                            {t("projects.four.description", {
                                ns: "constants"
                            })}
                        </span>
                    </div>
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

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-600">
                        {t("url") + ":"}
                    </span>

                    <a
                        href={t("projects.five.link", { ns: "constants" })}
                        className="font-medium underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="text-xs">
                            {t("projects.five.link", { ns: "constants" })}
                        </span>
                    </a>
                </div>

                <div className="flex gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("stack") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.five.technologies", {
                            ns: "constants"
                        })}
                    </span>
                </div>

                {!!t("projects.one.description", { ns: "constants" }) && (
                    <div className="flex gap-2 text-xs">
                        <span className="font-medium">
                            {t("projects.five.description", {
                                ns: "constants"
                            })}
                        </span>
                    </div>
                )}
            </div>

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

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-600">
                        {t("url") + ":"}
                    </span>

                    <a
                        href={t("projects.six.link", { ns: "constants" })}
                        className="font-medium underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="text-xs">
                            {t("projects.six.link", { ns: "constants" })}
                        </span>
                    </a>
                </div>

                <div className="flex gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("stack") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.six.technologies", {
                            ns: "constants"
                        })}
                    </span>
                </div>

                {!!t("projects.one.description", { ns: "constants" }) && (
                    <div className="flex gap-2 text-xs">
                        <span className="font-medium">
                            {t("projects.six.description", {
                                ns: "constants"
                            })}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
