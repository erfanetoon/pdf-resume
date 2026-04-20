import { useTranslation } from "react-i18next";
import { TbSend } from "react-icons/tb";

const Projects = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-6">
            <h3 className="text-lg font-medium">{t("projects.title")}</h3>

            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                    <h4 className="font-bold">
                        {t("projects.one.title", { ns: "constants" })}
                    </h4>

                    <a
                        href={t("projects.one.link", { ns: "constants" })}
                        className="ms-auto flex items-center justify-center gap-1 rounded border border-gray-400 p-1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="text-xs">{t("link")}</span>

                        <TbSend className="text-gray-700" />
                    </a>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("company") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.one.company", { ns: "constants" })}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("role") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.one.role", { ns: "constants" })}
                    </span>
                </div>

                {!!t("projects.one.description", { ns: "constants" }) && (
                    <div className="flex gap-2 text-xs">
                        <span className="min-w-max text-gray-700">
                            {t("description") + ":"}
                        </span>

                        <span className="font-medium">
                            {t("projects.one.description", {
                                ns: "constants"
                            })}
                        </span>
                    </div>
                )}

                <div className="flex gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("technologies") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.one.technologies", {
                            ns: "constants"
                        })}
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                    <h4 className="font-bold">
                        {t("projects.two.title", { ns: "constants" })}
                    </h4>

                    <a
                        href={t("projects.two.link", { ns: "constants" })}
                        className="ms-auto flex items-center justify-center gap-1 rounded border border-gray-400 p-1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="text-xs">{t("link")}</span>

                        <TbSend className="text-gray-700" />
                    </a>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("company") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.two.company", { ns: "constants" })}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("role") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.two.role", { ns: "constants" })}
                    </span>
                </div>

                {!!t("projects.two.description", { ns: "constants" }) && (
                    <div className="flex gap-2 text-xs">
                        <span className="min-w-max text-gray-700">
                            {t("description") + ":"}
                        </span>

                        <span className="font-medium">
                            {t("projects.two.description", {
                                ns: "constants"
                            })}
                        </span>
                    </div>
                )}
                <div className="flex gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("technologies") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.two.technologies", {
                            ns: "constants"
                        })}
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                    <h4 className="font-bold">
                        {t("projects.three.title", { ns: "constants" })}
                    </h4>

                    <a
                        href={t("projects.three.link", { ns: "constants" })}
                        className="ms-auto flex items-center justify-center gap-1 rounded border border-gray-400 p-1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="text-xs">{t("link")}</span>

                        <TbSend className="text-gray-700" />
                    </a>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("company") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.three.company", { ns: "constants" })}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("role") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.three.role", { ns: "constants" })}
                    </span>
                </div>

                {!!t("projects.three.description", { ns: "constants" }) && (
                    <div className="flex gap-2 text-xs">
                        <span className="min-w-max text-gray-700">
                            {t("description") + ":"}
                        </span>

                        <span className="font-medium">
                            {t("projects.three.description", {
                                ns: "constants"
                            })}
                        </span>
                    </div>
                )}

                <div className="flex gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("technologies") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.three.technologies", {
                            ns: "constants"
                        })}
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                    <h4 className="font-bold">
                        {t("projects.four.title", { ns: "constants" })}
                    </h4>

                    <a
                        href={t("projects.four.link", { ns: "constants" })}
                        className="ms-auto flex items-center justify-center gap-1 rounded border border-gray-400 p-1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="text-xs">{t("link")}</span>

                        <TbSend className="text-gray-700" />
                    </a>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("company") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.four.company", { ns: "constants" })}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("role") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.four.role", { ns: "constants" })}
                    </span>
                </div>

                {!!t("projects.four.description", { ns: "constants" }) && (
                    <div className="flex gap-2 text-xs">
                        <span className="min-w-max text-gray-700">
                            {t("description") + ":"}
                        </span>

                        <span className="font-medium">
                            {t("projects.four.description", {
                                ns: "constants"
                            })}
                        </span>
                    </div>
                )}

                <div className="flex gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("technologies") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.four.technologies", {
                            ns: "constants"
                        })}
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                    <h4 className="font-bold">
                        {t("projects.five.title", { ns: "constants" })}
                    </h4>

                    <a
                        href={t("projects.five.link", { ns: "constants" })}
                        className="ms-auto flex items-center justify-center gap-1 rounded border border-gray-400 p-1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="text-xs">{t("link")}</span>

                        <TbSend className="text-gray-700" />
                    </a>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("company") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.five.company", { ns: "constants" })}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("role") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.five.role", { ns: "constants" })}
                    </span>
                </div>

                {!!t("projects.five.description", { ns: "constants" }) && (
                    <div className="flex gap-2 text-xs">
                        <span className="min-w-max text-gray-700">
                            {t("description") + ":"}
                        </span>

                        <span className="font-medium">
                            {t("projects.five.description", {
                                ns: "constants"
                            })}
                        </span>
                    </div>
                )}

                <div className="flex gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("technologies") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.five.technologies", {
                            ns: "constants"
                        })}
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                    <h4 className="font-bold">
                        {t("projects.six.title", { ns: "constants" })}
                    </h4>

                    <a
                        href={t("projects.six.link", { ns: "constants" })}
                        className="ms-auto flex items-center justify-center gap-1 rounded border border-gray-400 p-1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="text-xs">{t("link")}</span>

                        <TbSend className="text-gray-700" />
                    </a>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("company") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.six.company", { ns: "constants" })}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("role") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.six.role", { ns: "constants" })}
                    </span>
                </div>

                {!!t("projects.six.description", { ns: "constants" }) && (
                    <div className="flex gap-2 text-xs">
                        <span className="min-w-max text-gray-700">
                            {t("description") + ":"}
                        </span>

                        <span className="font-medium">
                            {t("projects.six.description", {
                                ns: "constants"
                            })}
                        </span>
                    </div>
                )}

                <div className="flex gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("technologies") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.six.technologies", {
                            ns: "constants"
                        })}
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                    <h4 className="font-bold">
                        {t("projects.seven.title", { ns: "constants" })}
                    </h4>

                    <a
                        href={t("projects.seven.link", { ns: "constants" })}
                        className="ms-auto flex items-center justify-center gap-1 rounded border border-gray-400 p-1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="text-xs">{t("link")}</span>

                        <TbSend className="text-gray-700" />
                    </a>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("company") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.seven.company", { ns: "constants" })}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("role") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.seven.role", { ns: "constants" })}
                    </span>
                </div>

                {!!t("projects.seven.description", { ns: "constants" }) && (
                    <div className="flex gap-2 text-xs">
                        <span className="min-w-max text-gray-700">
                            {t("description") + ":"}
                        </span>

                        <span className="font-medium">
                            {t("projects.seven.description", {
                                ns: "constants"
                            })}
                        </span>
                    </div>
                )}

                <div className="flex gap-2 text-xs">
                    <span className="min-w-max text-gray-700">
                        {t("technologies") + ":"}
                    </span>

                    <span className="font-medium">
                        {t("projects.seven.technologies", {
                            ns: "constants"
                        })}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Projects;
