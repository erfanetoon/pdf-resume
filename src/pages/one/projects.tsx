import { useTranslation } from "react-i18next";
import { TbSend } from "react-icons/tb";
import { projects } from "~constants/details";

const Projects = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-2 pt-4">
            <h3 className="text-lg font-medium">{t("projects.title")}</h3>

            <div className="flex items-center gap-0.5">
                <h4 className="font-medium">
                    {t("projects.one", { ns: "constants" })}
                </h4>

                <a
                    href={projects.reactTailwindUI}
                    className="ms-auto flex h-6 w-6 items-center justify-center rounded-full border border-gray-400"
                    target="_blank"
                    rel="noreferrer"
                >
                    <TbSend className="text-gray-700" />
                </a>
            </div>

            <div className="flex items-center gap-0.5">
                <h4 className="font-medium">
                    {t("projects.two", { ns: "constants" })}
                </h4>

                <a
                    href={projects.winca}
                    className="ms-auto flex h-6 w-6 items-center justify-center rounded-full border border-gray-400"
                    target="_blank"
                    rel="noreferrer"
                >
                    <TbSend className="text-gray-700" />
                </a>
            </div>

            <div className="flex items-center gap-0.5">
                <h4 className="font-medium">
                    {t("projects.three", { ns: "constants" })}
                </h4>

                <a
                    href={projects.irpishbini}
                    className="ms-auto flex h-6 w-6 items-center justify-center rounded-full border border-gray-400"
                    target="_blank"
                    rel="noreferrer"
                >
                    <TbSend className="text-gray-700" />
                </a>
            </div>
        </div>
    );
};

export default Projects;
