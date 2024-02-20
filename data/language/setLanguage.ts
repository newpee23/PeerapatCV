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
    skillDetail: string;
    skillLanguages: string;
    skillTools: string;
    resumeTitle: string;
    resumeExperience: string;
    resumeEducation: string;
    resumeExTitle1: string;
    resumeExSubTitle1: string;
    resumeExDate1: string;
    resumeResponsibilities: string;
    resumeExDetail1: string[];
    resumeEx: string;
    resumeExTitle2: string;
    resumeExSubTitle2: string;
    resumeExDate2: string;
    resumeExDetail2: string[];
    resumeEdHistory: string;
    resumeEdSchool1: string;
    resumeEdSchool1EN: string;
    resumeEdMajor1: string;
    resumeEdGpa1: string;
    resumeEdSchool2: string;
    resumeEdSchool2EN: string;
    resumeEdMajor2: string;
    resumeEdGpa2: string;
}

export const useTranslation = (language : "EN" | "TH") => {

    return language === "EN" ? dataEn : dataTh;
}