import React from "react"
import Image, { StaticImageData } from "next/image";
import { Popover } from "antd";

// images
import phone from "@/public/Icons/phone-flat.png";
import line from "@/public/Icons/line.png";
import github from "@/public/Icons/github.png";
import mail from "@/public/Icons/mail.png";
import { useAppContext } from "@/context/page";
import { useTranslation } from "@/data/language/setLanguage";

type Props = {
    iconsName: "phone" | "line" | "github" | "mail";
}

const ContactIcon = ({ iconsName }: Props) => {
    const { language } = useAppContext();
    const dataLanguage = useTranslation(language);

    const getIcon = (): StaticImageData | null => {
        if (iconsName === "phone") return phone;
        if (iconsName === "line") return line;
        if (iconsName === "github") return github;
        if (iconsName === "mail") return mail;

        return null;
    }

    const getContentPopover = (): string => {
        if (iconsName === "phone") return `${dataLanguage.bannerPhone} : 080-08430371`;
        if (iconsName === "line") return `${dataLanguage.bannerLine} : newlou234`;
        if (iconsName === "github") return `${dataLanguage.bannerGit} : github.com/newpee23`;
        if (iconsName === "mail") return `${dataLanguage.bannerEmail} : newp231612@gmail.com`;

        return "";
    }

    const icon = getIcon();
    const contentPopover = getContentPopover();

    return icon ? (
        <div className="z-[1] mx-3  hover:cursor-pointer">
            <Popover content={contentPopover} trigger="hover">
                <div className="hero-socials">
                    <Image
                        src={icon}
                        alt="contact"
                        width={100}
                        height={100}
                        sizes="100vw"
                        className="w-[55px] h-auto transition-transform transform hover:scale-125 duration-300"
                        priority={true}
                    />
                </div>
            </Popover>
        </div>
    ) : null;
}

export default ContactIcon;
