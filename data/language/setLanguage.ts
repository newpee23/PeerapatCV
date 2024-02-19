import { dataEn } from "./en";
import { dataTh } from "./th";

export interface languageType {
    myName: string;
    bannerDetail: string;
    bannerContact: string;
    bannerPhone: string;
    bannerGit: string;
    bannerLine: string;
    bannerEmail: string;
}

export const useTranslation = (language : "EN" | "TH") => {

    return language === "EN" ? dataEn : dataTh;
}