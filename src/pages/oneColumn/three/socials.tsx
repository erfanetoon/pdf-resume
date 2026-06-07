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
        <div className="grid grid-cols-2 gap-2">
            <div className="flex items-start gap-4">
                <TbBrandGithub className="min-w-max text-2xl text-gray-800" />

                <div>
                    <p className="truncate font-medium text-gray-700">
                        {t("github")}
                    </p>

                    <p className="flex items-center text-xs text-gray-600">
                        <a
                            href={contactInformation.github}
                            className="break-all underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {contactInformation.github}
                        </a>
                    </p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <TbBrandStackoverflow className="min-w-max text-2xl text-gray-800" />

                <div>
                    <p className="truncate font-medium text-gray-700">
                        {t("stackOverflow")}
                    </p>

                    <p className="flex items-start text-xs text-gray-600">
                        <a
                            href={contactInformation.stackOverflow}
                            className="break-all underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {contactInformation.stackOverflow}
                        </a>
                    </p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <TbBrandLinkedin className="min-w-max text-2xl text-gray-800" />

                <div>
                    <p className="truncate font-medium text-gray-700">
                        {t("linkedin")}
                    </p>

                    <p className="flex items-center text-xs text-gray-600">
                        <a
                            href={contactInformation.linkedin}
                            className="break-all underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {contactInformation.linkedin}
                        </a>
                    </p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <TbWorldWww className="min-w-max text-2xl text-gray-800" />

                <div>
                    <p className="truncate font-medium text-gray-700">
                        {t("website")}
                    </p>

                    <p className="flex items-center text-xs text-gray-600">
                        <a
                            href={contactInformation.website}
                            className="break-all underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {contactInformation.website}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Socials;
