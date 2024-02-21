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
    performance: string;
    performanceDetail: string;
    performanceTechnology: string;
    performancePickger: string;
    performanceDetailCard1: string;
    performanceDetailCard2: string;
    performanceDetailCard3: string;
    performanceDetailCard4: string;
    performanceDetailCard5: string;
    performanceDetailCard6: string;
    performanceDetailCard7: string;
    performanceDetailCard8: string;
    performanceDetailCard9: string;
    performanceDetailCard10: string;
    performanceDetailCard11: string;
    performanceDetailCard12: string;
    performanceDetailCard13: string;
    performanceDetailCard14: string;
    performanceAcademic: string;
}

export const useTranslation = (language : "EN" | "TH") => {

    return language === "EN" ? dataEn : dataTh;
}