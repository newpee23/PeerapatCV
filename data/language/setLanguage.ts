import { dataEn } from "./en";
import { dataTh } from "./th";

export interface languageType {
    myName: string;
}

export const useTranslation = (language : "EN" | "TH") => {

    return language === "EN" ? dataEn : dataTh;
}