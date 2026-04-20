import { useTranslation } from "react-i18next";
import {
    TbBrandGithub,
    TbBrandLinkedin,
    TbBrandStackoverflow,
    TbWorldWww
} from "react-icons/tb";
import { contactInformation } from "~constants/details";

const Socials = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-3 py-5">
            <div className="flex flex-col items-start gap-4">
                <a
                    href={contactInformation.github}
                    className="flex items-center justify-center gap-4"
                    target="_blank"
                    rel="noreferrer"
                >
                    <TbBrandGithub className="min-w-max text-2xl text-gray-800" />

                    <p className="truncate text-gray-600">{t("github")}</p>
                </a>

                <a
                    href={contactInformation.stackOverflow}
                    className="flex items-center justify-center gap-4"
                    target="_blank"
                    rel="noreferrer"
                >
                    <TbBrandStackoverflow className="min-w-max text-2xl text-gray-800" />

                    <p className="truncate text-gray-600">
                        {t("stackOverflow")}
                    </p>
                </a>

                <a
                    href={contactInformation.linkedin}
                    className="flex items-center justify-center gap-4"
                    target="_blank"
                    rel="noreferrer"
                >
                    <TbBrandLinkedin className="min-w-max text-2xl text-gray-800" />

                    <p className="truncate text-gray-600">{t("linkedin")}</p>
                </a>

                <a
                    href={contactInformation.website}
                    className="flex items-center justify-center gap-4"
                    target="_blank"
                    rel="noreferrer"
                >
                    <TbWorldWww className="min-w-max text-2xl text-gray-800" />

                    <p className="truncate text-gray-600">{t("website")}</p>
                </a>
            </div>
        </div>
    );
};

export default Socials;
