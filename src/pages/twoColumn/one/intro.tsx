import { useTranslation } from "react-i18next";
import {
    TbCalendar,
    TbMail,
    TbMapPin,
    TbMilitaryRank,
    TbPhoneCall
} from "react-icons/tb";
import { contactInformation } from "~constants/details";

const Intro = () => {
    const { t } = useTranslation();

    return (
        <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
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
                    className="flex items-center gap-2 underline"
                    target="_blank"
                    rel="noreferrer"
                >
                    <TbPhoneCall className="text-xl text-gray-800" />

                    <p className="text-gray-600 rtl:hidden">
                        {contactInformation.phone}
                    </p>

                    <p className="text-gray-600 ltr:hidden">
                        {contactInformation.phone.replace("+98", "0")}
                    </p>
                </a>

                <a
                    href={`mailto:${contactInformation.email}`}
                    className="flex items-center gap-2 underline"
                    target="_blank"
                    rel="noreferrer"
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

                {!!t("age", { ns: "constants" }) && (
                    <div className="flex justify-items-center gap-2">
                        <TbCalendar className="min-w-max text-xl text-gray-800" />

                        <p className="truncate text-gray-600">
                            {t("age", { ns: "constants" })}
                        </p>
                    </div>
                )}

                {!!t("military", { ns: "constants" }) && (
                    <div className="flex justify-items-center gap-2">
                        <TbMilitaryRank className="min-w-max text-xl text-gray-800" />

                        <p className="truncate text-gray-600">
                            {t("military", { ns: "constants" })}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Intro;
