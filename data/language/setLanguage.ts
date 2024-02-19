import { useAppContext } from "@/context/page";
import { dataEn } from "./en";
import { dataTh } from "./th";

export interface languageType {
    myName: string;
}

export const useTranslation = () => {
    const { language } = useAppContext();
    return language === "EN" ? dataEn : dataTh;
}