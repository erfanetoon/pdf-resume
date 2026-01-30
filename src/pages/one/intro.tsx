import { useTranslation } from "react-i18next";
import {
    TbBrandGithub,
    TbBrandLinkedin,
    TbBrandStackoverflow,
    TbMail,
    TbMapPin,
    TbPhoneCall,
    TbWorldWww
} from "react-icons/tb";
import { contactInformation } from "~constants/details";

const Intro = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="flex items-center gap-2">
                <img
                    src="/images/me.jpg"
                    width={128}
                    className="rounded-t-xl"
                    alt="Erfan Hosseinpoor"
                />

                <div className="flex flex-col gap-1 text-gray-700">
                    <h1 className="m-0 text-3xl font-medium">
                        {`${t("firstName", { ns: "constants" })} `}
                        <span className="font-bold">
                            {t("lastName", { ns: "constants" })}
                        </span>
                    </h1>

                    <h3 className="text-lg font-medium">
                        {t("jobTitle", { ns: "constants" })}
                    </h3>
                </div>

                <div className="ms-auto flex flex-col gap-1">
                    <a
                        href={`tel:${contactInformation.phone}`}
                        className="flex items-center gap-2"
                    >
                        <TbPhoneCall className="text-xl text-gray-800" />

                        <p className="text-gray-600">
                            {contactInformation.phone}
                        </p>
                    </a>

                    <a
                        href={`mailto:${contactInformation.email}`}
                        className="flex items-center gap-2"
                    >
                        <TbMail className="min-w-max text-xl text-gray-800" />

                        <p className="truncate text-gray-600">
                            {contactInformation.email}
                        </p>
                    </a>

                    <div className="flex justify-items-center gap-2">
                        <TbMapPin className="min-w-max text-xl text-gray-800" />

                        <p className="truncate text-gray-600">
                            {t("address", { ns: "constants" })}
                        </p>
                    </div>
                </div>
            </div>

            <div className="border-y-2 border-gray-300 py-2">
                <div className="grid grid-cols-4 gap-2">
                    <a
                        href={contactInformation.github}
                        className="flex items-center justify-center gap-2"
                    >
                        <TbBrandGithub className="min-w-max text-xl text-gray-800" />

                        <p className="truncate text-gray-600">{t("github")}</p>
                    </a>

                    <a
                        href={contactInformation.stackOverflow}
                        className="flex items-center justify-center gap-2"
                    >
                        <TbBrandStackoverflow className="min-w-max text-xl text-gray-800" />

                        <p className="truncate text-gray-600">
                            {t("stackOverflow")}
                        </p>
                    </a>

                    <a
                        href={contactInformation.linkedin}
                        className="flex items-center justify-center gap-2"
                    >
                        <TbBrandLinkedin className="min-w-max text-xl text-gray-800" />

                        <p className="truncate text-gray-600">
                            {t("linkedin")}
                        </p>
                    </a>

                    <a
                        href={contactInformation.website}
                        className="flex items-center justify-center gap-2"
                    >
                        <TbWorldWww className="min-w-max text-xl text-gray-800" />

                        <p className="truncate text-gray-600">{t("website")}</p>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Intro;
